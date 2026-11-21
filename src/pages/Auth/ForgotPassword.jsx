import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { LuMail, LuLock, LuArrowLeft } from "react-icons/lu";
import { forgotSchema } from "../../validations/authSchemas";
import useAuth from "../../zustand/AuthSlice";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { AuthHeader, AuthInput } from "./AuthParts";
import { field } from "./authHelpers";

export default function ForgotPassword() {
  useDocumentTitle("نسيت كلمة المرور");
  const navigate = useNavigate();
  const forgotPasswordHandler = useAuth((s) => s.forgotPasswordHandler);
  const isPending = useAuth((s) => s.isPendingReset);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(forgotSchema), mode: "onTouched" });

  const onSubmit = async ({ email }) => {
    const res = await forgotPasswordHandler({ email });
    if (res.success) navigate("/verify-otp", { state: { email } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <AuthHeader
        badge="استعادة الحساب"
        eyebrow="استعادة آمنة للحساب"
        eyebrowIcon={LuLock}
        title="نسيت كلمة المرور؟"
        subtitle="لا تقلق! أدخل بريدك الإلكتروني المسجل لدينا وسنساعدك على استعادة حسابك."
      />

      <div className="mt-7">
        <AuthInput label="البريد الإلكتروني" icon={LuMail} type="email" ltr autoComplete="email" placeholder="أدخل بريدك الإلكتروني" error={errors.email?.message} {...field(register("email"))} />
      </div>

      <Button type="submit" variant="contained" fullWidth disabled={isPending} sx={{ mt: 3 }}>
        {isPending ? "جاري الإرسال..." : "احصل على كود التأكيد"}
      </Button>

      <Link to="/login" className="mt-6 flex items-center justify-center gap-2 text-sm text-(--color-muted) transition hover:text-(--color-primary)">
        <LuArrowLeft aria-hidden="true" />
        العودة إلى تسجيل الدخول
      </Link>
    </form>
  );
}
