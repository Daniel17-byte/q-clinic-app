import type { Locale } from "@/src/config/locales";

export type MediaItem = {
  src: string;
  caption: string;
};

type ProcedureSlug = "dental-veneers" | "hair-transplant" | "bbl";

/** Locale-independent part of a procedure: route and imagery. */
type ProcedureBase = {
  slug: ProcedureSlug;
  heroImage: string;
  gallery: string[];
  beforeAfter: {
    before: string;
    after: string;
  };
};

/** Everything that has to be written per language. */
type ProcedureCopy = {
  title: string;
  category: string;
  intro: string;
  description: string[];
  priceFrom: string;
  recovery: string;
  highlights: string[];
};

export type Procedure = ProcedureBase & ProcedureCopy;

type SiteCopy = {
  brand: string;
  navigation: {
    home: string;
    procedures: string;
    about: string;
    faq: string;
    contact: string;
  };
  labels: {
    from: string;
    recovery: string;
    details: string;
    quickFacts: string;
    included: string;
    aboutProcedure: string;
    gallery: string;
    beforeAfter: string;
    before: string;
    after: string;
    sliderHint: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badgeTitle: string;
    badgeText: string;
  };
  home: {
    badgesTitle: string;
    proceduresTitle: string;
    proceduresSubtitle: string;
    beforeAfterTitle: string;
    beforeAfterText: string;
    clinicTitle: string;
    clinicText: string;
    clinicMedia: MediaItem[];
    trustTitle: string;
    trustText: string;
    trustItems: string[];
    testimonialTitle: string;
    ctaTitle: string;
    ctaText: string;
  };
  journey: {
    title: string;
    steps: Array<{ title: string; text: string }>;
  };
  procedures: {
    lead: string;
  };
  about: {
    title: string;
    lead: string;
    paragraphs: string[];
    media: MediaItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    successMessage: string;
    bullets: string[];
    mapCaption: string;
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
    supportTitle: string;
    supportText: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: string;
};

type SiteData = {
  copy: SiteCopy;
  procedures: Procedure[];
  testimonials: Array<{ name: string; procedure: string; quote: string; avatar: string }>;
};

type LocaleContent = Omit<SiteData, "procedures"> & {
  procedures: Record<ProcedureSlug, ProcedureCopy>;
};

export const partnerBadges = [
  "/media/badge-1.svg",
  "/media/badge-2.svg",
  "/media/badge-3.svg",
  "/media/badge-4.svg",
];

const procedureBases: ProcedureBase[] = [
  {
    slug: "dental-veneers",
    heroImage: "/media/dental-hero.svg",
    gallery: [
      "/media/dental-gallery-1.svg",
      "/media/dental-gallery-2.svg",
      "/media/dental-gallery-3.svg",
    ],
    beforeAfter: {
      before: "/media/dental-before.svg",
      after: "/media/dental-after.svg",
    },
  },
  {
    slug: "hair-transplant",
    heroImage: "/media/hair-hero.svg",
    gallery: [
      "/media/hair-gallery-1.svg",
      "/media/hair-gallery-2.svg",
      "/media/hair-gallery-3.svg",
    ],
    beforeAfter: {
      before: "/media/hair-before.svg",
      after: "/media/hair-after.svg",
    },
  },
  {
    slug: "bbl",
    heroImage: "/media/bbl-hero.svg",
    gallery: [
      "/media/bbl-gallery-1.svg",
      "/media/bbl-gallery-2.svg",
      "/media/bbl-gallery-3.svg",
    ],
    beforeAfter: {
      before: "/media/bbl-before.svg",
      after: "/media/bbl-after.svg",
    },
  },
];

const contentByLocale: Record<Locale, LocaleContent> = {
  ro: {
    copy: {
      brand: "Q Clinic",
      navigation: {
        home: "Acasă",
        procedures: "Proceduri",
        about: "Despre noi",
        faq: "Întrebări",
        contact: "Contact",
      },
      labels: {
        from: "De la",
        recovery: "Recuperare",
        details: "Vezi detalii",
        quickFacts: "Pe scurt",
        included: "Ce include pachetul",
        aboutProcedure: "Despre procedură",
        gallery: "Galerie",
        beforeAfter: "Înainte și după",
        before: "Înainte",
        after: "După",
        sliderHint: "Trage de cursor ca să compari.",
      },
      hero: {
        title: "Tratamente dentare, implant de păr și chirurgie estetică în Istanbul",
        subtitle:
          "În maximum 24 de ore de la primul mesaj primești planul de tratament, prețul final și durata șederii. Transferurile, cazarea și traducătorul sunt incluse în pachet.",
        ctaPrimary: "Cere o ofertă",
        ctaSecondary: "Vezi procedurile",
        badgeTitle: "Un singur coordonator",
        badgeText: "Aceeași persoană, de la prima întrebare până la ultimul control.",
      },
      home: {
        badgesTitle: "Acreditări și parteneri",
        proceduresTitle: "Cele mai cerute proceduri",
        proceduresSubtitle:
          "Fiecare pachet acoperă consultația, intervenția, cazarea și controalele. Prețurile de mai jos sunt punctul de pornire pentru un plan personalizat.",
        beforeAfterTitle: "Înainte și după",
        beforeAfterText:
          "Trage de cursor peste fiecare imagine ca să compari starea inițială cu rezultatul.",
        clinicTitle: "Clinica și echipa",
        clinicText:
          "Lucrăm în clinica noastră din centrul Istanbulului, cu medici angajați permanent și coordonatori care vorbesc română, engleză și turcă.",
        clinicMedia: [
          { src: "/media/about-facility.svg", caption: "Săli de tratament" },
          { src: "/media/about-team.svg", caption: "Echipa medicală" },
          { src: "/media/clinic-city.svg", caption: "Locație în Istanbul" },
        ],
        trustTitle: "De ce aleg pacienții Q Clinic",
        trustText:
          "Un singur interlocutor, un singur preț, fără costuri care apar pe parcurs. Ai planul complet înainte să cumperi biletul de avion.",
        trustItems: [
          "Preț final comunicat din prima ofertă, fără suplimente ulterioare",
          "Coordonator dedicat, pe WhatsApp, pe toată durata șederii",
          "Transfer de la aeroport, cazare și traducător incluse",
          "Controale online timp de 12 luni după ce ajungi acasă",
        ],
        testimonialTitle: "Ce spun pacienții noștri",
        ctaTitle: "Programează o consultație gratuită",
        ctaText:
          "Trimite-ne câteva fotografii și istoricul tău medical. În 24 de ore primești planul de tratament, prețul final și datele disponibile.",
      },
      journey: {
        title: "Cum decurge, pas cu pas",
        steps: [
          {
            title: "Evaluare online",
            text: "Trimiți fotografiile și un scurt istoric medical. Medicul îți răspunde cu planul de tratament și prețul final în 24 de ore.",
          },
          {
            title: "Planificare",
            text: "Stabilim împreună datele, rezervăm clinica și hotelul și îți trimitem programul zilnic al șederii.",
          },
          {
            title: "Sosirea în Istanbul",
            text: "Te luăm de la aeroport. În prima zi faci analizele și consultația, iar intervenția urmează a doua zi.",
          },
          {
            title: "Intervenția",
            text: "Totul se întâmplă în blocul operator al clinicii, cu echipa care te-a consultat. Rămâi sub observație până a doua zi dimineața.",
          },
          {
            title: "Acasă și controalele",
            text: "Pleci cu instrucțiunile scrise și cu numărul coordonatorului. Controalele se fac online, la 1, 3 și 6 luni.",
          },
        ],
      },
      procedures: {
        lead: "Fiecare procedură are pagina ei: ce include pachetul, cât durează recuperarea și cum arată rezultatele înainte și după. Dacă nu găsești ce cauți, scrie-ne - lista crește în funcție de cereri.",
      },
      about: {
        title: "Despre Q Clinic",
        lead:
          "Suntem o echipă de medici și coordonatori din Istanbul, specializată în pacienți care vin din străinătate pentru tratament.",
        paragraphs: [
          "Am pornit de la o observație simplă: partea medicală e rareori problema. Ce obosește pacientul e tot ce vine în jurul ei - oferte neclare, costuri care apar la jumătatea drumului, programări făcute într-o limbă pe care nu o vorbește și nimeni la capătul firului după ce ajunge acasă.",
          "De aceea fiecare pacient are un singur coordonator, iar acela rămâne același de la prima întrebare până la ultimul control. El vorbește cu medicul, cu hotelul și cu șoferul; tu primești un singur program și un singur preț.",
          "Toate intervențiile se fac în clinica noastră din Istanbul, cu echipa proprie. Nu trimitem pacienți către alte spitale și nu lucrăm prin intermediari.",
        ],
        media: [
          { src: "/media/about-facility.svg", caption: "Sălile noastre" },
          { src: "/media/about-team.svg", caption: "Medici și coordonatori" },
          { src: "/media/about-city.svg", caption: "Cazare și transfer" },
        ],
      },
      contact: {
        title: "Spune-ne ce te interesează",
        subtitle:
          "Completează formularul și îți răspunde un coordonator, nu un mesaj automat. Dacă ai deja investigații sau fotografii, le poți trimite direct pe WhatsApp.",
        successMessage:
          "Mulțumim! Formularul este încă în mod demo, așa că datele nu au fost trimise nicăieri.",
        bullets: [
          "Răspuns în maximum 24 de ore, de luni până sâmbătă",
          "Evaluare medicală și plan de tratament gratuite",
          "Coordonator vorbitor de română pe toată durata",
        ],
        mapCaption:
          "Clinica este în centrul Istanbulului, la 30 de minute de aeroport. Adresa exactă și reperele le primești odată cu programul vizitei.",
        fields: {
          fullName: "Nume complet",
          email: "Email",
          phone: "Telefon",
          procedure: "Procedura dorită",
          message: "Mesaj",
          consent: "Sunt de acord să fiu contactat(ă) în legătură cu solicitarea mea.",
          submit: "Trimite cererea",
        },
      },
      faq: {
        title: "Întrebări frecvente",
        supportTitle: "Nu ai găsit răspunsul?",
        supportText:
          "Scrie-ne întrebarea și îți răspunde un coordonator. Dacă e ceva strict medical, o preia direct medicul.",
        items: [
          {
            question: "În cât timp primesc oferta?",
            answer:
              "În maximum 24 de ore, în zilele lucrătoare. Ai nevoie doar de câteva fotografii și de un scurt istoric medical; dacă e nevoie de analize suplimentare, îți spunem din prima discuție.",
          },
          {
            question: "Ce include pachetul?",
            answer:
              "Consultația și analizele preoperatorii, intervenția, materialele, medicația, cazarea la hotelul partener, transferurile aeroport - hotel - clinică și traducătorul. Zborul nu este inclus, dar te ajutăm să alegi orarul potrivit.",
          },
          {
            question: "Pot combina mai multe proceduri?",
            answer:
              "Da, dacă medicul confirmă că se poate în siguranță. Cel mai des se combină tratamentul dentar cu implantul de păr, pentru că perioadele de recuperare nu se suprapun. Combinațiile se stabilesc doar după evaluare.",
          },
          {
            question: "Cât timp stau în Istanbul?",
            answer:
              "Între 3 și 7 zile, în funcție de procedură. Durata exactă apare în planul pe care îl primești înainte să rezervi zborul.",
          },
          {
            question: "Cum se face plata?",
            answer:
              "Un avans la confirmarea datelor, restul la clinică, în ziua intervenției. Acceptăm card și transfer bancar, iar prețul rămâne cel din ofertă.",
          },
          {
            question: "Ce se întâmplă după ce mă întorc acasă?",
            answer:
              "Rămâi în legătură cu același coordonator. Controalele se fac online la 1, 3 și 6 luni, iar dacă apare ceva neprevăzut, medicul care te-a operat răspunde direct.",
          },
        ],
      },
      footer:
        "Q Clinic - tratamente dentare, implant de păr și chirurgie estetică în Istanbul.",
    },
    procedures: {
      "dental-veneers": {
        title: "Fațete dentare",
        category: "Dentar",
        intro:
          "Fațete din ceramică presată, realizate în laboratorul clinicii după amprentă digitală, cu probă estetică înainte de aplicare.",
        description: [
          "Lucrăm cu ceramică presată, realizată în laboratorul clinicii pe baza amprentei digitale. Înainte de aplicare vezi o probă estetică, așa că forma și nuanța se stabilesc împreună cu tine, nu se explică după.",
          "Șlefuirea este minimă și se face doar unde e nevoie. În cele mai multe cazuri patru zile sunt suficiente: amprentă și probă în prima zi, aplicare în a patra și un control înainte de plecare.",
        ],
        priceFrom: "2.400 €",
        recovery: "3-5 zile",
        highlights: [
          "Amprentă digitală și probă estetică înainte de aplicare",
          "Ceramică presată, cu garanție 5 ani",
          "Consultație, detartraj și două controale incluse",
        ],
      },
      "hair-transplant": {
        title: "Implant de păr",
        category: "Păr",
        intro:
          "Tehnică FUE cu lame de safir, într-o singură ședință. Numărul de grefe se stabilește la consultație, după evaluarea zonei donatoare.",
        description: [
          "Folosim tehnica FUE cu lame de safir, care deschide canale mai mici și scurtează vindecarea. Grefele se recoltează și se implantează în aceeași ședință, sub anestezie locală cu sedare ușoară.",
          "Nu promitem un număr de grefe la telefon. Se stabilește la consultație, după ce medicul evaluează zona donatoare și tipul de alopecie. Primele fire cresc în luna a treia, iar rezultatul final se vede la 10-12 luni.",
        ],
        priceFrom: "1.900 €",
        recovery: "5-7 zile",
        highlights: [
          "Până la 4.500 de grefe într-o singură ședință",
          "Analize, sedare și prima spălare incluse",
          "Ședință PRP opțională la 30 de zile",
        ],
      },
      bbl: {
        title: "Lipofilling fesier (BBL)",
        category: "Corp",
        intro:
          "Grăsime recoltată prin liposucție, purificată și reinjectată în straturi, pentru volum natural și siluetă echilibrată.",
        description: [
          "Grăsimea se recoltează prin liposucție din abdomen, flancuri sau coapse, se purifică și se reinjectează în straturi, ca volumul să reziste în timp. Nu folosim implanturi.",
          "O parte din grăsimea transferată se resoarbe în primele luni, de aceea medicul calculează surplusul de la început. Prima noapte o petreci în clinică, iar centura postoperatorie se poartă șase săptămâni.",
        ],
        priceFrom: "4.900 €",
        recovery: "10-14 zile",
        highlights: [
          "Liposucție pe două zone, inclusă în preț",
          "O noapte de spitalizare și centura postoperatorie",
          "Controale online la 1, 3 și 6 luni",
        ],
      },
    },
    testimonials: [
      {
        name: "Maria P.",
        procedure: "Fațete dentare",
        quote:
          "Am primit planul cu prețul final într-o zi și acela a rămas prețul. Am stat patru zile, iar coordonatorul a fost cu mine la fiecare programare.",
        avatar: "/media/avatar-1.svg",
      },
      {
        name: "Andreea L.",
        procedure: "Lipofilling fesier (BBL)",
        quote:
          "Mi-era teamă de partea logistică, nu de operație. Până la urmă n-a trebuit să caut nimic: transferuri, hotel, traducător, totul era deja aranjat.",
        avatar: "/media/avatar-3.svg",
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
      labels: {
        from: "From",
        recovery: "Recovery",
        details: "See details",
        quickFacts: "At a glance",
        included: "What the package covers",
        aboutProcedure: "About the procedure",
        gallery: "Gallery",
        beforeAfter: "Before and after",
        before: "Before",
        after: "After",
        sliderHint: "Drag the handle to compare.",
      },
      hero: {
        title: "Dental work, hair transplants and aesthetic surgery in Istanbul",
        subtitle:
          "Within 24 hours of your first message you get the treatment plan, the final price and the length of stay. Transfers, hotel and an interpreter are part of the package.",
        ctaPrimary: "Request an offer",
        ctaSecondary: "See procedures",
        badgeTitle: "One coordinator",
        badgeText: "The same person from your first question to the last follow-up.",
      },
      home: {
        badgesTitle: "Accreditations and partners",
        proceduresTitle: "Most requested procedures",
        proceduresSubtitle:
          "Every package covers the consultation, the procedure, your stay and the follow-ups. The prices below are the starting point for a personalised plan.",
        beforeAfterTitle: "Before and after",
        beforeAfterText:
          "Drag the handle across each image to compare the starting point with the result.",
        clinicTitle: "The clinic and the team",
        clinicText:
          "We work in our own clinic in central Istanbul, with surgeons on permanent staff and coordinators who speak English, Romanian and Turkish.",
        clinicMedia: [
          { src: "/media/about-facility.svg", caption: "Treatment rooms" },
          { src: "/media/about-team.svg", caption: "Medical team" },
          { src: "/media/clinic-city.svg", caption: "Istanbul location" },
        ],
        trustTitle: "Why patients choose Q Clinic",
        trustText:
          "One contact, one price, no costs discovered along the way. You have the full plan before you book a flight.",
        trustItems: [
          "Final price quoted in the first offer, with no later add-ons",
          "A dedicated coordinator on WhatsApp for the whole stay",
          "Airport transfers, hotel and interpreter included",
          "Online follow-ups for 12 months after you fly home",
        ],
        testimonialTitle: "What our patients say",
        ctaTitle: "Book a free consultation",
        ctaText:
          "Send us a few photos and your medical history. Within 24 hours you get the treatment plan, the final price and the available dates.",
      },
      journey: {
        title: "How it works, step by step",
        steps: [
          {
            title: "Online assessment",
            text: "You send photos and a short medical history. A doctor replies with the treatment plan and the final price within 24 hours.",
          },
          {
            title: "Planning",
            text: "We agree on the dates, book the clinic and the hotel, and send you a day-by-day schedule for your stay.",
          },
          {
            title: "Arrival in Istanbul",
            text: "We pick you up at the airport. Blood work and the in-person consultation happen on day one, the procedure follows on day two.",
          },
          {
            title: "The procedure",
            text: "Everything takes place in our own operating theatre, with the team that assessed you. You stay under observation until the next morning.",
          },
          {
            title: "Back home",
            text: "You leave with written aftercare instructions and your coordinator's number. Follow-ups are online at 1, 3 and 6 months.",
          },
        ],
      },
      procedures: {
        lead: "Each procedure has its own page: what the package covers, how long recovery takes and what the before-after results look like. If you cannot find what you need, write to us - the list grows with the requests.",
      },
      about: {
        title: "About Q Clinic",
        lead:
          "We are a team of surgeons and coordinators in Istanbul, working with patients who travel in for treatment.",
        paragraphs: [
          "We started from a simple observation: the medical part is rarely the problem. What wears patients down is everything around it - vague quotes, costs that appear halfway through, appointments made in a language they do not speak, and nobody to answer once they are back home.",
          "So every patient gets one coordinator, and that coordinator stays the same from the first question to the last check-up. They deal with the surgeon, the hotel and the driver; you get one schedule and one price.",
          "Every procedure takes place in our own clinic in Istanbul, with our own team. We do not refer patients to other hospitals and we do not work through agencies.",
        ],
        media: [
          { src: "/media/about-facility.svg", caption: "Our theatres" },
          { src: "/media/about-team.svg", caption: "Surgeons and coordinators" },
          { src: "/media/about-city.svg", caption: "Stay and transfers" },
        ],
      },
      contact: {
        title: "Tell us what you need",
        subtitle:
          "Fill in the form and a coordinator replies - not an autoresponder. If you already have scans or photos, you can send them straight over WhatsApp.",
        successMessage:
          "Thank you! This form is still in demo mode, so nothing has been sent anywhere yet.",
        bullets: [
          "A reply within 24 hours, Monday to Saturday",
          "Free medical assessment and treatment plan",
          "An English-speaking coordinator throughout",
        ],
        mapCaption:
          "The clinic is in central Istanbul, 30 minutes from the airport. You get the exact address and landmarks together with your schedule.",
        fields: {
          fullName: "Full name",
          email: "Email",
          phone: "Phone",
          procedure: "Procedure you are interested in",
          message: "Message",
          consent: "I agree to be contacted about my request.",
          submit: "Send request",
        },
      },
      faq: {
        title: "Frequently asked questions",
        supportTitle: "Still have a question?",
        supportText:
          "Write it down and a coordinator answers. Anything strictly medical goes straight to the surgeon.",
        items: [
          {
            question: "How fast do I get an offer?",
            answer:
              "Within 24 hours on working days. A few photos and a short medical history are enough; if further tests are needed, we tell you in the first conversation.",
          },
          {
            question: "What does the package include?",
            answer:
              "The consultation and pre-op blood work, the procedure, materials, medication, the stay at our partner hotel, airport - hotel - clinic transfers and an interpreter. Flights are not included, but we help you pick the right timing.",
          },
          {
            question: "Can I combine procedures?",
            answer:
              "Yes, if the doctor confirms it is safe. Dental work and a hair transplant are the most common pair, because the recovery periods do not overlap. Combinations are only confirmed after the assessment.",
          },
          {
            question: "How long do I stay in Istanbul?",
            answer:
              "Between 3 and 7 days, depending on the procedure. The exact length is written in the plan you receive before booking a flight.",
          },
          {
            question: "How do I pay?",
            answer:
              "A deposit when the dates are confirmed, the balance at the clinic on the day of the procedure. We accept cards and bank transfers, and the price stays the one in the offer.",
          },
          {
            question: "What happens after I go home?",
            answer:
              "You stay in touch with the same coordinator. Follow-ups are online at 1, 3 and 6 months, and if something unexpected comes up, the surgeon who operated answers directly.",
          },
        ],
      },
      footer:
        "Q Clinic - dental treatments, hair transplants and aesthetic surgery in Istanbul.",
    },
    procedures: {
      "dental-veneers": {
        title: "Dental veneers",
        category: "Dental",
        intro:
          "Pressed ceramic veneers, made in the clinic's own lab from a digital impression, with an aesthetic trial before anything is bonded.",
        description: [
          "The veneers are pressed ceramic, produced in our own lab from a digital impression. You see an aesthetic trial before bonding, so shape and shade are agreed with you rather than explained afterwards.",
          "Preparation is minimal and only where it is needed. Four days are usually enough: impression and trial on day one, bonding on day four, and a check-up before you fly home.",
        ],
        priceFrom: "€2,400",
        recovery: "3-5 days",
        highlights: [
          "Digital impression and aesthetic trial before bonding",
          "Pressed ceramic with a 5-year warranty",
          "Consultation, cleaning and two check-ups included",
        ],
      },
      "hair-transplant": {
        title: "Hair transplant",
        category: "Hair",
        intro:
          "Sapphire FUE in a single session. The number of grafts is set at the consultation, once the donor area has been assessed.",
        description: [
          "We use sapphire FUE, which opens smaller channels and shortens healing. Grafts are harvested and implanted in the same session, under local anaesthetic with light sedation.",
          "We do not promise a graft count over the phone. It is set at the consultation, once the doctor has assessed your donor area and the type of hair loss. First growth shows around month three; the final result at 10-12 months.",
        ],
        priceFrom: "€1,900",
        recovery: "5-7 days",
        highlights: [
          "Up to 4,500 grafts in a single session",
          "Blood work, sedation and the first wash included",
          "Optional PRP session after 30 days",
        ],
      },
      bbl: {
        title: "Brazilian butt lift",
        category: "Body",
        intro:
          "Fat harvested by liposuction, purified and reinjected in layers for natural volume and a balanced silhouette.",
        description: [
          "Fat is harvested by liposuction from the abdomen, flanks or thighs, purified and reinjected in layers so the volume lasts. No implants are involved.",
          "Part of the transferred fat is reabsorbed in the first months, so the surgeon plans for that surplus from the start. You spend the first night at the clinic and wear the compression garment for six weeks.",
        ],
        priceFrom: "€4,900",
        recovery: "10-14 days",
        highlights: [
          "Liposuction of two areas included in the price",
          "One night in the clinic and the compression garment",
          "Online check-ups at 1, 3 and 6 months",
        ],
      },
    },
    testimonials: [
      {
        name: "Emma R.",
        procedure: "Hair transplant",
        quote:
          "I sent photos on a Tuesday and had the full plan, price included, the next morning. Nothing was added to the bill later.",
        avatar: "/media/avatar-2.svg",
      },
      {
        name: "Olivia N.",
        procedure: "Dental veneers",
        quote:
          "Four days in Istanbul, three appointments, and someone who spoke my language in every room. That was the whole difference.",
        avatar: "/media/avatar-4.svg",
      },
    ],
  },
  tr: {
    copy: {
      brand: "Q Clinic",
      navigation: {
        home: "Ana Sayfa",
        procedures: "Prosedürler",
        about: "Hakkımızda",
        faq: "SSS",
        contact: "İletişim",
      },
      labels: {
        from: "Başlangıç",
        recovery: "İyileşme",
        details: "Detayları gör",
        quickFacts: "Kısaca",
        included: "Pakete dahil olanlar",
        aboutProcedure: "Prosedür hakkında",
        gallery: "Galeri",
        beforeAfter: "Öncesi ve sonrası",
        before: "Öncesi",
        after: "Sonrası",
        sliderHint: "Karşılaştırmak için tutamağı sürükleyin.",
      },
      hero: {
        title: "İstanbul'da diş tedavisi, saç ekimi ve estetik cerrahi",
        subtitle:
          "İlk mesajınızdan sonraki 24 saat içinde tedavi planını, net fiyatı ve kalış süresini alırsınız. Transferler, otel ve çevirmen pakete dahildir.",
        ctaPrimary: "Teklif alın",
        ctaSecondary: "Prosedürleri görün",
        badgeTitle: "Tek koordinatör",
        badgeText: "İlk sorunuzdan son kontrolünüze kadar aynı kişi.",
      },
      home: {
        badgesTitle: "Akreditasyonlar ve ortaklar",
        proceduresTitle: "En çok tercih edilen prosedürler",
        proceduresSubtitle:
          "Her paket muayeneyi, işlemi, konaklamayı ve kontrolleri kapsar. Aşağıdaki fiyatlar kişiye özel planın başlangıç noktasıdır.",
        beforeAfterTitle: "Öncesi ve sonrası",
        beforeAfterText:
          "Başlangıç durumu ile sonucu karşılaştırmak için her görselin üzerindeki tutamağı sürükleyin.",
        clinicTitle: "Klinik ve ekip",
        clinicText:
          "İstanbul'un merkezindeki kendi kliniğimizde, kadrolu cerrahlar ve Türkçe, İngilizce, Romence konuşan koordinatörlerle çalışıyoruz.",
        clinicMedia: [
          { src: "/media/about-facility.svg", caption: "Tedavi odaları" },
          { src: "/media/about-team.svg", caption: "Medikal ekip" },
          { src: "/media/clinic-city.svg", caption: "İstanbul lokasyonu" },
        ],
        trustTitle: "Hastalar neden Q Clinic'i seçiyor",
        trustText:
          "Tek muhatap, tek fiyat, yol boyunca ortaya çıkan sürpriz masraf yok. Uçak biletini almadan önce planın tamamı elinizde olur.",
        trustItems: [
          "İlk teklifte verilen net fiyat, sonradan ek ücret yok",
          "Kalış boyunca WhatsApp'tan ulaşabileceğiniz özel koordinatör",
          "Havalimanı transferi, otel ve çevirmen dahil",
          "Döndükten sonra 12 ay boyunca online kontrol",
        ],
        testimonialTitle: "Hastalarımız ne diyor",
        ctaTitle: "Ücretsiz ön görüşme planlayın",
        ctaText:
          "Birkaç fotoğraf ve tıbbi geçmişinizi gönderin. 24 saat içinde tedavi planını, net fiyatı ve uygun tarihleri alın.",
      },
      journey: {
        title: "Adım adım süreç",
        steps: [
          {
            title: "Online değerlendirme",
            text: "Fotoğraflarınızı ve kısa tıbbi geçmişinizi gönderirsiniz. Doktor 24 saat içinde tedavi planı ve net fiyatla döner.",
          },
          {
            title: "Planlama",
            text: "Tarihleri birlikte belirler, kliniği ve oteli ayırtır, kalışınızın günlük programını paylaşırız.",
          },
          {
            title: "İstanbul'a varış",
            text: "Sizi havalimanından alırız. İlk gün tahliller ve yüz yüze muayene, ikinci gün işlem yapılır.",
          },
          {
            title: "İşlem günü",
            text: "Her şey kendi ameliyathanemizde, sizi değerlendiren ekiple gerçekleşir. Ertesi sabaha kadar gözlem altında kalırsınız.",
          },
          {
            title: "Dönüş ve kontroller",
            text: "Yazılı bakım talimatları ve koordinatörünüzün numarasıyla ayrılırsınız. Kontroller 1., 3. ve 6. aylarda online yapılır.",
          },
        ],
      },
      procedures: {
        lead: "Her prosedürün kendi sayfası var: paketin kapsamı, iyileşme süresi ve öncesi-sonrası sonuçlar. Aradığınızı bulamazsanız yazın - liste gelen taleplerle genişliyor.",
      },
      about: {
        title: "Q Clinic Hakkında",
        lead:
          "İstanbul'da, tedavi için yurt dışından gelen hastalarla çalışan bir cerrah ve koordinatör ekibiyiz.",
        paragraphs: [
          "Basit bir gözlemle yola çıktık: sorun nadiren tıbbi kısımdır. Hastayı yoran, etrafındaki her şeydir - belirsiz teklifler, yolun yarısında çıkan masraflar, bilmediği bir dilde alınan randevular ve eve döndükten sonra soru sorabileceği kimsenin olmaması.",
          "Bu yüzden her hastaya tek bir koordinatör veriyoruz ve bu kişi ilk sorudan son kontrole kadar değişmiyor. Cerrahla, otelle ve şoförle o ilgileniyor; size tek bir program ve tek bir fiyat kalıyor.",
          "Tüm işlemler İstanbul'daki kendi kliniğimizde, kendi ekibimizle yapılır. Hastaları başka hastanelere yönlendirmiyor, aracı kurumlarla çalışmıyoruz.",
        ],
        media: [
          { src: "/media/about-facility.svg", caption: "Ameliyathanelerimiz" },
          { src: "/media/about-team.svg", caption: "Cerrahlar ve koordinatörler" },
          { src: "/media/about-city.svg", caption: "Konaklama ve transfer" },
        ],
      },
      contact: {
        title: "Ne istediğinizi yazın",
        subtitle:
          "Formu doldurun; size otomatik mesaj değil, bir koordinatör yanıt versin. Tetkikleriniz veya fotoğraflarınız varsa doğrudan WhatsApp'tan gönderebilirsiniz.",
        successMessage:
          "Teşekkürler! Form hâlâ demo modunda, bu yüzden veriler henüz hiçbir yere gönderilmedi.",
        bullets: [
          "Pazartesi - cumartesi, 24 saat içinde yanıt",
          "Ücretsiz tıbbi değerlendirme ve tedavi planı",
          "Süreç boyunca size özel koordinatör",
        ],
        mapCaption:
          "Klinik İstanbul'un merkezinde, havalimanına 30 dakika uzaklıkta. Tam adres ve yol tarifi programınızla birlikte gelir.",
        fields: {
          fullName: "Ad soyad",
          email: "E-posta",
          phone: "Telefon",
          procedure: "İlgilendiğiniz prosedür",
          message: "Mesaj",
          consent: "Talebimle ilgili benimle iletişime geçilmesini kabul ediyorum.",
          submit: "Talebi gönder",
        },
      },
      faq: {
        title: "Sık sorulan sorular",
        supportTitle: "Sorunuz mu kaldı?",
        supportText:
          "Yazın, bir koordinatör yanıtlasın. Tıbbi bir konuysa doğrudan cerrah devreye girer.",
        items: [
          {
            question: "Teklif ne kadar sürede gelir?",
            answer:
              "İş günlerinde en geç 24 saat içinde. Birkaç fotoğraf ve kısa bir tıbbi geçmiş yeterli; ek tetkik gerekiyorsa ilk görüşmede söylüyoruz.",
          },
          {
            question: "Pakete neler dahil?",
            answer:
              "Muayene ve ameliyat öncesi tahliller, işlem, malzemeler, ilaçlar, anlaşmalı otelde konaklama, havalimanı - otel - klinik transferleri ve çevirmen. Uçak bileti dahil değildir, ancak uygun saati seçmenize yardımcı oluyoruz.",
          },
          {
            question: "Birden fazla prosedür birleştirilebilir mi?",
            answer:
              "Doktor güvenli olduğunu onaylarsa evet. En sık diş tedavisi ile saç ekimi birleştirilir, çünkü iyileşme süreçleri çakışmaz. Kombinasyonlar yalnızca değerlendirmeden sonra netleşir.",
          },
          {
            question: "İstanbul'da ne kadar kalmam gerekir?",
            answer:
              "Prosedüre göre 3 ila 7 gün. Net süre, bileti almadan önce elinize geçen planda yazar.",
          },
          {
            question: "Ödeme nasıl yapılıyor?",
            answer:
              "Tarihler kesinleştiğinde bir ön ödeme, kalanı işlem günü klinikte. Kart ve banka havalesi kabul ediyoruz; fiyat teklifte yazan fiyat olarak kalır.",
          },
          {
            question: "Döndükten sonra ne oluyor?",
            answer:
              "Aynı koordinatörle iletişimde kalırsınız. Kontroller 1., 3. ve 6. aylarda online yapılır; beklenmedik bir durumda sizi ameliyat eden cerrah doğrudan yanıt verir.",
          },
        ],
      },
      footer:
        "Q Clinic - İstanbul'da diş tedavileri, saç ekimi ve estetik cerrahi.",
    },
    procedures: {
      "dental-veneers": {
        title: "Diş kaplama",
        category: "Diş",
        intro:
          "Dijital ölçüden klinik laboratuvarımızda üretilen pres seramik kaplamalar; yapıştırmadan önce estetik prova yapılır.",
        description: [
          "Kaplamalar, dijital ölçüden kendi laboratuvarımızda üretilen pres seramiktir. Yapıştırmadan önce estetik prova yaparsınız; yani şekil ve renk sonradan anlatılmaz, birlikte kararlaştırılır.",
          "Aşındırma en az seviyede ve yalnızca gereken yerde yapılır. Çoğu durumda dört gün yeterlidir: ilk gün ölçü ve prova, dördüncü gün yapıştırma, dönüşten önce bir kontrol.",
        ],
        priceFrom: "2.400 €",
        recovery: "3-5 gün",
        highlights: [
          "Yapıştırmadan önce dijital ölçü ve estetik prova",
          "Pres seramik, 5 yıl garanti",
          "Muayene, diş taşı temizliği ve iki kontrol dahil",
        ],
      },
      "hair-transplant": {
        title: "Saç ekimi",
        category: "Saç",
        intro:
          "Tek seansta safir uçlu FUE. Greft sayısı, donör bölge değerlendirildikten sonra muayenede belirlenir.",
        description: [
          "Safir uçlu FUE tekniğini kullanıyoruz; daha küçük kanallar açıldığı için iyileşme kısalıyor. Greftler aynı seansta alınır ve yerleştirilir, lokal anestezi ve hafif sedasyonla.",
          "Greft sayısını telefonda söz vermiyoruz. Doktor donör bölgeyi ve dökülme tipini değerlendirdikten sonra muayenede belirleniyor. İlk çıkışlar üçüncü ayda görülür, nihai sonuç 10-12 ayda oturur.",
        ],
        priceFrom: "1.900 €",
        recovery: "5-7 gün",
        highlights: [
          "Tek seansta 4.500 grefte kadar",
          "Tahliller, sedasyon ve ilk yıkama dahil",
          "30. günde opsiyonel PRP seansı",
        ],
      },
      bbl: {
        title: "Brezilya poposu (BBL)",
        category: "Vücut",
        intro:
          "Liposuction ile alınan yağ saflaştırılır ve doğal hacim için katmanlar hâlinde yeniden enjekte edilir.",
        description: [
          "Yağ; karın, yan bölge veya bacaklardan liposuction ile alınır, saflaştırılır ve hacmin kalıcı olması için katmanlar hâlinde enjekte edilir. İmplant kullanılmaz.",
          "Aktarılan yağın bir kısmı ilk aylarda geri emilir; bu yüzden cerrah fazlalığı baştan hesaplar. İlk geceyi klinikte geçirir, korseyi altı hafta kullanırsınız.",
        ],
        priceFrom: "4.900 €",
        recovery: "10-14 gün",
        highlights: [
          "İki bölge liposuction fiyata dahil",
          "Bir gece klinikte konaklama ve korse",
          "1., 3. ve 6. ayda online kontrol",
        ],
      },
    },
    testimonials: [
      {
        name: "Zeynep K.",
        procedure: "Brezilya poposu (BBL)",
        quote:
          "İlk teklifteki fiyat neyse ödediğim de o oldu. Dört gün kaldım ve koordinatör her randevuda yanımdaydı.",
        avatar: "/media/avatar-3.svg",
      },
      {
        name: "Mert A.",
        procedure: "Saç ekimi",
        quote:
          "Ameliyattan çok lojistikten çekiniyordum. Sonunda hiçbirini ben ayarlamak zorunda kalmadım: transfer, otel, çevirmen, hepsi hazırdı.",
        avatar: "/media/avatar-2.svg",
      },
    ],
  },
};

const siteDataByLocale = Object.fromEntries(
  Object.entries(contentByLocale).map(([locale, content]) => [
    locale,
    {
      ...content,
      procedures: procedureBases.map((base) => ({
        ...base,
        ...content.procedures[base.slug],
      })),
    },
  ]),
) as Record<Locale, SiteData>;

export function getSiteData(locale: Locale): SiteData {
  return siteDataByLocale[locale];
}
