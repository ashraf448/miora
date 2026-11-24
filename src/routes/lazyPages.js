import { lazy } from "react";

function lazyPage(loader) {
  const Component       = lazy(loader);
  Component.preload = loader;
  return Component;
}

export const Home                 = lazyPage(() => import("../pages/Home/Home"));
export const Addiction            = lazyPage(() => import("../pages/Addiction/Addiction"));
export const Awareness            = lazyPage(() => import("../pages/Awareness/Awareness"));
export const ArticleDetails       = lazyPage(() => import("../components/ArticleDetails"));
export const MediaPage            = lazyPage(() => import("../pages/Awareness/MediaPage"));
export const Relax                = lazyPage(() => import("../pages/Relax/Relax"));
export const Assessments          = lazyPage(() => import("../pages/Assessments/Assessments"));
export const Ai                   = lazyPage(() => import("../pages/Ai/Ai"));
export const Journal              = lazyPage(() => import("../pages/Journal/Journal"));
export const About                = lazyPage(() => import("../components/About/About"));
export const Help                 = lazyPage(() => import("../pages/Help/Help"));
export const Contact              = lazyPage(() => import("../pages/Contact/Contact.jsx"));
export const Legal                = lazyPage(() => import("../pages/Legal/Legal"));
export const Login                = lazyPage(() => import("../pages/Auth/Login"));
export const Register             = lazyPage(() => import("../pages/Auth/Register"));
export const ForgotPassword       = lazyPage(() => import("../pages/Auth/ForgotPassword"));
export const VerifyOtp            = lazyPage(() => import("../pages/Auth/VerifyOtp"));
export const ResetPassword        = lazyPage(() => import("../pages/Auth/ResetPassword"));

const byPath = {
  "/": Home,
  "/addiction": Addiction,
  "/awareness": Awareness,
  "/relax": Relax,
  "/assessments": Assessments,
  "/ai": Ai,
  "/journal": Journal,
  "/about": About,
  "/help": Help,
  "/contact": Contact,
  "/login": Login,
  "/register": Register,
  "/forgot-password": ForgotPassword,
};

export const preloadRoute = (path) => {
  try {
    byPath[path]?.preload?.();
  } catch {
    /* تجاهل — هيتحمّل وقت التنقّل */
  }
};
