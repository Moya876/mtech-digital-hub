
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-mtechGray-100 shadow-sm">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo size="lg" variant="default" asLink={true} />
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? "text-mtechNavy"
                      : "text-mtechGray-700 hover:text-mtechOrange"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button className="bg-mtechOrange hover:bg-mtechOrange-dark" asChild>
              <NavLink to="/quote">
                Get a Quote
              </NavLink>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-mtechGray-500 hover:text-mtechOrange focus:outline-none"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-b border-mtechGray-100 ${
          isMenuOpen ? "block animate-fade-in" : "hidden animate-fade-out"
        }`}
      >
        <div className="space-y-1 px-4 pt-2 pb-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md font-medium ${
                  isActive
                    ? "text-mtechNavy bg-mtechGray-50"
                    : "text-mtechGray-700 hover:bg-mtechGray-50 hover:text-mtechOrange"
                }`
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4">
            <Button className="w-full bg-mtechOrange hover:bg-mtechOrange-dark" asChild>
              <NavLink to="/quote" onClick={closeMenu}>
                Get a Quote
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
