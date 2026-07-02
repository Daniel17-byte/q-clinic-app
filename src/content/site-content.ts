import type { Locale } from "@/src/config/locales";

export type Procedure = {
  slug: string;
  title: string;
  category: string;
  intro: string;
  priceFrom: string;
  recovery: string;
  highlights: string[];
  heroImage: string;
  gallery: string[];
  beforeAfter: {
    before: string;
    after: string;
  };
};

type SiteCopy = {
  brand: string;
  navigation: {
    home: string;
    procedures: string;
    about: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  home: {
    proceduresTitle: string;
    proceduresSubtitle: string;
    trustTitle: string;
    trustText: string;
    trustItems: string[];
    testimonialTitle: string;
    ctaTitle: string;
    ctaText: string;
  };
  about: {
    title: string;
    lead: string;
    paragraphs: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    successMessage: string;
    fields: {
      fullName: string;
      email: string;
      phone: string;
      procedure: string;
      message: string;
      consent: string;
      submit: string;
    };
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: string;
};

type SiteData = {
  copy: SiteCopy;
  procedures: Procedure[];
  testimonials: Array<{ name: string; procedure: string; quote: string }>;
};

const sharedProcedures: Procedure[] = [
  {
    slug: "dental-veneers",
    title: "Dental Veneers",
    category: "Dental",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lorem at velit consequat faucibus.",
    priceFrom: "EUR 2,400",
    recovery: "3-5 days",
    highlights: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Integer posuere erat a ante",
    ],
    heroImage: "/media/dental-hero.svg",
    gallery: [
      "/media/gallery-1.svg",
      "/media/gallery-2.svg",
      "/media/gallery-3.svg",
    ],
    beforeAfter: {
      before: "/media/before.svg",
      after: "/media/after.svg",
    },
  },
  {
    slug: "hair-transplant",
    title: "Hair Transplant",
    category: "Hair",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    priceFrom: "EUR 1,900",
    recovery: "5-7 days",
    highlights: [
      "Sed posuere consectetur est at lobortis",
      "Aenean lacinia bibendum nulla",
      "Etiam porta sem malesuada magna",
    ],
    heroImage: "/media/hair-hero.svg",
    gallery: [
      "/media/gallery-1.svg",
      "/media/gallery-2.svg",
      "/media/gallery-3.svg",
    ],
    beforeAfter: {
      before: "/media/before.svg",
      after: "/media/after.svg",
    },
  },
  {
    slug: "bbl",
    title: "BBL",
    category: "Body",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.",
    priceFrom: "EUR 4,900",
    recovery: "10-14 days",
    highlights: [
      "Cras justo odio, dapibus ac facilisis",
      "Maecenas sed diam eget risus",
      "Nullam id dolor id nibh ultricies",
    ],
    heroImage: "/media/bbl-hero.svg",
    gallery: [
      "/media/gallery-1.svg",
      "/media/gallery-2.svg",
      "/media/gallery-3.svg",
    ],
    beforeAfter: {
      before: "/media/before.svg",
      after: "/media/after.svg",
    },
  },
];

const contentByLocale: Record<Locale, SiteData> = {
  ro: {
    copy: {
      brand: "Q Clinic",
      navigation: {
        home: "Acasa",
        procedures: "Proceduri",
        about: "Despre",
        faq: "Intrebari",
        contact: "Contact",
      },
      hero: {
        title: "Turism medical in Turcia pentru rezultate premium",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere justo vitae urna commodo, in cursus lacus lobortis.",
        ctaPrimary: "Cere oferta",
        ctaSecondary: "Vezi proceduri",
      },
      home: {
        proceduresTitle: "Proceduri populare",
        proceduresSubtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.",
        trustTitle: "De ce acest template functioneaza",
        trustText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.",
        trustItems: [
          "Structura clara pe servicii",
          "CTA-uri orientate spre lead",
          "Continut usor de inlocuit",
        ],
        testimonialTitle: "Ce spun pacientii (dummy)",
        ctaTitle: "Programeaza o consultatie gratuita",
        ctaText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.",
      },
      about: {
        title: "Despre Q Clinic",
        lead:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla.",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.",
          "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
        ],
      },
      contact: {
        title: "Contact rapid",
        subtitle:
          "Completeaza formularul de mai jos. Momentan este dummy si nu trimite datele nicaieri.",
        successMessage: "Formular trimis local cu succes (dummy).",
        fields: {
          fullName: "Nume complet",
          email: "Email",
          phone: "Telefon",
          procedure: "Procedura dorita",
          message: "Mesaj",
          consent: "Sunt de acord sa fiu contactat(a).",
          submit: "Trimite cererea",
        },
      },
      faq: {
        title: "Intrebari frecvente",
        items: [
          {
            question: "In cat timp primesc oferta?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.",
          },
          {
            question: "Ce include pachetul medical?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur.",
          },
          {
            question: "Pot combina mai multe proceduri?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis.",
          },
        ],
      },
      footer: "Template demo pentru clinica de medical travel.",
    },
    procedures: sharedProcedures,
    testimonials: [
      {
        name: "Maria P.",
        procedure: "Dental Veneers",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      },
      {
        name: "Andreea L.",
        procedure: "BBL",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus.",
      },
    ],
  },
  en: {
    copy: {
      brand: "Q Clinic",
      navigation: {
        home: "Home",
        procedures: "Procedures",
        about: "About",
        faq: "FAQ",
        contact: "Contact",
      },
      hero: {
        title: "Medical travel in Turkey for premium outcomes",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere justo vitae urna commodo, in cursus lacus lobortis.",
        ctaPrimary: "Request offer",
        ctaSecondary: "Browse procedures",
      },
      home: {
        proceduresTitle: "Popular procedures",
        proceduresSubtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.",
        trustTitle: "Why this template converts",
        trustText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.",
        trustItems: [
          "Clear service architecture",
          "Lead-oriented call to actions",
          "Easy content replacement",
        ],
        testimonialTitle: "Patient stories (dummy)",
        ctaTitle: "Book a free consultation",
        ctaText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.",
      },
      about: {
        title: "About Q Clinic",
        lead:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla.",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.",
          "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
        ],
      },
      contact: {
        title: "Quick contact",
        subtitle:
          "Fill in the form below. It is currently dummy and does not send data anywhere.",
        successMessage: "Form submitted locally (dummy).",
        fields: {
          fullName: "Full name",
          email: "Email",
          phone: "Phone",
          procedure: "Desired procedure",
          message: "Message",
          consent: "I agree to be contacted.",
          submit: "Send request",
        },
      },
      faq: {
        title: "Frequently asked questions",
        items: [
          {
            question: "How fast do I receive an offer?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.",
          },
          {
            question: "What is included in the medical package?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur.",
          },
          {
            question: "Can I combine procedures?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis.",
          },
        ],
      },
      footer: "Demo template for a medical travel clinic.",
    },
    procedures: sharedProcedures,
    testimonials: [
      {
        name: "Emma R.",
        procedure: "Hair Transplant",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      },
      {
        name: "Olivia N.",
        procedure: "Dental Veneers",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus.",
      },
    ],
  },
  tr: {
    copy: {
      brand: "Q Clinic",
      navigation: {
        home: "Ana Sayfa",
        procedures: "Prosedurler",
        about: "Hakkimizda",
        faq: "SSS",
        contact: "Iletisim",
      },
      hero: {
        title: "Turkiye'de premium medikal seyahat cozumleri",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere justo vitae urna commodo, in cursus lacus lobortis.",
        ctaPrimary: "Teklif al",
        ctaSecondary: "Prosedurlere bak",
      },
      home: {
        proceduresTitle: "Populer prosedurler",
        proceduresSubtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.",
        trustTitle: "Bu template neden donusum odakli",
        trustText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.",
        trustItems: [
          "Net hizmet mimarisi",
          "Lead odakli CTA yapisi",
          "Kolay icerik degisimi",
        ],
        testimonialTitle: "Hasta yorumlari (dummy)",
        ctaTitle: "Ucretsiz on gorusme planlayin",
        ctaText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.",
      },
      about: {
        title: "Q Clinic Hakkinda",
        lead:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla.",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.",
          "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
        ],
      },
      contact: {
        title: "Hizli iletisim",
        subtitle:
          "Asagidaki formu doldurun. Su an dummy modda ve verileri hicbir yere gondermez.",
        successMessage: "Form yerel olarak gonderildi (dummy).",
        fields: {
          fullName: "Ad soyad",
          email: "E-posta",
          phone: "Telefon",
          procedure: "Istenen prosedur",
          message: "Mesaj",
          consent: "Benimle iletisime gecilmesini kabul ediyorum.",
          submit: "Talep gonder",
        },
      },
      faq: {
        title: "Sik sorulan sorular",
        items: [
          {
            question: "Teklif ne kadar surede gelir?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.",
          },
          {
            question: "Medikal paket neleri icerir?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur.",
          },
          {
            question: "Birden fazla prosedur birlestirilebilir mi?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis.",
          },
        ],
      },
      footer: "Medikal seyahat klinigi icin demo template.",
    },
    procedures: sharedProcedures,
    testimonials: [
      {
        name: "Zeynep K.",
        procedure: "BBL",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      },
      {
        name: "Mert A.",
        procedure: "Hair Transplant",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus.",
      },
    ],
  },
};

export function getSiteData(locale: Locale): SiteData {
  return contentByLocale[locale];
}

