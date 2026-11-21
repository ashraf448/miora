import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { LuLock } from "react-icons/lu";
import { resetSchema } from "../../validations/authSchemas";
import useAuth from "../../zustand/AuthSlice";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { AuthHeader, AuthInput, PasswordStrength } from "./AuthParts";
import { field } from "./authHelpers";

export default function ResetPassword() {
  useDocumentTitle("تعيين كلمة المرور");
  const navigate = useNavigate();
  const state = useLocation().state;
  const resetPasswordHandler = useAuth((s) => s.resetPasswordHandler);
  const isPending = useAuth((s) => s.isPendingReset);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(resetSchema), mode: "onTouched", defaultValues: { password: "", confirmPassword: "" } });
  const password = useWatch({ control, name: "password" });

  if (!state?.email || !state?.resetToken) return <Navigate to="/forgot-password" replace />;

  const onSubmit = async ({ password }) => {
    const res = await resetPasswordHandler({ email: state.email, resetToken: state.resetToken, password });
    if (res.success) navigate("/login", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <AuthHeader badge="استعادة الحساب" eyebrow="استعادة آمنة للحساب" eyebrowIcon={LuLock} title="تعيين كلمة المرور" />

      <div className="mt-7 space-y-5">
        <div>
          <AuthInput label="كلمة المرور الجديدة" icon={LuLock} type="password" autoComplete="new-password" placeholder="أدخل كلمة المرور" error={errors.password?.message} {...field(register("password"))} />
          <PasswordStrength value={password} />
        </div>
        <AuthInput label="تأكيد كلمة المرور" icon={LuLock} type="password" autoComplete="new-password" placeholder="أعد كتابة كلمة المرور" error={errors.confirmPassword?.message} {...field(register("confirmPassword"))} />
      </div>

      <Button type="submit" variant="contained" fullWidth disabled={isPending} sx={{ mt: 4 }}>
        {isPending ? "جاري الحفظ..." : "حفظ كلمة المرور"}
      </Button>
    </form>
  );
}
