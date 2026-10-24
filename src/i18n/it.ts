/**
 * Dizionario italiano — è la fonte dei tipi: en.ts e fr.ts devono avere la stessa struttura.
 * Titoli con parola evidenziata: array [testo, parte evidenziata] (vedi <Hl />).
 * Testi con **grassetto**, [link](url) e a-capo (\n): vedi <Rich />.
 */
export const it = {
  meta: {
    home: {
      title: "Sigillo — Manifattura di cinture in pelle | Scandicci, Firenze",
      description: "Manifattura toscana di cinture e piccola pelletteria per brand del lusso e della moda. Private label, conto terzi, piccole serie. Scandicci, Firenze, dal 1988.",
      ogTitle: "Sigillo — Manifattura di cinture in pelle, Scandicci",
      ogDescription: "Private label, conto terzi, piccole serie. Manifattura toscana dal 1988.",
    },
    prototipia: {
      title: "Prototipia cinture in pelle — Dal brief al campione | Sigillo",
      description: "Sviluppo prototipi di cinture in pelle in quattro fasi: brief, selezione materiali, campionatura e approvazione. Manifattura Sigillo, Scandicci.",
      ogTitle: "Prototipia cinture — Dal brief al campione approvato | Sigillo",
      ogDescription: "Quattro fasi, un referente dedicato. Dal brief al campione approvato. Scandicci, Firenze.",
    },
    produzione: {
      title: "Produzione cinture in pelle — Private label, conto terzi, piccole serie | Sigillo",
      description: "Tre modalità di produzione: private label con il tuo brand, conto terzi su specifiche, piccole serie da 80–100 pezzi. Cinture in pelle made in Tuscany.",
      ogTitle: "Produzione cinture — Private label, conto terzi, piccole serie | Sigillo",
      ogDescription: "Private label, conto terzi, piccole serie. Cinture in pelle made in Tuscany. Scandicci, Firenze.",
    },
    chiSiamo: {
      title: "Chi siamo — Manifattura di cinture in pelle dal 1988 | Sigillo, Scandicci",
      description: "Sigillo Srl: manifattura toscana di cinture e piccola pelletteria fondata nel 1988 a Scandicci, nel distretto della pelletteria fiorentina. Riservatezza, qualità, esperienza.",
      ogTitle: "Chi siamo — Sigillo Srl, manifattura dal 1988",
      ogDescription: "Scandicci, distretto della pelletteria fiorentina, dal 1988. Serviamo brand in Europa, USA, Australia, Nuova Zelanda e Canada.",
    },
    contatti: {
      title: "Contattaci — Parliamo del tuo progetto | Sigillo",
      description: "Scrivi a Sigillo per prototipi, private label, conto terzi o piccole serie di cinture in pelle. Rispondiamo nella giornata.",
      ogTitle: "Contattaci — Sigillo, manifattura cinture in pelle",
      ogDescription: "Parliamo del tuo progetto. Rispondiamo nella giornata. info@sigillosrl.com",
    },
    privacy: {
      title: "Privacy Policy | Sigillo Srl",
      description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) — Sigillo Srl.",
      ogTitle: "Privacy Policy | Sigillo Srl",
      ogDescription: "Informativa sul trattamento dei dati personali — Sigillo Srl.",
    },
  },

  nav: {
    prototipia: "Prototipia",
    produzione: "Produzione",
    chiSiamo: "Chi siamo",
    contatti: "Contatti",
    cta: "Parliamo",
    homeAria: "Sigillo, home",
    menuAria: "Menu",
    langAria: "Lingua",
  },

  footer: {
    tagline: "Manifattura di cinture e piccola pelletteria per il lusso e la moda. Scandicci, Firenze · dal 1988.",
    pages: "Pagine",
    contacts: "Contatti",
    address: ["Via Ilio Barontini n. 15/B", "50010 Scandicci (Firenze), Italia"],
    vat: "P. IVA",
    tel: "Tel.",
    cell: "Cell.",
    privacy: "Privacy Policy",
    made: "Made in Tuscany",
  },

  mobileCta: "Parliamo del tuo progetto",
  ctaBand: {
    title: ["Parliamo del tuo ", "progetto."],
    text: "Raccontaci prodotto, volumi e tempi. Rispondiamo nella giornata, senza impegno.",
    button: "Contattaci",
  },

  errors: {
    notFound: { heading: "Pagina non trovata", text: "La pagina che cerchi non esiste o è stata spostata.", home: "Torna alla home" },
    generic: { heading: "Questa pagina non si è caricata", text: "Qualcosa è andato storto da parte nostra. Prova a ricaricare o torna alla home.", retry: "Riprova", home: "Torna alla home" },
  },

  home: {
    hero: {
      eyebrow: "Scandicci, Firenze · dal 1988",
      title: ["Dalla pelle", "al prodotto ", "finito."],
      lead: "Manifattura di cinture e piccola pelletteria per brand del lusso e della moda. Prototipi, produzione e materiali — sotto un unico tetto, in totale riservatezza.",
      cta1: "Parliamo del tuo progetto",
      cta2: "Scopri come lavoriamo",
      alt: "Artigiano che guida un pezzo di pelle sotto una macchina da cucire industriale",
    },
    stats: [
      ["anni di manifattura", "Dal 1988 nel distretto di Scandicci."],
      ["maison servite", "Brand del lusso e della moda, in riservatezza."],
      ["presenza", "Europa, USA, Australia, Nuova Zelanda, Canada."],
    ],
    globalWord: "Globale",
    ticker: ["Private Label", "Conto Terzi", "Piccole Serie", "Prototipia", "Concia vegetale", "Made in Italy", "Riservatezza assoluta", "Scandicci dal 1988"],
    story: {
      eyebrow: "La nostra storia",
      title: ["Quasi quarant'anni a costruire il prodotto ", "degli altri."],
      text: "Sigillo nasce nel 1988 a Scandicci, nel cuore della pelletteria fiorentina. Da allora realizziamo cinture e piccola pelletteria per maison e marchi internazionali — con lo stesso metodo: ascolto, precisione, consegna.",
      quote: "Nessun nome e nessun logo sui nostri canali — solo il prodotto che porta il tuo.",
      cta: "Chi siamo",
      alt: "Il laboratorio Sigillo a Scandicci",
    },
    services: {
      eyebrow: "Servizi",
      title: ["Tre competenze, ", "una filiera."],
      items: [
        ["Prototipia", "Dal brief al campione approvato. Sviluppiamo cartamodelli, scegliamo pellami e accessori, costruiamo il prototipo fino alla versione definitiva."],
        ["Produzione", "Private label, conto terzi o piccole serie. Una filiera interna che garantisce costanza, tempi chiari e controllo su ogni pezzo."],
        ["Materiali", "Accesso diretto alle concerie e ai fornitori di accessori del distretto toscano. Selezioniamo con te pellami, finiture e fibbie."],
      ],
      bottom: "Non sai da dove iniziare? Parliamone insieme.",
      cta: "Parliamo",
    },
    models: {
      eyebrow: "Tipologie di modelli",
      title: ["Cinture, ", "in ogni forma."],
      text: "Alcuni modelli del nostro campionario in showroom: il punto di partenza per costruire il prodotto giusto per il tuo brand.",
      items: [
        ["Classica", "Cintura classica in cuoio con fibbia nichel"],
        ["Elegante", "Cintura elegante in pelle marrone liscia"],
        ["Intrecciata", "Cintura intrecciata a mano in pelle marrone"],
        ["Casual", "Cintura casual in pelle blu"],
        ["Donna", "Cintura da donna in pelle rossa con fibbia argento"],
        ["Di design", "Cintura alta in pelle stampata coccodrillo"],
      ],
      bottom: "Hai un modello in mente? Partiamo dal tuo.",
      cta: "Parliamo del tuo modello",
    },
    modes: {
      eyebrow: "Modalità di lavoro",
      title: ["Parti da ", "dove sei."],
      text: "Che tu abbia un marchio affermato, un disegno pronto o solo un'idea, troviamo il formato giusto. Piccole serie da 80–100 pezzi.",
      alt: "Campioni di pellame e fibbie in ottone",
      items: [
        ["Private Label", "Hai un brand, ti costruiamo il prodotto."],
        ["Conto Terzi", "Hai il design, noi produciamo."],
        ["Piccole Serie", "Hai un'idea, partiamo da lì."],
      ],
      cta: "Scopri la produzione",
    },
    faq: {
      eyebrow: "FAQ",
      title: ["Domande ", "frequenti."],
      items: [
        ["Qual è il quantitativo minimo?", "Dipende dalla modalità di lavoro: le piccole serie partono da 80–100 pezzi, il private label da 100 pezzi per modello, il conto terzi va dai piccoli lotti alle produzioni continuative."],
        ["Posso partire solo da un'idea o da un disegno?", "Sì. Si può partire da un disegno, un campione, una foto o un'idea: la prototipia segue quattro fasi — brief, materiali, campione, approvazione."],
        ["Lavorate in riservatezza?", "Sempre. Nessun nome e nessun logo sui nostri canali, e accordi di riservatezza su ogni progetto."],
        ["Che pellami utilizzate?", "La nostra produzione è quasi interamente in pelle a concia vegetale, scelta con te tra le concerie del distretto toscano."],
        ["Come iniziamo a lavorare insieme?", "Scrivici dalla pagina contatti: raccontaci prodotto, volumi e tempi. Rispondiamo nella giornata."],
      ],
    },
  },

  prototipia: {
    hero: {
      eyebrow: "Prototipia",
      alt: "Cartamodelli e prototipo di cintura",
      title: ["Dall’idea al campione ", "approvato."],
      intro: "Un processo in quattro fasi, chiaro dall’inizio. Sai sempre a che punto siamo e cosa serve per andare avanti.",
    },
    method: {
      eyebrow: "Il metodo",
      title: ["Quattro fasi, ", "nessuna sorpresa."],
      steps: [
        ["Brief", "Partiamo dal tuo riferimento: un disegno, un campione, una foto o un’idea. Definiamo insieme misure, uso, fascia di prezzo e tempi."],
        ["Materiali", "Selezioniamo pellami, fodere, fili e accessori dalle concerie e dai fornitori del distretto. Ricevi le cartelle colore e le opzioni di finitura."],
        ["Campione", "Sviluppiamo il cartamodello e realizziamo il primo prototipo nel nostro laboratorio. Ogni dettaglio — costa, bordo, cucitura — è documentato."],
        ["Approvazione", "Rivediamo il campione con te, correggiamo e approviamo la versione definitiva, con scheda tecnica pronta per la produzione."],
      ],
    },
    lab: {
      eyebrow: "Il laboratorio",
      title: ["Il prototipo nasce dove nascerà la ", "produzione."],
      text: "Stesse mani, stesse macchine, stessi standard. Così il campione approvato è già il prodotto che riceverai in serie — senza sorprese.",
      cta: "Scopri la produzione",
      alt: "Laboratorio di prototipia",
    },
    materials: {
      eyebrow: "Materiali",
      title: ["Pellami e accessori, scelti ", "con te."],
      text: "Accesso diretto alle concerie e ai fornitori del distretto toscano: selezioniamo con te materiali e finiture giuste per il tuo prodotto.",
      list: [
        ["Pellami", "Dalle concerie del distretto toscano, con cartelle colore e opzioni di finitura. La nostra produzione è quasi interamente in pelle a concia vegetale."],
        ["Accessori", "Fibbie, passanti e minuteria dai fornitori di accessori del distretto, scelti insieme a te in base al modello."],
        ["Fodere e fili", "Fodere, fili e rifiniture abbinati al pellame, per un prodotto coerente in ogni dettaglio."],
      ],
      cta: "Parliamo dei materiali",
    },
    gallery: [
      ["Campioni di pellame e fibbie in ottone", "Cartelle colore"],
      ["Dettaglio di pelle stampata effetto coccodrillo", "Pelle stampata"],
      ["Dettaglio di pelle martellata con fibbia in ottone", "Pelle martellata"],
    ],
  },

  produzione: {
    hero: {
      eyebrow: "Produzione",
      alt: "Artigiano che cuce a mano una cintura in pelle",
      title: ["Tre modi di lavorare ", "insieme."],
      intro: "Ogni progetto parte da un punto diverso. Scegli la modalità più vicina a te — la qualità resta la stessa.",
    },
    bring: "Cosa portare",
    include: "Cosa include",
    modes: [
      {
        name: "Private Label",
        headline: "Hai un brand, ti costruiamo il prodotto.",
        text: "Ci occupiamo di tutto: sviluppo, materiali, prototipo e produzione. Tu porti l’identità del marchio, noi la traduciamo in una collezione di cinture coerente e pronta alla vendita.",
        bring: ["Brand book o riferimenti visivi", "Target e fascia di prezzo", "Tempistiche di lancio"],
        include: ["Sviluppo modelli e cartamodelli", "Selezione pellami e accessori", "Personalizzazione con il tuo logo", "Confezionamento"],
        volume: "Da 100 pezzi per modello",
        imgAlt: "Cintura larga in pelle marrone scuro con fibbia nichel",
        detAlt: "Dettaglio della fibbia e del passante di una cintura marrone scuro",
        cta: "Parliamo di Private Label",
      },
      {
        name: "Conto Terzi",
        headline: "Hai il design, noi produciamo.",
        text: "Hai già scheda tecnica e campione approvato? Lo industrializziamo e lo produciamo con costanza, rispettando specifiche, materiali e tempi concordati.",
        bring: ["Scheda tecnica o campione", "Materiali forniti o da reperire", "Volumi e calendario consegne"],
        include: ["Industrializzazione del modello", "Taglio, preparazione, cucitura, rifinitura", "Controllo qualità pezzo per pezzo", "Report di avanzamento"],
        volume: "Da piccoli lotti a produzioni continuative",
        imgAlt: "Cintura nera in pelle stampata effetto coccodrillo",
        detAlt: "Dettaglio della fibbia di una cintura nera stampata coccodrillo",
        cta: "Parliamo di Conto Terzi",
      },
      {
        name: "Piccole Serie",
        headline: "Hai un’idea, partiamo da lì.",
        text: "Per stilisti emergenti e capsule collection. Ti accompagniamo dalla prima bozza al primo lotto, con quantitativi accessibili e la stessa cura delle grandi maison.",
        bring: ["Un’idea, uno schizzo o un riferimento", "Budget indicativo", "Disponibilità al confronto"],
        include: ["Consulenza su design e materiali", "Prototipo e campionatura", "Prima produzione", "Supporto per i riassortimenti"],
        volume: "Minimo 80–100 pezzi",
        imgAlt: "Cintura in pelle bufalo naturale con fibbia argento",
        detAlt: "Dettaglio della grana e del punto di cucitura di una cintura in pelle bufalo",
        cta: "Parliamo di Piccole Serie",
      },
    ],
  },

  chiSiamo: {
    hero: {
      eyebrow: "Chi siamo",
      alt: "Il laboratorio Sigillo a Scandicci",
      title: ["Una manifattura, ", "un mestiere."],
      intro: "Dal 1988 costruiamo cinture per i marchi che le firmano. Lontano dai riflettori, vicino al prodotto.",
    },
    story: {
      eyebrow: "La nostra storia",
      title: ["Dal 1988, ", "una cintura alla volta."],
      p1: "Sigillo nasce a Scandicci nel 1988 come laboratorio specializzato in cinture. Negli anni è cresciuto accanto alle maison del lusso e della moda, aggiungendo la piccola pelletteria e un reparto di prototipia interno.",
      p2: "Oggi serviamo clienti in Europa, Stati Uniti, Australia, Nuova Zelanda e Canada — dalla grande maison allo stilista emergente — con lo stesso approccio: ascolto, precisione, rispetto dei tempi.",
      cta: "Come lavoriamo",
      alt1: "Cintura intrecciata a mano in pelle nera",
      alt2: "Cintura alta in cuoio arancio con doppia fibbia",
    },
    pillars: {
      eyebrow: "Perché Sigillo",
      title: ["Tre cose che ", "non cambiano."],
      items: [
        ["Distretto toscano", "Scandicci è il cuore della pelletteria di lusso. Concerie, accessoristi e terzisti sono a pochi chilometri: tempi brevi, controllo diretto."],
        ["Specializzazione verticale", "Facciamo cinture e piccola pelletteria, nient’altro. Questa focalizzazione si traduce in competenza, macchinari dedicati e risultati costanti."],
        ["Riservatezza", "Nessun nome e nessun logo sui nostri canali — solo il prodotto che porta il tuo. Lavoriamo con accordi di riservatezza su ogni progetto."],
      ],
    },
    facts: [
      ["Sede", "Scandicci (FI)"],
      ["Fondazione", "1988"],
      ["Mercati", "Europa · USA · Australia · Nuova Zelanda · Canada"],
      ["Specializzazione", "Cinture e piccola pelletteria"],
    ],
    altBlu: "Dettaglio di una cintura blu con fibbia e cuciture a vista",
  },

  contatti: {
    hero: {
      eyebrow: "Contatti",
      title: ["Parliamo del ", "tuo progetto."],
      lead: "Scrivici, chiama o compila il form: rispondiamo nella giornata, in totale riservatezza.",
    },
    info: {
      title: "Resta in contatto",
      email: "Email",
      phone: "Telefono",
      seat: "Sede",
      markets: "Mercati",
      marketsValue: "Europa · USA · Australia · Nuova Zelanda · Canada",
      response: "Tempi di risposta",
      responseValue: "Nella giornata",
      note: "Nessun nome e nessun logo sui nostri canali — solo il prodotto che porta il tuo.",
    },
    form: {
      title: "Scrivici",
      intro: "Compila il form e ti ricontattiamo con il prossimo passo.",
      name: "Nome *",
      email: "Email *",
      company: "Azienda (opzionale)",
      type: "Tipo di richiesta *",
      select: "Seleziona",
      // [valore inviato (sempre in italiano, per la mail interna), etichetta mostrata]
      types: [
        ["Prototipia", "Prototipia"],
        ["Private Label", "Private Label"],
        ["Conto Terzi", "Conto Terzi"],
        ["Piccole Serie", "Piccole Serie"],
        ["Altro", "Altro"],
      ],
      message: "Messaggio *",
      placeholder: "Raccontaci il tuo progetto: prodotto, volumi, tempi…",
      consentPre: "Ho letto l'",
      consentLink: "informativa sulla privacy",
      consentPost: " e acconsento al trattamento dei miei dati personali per essere ricontattato. *",
      send: "Invia messaggio",
      sending: "Invio in corso…",
      note: "Rispondiamo nella giornata. Nessun impegno.",
      retry: "Riprova",
      errGeneric: "Qualcosa è andato storto. Riprova.",
      errNetwork: "Connessione interrotta. Riprova o scrivi a info@sigillosrl.com.",
    },
    done: { title: "Grazie, messaggio ricevuto.", text: "Ti risponderemo nella giornata." },
    next: {
      eyebrow: "Cosa succede dopo",
      steps: [
        ["Ci racconti il progetto", "Prodotto, volumi, tempi: anche solo un'idea o un riferimento."],
        ["Ti rispondiamo", "Nella giornata, con un referente dedicato."],
        ["Definiamo il passo successivo", "Una call, una visita in showroom o la campionatura."],
      ],
    },
  },

  privacy: {
    eyebrow: "Trasparenza & GDPR",
    title: "Privacy Policy",
    legal: "Ai sensi del Regolamento UE 2016/679 («GDPR») e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.",
    updated: "Ultimo aggiornamento: ottobre 2026",
    // Ogni blocco: stringa = paragrafo, array = elenco puntato.
    sections: [
      {
        title: "1. Titolare del trattamento",
        blocks: [
          "**Sigillo Srl**\nVia Ilio Barontini n. 15/B\n50010 Scandicci (Firenze), Italia\nP. IVA 04536710488",
          "Per qualsiasi richiesta relativa al trattamento dei tuoi dati personali scrivi a [info@sigillosrl.com](mailto:info@sigillosrl.com).",
        ] as (string | string[])[],
      },
      {
        title: "2. Dati raccolti e finalità",
        blocks: [
          "Il sito raccoglie dati personali **esclusivamente tramite il form di contatto**. I campi acquisiti sono: nome, indirizzo email, nome azienda (facoltativo), tipo di richiesta e testo del messaggio.",
          "Tali dati sono trattati al solo scopo di rispondere alla tua richiesta commerciale o informativa e per gestire eventuali comunicazioni successive ad essa collegate.",
          "Il sito **non utilizza cookie di profilazione, tracker di terze parti né strumenti di analisi statistica** che richiedano il consenso ai sensi della normativa vigente.",
        ] as (string | string[])[],
      },
      {
        title: "3. Base giuridica",
        blocks: [
          "Il trattamento si fonda sul **consenso espresso** dall'interessato al momento dell'invio del modulo (art. 6, par. 1, lett. a del GDPR). Il consenso è revocabile in qualsiasi momento scrivendo a [info@sigillosrl.com](mailto:info@sigillosrl.com); la revoca non pregiudica la liceità del trattamento effettuato prima di essa.",
        ] as (string | string[])[],
      },
      {
        title: "4. Modalità di trattamento e conservazione",
        blocks: [
          "I dati sono trattati con strumenti elettronici e conservati per il tempo strettamente necessario a evadere la richiesta ricevuta e a gestire il rapporto commerciale eventualmente instaurato. Trascorso tale termine i dati vengono cancellati o anonimizzati.",
          "L'invio delle email avviene tramite il servizio **Resend** (Resend Inc. — server nella regione EU, Irlanda), il quale agisce in qualità di responsabile del trattamento ai sensi dell'art. 28 GDPR. I dati non vengono trasferiti al di fuori dello Spazio Economico Europeo.",
        ] as (string | string[])[],
      },
      {
        title: "5. Comunicazione e diffusione",
        blocks: [
          "I dati non sono comunicati a terzi, né diffusi, se non ai soggetti che erogano servizi strumentali al funzionamento del sito (ad es. il provider di posta elettronica di cui al punto 4) e, nei casi previsti dalla legge, alle Autorità competenti.",
        ] as (string | string[])[],
      },
      {
        title: "6. Diritti dell'interessato",
        blocks: [
          "Hai il diritto di:",
          [
            "accedere ai tuoi dati personali (art. 15 GDPR);",
            "richiederne la rettifica (art. 16) o la cancellazione (art. 17);",
            "opporti al trattamento (art. 21) o richiederne la limitazione (art. 18);",
            "ricevere i dati in formato strutturato e leggibile — portabilità (art. 20);",
            "revocare il consenso in qualsiasi momento (art. 7);",
            "proporre reclamo al Garante per la protezione dei dati personali ([garanteprivacy.it](https://www.garanteprivacy.it)).",
          ],
          "Per esercitare i tuoi diritti scrivi a [info@sigillosrl.com](mailto:info@sigillosrl.com). Risponderemo entro 30 giorni.",
        ] as (string | string[])[],
      },
      {
        title: "7. Modifiche alla presente informativa",
        blocks: [
          "Il Titolare si riserva di aggiornare questa informativa in caso di modifiche normative o di variazioni nei servizi utilizzati. La versione aggiornata sarà sempre disponibile a questo indirizzo.",
        ] as (string | string[])[],
      },
    ],
  },
};

export type Dict = typeof it;
