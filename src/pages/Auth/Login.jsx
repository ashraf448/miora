
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { LuMail, LuLock, LuUser } from "react-icons/lu";
import { loginSchema } from "../../validations/authSchemas";
import useAuth from "../../zustand/AuthSlice";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { AuthHeader, AuthInput } from "./AuthParts";
import { field } from "./authHelpers";

const REMEMBER_KEY = "miora-remember-email";
const savedEmail = () => {
  try {
    return localStorage.getItem(REMEMBER_KEY) ?? "";
  } catch {
    return "";
  }
};

export default function Login() {
  useDocumentTitle("تسجيل الدخول");
  const navigate = useNavigate();
  const location = useLocation();
  const loginHandler = useAuth((s) => s.loginHandler);
  const isPending = useAuth((s) => s.isPendingLogin);
  const [initialEmail] = useState(savedEmail);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: { email: initialEmail, password: "", remember: !!initialEmail },
  });

  const onSubmit = async ({ remember, ...data }) => {
    const res = await loginHandler(data);
    if (!res.success) return;
    try {
      if (remember) localStorage.setItem(REMEMBER_KEY, data.email);
      else localStorage.removeItem(REMEMBER_KEY);
    } catch {
      /* التخزين غير متاح */
    }
    navigate(location.state?.from ?? "/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <AuthHeader badge="مرحبًا بعودتك" eyebrow="مساحتك في ميورا" eyebrowIcon={LuUser} title="تسجيل الدخول" subtitle="أهلًا بعودتك! سجّل دخولك للمتابعة." />

      <div className="mt-7 space-y-5">
        <AuthInput label="البريد الإلكتروني" icon={LuMail} type="email" ltr autoComplete="email" placeholder="name@example.com" error={errors.email?.message} {...field(register("email"))} />
        <AuthInput label="كلمة المرور" icon={LuLock} type="password" autoComplete="current-password" placeholder="أدخل كلمة المرور" error={errors.password?.message} {...field(register("password"))} />
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <Controller
          name="remember"
          control={control}
          render={({ field: f }) => (
            <FormControlLabel control={<Checkbox size="small" checked={!!f.value} onChange={(e) => f.onChange(e.target.checked)} />} label="تذكّرني" />
          )}
        />
        <Link to="/forgot-password" className="text-sm font-bold text-(--color-primary) hover:underline">
          نسيت كلمة المرور؟
        </Link>
      </div>

      <Button type="submit" variant="contained" fullWidth disabled={isPending} sx={{ mt: 3 }}>
        {isPending ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
      </Button>

      <p className="mt-6 text-center text-sm text-(--color-muted)">
        ليس لديك حساب؟{" "}
        <Link to="/register" className="font-bold text-(--color-ink) hover:text-(--color-primary)">
          إنشاء حساب جديد
        </Link>
      </p>
    </form>
  );
}
