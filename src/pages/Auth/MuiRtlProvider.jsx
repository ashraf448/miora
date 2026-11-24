import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ar-ly";

// emotion cache بيقلب خصائص left/right تلقائيًا عشان MUI يشتغل RTL صح
const rtlCache = createCache({ key: "muirtl", stylisPlugins: [prefixer, rtlPlugin] });

// نفس ألوان المشروع (--color-primary / --color-primary-dark)
const pickersText = {
  previousMonth: "الشهر السابق",
  nextMonth: "الشهر التالي",
  okButtonLabel: "تأكيد",
  cancelButtonLabel: "إلغاء",
  clearButtonLabel: "مسح",
  todayButtonLabel: "اليوم",
};

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: { main: "#2a3b9e", dark: "#1f2d7a" },
    error: { main: "#ef4444" },
    text: { primary: "#1b2140", secondary: "#5f6585" },
  },
  shape: { borderRadius: 12 },
  typography: { fontFamily: '"Almarai", system-ui, sans-serif' },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--color-background)",
          borderRadius: 12,
          transition: "background-color .2s",
          "& fieldset": { borderColor: "var(--color-border)" },
          "&:hover fieldset": { borderColor: "var(--color-primary) !important" },
          "&.Mui-focused": { backgroundColor: "#fff" },
        },
        input: { padding: "14px", fontSize: "1rem" },
      },
    },
    MuiFormHelperText: { styleOverrides: { root: { marginInline: 2, fontSize: "0.8rem" } } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 999,
          fontWeight: 700,
          fontSize: "1.05rem",
          padding: "12px 24px",
          fontFamily: "inherit",
        },
        containedPrimary: { boxShadow: "var(--shadow-lift)" },
      },
    },
    MuiFormControlLabel: { styleOverrides: { label: { fontSize: "0.9rem" } } },
  },
});

export default function MuiRtlProvider({ children }) {
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="ar-ly"
          localeText={pickersText}
        >
          {children}
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
