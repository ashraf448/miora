import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, FormControlLabel, FormHelperText, Radio, RadioGroup } from "@mui/material";
import { LuMail, LuPhone, LuUser, LuLock } from "react-icons/lu";
import { registerSchema } from "../../validations/authSchemas";
import useAuth from "../../zustand/AuthSlice";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { AuthHeader, AuthInput, PasswordStrength } from "./AuthParts";
import { field } from "./authHelpers";

export default function Register() {
  useDocumentTitle("إنشاء حساب");
  const navigate = useNavigate();
  const registerHandler = useAuth((s) => s.registerHandler);
  const isPending = useAuth((s) => s.isPendingRegister);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", gender: "", password: "", confirmPassword: "", terms: false },
  });
  const password = useWatch({ control, name: "password" });

  const onSubmit = async (data) => {
    const res = await registerHandler(data);
    if (res.success) navigate("/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <AuthHeader badge="حساب جديد" eyebrow="ابدأ مساحتك" title="إنشاء حساب جديد" subtitle="انضم إلينا وابدأ رحلتك الآن." />

      <div className="mt-8 grid items-start gap-x-4 gap-y-9 md:grid-cols-2">
        <AuthInput label="الاسم الأول" icon={LuUser} autoComplete="given-name" placeholder="أدخل اسمك الأول" error={errors.firstName?.message} {...field(register("firstName"))} />
        <AuthInput label="اسم العائلة" icon={LuUser} autoComplete="family-name" placeholder="أدخل اسم العائلة" error={errors.lastName?.message} {...field(register("lastName"))} />
        <AuthInput label="رقم الهاتف" icon={LuPhone} type="tel" ltr autoComplete="tel" placeholder="010xxxxxxxx" error={errors.phone?.message} {...field(register("phone"))} />
        <AuthInput label="البريد الإلكتروني" icon={LuMail} type="email" ltr autoComplete="email" placeholder="name@example.com" error={errors.email?.message} {...field(register("email"))} />

        <fieldset className="md:col-span-2">
          <legend className="mb-4 block text-sm font-bold">الجنس</legend>
          <Controller
            name="gender"
            control={control}
            render={({ field: f }) => (
              <RadioGroup row value={f.value} onChange={f.onChange} onBlur={f.onBlur} sx={{ gap: 3, minHeight: 51, alignItems: "center" }}>
                {["ذكر", "أنثى"].map((g) => (
                  <FormControlLabel key={g} value={g} control={<Radio size="small" />} label={g} />
                ))}
              </RadioGroup>
            )}
          />
          {errors.gender && <FormHelperText error>{errors.gender.message}</FormHelperText>}
        </fieldset>

        <div>
          <AuthInput label="كلمة المرور" icon={LuLock} type="password" autoComplete="new-password" placeholder="أدخل كلمة المرور" error={errors.password?.message} {...field(register("password"))} />
          <PasswordStrength value={password} />
        </div>

        <AuthInput label="تأكيد كلمة المرور" icon={LuLock} type="password" autoComplete="new-password" placeholder="أعد كتابة كلمة المرور" error={errors.confirmPassword?.message} {...field(register("confirmPassword"))} />

        <div className="md:col-span-2">
          <Controller
            name="terms"
            control={control}
            render={({ field: f }) => (
              <FormControlLabel
                control={<Checkbox size="small" checked={!!f.value} onChange={(e) => f.onChange(e.target.checked)} />}
                label={
                  <span className="text-xs text-(--color-muted)">
                    أوافق على{" "}
                    <Link to="/terms" target="_blank" className="font-bold text-(--color-primary) hover:underline">
                      شروط الاستخدام
                    </Link>{" "}
                    و
                    <Link to="/privacy" target="_blank" className="font-bold text-(--color-primary) hover:underline">
                      سياسة الخصوصية
                    </Link>
                  </span>
                }
              />
            )}
          />
          {errors.terms && <FormHelperText error>{errors.terms.message}</FormHelperText>}
        </div>
      </div>

      <Button type="submit" variant="contained" fullWidth disabled={isPending} sx={{ mt: 4, mx: "auto", display: "flex", maxWidth: 424 }}>
        {isPending ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
      </Button>

      <p className="mt-6 text-center text-sm text-(--color-muted)">
        لديك حساب بالفعل؟{" "}
        <Link to="/login" className="font-bold text-(--color-primary) hover:underline">
          تسجيل الدخول
        </Link>
      </p>
    </form>
  );
}