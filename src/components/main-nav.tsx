import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { useLocation } from "react-router-dom";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const location = useLocation();
  return (
    <div className="flex gap-6 md:gap-10">
      <a href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </a>
      {items?.length ? (
        <nav className="hidden sm:flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "relative text-muted-foreground hover:text-foreground before:duration-300 outline-none p-2 rounded-md before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-primary hover:before:w-full hover:before:left-0 hover:before:right-0",
                    item.disabled && "cursor-not-allowed opacity-80",
                    location.pathname === item.href &&
                      "text-foreground outline-none p-2 rounded-md before:content-[''] before:absolute before:bottom-0 before:h-0.5 before:bg-primary before:w-full before:left-0 before:right-autotext-foreground"
                  )}
                >
                  {item.title}
                </a>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
