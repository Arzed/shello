import { NavItem } from "@/types/nav";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface MobileNavProps {
  name: string;
  items: NavItem[];
}

const MobileNav = (props: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="block sm:hidden">
        <Button variant="outline" className="rounded-full" size="icon">
          <Icons.menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="px-7">
          <a
            className="flex items-center"
            aria-label="Home"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <Icons.logo className="mr-2 h-4 w-4" aria-hidden="true" />
            <span className="font-bold">{props.name}</span>
          </a>
        </div>
        <div className="my-4 pb-10 pl-6">
          <div className="pl-1 pr-7">
            <div className="w-full">
              <div className="flex flex-col space-y-2">
                {props.items.map((item, i) => (
                  <a
                    key={i}
                    className={cn(
                      "text-foreground/70 transition-colors hover:text-foreground",
                      location.pathname === item.href && "text-foreground"
                    )}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
