import { NavbarMobile } from "@/components/navbar/navbar-mobile";
import { NavbarUserLinks } from "@/components/navbar/navbar-user-links";
import { buttonVariants } from "@/components/ui/button";
import { Flame, ScanTextIcon } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle"; // Import the ModeToggle component
import Link from "next/link";
import { FC } from "react";

export const NavBar: FC = () => {
  return (
    <>
      <div className="animate-in fade-in w-full">
        <nav className="container px-6 md:px-8 py-4">
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center">
                <Flame className="w-8 h-8 mr-2 inline" />{" "}
                <span className="text-xl font-semibold tracking-tighter navbar-logo mr-6">
                  Flame
                </span>
              </div>
            </Link>
            <div className="hidden md:flex justify-between grow">
              <div>
                <Link href="/about" className={buttonVariants({ variant: "link" })}>
                  About
                </Link>
                <Link href="/contact" className={buttonVariants({ variant: "link" })}>
                  Contact Us
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <NavbarUserLinks />
                <ModeToggle /> {/* Add the ModeToggle component */}
              </div>
            </div>
            <div className="grow md:hidden flex justify-end">
              <NavbarMobile />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};