export type SectorKey = 'all' | 'retail' | 'media' | 'telecoms' | 'industrie' | 'banque';

export interface Mission {
  client: string;
  logo: string; // filename in /public/logos/ without extension
  date: string;
  role: string;
  description: string;
  missions?: string[];
  stack: string[];
  sector?: 'retail' | 'media' | 'telecoms' | 'industrie' | 'banque';
}

export interface Company {
  id: string;
  name: string;
  logo: string; // company logo filename
  period: string;
  role: string;
  sectorTag: string;
  sectors: ('retail' | 'media' | 'telecoms' | 'industrie' | 'banque')[];
  missions: Mission[];
  context?: string;
}

export const companies: Company[] = [
  {
    id: 'monoprix',
    name: 'Monoprix',
    logo: 'monoprix',
    period: '2022 — Auj.',
    role: 'Product Owner E-Commerce / PMO',
    sectorTag: 'Retail / E-Commerce',
    sectors: ['retail'],
    missions: [
      {
        client: 'Transformation E-Commerce',
        logo: 'monoprix',
        date: '2022 — Auj.',
        role: 'Product Owner & PMO',
        description:
          "Pilotage du programme de transformation e-commerce. Gouvernance multi-partenaires, coordination COPIL avec les éditeurs et équipes internes.",
        missions: [
          "Refonte site e-commerce avec SFCC — boost CA en ligne",
          "Release app mobile M'Monoprix — nouvelles fonctionnalités",
          "Intégration PSP Adyen — nouveaux moyens de paiement",
          "Refonte parcours connexion (Reach5)",
          "Redesign complet espace client web & app",
          "Conduite du changement — adoption nouveaux outils",
        ],
        stack: ['SFCC', 'Adyen', 'Reach5', 'JIRA'],
      },
    ],
  },
  {
    id: 'tapptic',
    name: 'Tapptic / Eneon',
    logo: 'tapptic',
    period: 'Oct. 2017 — 2022',
    role: 'Directeur de Projets Digitaux',
    sectorTag: 'Agence digitale',
    sectors: ['retail', 'media', 'banque'],
    missions: [
      {
        client: 'Bouygues Telecom',
        logo: 'bouygues-telecom',
        date: '2017 — 2022',
        role: 'Project Manager — App B.TV',
        description:
          "Gestion de projet de l'application B.TV (iOS/Android). Animation de workshops, définition roadmap, wireframes, supervision des phases de développement.",
        stack: ['iOS', 'Android', 'Agile'],
        sector: 'media',
      },
      {
        client: 'TF1',
        logo: 'tf1',
        date: '2017 — 2022',
        role: 'Project Manager — App TFOU',
        description:
          "Pilotage de l'application TFOU (web, app mobile, tablette, Freebox, Apple TV). Gestion en sprints Agile. Optimisation UX multi-plateforme.",
        stack: ['Multi-plateforme', 'Apple TV', 'Agile'],
        sector: 'media',
      },
      {
        client: 'M6',
        logo: 'm6',
        date: '2017 — 2020',
        role: 'Project Manager',
        description: "Gestion de projets digitaux pour le groupe M6.",
        stack: ['Mobile', 'Web'],
        sector: 'media',
      },
      {
        client: 'Sarenza',
        logo: 'sarenza',
        date: '2017 — 2020',
        role: 'Project Manager — App Mobile',
        description:
          "Gestion de l'app mobile Sarenza (iOS/Android). Pilotage des releases, coordination UX et développement.",
        stack: ['iOS', 'Android', 'E-Commerce'],
        sector: 'retail',
      },
      {
        client: 'Monoprix',
        logo: 'monoprix',
        date: '2017 — 2022',
        role: "Project Manager — App M'Monoprix",
        description:
          "Gestion de l'app mobile M'Monoprix (iOS/Android) avant la transition en interne comme Product Owner.",
        stack: ['iOS', 'Android'],
        sector: 'retail',
      },
      {
        client: 'La Poste',
        logo: 'la-poste',
        date: '2017 — 2019',
        role: 'Project Manager',
        description: "Gestion de projets d'applications mobiles et web pour La Poste.",
        stack: ['Mobile', 'Web'],
        sector: 'banque',
      },
    ],
    context:
      "Direction d'un portefeuille de projets digitaux. Management d'équipe jusqu'à 12 personnes (Dev, UX, QA). Mise en place des méthodologies Agile. Développement commercial et avant-vente. Animation de l'écosystème d'innovation (RA, RV, Smart Speaker).",
  },
  {
    id: 'wavestone',
    name: 'Wavestone',
    logo: 'wavestone',
    period: '2014 — 2017',
    role: 'Consultant Senior — Stratégie SI & IoT',
    sectorTag: 'Conseil',
    sectors: ['industrie', 'banque'],
    missions: [
      {
        client: 'Alstom',
        logo: 'alstom',
        date: 'Jan — Oct 2017',
        role: 'Architecte technique et fonctionnel',
        description:
          "Audit technique d'applications métier dans le cadre d'une migration réseau.",
        stack: ['Audit', 'Migration'],
        sector: 'industrie',
      },
      {
        client: 'Air Liquide',
        logo: 'air-liquide',
        date: 'Mai — Déc 2016',
        role: 'Consultant IoT — Bouteilles Connectées',
        description:
          "Accompagnement technique et organisationnel du projet IoT « Bouteilles Connectées ». Analyse des besoins, data model, stratégie d'intégration, recette technique, processus de RUN.",
        stack: ['IoT', 'Sigfox', 'LoRa'],
        sector: 'industrie',
      },
      {
        client: 'PSA Peugeot Citroën',
        logo: 'psa',
        date: 'Jan — Juin 2016',
        role: 'Consultant Audit — Véhicule Connecté',
        description:
          "Audit stratégique de la plateforme Véhicule Connecté. Audit technique, organisationnel et financier. Animation d'interviews. Plan d'action court/moyen terme.",
        stack: ['IoT', 'Automotive', 'Audit'],
        sector: 'industrie',
      },
      {
        client: 'AMF',
        logo: 'amf',
        date: 'Jan — Déc 2015',
        role: 'Ingénieur Intégration',
        description:
          "Développement et intégration d'une application métier pour les inspecteurs de l'AMF sous socle SharePoint. Gestion des environnements, recette technique, processus de RUN.",
        stack: ['SharePoint', 'Intégration'],
        sector: 'banque',
      },
      {
        client: 'BNP Paribas',
        logo: 'bnp-paribas',
        date: '2014 — 2015',
        role: 'Consultant SI',
        description: "Étude LAN DC (Data Center). Analyse de l'architecture réseau.",
        stack: ['Réseau', 'Data Center'],
        sector: 'banque',
      },
    ],
  },
  {
    id: 'beijaflore',
    name: 'Beijaflore',
    logo: 'beijaflore',
    period: '2012 — 2014',
    role: 'Consultant Senior — Marketing & Innovation',
    sectorTag: 'Conseil Télécom',
    sectors: ['telecoms'],
    missions: [
      {
        client: 'SFR',
        logo: 'sfr',
        date: '2012 — 2014',
        role: 'Chef de projet Transformation Télécom',
        description:
          "Pilotage du programme de sécurisation d'architecture réseau. Cadrage, rédaction modes opératoires, gestion stocks/planning/budget. Création d'un outil de rapport de performance des serveurs télécoms.",
        stack: ['Télécom', 'Réseau', 'Sécurité'],
        sector: 'telecoms',
      },
    ],
  },
];

export const stats = [
  { number: '15+', label: "Années d'expérience" },
  { number: '12+', label: 'Clients grands comptes' },
  { number: '20+', label: 'Missions réalisées' },
  { number: '4', label: 'Entreprises' },
];

export const filters: { key: SectorKey; label: string }[] = [
  { key: 'all', label: 'Tout' },
  { key: 'retail', label: 'Retail' },
  { key: 'media', label: 'Média' },
  { key: 'telecoms', label: 'Télécoms' },
  { key: 'industrie', label: 'Industrie' },
  { key: 'banque', label: 'Banque' },
];
