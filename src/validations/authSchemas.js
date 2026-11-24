import { z } from "zod";

const email = z.string().trim().min(1, { message: "البريد الإلكتروني مطلوب" }).email({ message: "بريد إلكتروني غير صالح" });

const password = z
  .string()
  .min(1, { message: "كلمة المرور مطلوبة" })
  .min(8, { message: "كلمة المرور 8 أحرف على الأقل" })
  .regex(/[a-z]/, { message: "يجب أن تحتوي على حرف إنجليزي صغير" })
  .regex(/\d/, { message: "يجب أن تحتوي على رقم واحد على الأقل" });

const matchPasswords = (schema) =>
  schema.refine((v) => v.password === v.confirmPassword, {
    message: "كلمتا المرور غير متطابقتين",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email,
  password: z.string().min(1, { message: "كلمة المرور مطلوبة" }),
  remember: z.boolean().optional(),
});

export const registerSchema = matchPasswords(
  z.object({
    fullName: z.string().trim().min(2, { message: "الاسم الكامل مطلوب" }),
    email,
    phone: z
      .string()
      .min(1, { message: "رقم الهاتف مطلوب" })
      .regex(/^01[0-25][0-9]{8}$/, { message: "رقم هاتف مصري غير صالح (مثال: 01012345678)" }),
    birthDate: z
      .string()
      .min(1, { message: "تاريخ الميلاد مطلوب" })
      .refine((v) => new Date(v) <= new Date(), { message: "تاريخ الميلاد غير صالح" }),
    gender: z.enum(["ذكر", "أنثى"], { message: "اختر الجنس" }),
    password,
    confirmPassword: z.string().min(1, { message: "تأكيد كلمة المرور مطلوب" }),
    terms: z.boolean().refine((v) => v, { message: "يجب الموافقة على الشروط والأحكام" }),
  })
);

export const forgotSchema = z.object({ email });

export const resetSchema = matchPasswords(
  z.object({ password, confirmPassword: z.string().min(1, { message: "تأكيد كلمة المرور مطلوب" }) })
);

export const otpSchema = z.string().regex(/^\d{6}$/, { message: "أدخل الكود المكوّن من 6 أرقام" });
