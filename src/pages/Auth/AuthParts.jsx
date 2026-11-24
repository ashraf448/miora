import { forwardRef, useId, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LuEye, LuEyeOff, LuCheck, LuX, LuCalendar } from "react-icons/lu";
import logo from "../../assets/images/miora.png";

/** رأس النموذج: لوجو + شارة + عنوان فرعي + عنوان + وصف */
export function AuthHeader({ badge, eyebrow, eyebrowIcon: Icon, title, subtitle, children }) {
  return (
    <header>
      <div className="flex items-start justify-between gap-3">
        <Link to="/" aria-label="ميورا — الصفحة الرئيسية" className="grid h-14 w-14 place-items-center rounded-2xl bg-(--color-primary-soft) shadow-(--shadow-card)">
          <img src={logo} alt="" width="40" height="40" className="h-10 w-10" />
        </Link>
        <span className="rounded-full bg-(--color-primary-soft) px-3 py-1 text-xs font-medium text-(--color-primary-dark)">{badge}</span>
      </div>

      <p className="mt-6 flex items-center gap-1.5 text-[13px] font-bold text-(--color-primary)">
        {Icon && <Icon aria-hidden="true" />}
        {eyebrow}
      </p>
      <h1 className="mt-1 text-3xl font-normal leading-tight sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-3 text-[15px] leading-7 text-(--color-muted)">{subtitle}</p>}
      {children}
    </header>
  );
}

/** حقل بعنوان فوق الحقل + أيقونة في البداية، وزر إظهار/إخفاء لو النوع password */
export const AuthInput = forwardRef(function AuthInput(
  { label, icon: Icon, error, type = "text", ltr = false, className = "", ...rest },
  ref
) {
  const id = useId();
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-4 block text-sm font-bold">
        {label}
      </label>
      <TextField
        id={id}
        fullWidth
        type={isPassword && show ? "text" : type}
        error={!!error}
        helperText={error}
        inputRef={ref}
        slotProps={{
          htmlInput: { dir: ltr || isPassword ? "ltr" : "rtl", style: ltr || isPassword ? { textAlign: "left" } : undefined },
          input: {
            startAdornment: Icon && (
              <InputAdornment position="start" sx={{ color: "var(--color-muted)" }}>
                <Icon />
              </InputAdornment>
            ),
            endAdornment: isPassword && (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  edge="end"
                  onClick={() => setShow((s) => !s)}
                  aria-label={show ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                  sx={{ color: "var(--color-muted)" }}
                >
                  {show ? <LuEyeOff /> : <LuEye />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        {...rest}
      />
    </div>
  );
});

const dateFieldSx = {
  "& .MuiPickersInputBase-root": {
    flexDirection: "row-reverse",
    gap: 4,
    paddingInlineStart: "4px",
    backgroundColor: "var(--color-background)",
    borderRadius: "12px",
    transition: "background-color .2s",
    "&.Mui-focused": { backgroundColor: "#fff" },
    "&:hover .MuiPickersOutlinedInput-notchedOutline": { borderColor: "var(--color-primary)" },
  },
  "& .MuiPickersOutlinedInput-notchedOutline": { borderColor: "var(--color-border)" },
  "& .MuiPickersInputBase-sectionsContainer": { justifyContent: "flex-start", padding: "14px 0" },
};

const CalendarIcon = () => <LuCalendar />;

export function AuthDateInput({ label, value, onChange, onBlur, error, className = "" }) {
  const id = useId();

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-4 block text-sm font-bold">
        {label}
      </label>
      <DatePicker
        value={value ? dayjs(value) : null}
        onChange={(date) => onChange(date?.isValid() ? date.format("YYYY-MM-DD") : "")}
        format="DD/MM/YYYY"
        maxDate={dayjs()}
        openTo="year"
        views={["year", "month", "day"]}
        slots={{ openPickerIcon: CalendarIcon }}
        slotProps={{
          textField: { id, fullWidth: true, sx: dateFieldSx, error: !!error, helperText: error, onBlur },
          openPickerButton: { sx: { p: 0, fontSize: 20, color: "var(--color-muted)" } },
        }}
      />
    </div>
  );
}

// ───── قوة كلمة المرور ─────
const rules = [
  { id: "lower", label: "حرف إنجليزي صغير", test: (v) => /[a-z]/.test(v) },
  { id: "len", label: "8 أحرف على الأقل", test: (v) => v.length >= 8 },
  { id: "digit", label: "رقم واحد", test: (v) => /\d/.test(v) },
];

const levels = [
  { label: "ضعيفة", text: "text-red-500", bar: "bg-red-500" },
  { label: "ضعيفة", text: "text-red-500", bar: "bg-red-500" },
  { label: "متوسطة", text: "text-orange-500", bar: "bg-orange-400" },
  { label: "جيدة", text: "text-yellow-600", bar: "bg-yellow-400" },
  { label: "قوية", text: "text-green-600", bar: "bg-green-500" },
];

export function PasswordStrength({ value = "" }) {
  const passed = rules.filter((r) => r.test(value));
  // نقطة إضافية للقوة: حرف كبير أو رمز
  const bonus = /[A-Z]/.test(value) || /[^\w\s]/.test(value) ? 1 : 0;
  const score = value ? Math.min(4, passed.length + bonus) : 0;
  const level = levels[score];

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-(--color-muted)">قوة كلمة المرور</span>
        <span className={`font-bold ${level.text}`} aria-live="polite">
          {level.label}
        </span>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-1.5" role="progressbar" aria-valuemin={0} aria-valuemax={4} aria-valuenow={score}>
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className={`h-1 rounded-full transition-colors duration-300 ${i <= score ? level.bar : "bg-(--color-primary-soft)"}`} />
        ))}
      </div>

      <ul className="mt-3 flex flex-wrap gap-2 rounded-xl bg-(--color-background) p-3">
        {rules.map((r) => {
          const ok = r.test(value);
          return (
            <li
              key={r.id}
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs transition-colors ${
                ok ? "bg-green-50 text-green-700" : "bg-(--color-primary-soft) text-(--color-muted)"
              }`}
            >
              {ok ? <LuCheck aria-hidden="true" /> : <LuX aria-hidden="true" />}
              {r.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
