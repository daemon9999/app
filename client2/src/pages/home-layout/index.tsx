import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SiteProvider from "@/context";
import Menu from "@/components/menu";
export default function HomeLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <SiteProvider>
        <Menu />
      <Toaster position="top-right" />
      <div className="h-full">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </SiteProvider>
  );
}
