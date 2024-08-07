import { Outlet } from "react-router-dom";
import SiteHeader from "./site-header";
import { cn } from "@/lib/utils";
import Footer from "./footer";
import { siteConfig } from "@/config/site";

export default function Layout() {
  return (
    <body
      className={cn("min-h-screen bg-transparent font-sans antialiased", "")}
    >
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer items={siteConfig.mainNav} />
      </div>
    </body>
  );
}
