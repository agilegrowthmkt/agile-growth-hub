import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.about"), href: "#sobre" },
    { label: t("nav.services"), href: "#servicos" },
    { label: t("nav.contact"), href: "#contato" },
  ];

  return (
    <footer className="border-t border-border bg-card py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-display text-2xl font-bold text-gradient">
              Agile Growth
            </a>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Marketing digital estratégico com resultados mensuráveis.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t("footer.navigation")}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t("contact.tag")}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>+55 48 98877-6623</p>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.link/y0lzt7`}
                alt="WhatsApp QR Code"
                className="w-24 h-24 mt-2 rounded-lg"
              />
              <p className="pt-2">agilegrowthmkt@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Agile Growth Marketing. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
