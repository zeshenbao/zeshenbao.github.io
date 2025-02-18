import { useState } from "react";
import { Link } from "wouter";
import { Atom, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume", isPage: true },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (href: string, isPage?: boolean) => {
    if (isPage) {
      // Let the Link component handle the navigation
      return;
    }
    // For anchor links, scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity">
            <Atom className="h-8 w-8 text-primary animate-pulse" />
            <span className="sr-only md:not-sr-only">Zeshen Bao</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            item.isPage ? (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </Button>
              </Link>
            ) : (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => handleNavigation(item.href)}
              >
                {item.name}
              </Button>
            )
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                item.isPage ? (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className="justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="justify-start"
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.name}
                  </Button>
                )
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}