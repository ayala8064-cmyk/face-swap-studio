import { useState } from "react";

const BasicNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "בית", href: "#home" },
    { name: "אודות", href: "#about" },
    { name: "פורטפוליו", href: "#portfolio" },
    { name: "שירותים", href: "#services" },
    { name: "צור קשר", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="text-2xl font-light tracking-[0.2em] text-[#1a1a1a]">
            מאיה
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-light text-[#666] hover:text-[#1a1a1a] transition-colors tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-3 bg-[#1a1a1a] text-white text-sm font-light tracking-wider hover:bg-[#333] transition-colors"
          >
            דברו איתנו
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-light text-[#1a1a1a] tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center px-6 py-4 bg-[#1a1a1a] text-white text-sm font-light tracking-wider"
            >
              דברו איתנו
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default BasicNav;
