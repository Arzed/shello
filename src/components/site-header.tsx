import { siteConfig } from "@/config/site";
import { MainNav } from "./main-nav";
import { Button } from "./ui/button";
import MobileNav from "./mobile-nav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/75 backdrop-blur-sm">
      <div className="mx-4 md:mx-20 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <a href="#">
              <Button variant={"outline"} className="rounded-full">
                Let's Talk
              </Button>
            </a>
            <MobileNav items={siteConfig.mainNav} name={siteConfig.name} />
          </nav>
        </div>
      </div>
    </header>
  );
}
