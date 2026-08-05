'use client';

import { useState } from 'react';
import { motion, useReducedMotion, easeOut } from 'motion/react';
import { ProjectModal, type ProjectForModal, type ProjectModalData } from './ProjectModal';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type Project = {
  num: string;
  emoji?: string;
  logoText?: string;
  title: string;
  tagline: string;
  desc: string;
  stack: string;
  result: string;
  modal?: ProjectModalData;
};

const projects: Project[] = [
  {
    num: '01 / luxe · ia',
    emoji: '🏺',
    title: 'Daum — Cristallerie d’art',
    tagline: '→ partenariat IA en cours',
    desc: "Manufacture de luxe française (1878), référence mondiale de la pâte de cristal. IA opérationnelle embarquée : veille commerciale automatisée en production et agent conversationnel branché sur le PIM pour les équipes commerciales.",
    stack: 'n8n · Mistral · Claude Code · RAG · Supabase',
    result: '✦ ~70 signaux scorés/semaine · 1 240 produits en langage naturel',
    modal: {
      badgeType: '01 / Luxe · IA',
      badgeDays: 'Mission en cours — depuis juin 2026',
      heroTitleLine1: "L'IA opérationnelle au service",
      heroTitleLine2: "d'une manufacture de légende.",
      lead: "Daum, référence mondiale de la pâte de cristal depuis 1878, ambitionne de doubler son chiffre d'affaires. J'accompagne ses équipes en IA opérationnelle embarquée : je cadre les cas d'usage avec le métier — direction commerciale, ADV, boutiques — et je livre des systèmes qui tournent, pas des slides.",
      contextTitle: 'Une marque prestigieuse, des opérations manuelles',
      context:
        "Des boutiques à Paris, Singapour, Dubaï ou Miami — mais des opérations reposant encore sur Excel, des doubles saisies et une faible digitalisation. Deux chantiers prioritaires ont été cadrés avec les équipes : détecter les signaux d'affaires du luxe avant les concurrents, et donner aux commerciaux un accès instantané à l'information produit en langage naturel.",
      solutionTitle: 'Deux systèmes IA, menés en parallèle',
      solution:
        "**Veille commerciale automatisée (en production)** : pipeline n8n d'une trentaine de nœuds — registre de 29 sources piloté par Google Sheet, 5 flux de veille (hôtellerie de prestige, orfèvrerie, permis de construire de grandes villas, créations d'entreprises déco, showrooms haut de gamme) et veille sociale Instagram/LinkedIn sur les 14 concurrents (Baccarat, Lalique, Saint-Louis…). Scoring et synthèse par LLM avec sorties structurées, pondération par marchés cibles (EAU, Inde, Singapour, US…), newsletter HTML hebdomadaire envoyée automatiquement à l'équipe commerciale et suivi d'opportunités annotable. Fiabilisation production : garde-fous anti-échec silencieux, alertes mail, retries.\n\n**Agent IA conversationnel (démo validée par la direction)** : bot Telegram — bascule WhatsApp Business prévue — orchestré dans n8n, agent Mistral doté de 5 outils : recherche produit, fiches détaillées et photos via l'API du PIM Plytix (~1 240 produits), catalogue local rafraîchi chaque nuit pour les filtres multicritères prix/famille/couleur, et RAG documentaire (Google Drive → embeddings Mistral → Supabase pgvector) avec réponses ancrées citant leurs sources.\n\n**Industrialisation en cours** : spécification fonctionnelle validée de la connexion ERP Sage X3 (lecture seule, verrous anti-hallucination) et architecture cible souveraine — double fournisseur Mistral (UE) + Claude sur Bedrock UE, hébergement chez un partenaire français dans le périmètre VPN du client. Je forme aussi les équipes métier à reprendre la main sur les workflows.",
      screenshots: [],
      stackFull: [
        'n8n',
        'Mistral',
        'Gemini',
        'Claude',
        'Supabase pgvector',
        'API Plytix (PIM)',
        'Sage X3',
        'Telegram / WhatsApp',
        'Apify',
      ],
      tools: ['Claude Code', 'n8n', 'Mistral', 'Google Workspace'],
      metrics: [
        { val: '~70', label: 'signaux scorés / semaine' },
        { val: '1 240', label: 'produits interrogeables' },
        { val: '2', label: 'systèmes livrés en ~5 jours' },
      ],
    },
  },
  {
    num: '02 / professionnel libéral',
    emoji: '⚖️',
    title: 'Cabinet Nakache',
    tagline: '→ livrée en 3 jours',
    desc: "Site vitrine institutionnel pour Caroline Nakache, Mandataire Judiciaire à la Protection des Majeurs agréée dans les Yvelines. Présentation des mesures de protection (tutelle, curatelle, sauvegarde de justice), du parcours, du fonctionnement judiciaire et formulaire de contact RGPD-compliant.",
    stack: 'Cursor · Astro · Tailwind · Vercel',
    result: '✦ 0€/mois · design sur mesure · SEO optimisé',
    modal: {
      badgeType: '02 / Professionnel libéral',
      badgeDays: 'Livré en 3 jours',
      siteHref: 'https://www.cabinet-nakache.fr/',
      heroTitleLine1: 'Une présence en ligne crédible',
      heroTitleLine2: 'pour une mission de confiance.',
      lead: "Caroline Nakache, Mandataire Judiciaire à la Protection des Majeurs agréée dans les Yvelines, n'avait aucune présence digitale pour orienter les familles et les partenaires judiciaires. En 3 jours, j'ai livré un site vitrine institutionnel qui rassure, informe et convertit.",
      contextTitle: 'Une profession sensible, sans relais digital',
      context:
        "Le métier de MJPM repose sur la confiance, la pédagogie et la disponibilité. Sans site, impossible d'expliquer en amont les mesures de protection (tutelle, curatelle, sauvegarde de justice), de présenter son parcours ou de proposer un canal de contact sécurisé aux familles, magistrats et travailleurs sociaux.",
      video: '/media/cabinet-nakache/demo.mp4',
      videoCaption:
        '↑ Parcours du site : présentation des mesures, parcours professionnel, fonctionnement judiciaire et contact RGPD',
      solutionTitle: 'Un site vitrine institutionnel, sobre et conforme',
      solution:
        "**Site vitrine institutionnel** conçu pour incarner le sérieux et l'humanité de la mission. Identité visuelle sobre, hiérarchie claire et navigation fluide pour orienter immédiatement chaque visiteur — famille, magistrat ou partenaire — vers l'information dont il a besoin.\n\n**Pédagogie des mesures de protection** : explication accessible des dispositifs (tutelle, curatelle, sauvegarde de justice), du rôle du mandataire et des étapes judiciaires. Le contenu est rédigé pour démystifier une procédure souvent perçue comme opaque.\n\n**Présentation du parcours** de Caroline Nakache, agrément préfectoral, zone d'intervention dans les Yvelines et fonctionnement judiciaire — autant d'éléments de réassurance qui légitiment la prise de contact.\n\n**Formulaire de contact RGPD-compliant** avec mention légale conforme, gestion du consentement et acheminement sécurisé des demandes. Architecture **Astro + Tailwind** pour un site rapide, accessible et zéro coût d'hébergement (déploiement Vercel). **SEO optimisé** sur les requêtes locales pour capter les recherches familles + Yvelines.",
      screenshots: [
        '/media/cabinet-nakache/screen-01.png',
        '/media/cabinet-nakache/screen-02.png',
        '/media/cabinet-nakache/screen-03.png',
        '/media/cabinet-nakache/screen-04.png',
        '/media/cabinet-nakache/screen-05.png',
      ],
      stackFull: ['Astro', 'Tailwind CSS', 'Vercel', 'TypeScript'],
      tools: ['Cursor', 'Claude Sonnet 4.6', 'Claude Opus 4.7'],
      metrics: [
        { val: '3j', label: 'de livraison' },
        { val: '0€', label: 'coût mensuel' },
        { val: 'SEO', label: 'optimisé local' },
      ],
      quote:
        "« Un site qui me ressemble et qui rassure les familles dès le premier contact. Livré en quelques jours, vraiment au-delà de mes attentes. »",
      authorName: 'Caroline Nakache',
      authorRole: 'MJPM · Cabinet Nakache',
      avatarInitials: 'CN',
    },
  },
  {
    num: '03 / padel',
    emoji: '🎾',
    title: 'Le Tournoi des Frérots',
    tagline: '→ livrée en 5 jours',
    desc: "30 équipes à gérer par WhatsApp. J'ai construit une plateforme complète : inscriptions, tirage au sort automatique, résultats en temps réel.",
    stack: 'VSCode · Claude Code · Next.js · Neon · Vercel',
    result: '✦ 50+ équipes · 0 gestion manuelle',
    modal: {
      badgeType: '03 / Padel',
      badgeDays: 'Livré en 5 jours',
      siteHref: 'https://padel-two-theta.vercel.app/',
      heroTitleLine1: 'Une plateforme complète',
      heroTitleLine2: 'pour un tournoi pro.',
      lead: "30 équipes organisées sur WhatsApp, inscriptions manuelles, tirages au sort en tableur. En 5 jours, j'ai livré un outil qui automatise l'intégralité du cycle de gestion d'un tournoi de padel.",
      contextTitle: 'Un tournoi sans outil dédié',
      context:
        "Tout se gérait à la main : confirmations d'inscription sur WhatsApp, tirage au sort sur tableur, résultats partagés en photos de groupe. Ça fonctionnait — mais c'était chronophage, source d'erreurs et impossible à scaler.",
      video: '/media/tournoi/demo.mp4',
      videoCaption:
        '↑ Parcours complet : inscription joueur, configuration du tournoi, gestion des résultats en direct',
      solutionTitle: 'Un backend structuré, de bout en bout',
      solution:
        "**Le Tournoi des Frérots** est une plateforme web dédiée à l'organisation de tournois de padel récurrents. Nous avons construit un véritable outil métier permettant d'automatiser l'ensemble du cycle de gestion d'un tournoi.\n\nLa solution intègre un **backend structuré et modulaire**, conçu pour gérer les inscriptions joueurs, contrôler les doublons, suivre les statuts et centraliser les données. Un module spécifique permet la **gestion des paiements**, avec suivi des règlements et visibilité en temps réel pour les organisateurs.\n\nL'administration permet de **configurer les tournois** : nombre de places, format (poules + phases finales), génération et constitution des paires, répartition automatique des équipes dans les poules, et paramétrage des matchs.\n\nLa plateforme facilite également le suivi des résultats, l'évolution des classements et la visibilité des prochaines éditions. L'objectif est de professionnaliser l'organisation tout en conservant un esprit convivial et fédérateur.\n\nCe projet met en avant ma capacité à concevoir une architecture backend robuste, orientée règles métier complexes (gestion de tournois, formats compétitifs, paiements), tout en assurant une expérience front fluide et accessible.",
      screenshots: [
        '/media/tournoi/screen-01.png',
        '/media/tournoi/screen-02.png',
        '/media/tournoi/screen-03.png',
        '/media/tournoi/screen-04.png',
      ],
      stackFull: ['Vercel', 'Neon', 'Next.js', 'TypeScript'],
      tools: ['chatGPT 5.3', 'Claude Sonnet 4.6', 'Claude Opus 4.6', 'VSCode + Claude Code'],
      metrics: [
        { val: '50+', label: 'équipes gérées' },
        { val: '0', label: 'gestion manuelle' },
        { val: '5j', label: 'de livraison' },
      ],
      quote:
        "« On a doublé le nombre d'équipes en une saison. L'organisation qui nous prenait des heures se fait maintenant en quelques clics. »",
      authorName: 'Jeremie Z.',
      authorRole: 'Organisateur · Le Tournoi des Frérots',
      avatarInitials: 'JZ',
    },
  },
  {
    num: '04 / fintech',
    logoText: 'pretx',
    title: 'Pretx',
    tagline: '→ CPO & Associé',
    desc: "Co-pilotage de la stratégie produit d'une fintech spécialisée dans le regroupement de crédits. Vision produit, roadmap, priorisation et pilotage agile des cycles de développement.",
    stack: 'Product Strategy · Roadmap · Agile · Figma',
    result: '✦ CPO · Actionnaire · 2025 — présent',
    modal: {
      badgeType: '04 / Fintech',
      badgeDays: 'CPO & Associé',
      siteHref: 'https://pretx.fr',
      heroTitleLine1: 'La fintech qui simplifie',
      heroTitleLine2: 'le regroupement de crédits.',
      lead: "Co-pilotage de la stratégie produit de Pretx, une fintech spécialisée dans le regroupement de crédits et l'accompagnement budgétaire des particuliers. Vision produit, roadmap, priorisation et pilotage agile des cycles de développement.",
      contextTitle: 'Un marché complexe, une vision produit claire',
      context:
        "Le regroupement de crédits est un marché historiquement opaque et peu digitalisé. Pretx ambitionne de simplifier et moderniser l'expérience client grâce à une approche produit centrée sur l'accompagnement et la transparence.",
      video: '/media/pretx/demo.mp4',
      videoCaption: '↑ Aperçu de la plateforme Pretx',
      solutionTitle: 'Vision produit & stratégie',
      solution:
        "En tant que CPO et actionnaire, je co-pilote la stratégie produit de Pretx : définition de la vision, construction de la roadmap, priorisation des fonctionnalités et pilotage des cycles de développement en méthode agile.\n\nRôle exclusivement produit et stratégique — non impliqué dans le développement technique ou IA.",
      screenshots: [
        '/media/pretx/screen-01.png',
        '/media/pretx/screen-02.png',
        '/media/pretx/screen-03.png',
        '/media/pretx/screen-04.png',
        '/media/pretx/screen-05.png',
        '/media/pretx/screen-06.png',
      ],
      stackFull: ['Product Strategy', 'Roadmap', 'Agile', 'Figma'],
      tools: ['Figma', 'Notion', 'Linear'],
      metrics: [
        { val: 'CPO', label: 'rôle' },
        { val: '2025', label: 'depuis' },
        { val: 'Actionnaire', label: 'statut' },
      ],
      quote:
        "« J'ai fait une demande de rachat de crédit à Pretx — vraiment rien à dire. La personne en charge de mon dossier a été très réactive, à l'écoute, de bon conseil et surtout toujours disponible quand j'avais une question. Un grand merci. »",
      authorName: 'Nicole',
      authorRole: 'Cliente Pretx · Trustpilot',
      avatarInitials: 'N',
    },
  },
  {
    num: '05 / entreprise',
    emoji: '⚽',
    title: "Monop'Foot",
    tagline: '→ livrée en 4 jours',
    desc: "Le club de foot interne Monoprix sans outil digital. App complète : planification, classements, notifications — remplace les feuilles Excel.",
    stack: 'Cursor · Claude Opus 4.5 · Next.js · Supabase',
    result: '✦ 52 équipes · 0 feuille Excel',
    modal: {
      badgeType: '05 / Entreprise',
      badgeDays: 'Livré en 4 jours',
      siteHref: 'https://monopfoot-front.onrender.com/',
      heroTitleLine1: '52 équipes Monoprix,',
      heroTitleLine2: 'zéro feuille Excel.',
      lead: "Le club de foot interne Monoprix géré sur tableurs partagés. En 4 jours, j'ai livré une app complète, alignée avec la marque d'entreprise, qui automatise tout — de la convocation à l'affichage des classements.",
      contextTitle: 'Le chaos des tableurs partagés',
      context:
        "Un fichier Excel partagé entre plusieurs organisateurs, scores saisis à la main, classements recalculés après chaque journée, convocations gérées sur WhatsApp. Risque d'erreur permanent, perte de temps, et engagement en berne.",
      video: '/media/monopfoot/demo.mp4',
      videoCaption:
        '↑ Parcours complet : inscription joueur, planification match, saisie des résultats et classements',
      solutionTitle: "Une app sport d\u2019entreprise compl\u00e8te",
      solution:
        "Création et gestion des joueurs avec inscription simplifiée et suivi des participations. Planification des matchs, gestion des convocations, édition des feuilles de match et ajustement des effectifs. Saisie des résultats et performances individuelles, classements automatiques. Module KPIs : matchs joués, victoires, buts marqués, ratios de performance, classement global. Identité visuelle alignée Monoprix.",
      screenshots: [
        '/media/monopfoot/screen-01.png',
        '/media/monopfoot/screen-02.png',
        '/media/monopfoot/screen-03.png',
        '/media/monopfoot/screen-04.png',
      ],
      stackFull: ['Render', 'Supabase', 'Next.js', 'TypeScript'],
      tools: ['chatGPT 5.2', 'Claude Opus 4.5', 'VSCode + Roo + Codex'],
      metrics: [
        { val: '52', label: 'équipes gérées' },
        { val: '0', label: 'feuille Excel' },
        { val: '4j', label: 'de livraison' },
      ],
      quote:
        '« Résultats en temps réel, zéro friction côté équipes. Les capitaines adorent les notifications automatiques. »',
      authorName: 'Marie D.',
      authorRole: 'Responsable com · Monoprix',
      avatarInitials: 'MD',
    },
  },
  {
    num: '06 / associatif',
    emoji: '🃏',
    title: 'Club de Belote de Suresnes',
    tagline: '→ livrée en 4 jours',
    desc: "Association locale sans présence digitale. Site vitrine + espace membres + calendrier. Autonomie complète pour le bureau, 0€/mois.",
    stack: 'Bolt.new · Next.js · Supabase · Render',
    result: '✦ 47 membres · 0€/mois',
    modal: {
      badgeType: '06 / Associatif',
      badgeDays: 'Livré en 4 jours',
      siteHref: 'https://belote-front.onrender.com/',
      heroTitleLine1: 'La belote entre amis,',
      heroTitleLine2: 'structurée et compétitive.',
      lead: "47 membres sans aucune infrastructure digitale pour gérer leurs soirées belote. En 4 jours, j'ai livré une app complète avec gestion de parties, calculs automatisés et statistiques en temps réel.",
      contextTitle: 'Des soirées sans structure ni suivi',
      context:
        "Les parties s'organisaient de manière informelle, sans historique des scores, sans classement global, sans statistiques. Impossible d'alimenter une dynamique compétitive ou de suivre la progression de chaque joueur dans le temps.",
      video: '/media/belote/demo.mp4',
      videoCaption:
        "↑ Parcours complet : cr\u00e9ation d\u2019une partie, saisie des scores, classement en temps r\u00e9el",
      solutionTitle: 'Un outil métier complet pour la belote',
      solution:
        "Création et gestion des joueurs avec historique individuel des performances. Organisation des parties, définition des équipes, lancement de session et suivi du déroulé. Saisie des scores optimisée pour mobile : calculs automatisés, points cumulés, gagnants, moyennes, classements en temps réel. Module KPIs : taux de victoire, régularité, comparatif entre joueurs.",
      screenshots: [],
      stackFull: ['Render', 'Supabase', 'Next.js', 'TypeScript'],
      tools: ['chatGPT 5.2', 'Claude Opus 4.5', 'VSCode + Roo + Codex'],
      metrics: [
        { val: '47', label: 'membres actifs' },
        { val: '0€', label: 'coût mensuel' },
        { val: '4j', label: 'de livraison' },
      ],
      quote:
        '« Le bureau est maintenant complètement autonome. On a enfin une vraie dynamique compétitive entre membres. »',
      authorName: 'André M.',
      authorRole: 'Président · Club de Belote de Suresnes',
      avatarInitials: 'AM',
    },
  },
];

export function Projets() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<ProjectForModal | null>(null);

  const sectionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

  return (
    <>
      <section
        id="projets"
        className="bg-[var(--bg2)] px-5 py-20 md:px-14 md:py-[120px]"
      >
        <motion.div
          className="mx-auto max-w-[1100px]"
          variants={containerVariants}
          {...sectionProps}
        >
          <motion.div
            className="font-mono-custom text-[11px] uppercase tracking-[0.14em] text-[var(--violet)]"
            {...itemProps}
          >
            // projets récents
          </motion.div>

          <motion.h2
            className="mt-2 font-cabinet text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--dark-text)] md:text-[40px] lg:text-[52px]"
            {...itemProps}
          >
            Des outils,
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              des délais tenus
            </span>
          </motion.h2>

          <motion.p
            className="mt-4 max-w-[480px] font-bricolage text-[17px] text-[var(--muted)]"
            style={{ marginBottom: 48 }}
            {...itemProps}
          >
            Des livrables réels, pour de vraies organisations.
          </motion.p>

          <motion.div className="grid gap-5 md:grid-cols-2" {...itemProps}>
            {projects.map((project) => (
              <motion.div
                key={project.num}
                className="flex flex-col gap-4 rounded-[20px] border border-[var(--border)] bg-[var(--white)] px-7 py-8"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        borderColor: '#7C3AED',
                        boxShadow: '0 20px 60px rgba(124, 58, 237, 0.10)',
                        transition: { duration: 0.2 },
                      }
                }
                {...itemProps}
              >
                <div className="font-mono-custom text-[11px] tracking-[0.12em] text-[var(--muted)]">
                  {project.num}
                </div>

                {project.logoText ? (
                  <div
                    className="flex h-[40px] w-fit items-center justify-center rounded-[10px] px-4"
                    style={{ background: '#0F1C3F' }}
                  >
                    <span className="font-cabinet text-[17px] font-extrabold tracking-tight text-white">
                      {project.logoText}
                    </span>
                  </div>
                ) : (
                  <div className="text-[36px] leading-none">{project.emoji}</div>
                )}

                <div className="font-cabinet text-[20px] font-extrabold leading-snug tracking-[-0.02em] text-[var(--dark-text)]">
                  {project.title}
                </div>

                <div className="font-mono-custom text-[11px] tracking-[0.04em] text-[var(--violet)]">
                  {project.tagline}
                </div>

                <p className="flex-1 font-bricolage text-[14px] leading-relaxed text-[var(--muted)]">
                  {project.desc}
                </p>

                <div
                  className="border-t pt-3 font-mono-custom text-[11px] tracking-[0.04em]"
                  style={{ borderColor: 'var(--border)', color: '#A1A1AA' }}
                >
                  {project.stack}
                </div>

                <div
                  className="inline-flex w-fit items-center gap-1.5 rounded-[100px] px-3.5 py-2 text-[13px] font-bold text-[var(--violet)]"
                  style={{
                    background: 'linear-gradient(135deg, #F5F3FF, rgba(219,39,119,0.06))',
                    border: '1px solid rgba(124,58,237,0.2)',
                  }}
                >
                  {project.result}
                </div>

                {project.modal && (
                  <button
                    onClick={() =>
                      setSelectedProject({
                        emoji: project.emoji ?? '',
                        title: project.title,
                        modal: project.modal!,
                      })
                    }
                    className="inline-flex cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 font-bricolage text-[13px] font-bold transition-[gap] duration-200 hover:gap-2.5"
                    style={{ color: 'var(--cyan)' }}
                  >
                    Voir le projet →
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
