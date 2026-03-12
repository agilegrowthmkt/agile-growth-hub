import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      nav: {
        about: "Sobre",
        services: "Serviços",
        contact: "Contato",
      },
      hero: {
        title: "Acelere o crescimento do seu negócio",
        subtitle:
          "Marketing digital estratégico com resultados mensuráveis. Da estratégia à execução, impulsionamos sua marca com performance e criatividade.",
        cta: "Fale Conosco",
        ctaSecondary: "Nossos Serviços",
      },
      about: {
        tag: "Quem Somos",
        title: "Parceiros no seu crescimento",
        description:
          "A Agile Growth Marketing é uma agência de marketing digital focada em resultados reais. Combinamos estratégia, tecnologia e criatividade para transformar negócios e gerar crescimento sustentável.",
        values: [
          { title: "Estratégia", text: "Planos personalizados baseados em dados e objetivos claros." },
          { title: "Performance", text: "Foco em métricas que realmente importam para o seu negócio." },
          { title: "Inovação", text: "Utilizamos as mais recentes tecnologias, incluindo IA." },
        ],
      },
      services: {
        tag: "Serviços",
        title: "Soluções completas para seu negócio",
        items: [
          { name: "Estratégia de Marketing", desc: "Planejamento estratégico personalizado para alcançar seus objetivos de negócio." },
          { name: "Tráfego Pago", desc: "Campanhas otimizadas no Google Ads, Meta Ads e outras plataformas." },
          { name: "Desenvolvimento de Criativos", desc: "Design impactante que converte visitantes em clientes." },
          { name: "Landing Page", desc: "Páginas de alta conversão otimizadas para performance." },
          { name: "Social Media", desc: "Gestão estratégica de redes sociais com conteúdo relevante." },
          { name: "Automação", desc: "Fluxos automatizados para nutrir leads e aumentar vendas." },
          { name: "Google Meu Negócio", desc: "Otimização da presença local para atrair mais clientes." },
          { name: "Registro de Marcas e Patentes", desc: "Proteção legal da sua marca e propriedade intelectual." },
          { name: "Agentes de IA", desc: "Desenvolvimento de agentes inteligentes para automatizar processos." },
        ],
      },
      contact: {
        tag: "Contato",
        title: "Vamos conversar?",
        description: "Entre em contato e descubra como podemos impulsionar o crescimento do seu negócio.",
        whatsapp: "WhatsApp",
        email: "E-mail",
        schedule: "Agendar Reunião",
      },
      footer: {
        rights: "Todos os direitos reservados.",
        navigation: "Navegação",
      },
    },
  },
  en: {
    translation: {
      nav: {
        about: "About",
        services: "Services",
        contact: "Contact",
      },
      hero: {
        title: "Accelerate your business growth",
        subtitle:
          "Strategic digital marketing with measurable results. From strategy to execution, we boost your brand with performance and creativity.",
        cta: "Contact Us",
        ctaSecondary: "Our Services",
      },
      about: {
        tag: "About Us",
        title: "Partners in your growth",
        description:
          "Agile Growth Marketing is a digital marketing agency focused on real results. We combine strategy, technology, and creativity to transform businesses and generate sustainable growth.",
        values: [
          { title: "Strategy", text: "Customized plans based on data and clear objectives." },
          { title: "Performance", text: "Focus on metrics that truly matter for your business." },
          { title: "Innovation", text: "We use the latest technologies, including AI." },
        ],
      },
      services: {
        tag: "Services",
        title: "Complete solutions for your business",
        items: [
          { name: "Marketing Strategy", desc: "Personalized strategic planning to achieve your business goals." },
          { name: "Paid Traffic", desc: "Optimized campaigns on Google Ads, Meta Ads and other platforms." },
          { name: "Creative Development", desc: "Impactful design that converts visitors into customers." },
          { name: "Landing Page", desc: "High-conversion pages optimized for performance." },
          { name: "Social Media", desc: "Strategic social media management with relevant content." },
          { name: "Automation", desc: "Automated flows to nurture leads and increase sales." },
          { name: "Google My Business", desc: "Local presence optimization to attract more customers." },
          { name: "Trademarks & Patents", desc: "Legal protection of your brand and intellectual property." },
          { name: "AI Agents", desc: "Development of intelligent agents to automate processes." },
        ],
      },
      contact: {
        tag: "Contact",
        title: "Let's talk?",
        description: "Get in touch and discover how we can drive your business growth.",
        whatsapp: "WhatsApp",
        email: "Email",
        schedule: "Schedule a Meeting",
      },
      footer: {
        rights: "All rights reserved.",
        navigation: "Navigation",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
