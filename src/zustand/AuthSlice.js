
import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";
 
// axios instance بتاعت الفرونت
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://13.63.133.150" ,
  headers: { "Content-Type": "application/json" },
});
// ضيف التوكن تلقائياً في كل request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
 
// لو 401 على طلب محمي (يعني التوكن اتنهت صلاحيته) امسح التوكن وودّي المستخدم للـ login.
// بنستثني طلبات login/register: غلط في الباسورد بيرجع 401 برضه،
// ولو عملنا redirect ساعتها الصفحة هتتعمل reload ورسالة الخطأ هتضيع.
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const url = err.config?.url ?? "";
    const isAuthRequest = ["/user/login", "/user/register", "/user/me"].some((p) => url.includes(p));
    if (err.response?.status === 401 && !isAuthRequest && localStorage.getItem("token")) {
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
 
//   registerHandler: async (data) => {
//   set({ isPendingRegister: true });

//   try {
//     const { firstName, lastName, phone, gender, email, password } = data;

//     const res = await api.post("/api/user/register", {
//       userName: `${firstName.trim()} ${lastName.trim()}`,
//       email,
//       password,
//       phoneNumber : phone,
//       gender,
//     });

//     const { token, user } = res.data;

//     localStorage.setItem("token", token);
//     set({ currentUser: user });

//     toast.success("تم إنشاء حسابك بنجاح ✅");
//     return { success: true };

//   } catch (error) {
//     const msg = error.response?.data?.message || "تعذّر الاتصال بالخادم، حاول مرة أخرى.";
//     toast.error(msg);
//     return { success: false, message: msg };

//   } finally {
//     set({ isPendingRegister: false });
//   }
// },
 
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

    const res = await api.post("/user/Register", {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password,
      confirmPassword: confirmPassword ?? password,
      phoneNumber,
      gender,
    });

    toast.success(res.data?.message || "تم إرسال كود التفعيل إلى بريدك الإلكتروني");
    return { success: true, email };
  } catch (error) {
    const msg =
      error.response?.data?.message || "تعذّر الاتصال بالخادم، حاول مرة أخرى.";
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
 
      const { token, user } = res.data;
 
      localStorage.setItem("token", token);
      set({ currentUser: user });
 
      toast.success("أهلًا بعودتك ✅");
      return { success: true };
 
    } catch (error) {
      const msg = error.response?.data?.message || "تعذّر الاتصال بالخادم، حاول مرة أخرى.";
      toast.error(msg);
      return { success: false, message: msg };
 
    } finally {
      set({ isPendingLogin: false });
    }
  },
 
 
  // =========================
  // PASSWORD RECOVERY
  // وضع تجريبي بدون باك إند: ضع VITE_AUTH_MOCK=true في ملف .env (الكود الصحيح 123456)
  // ⚠️ المسارات دي افتراضية (/auth/forgot-password, /auth/verify-otp, /auth/reset-password)
  // ولازم الباك إند يدعمها. عدّلها حسب الـ API عندك.
  // =========================
 
  forgotPasswordHandler: async ({ email }) => {
    set({ isPendingReset: true });
    try {
      if (MOCK) await mockDelay();
      else await api.post("/user/forgot-password", { email });
      toast.success("تم إرسال كود التأكيد إلى بريدك");
      return { success: true };
    } catch (error) {
      const msg = error.response?.data?.message || "تعذّر الاتصال بالخادم، حاول مرة أخرى.";
      toast.error(msg);
      return { success: false, message: msg };
    } finally {
      set({ isPendingReset: false });
    }
  },
 
  verifyOtpHandler: async ({ email, otp }) => {
    set({ isPendingReset: true });
    try {
      if (MOCK) {
        await mockDelay();
        if (otp !== MOCK_OTP) throw { response: { data: { message: `الكود غير صحيح (في الوضع التجريبي الكود هو ${MOCK_OTP})` } } };
        return { success: true, resetToken: "mock-token" };
      }
      const res = await api.post("/user/verify-otp", { email, otp });
      return { success: true, resetToken: res.data?.resetToken ?? otp };
    } catch (error) {
      const msg = error.response?.data?.message || "الكود غير صحيح أو انتهت صلاحيته.";
      toast.error(msg);
      return { success: false, message: msg };
    } finally {
      set({ isPendingReset: false });
    }
  },
 
  resetPasswordHandler: async ({ email, resetToken, password }) => {
    set({ isPendingReset: true });
    try {
      if (MOCK) await mockDelay();
      else await api.post("/user/reset-password", { email, resetToken, password });
      toast.success("تم تغيير كلمة المرور بنجاح ✅");
      return { success: true };
    } catch (error) {
      const msg = error.response?.data?.message || "تعذّر تغيير كلمة المرور، حاول مرة أخرى.";
      toast.error(msg);
      return { success: false, message: msg };
    } finally {
      set({ isPendingReset: false });
    }
  },
 
  // =========================
  // LOGOUT
  // =========================
 
  logoutHandler: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("paymentSuccess");
    set({ currentUser: null });
    toast.success("تم تسجيل الخروج");
  },
 
  // =========================
  // INITIAL AUTH (استخدمها بدل initiaAuth)
  // =========================
 
  initiaAuth: async () => {
    const token = localStorage.getItem("token");
 
    if (!token) {
      set({ isPendingCurrentUser: false });
      return;
    }
 
    try {
      const res = await api.get("/user/me");
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
 