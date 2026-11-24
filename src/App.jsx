import { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Toaster } from "react-hot-toast";

import Layout from "./layout/Layout";
import AuthLayout from "./pages/Auth/AuthLayout";
import ErrorPage from "./common/ErrorPage/ErrorPage";
import PageSkeleton from "./common/Skeleton/PageSkeleton";
import useAuth from "./zustand/AuthSlice";
import {
  Home,
  Addiction,
  Awareness,
  ArticleDetails,
  MediaPage,
  Relax,
  Assessments,
  Ai,
  Journal,
  About,
  Help,
  Contact,
  Legal,
  Login,
  Register,
  ForgotPassword,
  VerifyOtp,
  ResetPassword,
} from "./routes/lazyPages";

// الـ router لازم يتعمل مرة واحدة برّه الـ component،
// وإلا بيتعاد إنشاؤه مع كل render وبيضيّع حالة الصفحات.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // errorElement هنا عشان الـ Navbar والـ Footer يفضلوا ظاهرين وقت الخطأ
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          { path: "addiction", element: <Addiction /> },
          { path: "awareness", element: <Awareness /> },
          { path: "awareness/video/:id", element: <MediaPage kind="video" /> },
          { path: "awareness/podcast/:id", element: <MediaPage kind="podcast" /> },
          { path: "awareness/:id", element: <ArticleDetails /> },
          { path: "relax", element: <Relax /> },
          { path: "assessments", element: <Assessments /> },
          { path: "ai", element: <Ai /> },
          { path: "journal", element: <Journal /> },
          { path: "about", element: <About /> },
          { path: "help", element: <Help /> },
          { path: "contact", element: <Contact /> },
          { path: "privacy", element: <Legal type="privacy" /> },
          { path: "terms", element: <Legal type="terms" /> },
          {
            // صفحات الدخول جوّه الـ Layout عشان الـ Navbar والـ Footer يظهروا
            element: <AuthLayout />,
            children: [
              { path: "login", element: <Login /> },
              { path: "register", element: <Register /> },
              { path: "forgot-password", element: <ForgotPassword /> },
              { path: "verify-otp", element: <VerifyOtp /> },
              { path: "reset-password", element: <ResetPassword /> },
            ],
          },
          { path: "*", element: <ErrorPage notFound /> },
        ],
      },
    ],
  },
]);

export default function App() {
  const initiaAuth = useAuth((s) => s.initiaAuth);

  // استرجاع جلسة المستخدم لو فيه توكن محفوظ
  useEffect(() => {
    initiaAuth();
  }, [initiaAuth]);

  return (
    // reducedMotion="user" => لو المستخدم مفعّل "تقليل الحركة" في جهازه، الحركات بتتعطّل تلقائيًا
    <MotionConfig reducedMotion="user">
      <Suspense fallback={<PageSkeleton />}>
        <RouterProvider router={router} />
      </Suspense>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3500,
          style: { fontFamily: "Almarai, sans-serif", direction: "rtl", fontSize: "15px" },
        }}
      />
    </MotionConfig>
  );
}
