import { Suspense, useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation, useNavigation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import PageLoader from "../common/PageLoader";
import useAuth from "../zustand/AuthSlice";

export default function Layout() {
  const navigation = useNavigation();
  const { pathname } = useLocation();
  const isNavigating = navigation.state === "loading";

  useEffect(() => {
    useAuth.getState().initiaAuth();
  }, []);

  return (
    <div className="relative isolate flex min-h-screen flex-col" dir="rtl">
      {pathname !== "/" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[26rem] bg-[radial-gradient(ellipse_at_top,var(--color-primary-soft),transparent_65%)]"
        />
      )}
      {isNavigating && (
        <div
          className="fixed inset-x-0 top-0 z-[70] h-1 overflow-hidden bg-(--color-primary-soft)"
          role="progressbar"
          aria-label="جاري تحميل الصفحة"
        >
          <span className="block h-full w-1/3 animate-pulse bg-(--color-primary)" />
        </div>
      )}
      <Navbar />
      <div className="flex-1">
        <Suspense fallback={<PageLoader compact />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
      <ScrollRestoration />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2800,
          style: {
            fontFamily: "Almarai, sans-serif",
            direction: "rtl",
          },
        }}
      />
    </div>
  );
}
