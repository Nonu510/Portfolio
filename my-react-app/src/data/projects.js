// Import optimized project icons
import booki from '../assets/optimized/booki.webp';
import booki400 from '../assets/optimized/booki-400.webp';
import ohmy from '../assets/optimized/ohmyfood.webp';
import ohmy400 from '../assets/optimized/ohmyfood-400.webp';
import print from '../assets/optimized/printit.webp';
import print400 from '../assets/optimized/printit-400.webp';
import sophie from '../assets/optimized/sophiebluel.webp';
import sophie400 from '../assets/optimized/sophiebluel-400.webp';
import kasa from '../assets/optimized/kasa.webp';
import kasa400 from '../assets/optimized/kasa-400.webp';
import ninacarducci from '../assets/optimized/ninacarducci.webp';
import ninacarducci400 from '../assets/optimized/ninacarducci-400.webp';
import events from '../assets/optimized/724events.webp';
import events400 from '../assets/optimized/724events-400.webp';
import argentbank from '../assets/optimized/argentbank.webp';
import argentbank400 from '../assets/optimized/argentbank-400.webp';

// Use optimized images instead of importing heavy PNG files
const projectIcons = {
  events: { src: events, src400: events400 },
  booki: { src: booki, src400: booki400 },
  argentbank: { src: argentbank, src400: argentbank400 },
  kasa: { src: kasa, src400: kasa400 },
  ninacarducci: { src: ninacarducci, src400: ninacarducci400 },
  ohmy: { src: ohmy, src400: ohmy400 },
  print: { src: print, src400: print400 },
  sophie: { src: sophie, src400: sophie400 },
};

import bookidetail from '../assets/projet/bookidetail.webp';
import bookigrl from '../assets/projet/bookigrl.webp';
import argentbankdetail from '../assets/projet/argentdetail.webp';
import argentbankgrl from '../assets/projet/argentgrl.webp';
import kasadetail from '../assets/projet/kasadetail.webp';    
import kasagrl from '../assets/projet/kasagrl.webp';
import ninacarduccidetail from '../assets/projet/ninadetail.webp';
import ninacarduccigrl from '../assets/projet/ninagrl.webp';
import ohmydetail from '../assets/projet/ohmydetail.webp';
import ohmygrl from '../assets/projet/ohmygrl.webp';
import printdetail from '../assets/projet/printitdetail.webp';
import printgrl from '../assets/projet/printitgrl.webp';
import sophiedetail from '../assets/projet/blueldetail.webp';
import sophiegrl from '../assets/projet/bluelgrl.webp';
import eventsdetail from '../assets/projet/724detail.webp';
import eventsgrl from '../assets/projet/724grl.webp';


export const projectsData = [
  {
    id: "booki",
    iconSrc: projectIcons.booki,
    iconAlt: "Booki Icon",
    title: "Booki",
    description: "Création à partir d'HTML et CSS d'une page de réservation d'hotel et de location de vacances",
    scenario: "Dans ce projet, je devais créer la page d'accueil d'une agence de voyage en utilisant HTML et CSS. Ma mission principale était d'intégrer l'interface responsive de leur site. J'avais à disposition les maquettes Figma pour mobile, tablette et desktop, ainsi que les images et une note de synthèse sur les spécificités du projet. J'ai été amené à créer mes propres composants d'interface avec HTML et CSS afin d'avoir un rendu correspondant à la maquette. Cela m'a donné une compréhension plus profonde de la manière dont le code est structuré et stylisé pour répondre aux exigences de design.",
    details: "Dans ce projet, j’ai dû utiliser HTML et CSS pour mettre en page le site booki. Le résultat est correspondant aux maquettes. Des perspectives d’améliorations sont possibles sur ce projet, sur le style en augmentant les contrastes entre le fond et les cards. On peut également créer le reste des pages correspondantes aux hôtels pour rendre les clic actifs. On peut également créer le site en version React avec des composants réutilisables permettant une meilleure flexibilité et adaptabilité. Dans cette image on peut voir le composant card qui est répété ainsi que le footer qui sont en HTML et CSS mais en implémentant en React peuvent être transformer en composant réutilisables",
    imgdetail: bookidetail,
    imgdetailalt: "Booki Detail Image",
    imggrl: bookigrl,
    imggrlalt: "Booki Grl Image",
  },
  {
    id: "oh-my-food",
    iconSrc: projectIcons.ohmy,
    iconAlt: "Oh My Food Icon",
    title: "Oh My Food",
    description: "Amélioration de l'interface d'un site mobile avec des animations CSS",
    scenario: "Mon rôle était le suivant : J'ai intégré Ohmyfood en tant que développeur junior. Il s’agit d’une jeune startup qui voudrait s'imposer sur le marché de la restauration. Déjà présente à New-York, elle souhaite désormais faire sa place à Paris. Ma mission était d'améliorer l'interface de leur site mobile en y ajoutant des animations CSS. Je devais analyser le code existant, identifier les éléments qui pourraient bénéficier d'animations, et implémenter ces animations de manière fluide et esthétique pour améliorer l'expérience utilisateur.",
    details: "Dans ce projet, j’ai dû utiliser HTML et CSS pour intégrer une page d’un site de restauration en Mobile First. Les compétences développées sur ce projet étaient la structure du code en HTML avec la gestion de plusieurs pages. Et, la création d’animations sur les cœurs ou la sélection de plats, ainsi que la gestion du responsive. Les perspectives d’améliorations pour ce projet sont multiples, pour le moment ce projet est en HTML et CSS ce qui fait qu’il n’est pas interactif, en ajoutant du javascript, React et Redux on arrivera à la formation d’un site prêt à l’emploi qui permet de gerer et d’implémenter un panier pour les commandes des clients. Dans cette capture d’écran on peut voir l’animation de sélection de plat, celle-ci est juste visuelle en ajoutant du React et Redux par exemple on pourrait garder cet état de sélection et créer un panier pour voir le total à payer pour le repas par exemple.",
    imgdetail: ohmydetail,
    imgdetailalt: "Oh My Food Detail Image",
    imggrl: ohmygrl,
    imggrlalt: "Oh My Food Grl Image",

  },
  {
    id: "print-it",
    iconSrc: projectIcons.print,
    iconAlt: "Print It Icon",
    title: "Print It",
    description: "Modification du code HTML et implémentation d'un carrousel avec JavaScript pour une page de service d'impression en ligne",
    scenario: "Dans ce projet, mon rôle était le suivant : En tant que développeur junior, j'ai été embauché par Print It, une entreprise de services d'impression en ligne. Ma tâche principale était de modifier le code HTML existant et d'implémenter un carrousel interactif à l'aide de JavaScript. Ce carrousel permettra aux utilisateurs de faire défiler les différentes options de services d'impression disponibles, améliorant ainsi l'expérience utilisateur et rendant la navigation plus fluide sur le site.",
    details: "Dans ce projet, ma mission était de rendre  la bannière qui est statique, dynamique en créant un carrousel à l’aide de Javascript. Dans ce projet les compétences développées étaient l’implémentation du code pour le carrousel et l’adaptabilité au code CSS et HTML déjà présent. Les angles d’améliorations de ce site sont l’augmentation de contraste de certains éléments pour l’accessibilité et l’ajout d’animation pour le carrousel avec une transition plus naturelle et fluide et le reste du site pour les boutons de devis par exemple. Dans cette capture d’écran nous pouvons voir le carrousel ou pour chaque image, un texte correspondant à l’image et les dots correspondant en bas de l’image s’affiche.",
    imgdetail: printdetail,
    imgdetailalt: "Print It Detail Image",
    imggrl: printgrl,
    imggrlalt: "Print It Grl Image",
  },
  {
    id: "sophie-bluel",
    iconSrc: projectIcons.sophie,
    iconAlt: "Sophie Bluel Icon",
    title: "Sophie Bluel",
    description: "Création d'un portfolio avec Javascript, à partir d'une version HTML et CSS.",
    scenario: "Sophie Bluel, une photographe et designer talentueuse, souhaitait créer un portfolio en ligne pour présenter son travail. En tant que développeur junior, ma mission était de transformer une version statique HTML et CSS de son portfolio en une expérience interactive en utilisant JavaScript. Je devais ajouter des fonctionnalités telles que des galeries d'images dynamiques, des filtres de recherche, et des animations pour rendre le portfolio plus attrayant et facile à naviguer pour les visiteurs.",
    details: "Dans ce projet, j'étais chargé en utilisant Javascript de rendre dynamique ce site en ajoutant un filtre de travaux et en gérant le login qui permet de passer en mode édition autorisant l’ajout et la suppression de travaux. Il y a différents angles d’amélioration rendant plus moderne la page en donnant du style aux titres des images par exemple ou en ajoutant quelques animations au survol des images. On peut également augmenter les contrastes sur la page la rendant plus accessible. Dans cette capture d’écran nous pouvons voir le la modale permettant de supprimer les images, et permettant si on le souhaite d’en ajouter.",
    imgdetail: sophiedetail,
    imgdetailalt: "Sophie Bluel Detail Image",
    imggrl: sophiegrl,
    imggrlalt: "Sophie Bluel Grl Image",
  },
  {
    id: "kasa",
    iconSrc: projectIcons.kasa,
    iconAlt: "Kasa Icon",
    title: "Kasa",
    description: "Création d'une application web de location immobilière avec React.",
    scenario: "Dans le rôle d'un développeur junior, j'étais chargé de créer une application web de location immobilière appelée Kasa en utilisant React. Ma mission était de développer une interface utilisateur intuitive et responsive qui permet aux utilisateurs de rechercher, filtrer et réserver des logements. Je devais intégrer des fonctionnalités telles que la gestion des réservations, les avis des utilisateurs, et une carte interactive pour localiser les propriétés. Ce projet m'a permis de mettre en pratique mes compétences en React tout en créant une application fonctionnelle et attrayante pour les utilisateurs à la recherche de logements à louer.",
    details: "Dans ce projet, j’étais chargé en utilisant React de avec l’appui des maquettes figma de créer les pages du site page principale avec les appartements, la page appartement, la page erreur et la page à propos. L’ensemble de ces pages est géré avec react router. L’utilisation de React permet l’utilisation de composants réutilisables comme la bannière ou les sections accordéon par exemple. Différents angles d’améliorations sont envisageable, le style peut être modifié pour rendre plus moderne, les couleurs peuvent être plus contrastées pour l’accessibilité. Dans cette capture d’écran nous pouvons voir 4 fois le même composant section type accordéon. React permet la réutilisation de ces composants dans différentes pages.",
    imgdetail: kasadetail,
    imgdetailalt: "Kasa Detail Image",
    imggrl: kasagrl,
    imggrlalt: "Kasa Grl Image",
  },
  {
    id: "nina-carducci",
    iconSrc: projectIcons.ninacarducci,
    iconAlt: "Nina Carducci Icon",
    title: "Nina Carducci",
    description: "Optimisation du référencement du portfolio de Nina Carducci, photographe et designer.",
    scenario: "Nina Carducci, une photographe et designer talentueuse, souhaitait améliorer le référencement de son portfolio en ligne. Dans le rôle d'un développeur junior, ma mission était d'optimiser le SEO (Search Engine Optimization) de son site web pour augmenter sa visibilité sur les moteurs de recherche. Je devais analyser le code existant, identifier les opportunités d'amélioration du référencement, et mettre en œuvre des techniques telles que l'optimisation des balises meta, l'amélioration de la structure du site, et l'ajout de contenu pertinent pour attirer davantage de visiteurs et améliorer le classement du site dans les résultats de recherche.",
    details: "Dans ce projet, j’étais chargé à l’aide des outils Wave et lighthouse d’améliorer les performances, accessibilité et SEO de la page web d’une photographe. Il y avait 2 types de changement:  les changements visibles directement pour résoudre les problèmes de contraste. Et, les modifications de code comme ajout des balise de titre H1,H2, les alt sur les images, l’ajout des métadonnées. Cela améliore le référencement par le moteur de recherche. Il y a peu d’axes d’améliorations dans ce cas, on peut supprimer du code CSS et JS inutilisé bootstrap ayant été utilisé dans ce projet. Dans cette capture d’écran, nous pouvons voir un encadré sur les filtres ce qui augmente le contraste et permet une meilleure accessibilité.",
    imgdetail: ninacarduccidetail,
    imgdetailalt: "Nina Carducci Detail Image",
    imggrl: ninacarduccigrl,
    imggrlalt: "Nina Carducci Grl Image",
  },
  {
    id: "724events",
    iconSrc: projectIcons.events,
    iconAlt: "724events Icon",
    title: "724events",
    description: "Projet de debugg d'une page web pour une agence d'évenmentiel",
    scenario: "Dans le rôle d'un développeur junior embauché par 724events, une agence d'événementiel, je devais résoudre des problèmes de débogage sur leur page web. Ma mission était d'identifier et de corriger les erreurs qui affectaient la fonctionnalité et l'apparence du site. Je devais analyser le code existant, utiliser des outils de débogage pour localiser les problèmes, et apporter les modifications nécessaires pour assurer que la page fonctionne correctement et offre une expérience utilisateur optimale.",
    details: "Dans ce projet, j’étais chargé de débuggé certains problèmes visibles et de fonctionnement présent sur le site d’une agence d'événementiel. Différents défaut était présent comme le carrousel ou les dates n’était pas dans l’ordre de la plus récente à la plus ancienne. Le filtre des événements ne fonctionnait pas, le formulaire de contact ne permettait pas l’envoi. La vignette de dernière prestation en bas de page n’apparaissait pas. Différents axes d’amélioration sont envisageables pour améliorer la vie des utilisateurs, animations et transitions pour le style et résoudre les problèmes d'accessibilité en ajoutant les alt, labels et augmentant le contrastes. Dans cette capture d’écran, nous pouvons voir le filtre qui ne fonctionnait pas avant et maintenant permet de classer les événements par catégories ou de les afficher tous.",
    imgdetail: eventsdetail,
    imgdetailalt: "724events Detail Image",
    imggrl: eventsgrl,
    imggrlalt: "724events Grl Image",
  },
  {
    id: "argent-bank",
    iconSrc: projectIcons.argentbank,
    iconAlt: "ArgentBank Icon",
    title: "Argent Bank",
    description: "Implémentation du Front-end d'une application bancaire avec React et Redux pour la gestion de l'état global de l'application",
    scenario: "Dans le rôle d'un développeur junior embauché par Argent Bank, une institution financière, je devais implémenter le front-end de leur application bancaire en utilisant React et Redux. Ma mission était de développer une interface utilisateur intuitive et responsive qui permet aux utilisateurs de gérer leurs comptes bancaires, effectuer des transactions, et consulter leurs relevés. Je devais intégrer des fonctionnalités telles que la gestion des utilisateurs, la visualisation des données financières, et l'implémentation de Redux pour gérer l'état global de l'application de manière efficace. Ce projet me permettait de mettre en pratique mes compétences en React et Redux tout en créant une application bancaire fonctionnelle et sécurisée pour les utilisateurs.",
    details: "Dans ce projet, l’objectif était d’implémenter le front-end de l’application d’une banque avec React et Redux. En utilisant ces technologies, on devait gérer l’état global de l’application et donc permettre l'accès de chaque client à ses comptes, garder la connexion même en cas de fermeture de page et, pouvoir gérer le changement de nom d’utilisateur. Différents axes d’amélioration et de développement sont possibles pour ce projet. On peut utiliser les routes que l’on a suggérées dans le projet pour implémenter le back-end, on peut également conjointement coté front-end implémenter les liste de transactions avec les détails, ajouter un bouton d’ajout de compte à la liste. Dans la capture d’écran, on peut voir la page de compte, dans celle-ci on peut voir le nom Iron qui peut être modifié en cliquant sur le bouton edit username, on peut se déconnecter en cliquant sur sign out dans le header, cela est géré avec React et Redux. Et, on peut voir un composant de compte utiliser 3 fois.",
    imgdetail: argentbankdetail,
    imgdetailalt: "ArgentBank Detail Image",
    imggrl: argentbankgrl,
    imggrlalt: "ArgentBank Grl Image",
  },
];