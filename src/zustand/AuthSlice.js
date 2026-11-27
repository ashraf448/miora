import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

// axios instance بتاعت الفرونت
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  headers: { "Content-Type": "application/json" },
});

// ضيف التوكن تلقائياً في كل request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// لو 401 على طلب محمي (التوكن اتنهت صلاحيته) امسح التوكن وودّي المستخدم للـ login.
// بنستثني طلبات login/register/profile عشان رسالة الخطأ ما تضيعش بسبب reload.
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const url = err.config?.url ?? "";
    const isAuthRequest = [
      "/user/login",
      "/user/register",
      "/user/profile",
    ].some((p) => url.toLowerCase().includes(p));
    if (
      err.response?.status === 401 &&
      !isAuthRequest &&
      localStorage.getItem("token")
    ) {
      localStorage.removeItem("token");
      window.location.assign("/login");
    }
    return Promise.reject(err);
  }
);

export { api };

const MOCK = import.meta.env.VITE_AUTH_MOCK === "true";
const MOCK_OTP = "123456";
const mockDelay = () => new Promise((r) => setTimeout(r, 600));

// ترجمة رسائل الباك إند الخاصة بالـ OTP
const otpMessage = (message) => {
  const wait = /Please wait (\d+) seconds/.exec(message || "");
  if (wait) return `انتظر ${wait[1]} ثانية قبل طلب كود جديد.`;

  const messages = {
    "Wrong OTP": "الكود غير صحيح.",
    "OTP not found or expired": "انتهت صلاحية الكود، اطلب كوداً جديداً.",
    "Invalid or expired OTP": "الكود غير صحيح أو انتهت صلاحيته.",
    "User already exist": "هذا الحساب مفعّل بالفعل، سجّل الدخول.",
    "User not found": "لا يوجد حساب بهذا البريد.",
    "No pending signup found for this email, please signup again":
      "لا يوجد تسجيل معلّق بهذا البريد، أنشئ الحساب من جديد.",
  };

  return messages[message] || "حدث خطأ، حاول مرة أخرى.";
};

const useAuth = create((set) => ({
  // =========================
  // STATES
  // =========================

  currentUser: null,
  isPendingRegister: false,
  isPendingLogin: false,
  isPendingReset: false,
  isPendingCurrentUser: true,

  // =========================
  // REGISTER
  // =========================

  registerHandler: async (data) => {
    set({ isPendingRegister: true });

    try {
      const {
        firstName,
        lastName,
        phoneNumber,
        gender,
        email,
        password,
        confirmPassword,
      } = data;

      const res = await api.post("/user/register", {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        password,
        confirmPassword: confirmPassword ?? password,
        phoneNumber,
        gender,
      });

      toast.success(
        res.data?.message || "تم إرسال كود التفعيل إلى بريدك الإلكتروني"
      );
      return { success: true, email: email.trim() };
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        "تعذّر الاتصال بالخادم، حاول مرة أخرى.";
      toast.error(msg);
      return { success: false, message: msg };
    } finally {
      set({ isPendingRegister: false });
    }
  },

  // =========================
  // LOGIN
  // =========================

  loginHandler: async (data) => {
    set({ isPendingLogin: true });

    try {
      const { email, password } = data;

      const res = await api.post("/user/login", { email, password });

      // الباك إند بيرجّع access_token و refresh_Token (من غير user)
      const { access_token, refresh_Token } = res.data;
      localStorage.setItem("token", access_token);
      if (refresh_Token) localStorage.setItem("refreshToken", refresh_Token);

      // هات بيانات المستخدم
      const profileRes = await api.get("/user/profile");
      set({ currentUser: profileRes.data.user });

      toast.success("أهلًا بعودتك ✅");
      return { success: true };
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.message ||
        "تعذّر الاتصال بالخادم، حاول مرة أخرى.";
      toast.error(msg);
      return { success: false, message: msg };
    } finally {
      set({ isPendingLogin: false });
    }
  },

  // =========================
  // VERIFY EMAIL (تفعيل حساب جديد) -> /user/verify-otp
  // =========================

  verifyEmailHandler: async ({ email, otp }) => {
    set({ isPendingReset: true });
    try {
      if (MOCK) {
        await mockDelay();
        if (otp !== MOCK_OTP)
          throw { response: { data: { message: "Wrong OTP" } } };
        return { success: true };
      }
      await api.post("/user/verify-otp", { email, otp });
      toast.success("تم تفعيل حسابك بنجاح، سجّل الدخول ✅");
      return { success: true };
    } catch (error) {
      const msg = otpMessage(error.response?.data?.message);
      toast.error(msg);
      return { success: false, message: msg };
    } finally {
      set({ isPendingReset: false });
    }
  },

  resendVerificationHandler: async ({ email }) => {
    set({ isPendingReset: true });
    try {
      if (MOCK) {
        await mockDelay();
        toast.success("تم إرسال كود جديد.");
        return { success: true };
      }
      await api.post("/user/resend-otp", { email });
      toast.success("تم إرسال كود جديد إلى بريدك.");
      return { success: true };
    } catch (error) {
      const msg = otpMessage(error.response?.data?.message);
      toast.error(msg);
      return { success: false, message: msg };
    } finally {
      set({ isPendingReset: false });
    }
  },

  // =========================
  // PASSWORD RECOVERY
  // وضع تجريبي بدون باك إند: VITE_AUTH_MOCK=true (الكود الصحيح 123456)
  // =========================

  forgotPasswordHandler: async ({ email }) => {
    set({ isPendingReset: true });
    try {
      if (MOCK) await mockDelay();
      else await api.post("/user/forgot-password", { email });
      toast.success("تم إرسال كود التأكيد إلى بريدك");
      return { success: true };
    } catch (error) {
      const msg = otpMessage(error.response?.data?.message);
      toast.error(msg);
      return { success: false, message: msg };
    } finally {
      set({ isPendingReset: false });
    }
  },

  // الباك إند الحالي مفيهوش endpoint للتحقق من كود الاستعادة (forgot-password مبيخزنش الكود)،
  // فالكود بيتحفظ هنا ويتبعت مع reset-password، والتحقق الفعلي المفروض يحصل هناك.
  verifyOtpHandler: async ({ otp }) => {
    if (MOCK) {
      await mockDelay();
      if (otp !== MOCK_OTP) {
        const msg = otpMessage("Wrong OTP");
        toast.error(msg);
        return { success: false, message: msg };
      }
    }
    return { success: true, resetToken: otp };
  },

  resetPasswordHandler: async ({
    email,
    otp,
    resetToken,
    password,
    confirmPassword,
  }) => {
    set({ isPendingReset: true });
    try {
      if (MOCK) {
        await mockDelay();
      } else {
        await api.post("/user/reset-password", {
          email: email.trim(),
          otp: (otp ?? resetToken)?.trim(),
          password,
          confirmPassword: confirmPassword ?? password,
        });
      }
      toast.success("تم تغيير كلمة المرور بنجاح ✅");
      return { success: true };
    } catch (error) {
      const raw = error.response?.data?.message;
      const msg = otpMessage(raw);
      toast.error(msg);
      return {
        success: false,
        message: msg,
        // لو المشكلة في الكود نفسه، الصفحة ترجّع المستخدم لإدخال الكود
        otpError: ["Wrong OTP", "OTP not found or expired", "Invalid or expired OTP"].includes(raw),
      };
    } finally {
      set({ isPendingReset: false });
    }
  },

  // =========================
  // LOGOUT
  // =========================

  logoutHandler: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("paymentSuccess");
    set({ currentUser: null });
    toast.success("تم تسجيل الخروج");
  },

  // =========================
  // INITIAL AUTH
  // =========================

  initiaAuth: async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      set({ isPendingCurrentUser: false });
      return;
    }

    try {
      const res = await api.get("/user/profile");
      set({ currentUser: res.data.user });
    } catch {
      localStorage.removeItem("token");
      set({ currentUser: null });
    } finally {
      set({ isPendingCurrentUser: false });
    }
  },
}));

export default useAuth;