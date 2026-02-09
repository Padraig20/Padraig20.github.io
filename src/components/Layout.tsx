import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Terminal, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "~/home" },
  { to: "/cv", label: "~/cv" },
  { to: "/gallery", label: "~/gallery" },
  { to: "/blog", label: "~/blog" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const NavItems = () => (
    <>
      {navLinks.map((link) => {
        const isActive = location.pathname === link.to || 
          (link.to !== "/" && location.pathname.startsWith(link.to));
        return (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            className={`font-mono text-xs transition-colors hover:text-primary px-2 py-1 rounded ${
              isActive
                ? "text-primary bg-primary/10"
                : "text-muted-foreground"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border/50">
        <div className="container py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Terminal size={18} className="text-primary group-hover:scale-110 transition-transform" />
            <span className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              patrick_styll
            </span>
          </Link>

          {/* Desktop nav - show at sm breakpoint (640px) */}
          <nav className="hidden sm:flex gap-4">
            <NavItems />
          </nav>

          {/* Mobile dropdown - hide at sm breakpoint */}
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild className="sm:hidden">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                {open ? <X size={18} /> : <Menu size={18} />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-40 bg-card border border-border z-50"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to || 
                  (link.to !== "/" && location.pathname.startsWith(link.to));
                return (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`font-mono text-xs w-full ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-10">
          {children}
        </div>
      </main>

      <footer className="border-t border-border/50 py-6">
        <div className="container flex items-center justify-center gap-2 text-xs text-muted-foreground font-mono">
          <span className="text-primary">$</span>
          <span>©{new Date().getFullYear()} Patrick Styll</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
