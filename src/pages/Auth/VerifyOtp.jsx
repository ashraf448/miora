import { useEffect, useRef, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button, OutlinedInput } from "@mui/material";
import { otpSchema } from "../../validations/authSchemas";
import useAuth from "../../zustand/AuthSlice";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { AuthHeader } from "./AuthParts";

const LENGTH = 6;
const RESEND_SECONDS = 60;
const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export default function VerifyOtp() {
  useDocumentTitle("كود التأكيد");
  const navigate = useNavigate();
  // const email = useLocation().state?.email;

  const verifyOtpHandler = useAuth((s) => s.verifyOtpHandler);
  const forgotPasswordHandler = useAuth((s) => s.forgotPasswordHandler);
  const isPending = useAuth((s) => s.isPendingReset);
  const verifyEmailHandler = useAuth((s) => s.verifyEmailHandler);
  const resendVerificationHandler = useAuth((s) => s.resendVerificationHandler);
  const [digits, setDigits] = useState(Array(LENGTH).fill(""));
  const [error, setError] = useState("");
  const [seconds, setSeconds] = useState(RESEND_SECONDS);
  const refs = useRef([]);
  const { email, purpose } = useLocation().state ?? {};
  const isRegister = purpose === "register";

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds]);

  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  // الصفحة دي مالهاش معنى من غير بريد جاي من الخطوة اللي قبلها
  if (!email)
    return (
      <Navigate to={isRegister ? "/register" : "/forgot-password"} replace />
    );

  const setAt = (i, v) =>
    setDigits((d) => d.map((x, idx) => (idx === i ? v : x)));

  const onChange = (i, e) => {
    const v = e.target.value.replace(/\D/g, "").slice(-1);
    setAt(i, v);
    setError("");
    if (v && i < LENGTH - 1) refs.current[i + 1]?.focus();
  };

  const onKeyDown = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0)
      refs.current[i - 1]?.focus();
    if (e.key === "ArrowLeft" && i < LENGTH - 1) refs.current[i + 1]?.focus();
    if (e.key === "ArrowRight" && i > 0) refs.current[i - 1]?.focus();
  };

  const onPaste = (e) => {
    const text = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, LENGTH);
    if (!text) return;
    e.preventDefault();
    setDigits(Array.from({ length: LENGTH }, (_, i) => text[i] ?? ""));
    refs.current[Math.min(text.length, LENGTH - 1)]?.focus();
  };

  const submit = async (e) => {
    e.preventDefault();
    const otp = digits.join("");
    const parsed = otpSchema.safeParse(otp);
    if (!parsed.success) return setError(parsed.error.issues[0].message);

    if (isRegister) {
      const res = await verifyEmailHandler({ email, otp });
      if (res.success) navigate("/", { replace: true });
      else setError(res.message);
      return;
    }

    const res = await verifyOtpHandler({ email, otp });
    if (res.success)
      navigate("/reset-password", {
        state: { email, otp, resetToken: res.resetToken ?? otp },
        replace: true,
      });
    else setError(res.message);
  };

  const resend = async () => {
    const res = isRegister
      ? await resendVerificationHandler({ email })
      : await forgotPasswordHandler({ email });
    if (res.success) {
      setSeconds(RESEND_SECONDS);
      setDigits(Array(LENGTH).fill(""));
      refs.current[0]?.focus();
    }
  };

  return (
    <form onSubmit={submit} noValidate>
      <AuthHeader
        badge="استعادة الحساب"
        eyebrow=""
        title="اكتب كود التأكيد"
        subtitle="قم بكتابة الكود المرسل إلى الحساب التالي:"
      >
        <p
          dir="ltr"
          className="mt-1 text-center text-sm font-bold text-(--color-ink) sm:text-start"
        >
          {email}
        </p>
      </AuthHeader>

      {/* الأرقام دايمًا LTR حتى في صفحة RTL */}
      <div
        dir="ltr"
        className="mt-8 flex justify-center gap-2 sm:gap-3"
        onPaste={onPaste}
        role="group"
        aria-label="كود التأكيد"
      >
        {digits.map((d, i) => (
          <OutlinedInput
            key={i}
            value={d}
            onChange={(e) => onChange(i, e)}
            onKeyDown={(e) => onKeyDown(i, e)}
            onFocus={(e) => e.target.select()}
            error={!!error}
            inputRef={(el) => (refs.current[i] = el)}
            autoComplete={i === 0 ? "one-time-code" : "off"}
            slotProps={{
              input: {
                inputMode: "numeric",
                maxLength: 1,
                "aria-label": `الرقم ${i + 1}`,
              },
            }}
            sx={{
              width: { xs: 44, sm: 52 },
              height: { xs: 52, sm: 58 },
              "& input": {
                textAlign: "center",
                fontSize: 22,
                fontWeight: 700,
                padding: 0,
              },
            }}
          />
        ))}
      </div>

      {error && (
        <p role="alert" className="mt-3 text-center text-sm text-red-500">
          {error}
        </p>
      )}

      <div className="mt-6 text-center">
        {seconds > 0 ? (
          <p className="text-sm text-(--color-muted)">
            إعادة إرسال الكود بعد{" "}
            <b className="tabular-nums text-(--color-ink)">{mmss(seconds)}</b>
          </p>
        ) : (
          <button
            type="button"
            onClick={resend}
            disabled={isPending}
            className="text-sm font-bold text-(--color-primary) hover:underline disabled:opacity-50"
          >
            إعادة إرسال الكود
          </button>
        )}
      </div>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isPending}
        sx={{ mt: 3 }}
      >
        {isPending ? "جاري التحقق..." : "تأكيد الكود"}
      </Button>
    </form>
  );
};
