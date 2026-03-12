import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  const links = [
    { label: t("nav.about"), href: "#sobre" },
    { label: t("nav.services"), href: "#servicos" },
    { label: t("nav.contact"), href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold text-gradient">
          Agile Growth
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="text-xs font-bold px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
          >
            {i18n.language === "pt" ? "EN" : "PT"}
          </button>
          <a
            href="https://wa.link/y0lzt7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-lg hover:brightness-110 transition"
          >
            {t("hero.cta")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={toggleLang}
                  className="text-xs font-bold px-3 py-1.5 rounded-md border border-border text-muted-foreground"
                >
                  {i18n.language === "pt" ? "EN" : "PT"}
                </button>
                <a
                  href="https://wa.link/y0lzt7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-lg"
                >
                  {t("hero.cta")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
