export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswers: number[]
  explanation: string
  keyPoint: string
  trap?: string
  difficulty: "facile" | "intermédiaire" | "difficile" | "piège"
  category: string
}

export const questions: Question[] = [
  // ========== INTRODUCTION ==========
  {
    id: 1,
    question: "La coagulation plasmatique est une cascade de réactions enzymatiques qui transforme :",
    options: [
      "Le fibrinogène soluble en fibrine insoluble",
      "La fibrine soluble en fibrinogène insoluble",
      "La thrombine en prothrombine",
      "Les plaquettes en mégacaryocytes",
      "L'antithrombine en thrombine"
    ],
    correctAnswers: [0],
    explanation: "La coagulation plasmatique transforme le fibrinogène soluble en fibrine insoluble, formant ainsi le thrombus rouge. Cette fibrine est ensuite stabilisée par le facteur XIII activé.",
    keyPoint: "Fibrinogène soluble → Fibrine insoluble = Thrombus rouge",
    difficulty: "facile",
    category: "Introduction"
  },
  {
    id: 2,
    question: "Le facteur qui stabilise la fibrine est :",
    options: [
      "Facteur X",
      "Facteur XIII",
      "Facteur VIII",
      "Facteur V",
      "Facteur II"
    ],
    correctAnswers: [1],
    explanation: "Le facteur XIII (facteur stabilisant de la fibrine) est une proenzyme qui, une fois activée, permet la stabilisation de la fibrine en établissant des liaisons covalentes entre les monomères de fibrine.",
    keyPoint: "Facteur XIII = Stabilisant de la fibrine",
    trap: "Ne pas confondre avec le facteur XII (Hageman) qui intervient dans la phase contact",
    difficulty: "facile",
    category: "Introduction"
  },
  {
    id: 3,
    question: "Une altération de la coagulation plasmatique entraîne des hémorragies de type :",
    options: [
      "Cutanéo-muqueuses superficielles",
      "Profondes (hématomes, hémarthroses)",
      "Pétéchiales",
      "Purpura",
      "Ecchymoses légères"
    ],
    correctAnswers: [1],
    explanation: "Les troubles de la coagulation plasmatique entraînent des hémorragies profondes comme les hématomes et les hémarthroses, contrairement aux troubles plaquettaires qui donnent des hémorragies cutanéo-muqueuses.",
    keyPoint: "Coagulation altérée = Hémorragies profondes (hématomes, hémarthroses)",
    trap: "Les hémorragies cutanéo-muqueuses sont plutôt liées à des troubles de l'hémostase primaire",
    difficulty: "intermédiaire",
    category: "Introduction"
  },
  {
    id: 4,
    question: "Le pronostic engagé en cas d'altération de la coagulation peut être :",
    options: [
      "Uniquement vital",
      "Uniquement fonctionnel",
      "Vital et fonctionnel",
      "Aucun pronostic n'est engagé",
      "Esthétique uniquement"
    ],
    correctAnswers: [2],
    explanation: "L'altération de la coagulation engage à la fois le pronostic vital (hémorragies graves) et fonctionnel (séquelles articulaires en cas d'hémarthroses répétées).",
    keyPoint: "Pronostic vital ET fonctionnel engagé",
    difficulty: "facile",
    category: "Introduction"
  },

  // ========== CELLULES IMPLIQUÉES ==========
  {
    id: 5,
    question: "Parmi les cellules suivantes, lesquelles sécrètent le facteur tissulaire (FT) ?",
    options: [
      "Cellules endothéliales lésées",
      "Fibroblastes",
      "Péricytes",
      "Monocytes",
      "Toutes les réponses sont correctes"
    ],
    correctAnswers: [4],
    explanation: "Le facteur tissulaire est sécrété par les cellules endothéliales lésées, les fibroblastes, les péricytes et peut également être exprimé par les monocytes.",
    keyPoint: "FT = Cellules endothéliales lésées + Fibroblastes + Péricytes + Monocytes",
    difficulty: "intermédiaire",
    category: "Cellules impliquées"
  },
  {
    id: 6,
    question: "Les plaquettes activées contribuent à la coagulation par :",
    options: [
      "Externalisation des phospholipides anioniques membranaires",
      "Exposition de la glycoprotéine GP IIbIIIa",
      "Libération de facteurs de coagulation et calcium",
      "Libération d'ADP, ATP et thromboxane A2",
      "Toutes les réponses sont correctes"
    ],
    correctAnswers: [4],
    explanation: "Les plaquettes activées contribuent de multiples façons : surface procoagulante via les phospholipides anioniques, exposition des GP, libération de facteurs de coagulation, calcium, ADP, ATP et TXA2.",
    keyPoint: "Plaquettes activées = Surface procoagulante + GP IIbIIIa + Libération facteurs",
    difficulty: "intermédiaire",
    category: "Cellules impliquées"
  },
  {
    id: 7,
    question: "La surface procoagulante des plaquettes activées permet :",
    options: [
      "L'adhésion des facteurs de coagulation",
      "La répulsion des facteurs de coagulation",
      "L'inhibition de la thrombine",
      "L'activation de l'antithrombine",
      "La lyse du caillot"
    ],
    correctAnswers: [0],
    explanation: "L'externalisation des phospholipides anioniques membranaires crée une surface procoagulante qui permet l'adhésion des facteurs de la coagulation.",
    keyPoint: "Phospholipides anioniques = Surface procoagulante = Adhésion facteurs",
    difficulty: "facile",
    category: "Cellules impliquées"
  },
  {
    id: 8,
    question: "Quelle glycoprotéine plaquettaire est exposée lors de l'activation des plaquettes ?",
    options: [
      "GP Ib",
      "GP IIbIIIa",
      "GP IV",
      "GP VI",
      "GP Ia"
    ],
    correctAnswers: [1],
    explanation: "La GP IIbIIIa est la glycoprotéine membranaire exposée lors de l'activation plaquettaire, permettant l'agrégation plaquettaire via le fibrinogène.",
    keyPoint: "Activation plaquettaire → Exposition GP IIbIIIa",
    difficulty: "intermédiaire",
    category: "Cellules impliquées"
  },

  // ========== FACTEURS DE LA COAGULATION ==========
  {
    id: 9,
    question: "Les facteurs vitamino-K dépendants sont :",
    options: [
      "I, II, V, VII",
      "II, VII, IX, X",
      "V, VIII, XI, XII",
      "I, V, VIII, XIII",
      "II, V, IX, X"
    ],
    correctAnswers: [1],
    explanation: "Les facteurs vitamino-K dépendants sont le II (prothrombine), VII (proconvertine), IX (antihémophilique B) et X (Stuart). Mnémonique : PPSB ou 2, 7, 9, 10.",
    keyPoint: "Facteurs vit K-dépendants = II, VII, IX, X (PPSB)",
    trap: "Le facteur V n'est PAS vitamino-K dépendant malgré son nom de proaccélérine",
    difficulty: "difficile",
    category: "Facteurs de coagulation"
  },
  {
    id: 10,
    question: "Le fibrinogène est aussi appelé :",
    options: [
      "Facteur I",
      "Facteur II",
      "Facteur III",
      "Facteur IV",
      "Facteur V"
    ],
    correctAnswers: [0],
    explanation: "Le fibrinogène correspond au facteur I de la coagulation. C'est le précurseur de la fibrine.",
    keyPoint: "Fibrinogène = Facteur I",
    difficulty: "facile",
    category: "Facteurs de coagulation"
  },
  {
    id: 11,
    question: "La prothrombine correspond à quel facteur ?",
    options: [
      "Facteur I",
      "Facteur II",
      "Facteur III",
      "Facteur V",
      "Facteur VII"
    ],
    correctAnswers: [1],
    explanation: "La prothrombine est le facteur II, proenzyme vitamino-K dépendante synthétisée par le foie avec une demi-vie de 80 heures.",
    keyPoint: "Prothrombine = Facteur II (vit K-dépendant)",
    difficulty: "facile",
    category: "Facteurs de coagulation"
  },
  {
    id: 12,
    question: "Le facteur antihémophilique A correspond au :",
    options: [
      "Facteur VII",
      "Facteur VIII",
      "Facteur IX",
      "Facteur X",
      "Facteur XI"
    ],
    correctAnswers: [1],
    explanation: "Le facteur VIII est le facteur antihémophilique A, son déficit cause l'hémophilie A. Il est synthétisé par l'endothélium du foie et lié au facteur von Willebrand.",
    keyPoint: "Facteur VIII = Antihémophilique A (lié au FvW)",
    difficulty: "facile",
    category: "Facteurs de coagulation"
  },
  {
    id: 13,
    question: "Le facteur antihémophilique B correspond au :",
    options: [
      "Facteur VII",
      "Facteur VIII",
      "Facteur IX",
      "Facteur X",
      "Facteur XI"
    ],
    correctAnswers: [2],
    explanation: "Le facteur IX est le facteur antihémophilique B, son déficit cause l'hémophilie B. C'est un facteur vitamino-K dépendant.",
    keyPoint: "Facteur IX = Antihémophilique B (vit K-dépendant)",
    difficulty: "facile",
    category: "Facteurs de coagulation"
  },
  {
    id: 14,
    question: "Le facteur VII est également appelé :",
    options: [
      "Proaccélérine",
      "Proconvertine",
      "Facteur Stuart",
      "Facteur Hageman",
      "Facteur Rosental"
    ],
    correctAnswers: [1],
    explanation: "Le facteur VII est la proconvertine, facteur vitamino-K dépendant avec la demi-vie la plus courte (6 heures) parmi les facteurs de coagulation.",
    keyPoint: "Facteur VII = Proconvertine (demi-vie 6h, la plus courte)",
    difficulty: "intermédiaire",
    category: "Facteurs de coagulation"
  },
  {
    id: 15,
    question: "Le facteur X est aussi appelé :",
    options: [
      "Facteur Rosental",
      "Facteur Stuart",
      "Facteur Hageman",
      "Proconvertine",
      "Proaccélérine"
    ],
    correctAnswers: [1],
    explanation: "Le facteur X est le facteur Stuart, une proenzyme vitamino-K dépendante avec une demi-vie de 48 heures.",
    keyPoint: "Facteur X = Stuart (vit K-dépendant)",
    difficulty: "intermédiaire",
    category: "Facteurs de coagulation"
  },
  {
    id: 16,
    question: "Le facteur XII est également connu sous le nom de :",
    options: [
      "Facteur Rosental",
      "Facteur Stuart",
      "Facteur Hageman",
      "Proconvertine",
      "Proaccélérine"
    ],
    correctAnswers: [2],
    explanation: "Le facteur XII est le facteur Hageman, impliqué dans la phase contact de la voie intrinsèque.",
    keyPoint: "Facteur XII = Hageman (phase contact)",
    difficulty: "intermédiaire",
    category: "Facteurs de coagulation"
  },
  {
    id: 17,
    question: "Le facteur XI correspond au :",
    options: [
      "Facteur Rosental",
      "Facteur Stuart",
      "Facteur Hageman",
      "Proconvertine",
      "Stabilisant de la fibrine"
    ],
    correctAnswers: [0],
    explanation: "Le facteur XI est le facteur Rosental, une proenzyme synthétisée par le foie avec une demi-vie de 60 heures.",
    keyPoint: "Facteur XI = Rosental",
    difficulty: "intermédiaire",
    category: "Facteurs de coagulation"
  },
  {
    id: 18,
    question: "Le facteur tissulaire correspond au :",
    options: [
      "Facteur I",
      "Facteur II",
      "Facteur III",
      "Facteur IV",
      "Facteur V"
    ],
    correctAnswers: [2],
    explanation: "Le facteur tissulaire (FT) est le facteur III, il déclenche la voie extrinsèque de la coagulation.",
    keyPoint: "Facteur tissulaire = Facteur III",
    difficulty: "intermédiaire",
    category: "Facteurs de coagulation"
  },
  {
    id: 19,
    question: "Le calcium correspond au :",
    options: [
      "Facteur II",
      "Facteur III",
      "Facteur IV",
      "Facteur V",
      "Facteur VI"
    ],
    correctAnswers: [2],
    explanation: "Le calcium est le facteur IV, essentiel pour de nombreuses réactions de la cascade de coagulation.",
    keyPoint: "Calcium = Facteur IV",
    difficulty: "facile",
    category: "Facteurs de coagulation"
  },
  {
    id: 20,
    question: "Le site de synthèse principal des facteurs de la coagulation est :",
    options: [
      "La rate",
      "Le foie",
      "La moelle osseuse",
      "Les reins",
      "Les poumons"
    ],
    correctAnswers: [1],
    explanation: "Le foie est le site de synthèse principal de la plupart des facteurs de coagulation. C'est pourquoi l'insuffisance hépatique entraîne des troubles de la coagulation.",
    keyPoint: "Synthèse hépatique des facteurs de coagulation",
    difficulty: "facile",
    category: "Facteurs de coagulation"
  },
  {
    id: 21,
    question: "Le facteur VIII est synthétisé par :",
    options: [
      "Les hépatocytes",
      "L'endothélium du foie",
      "Les mégacaryocytes uniquement",
      "La rate",
      "Les cellules de Kupffer"
    ],
    correctAnswers: [1],
    explanation: "Le facteur VIII est synthétisé par l'endothélium du foie (et non les hépatocytes), ce qui explique pourquoi il peut être normal en cas d'insuffisance hépatocellulaire légère.",
    keyPoint: "FVIII = Endothélium du foie (non hépatocytes)",
    trap: "Ne pas confondre endothélium du foie et hépatocytes",
    difficulty: "difficile",
    category: "Facteurs de coagulation"
  },
  {
    id: 22,
    question: "Le facteur V est synthétisé par :",
    options: [
      "Le foie uniquement",
      "Les mégacaryocytes uniquement",
      "Le foie et les mégacaryocytes",
      "L'endothélium vasculaire",
      "Les cellules endothéliales"
    ],
    correctAnswers: [2],
    explanation: "Le facteur V (proaccélérine) est synthétisé à la fois par le foie et les mégacaryocytes, il est distribué dans le plasma et les plaquettes.",
    keyPoint: "FV = Foie + Mégacaryocytes (plasma + plaquettes)",
    difficulty: "intermédiaire",
    category: "Facteurs de coagulation"
  },
  {
    id: 23,
    question: "Le facteur VIII est lié dans le plasma à :",
    options: [
      "L'albumine",
      "Le facteur von Willebrand",
      "Le fibrinogène",
      "L'antithrombine",
      "La protéine C"
    ],
    correctAnswers: [1],
    explanation: "Le facteur VIII circule dans le plasma lié au facteur von Willebrand (FvW) qui le protège de la dégradation et prolonge sa demi-vie.",
    keyPoint: "FVIII lié au FvW dans le plasma",
    difficulty: "intermédiaire",
    category: "Facteurs de coagulation"
  },
  {
    id: 24,
    question: "Quel facteur a la demi-vie la plus courte ?",
    options: [
      "Facteur I (120h)",
      "Facteur II (80h)",
      "Facteur VII (6h)",
      "Facteur X (48h)",
      "Facteur XIII (240h)"
    ],
    correctAnswers: [2],
    explanation: "Le facteur VII (proconvertine) a la demi-vie la plus courte avec seulement 6 heures. C'est le premier à diminuer lors d'un traitement par AVK ou d'un déficit en vitamine K.",
    keyPoint: "FVII = Demi-vie la plus courte (6h) → Premier à baisser sous AVK",
    difficulty: "difficile",
    category: "Facteurs de coagulation"
  },
  {
    id: 25,
    question: "Quel facteur a la demi-vie la plus longue ?",
    options: [
      "Facteur I (120h)",
      "Facteur II (80h)",
      "Facteur VII (6h)",
      "Facteur X (48h)",
      "Facteur XIII (240h)"
    ],
    correctAnswers: [4],
    explanation: "Le facteur XIII (stabilisant de la fibrine) a la demi-vie la plus longue avec 240 heures (10 jours).",
    keyPoint: "FXIII = Demi-vie la plus longue (240h)",
    difficulty: "difficile",
    category: "Facteurs de coagulation"
  },
  {
    id: 26,
    question: "Le KHPM désigne :",
    options: [
      "Kininogène haut poids moléculaire",
      "Kallikréine hautement polymérisée moléculaire",
      "Kinase à haut potentiel membranaire",
      "Kinine à haute pression membranaire",
      "Aucune réponse n'est correcte"
    ],
    correctAnswers: [0],
    explanation: "KHPM signifie Kininogène de Haut Poids Moléculaire, un cofacteur de la phase contact synthétisé par le foie.",
    keyPoint: "KHPM = Kininogène Haut Poids Moléculaire (cofacteur)",
    difficulty: "facile",
    category: "Facteurs de coagulation"
  },

  // ========== INHIBITEURS DE LA COAGULATION ==========
  {
    id: 27,
    question: "Les inhibiteurs physiologiques de la coagulation sont :",
    options: [
      "Antithrombine, système PC/PS et TFPI",
      "Facteur VIII, IX et X",
      "Thrombine, fibrinogène et fibrine",
      "Prékallikréine et KHPM",
      "Facteur tissulaire et calcium"
    ],
    correctAnswers: [0],
    explanation: "Les trois grands systèmes inhibiteurs de la coagulation sont : l'antithrombine (AT), le système protéine C/protéine S (PC/PS), et le TFPI (inhibiteur de la voie du facteur tissulaire).",
    keyPoint: "Inhibiteurs = AT + PC/PS + TFPI",
    difficulty: "intermédiaire",
    category: "Inhibiteurs"
  },
  {
    id: 28,
    question: "La protéine C et la protéine S sont :",
    options: [
      "Non vitamino-K dépendantes",
      "Vitamino-K dépendantes",
      "Synthétisées par les reins",
      "Des activateurs de la coagulation",
      "Des facteurs de la voie extrinsèque"
    ],
    correctAnswers: [1],
    explanation: "La protéine C et la protéine S sont des inhibiteurs vitamino-K dépendants, synthétisés par le foie. Leur diminution lors d'un traitement AVK explique l'hypercoagulabilité transitoire initiale.",
    keyPoint: "PC et PS = Vitamino-K dépendants → Risque sous AVK",
    trap: "Sous AVK, PC et PS diminuent aussi, créant un risque thrombotique transitoire",
    difficulty: "difficile",
    category: "Inhibiteurs"
  },
  {
    id: 29,
    question: "Le système protéine C/S inhibe :",
    options: [
      "Les facteurs XIa et XIIa",
      "Les facteurs Va et VIIIa",
      "Les facteurs Xa et IIa",
      "Le fibrinogène",
      "Le facteur tissulaire"
    ],
    correctAnswers: [1],
    explanation: "Le système PC/PS inhibe les deux cofacteurs activés : Va et VIIIa, inhibant ainsi les complexes tenase (intrinsèque) et prothrombinase.",
    keyPoint: "PC/PS inhibe Va et VIIIa (cofacteurs activés)",
    difficulty: "difficile",
    category: "Inhibiteurs"
  },
  {
    id: 30,
    question: "L'antithrombine inhibe principalement :",
    options: [
      "Les facteurs Va et VIIIa",
      "Les facteurs Xa et IIa",
      "Le facteur tissulaire",
      "Le fibrinogène",
      "Le facteur XIII"
    ],
    correctAnswers: [1],
    explanation: "L'antithrombine inhibe principalement le Xa suivi du IIa (thrombine). C'est l'inhibiteur le plus puissant de la coagulation.",
    keyPoint: "AT inhibe Xa et IIa (le plus puissant inhibiteur)",
    difficulty: "intermédiaire",
    category: "Inhibiteurs"
  },
  {
    id: 31,
    question: "L'action de l'antithrombine est potentialisée par l'héparine de :",
    options: [
      "10 à 100 fois",
      "100 à 500 fois",
      "1000 à 10000 fois",
      "10000 à 100000 fois",
      "Elle n'est pas potentialisée"
    ],
    correctAnswers: [2],
    explanation: "L'héparine potentialise l'action de l'antithrombine de 1000 à 10000 fois, expliquant son effet anticoagulant majeur.",
    keyPoint: "Héparine potentialise AT x1000 à 10000",
    difficulty: "difficile",
    category: "Inhibiteurs"
  },
  {
    id: 32,
    question: "Le TFPI est synthétisé par :",
    options: [
      "Le foie",
      "Les mégacaryocytes",
      "L'endothélium au repos",
      "Les monocytes",
      "Les plaquettes"
    ],
    correctAnswers: [2],
    explanation: "Le TFPI (Tissue Factor Pathway Inhibitor) est synthétisé par les cellules endothéliales saines (au repos). Il inhibe le complexe FT-FVIIa.",
    keyPoint: "TFPI = Endothélium au repos",
    difficulty: "intermédiaire",
    category: "Inhibiteurs"
  },
  {
    id: 33,
    question: "Le TFPI inhibe :",
    options: [
      "Le complexe tenase intrinsèque",
      "Le complexe prothrombinase",
      "Le complexe FT-FVIIa",
      "L'antithrombine",
      "Le système PC/PS"
    ],
    correctAnswers: [2],
    explanation: "Le complexe TFPI-Xa se lie au complexe FT-FVIIa pour bloquer l'initiation de la coagulation et la génération de thrombine.",
    keyPoint: "TFPI-Xa inhibe FT-FVIIa (bloque l'initiation)",
    difficulty: "difficile",
    category: "Inhibiteurs"
  },
  {
    id: 34,
    question: "La thrombomoduline est exprimée par :",
    options: [
      "Les plaquettes",
      "Les monocytes",
      "L'endothélium",
      "Les hépatocytes",
      "Les fibroblastes"
    ],
    correctAnswers: [2],
    explanation: "La thrombomoduline est exprimée par l'endothélium. Elle forme un complexe avec la thrombine qui active la protéine C.",
    keyPoint: "Thrombomoduline = Endothélium (active PC via thrombine)",
    difficulty: "intermédiaire",
    category: "Inhibiteurs"
  },
  {
    id: 35,
    question: "Le complexe thrombine-thrombomoduline multiplie l'activation de la protéine C par :",
    options: [
      "10",
      "100",
      "1000",
      "10000",
      "100000"
    ],
    correctAnswers: [2],
    explanation: "Le complexe thrombine-thrombomoduline à la surface endothéliale multiplie par 1000 l'activation de la protéine C.",
    keyPoint: "Thrombine-thrombomoduline active PC x1000",
    difficulty: "difficile",
    category: "Inhibiteurs"
  },
  {
    id: 36,
    question: "Un déficit en antithrombine entraîne :",
    options: [
      "Un risque hémorragique",
      "Un risque thrombotique élevé",
      "Une anémie",
      "Une thrombopénie",
      "Aucun risque particulier"
    ],
    correctAnswers: [1],
    explanation: "L'antithrombine étant le principal inhibiteur de la coagulation, son déficit entraîne un risque élevé de thrombose (thrombophilie).",
    keyPoint: "Déficit AT = Risque thrombotique élevé",
    difficulty: "facile",
    category: "Inhibiteurs"
  },

  // ========== VOIE EXTRINSÈQUE ==========
  {
    id: 37,
    question: "La voie extrinsèque est aussi appelée :",
    options: [
      "Phase contact",
      "Phase tissulaire",
      "Voie endogène",
      "Voie commune",
      "Phase d'amplification"
    ],
    correctAnswers: [1],
    explanation: "La voie extrinsèque correspond à la phase tissulaire car elle est déclenchée par le facteur tissulaire libéré lors de la lésion vasculaire.",
    keyPoint: "Voie extrinsèque = Phase tissulaire = Voie rapide",
    difficulty: "facile",
    category: "Voie extrinsèque"
  },
  {
    id: 38,
    question: "La voie extrinsèque est une voie :",
    options: [
      "Lente",
      "Rapide",
      "Moyenne",
      "Variable selon les patients",
      "Inactive in vivo"
    ],
    correctAnswers: [1],
    explanation: "La voie extrinsèque est une voie rapide car elle est directement activée par le facteur tissulaire sans passer par la cascade de la phase contact.",
    keyPoint: "Voie extrinsèque = Voie RAPIDE",
    trap: "La voie intrinsèque est la voie LENTE",
    difficulty: "facile",
    category: "Voie extrinsèque"
  },
  {
    id: 39,
    question: "Le complexe tenase extrinsèque est composé de :",
    options: [
      "FT + VIIa + Ca²⁺ + PL",
      "IXa + VIIIa + Ca²⁺ + PL",
      "Xa + Va + Ca²⁺ + PL",
      "XIa + XIIa + Ca²⁺ + PL",
      "IIa + Fibrinogène"
    ],
    correctAnswers: [0],
    explanation: "Le complexe tenase extrinsèque est formé du facteur tissulaire (FT), du facteur VIIa, du calcium et des phospholipides.",
    keyPoint: "Tenase extrinsèque = FT + VIIa + Ca²⁺ + PL",
    trap: "Ne pas confondre avec le complexe tenase intrinsèque (IXa + VIIIa + Ca²⁺ + PL)",
    difficulty: "difficile",
    category: "Voie extrinsèque"
  },
  {
    id: 40,
    question: "Quel facteur est activé par le facteur tissulaire ?",
    options: [
      "Facteur V",
      "Facteur VII",
      "Facteur VIII",
      "Facteur IX",
      "Facteur XI"
    ],
    correctAnswers: [1],
    explanation: "Le facteur tissulaire active le facteur VII en VIIa pour former le complexe tenase extrinsèque.",
    keyPoint: "FT active FVII → FVIIa",
    difficulty: "facile",
    category: "Voie extrinsèque"
  },

  // ========== VOIE INTRINSÈQUE ==========
  {
    id: 41,
    question: "La voie intrinsèque est aussi appelée :",
    options: [
      "Phase tissulaire",
      "Phase contact",
      "Voie exogène",
      "Voie commune",
      "Phase de propagation"
    ],
    correctAnswers: [1],
    explanation: "La voie intrinsèque correspond à la phase contact car elle est déclenchée par le contact du sang avec les surfaces chargées négativement.",
    keyPoint: "Voie intrinsèque = Phase contact = Voie lente",
    difficulty: "facile",
    category: "Voie intrinsèque"
  },
  {
    id: 42,
    question: "La voie intrinsèque est une voie :",
    options: [
      "Rapide",
      "Lente",
      "Moyenne",
      "Variable",
      "Inactive in vivo"
    ],
    correctAnswers: [1],
    explanation: "La voie intrinsèque est une voie lente car elle nécessite l'activation en cascade de plusieurs facteurs de la phase contact.",
    keyPoint: "Voie intrinsèque = Voie LENTE",
    difficulty: "facile",
    category: "Voie intrinsèque"
  },
  {
    id: 43,
    question: "La voie intrinsèque est activée par le contact du sang avec :",
    options: [
      "Le facteur tissulaire",
      "Les surfaces chargées négativement comme le collagène",
      "Les plaquettes uniquement",
      "Le fibrinogène",
      "La thrombine"
    ],
    correctAnswers: [1],
    explanation: "La voie intrinsèque est activée par le contact du sang avec les surfaces chargées négativement comme le collagène exposé lors d'une lésion vasculaire.",
    keyPoint: "Activation par surfaces chargées négativement (collagène)",
    difficulty: "facile",
    category: "Voie intrinsèque"
  },
  {
    id: 44,
    question: "Le complexe tenase intrinsèque est composé de :",
    options: [
      "FT + VIIa + Ca²⁺ + PL",
      "IXa + VIIIa + Ca²⁺ + PL",
      "Xa + Va + Ca²⁺ + PL",
      "XIa + XIIa + Ca²⁺ + PL",
      "IIa + Fibrinogène"
    ],
    correctAnswers: [1],
    explanation: "Le complexe tenase intrinsèque est formé du facteur IXa, du facteur VIIIa (cofacteur), du calcium et des phospholipides.",
    keyPoint: "Tenase intrinsèque = IXa + VIIIa + Ca²⁺ + PL",
    trap: "Ne pas confondre avec le complexe tenase extrinsèque (FT + VIIa + Ca²⁺ + PL)",
    difficulty: "difficile",
    category: "Voie intrinsèque"
  },
  {
    id: 45,
    question: "Dans la voie intrinsèque, la prékallikréine est transformée en :",
    options: [
      "Thrombine",
      "Kallikréine",
      "Plasmine",
      "Fibrine",
      "Antithrombine"
    ],
    correctAnswers: [1],
    explanation: "Dans la phase contact, la prékallikréine est transformée en kallikréine par le KHPM (kininogène de haut poids moléculaire).",
    keyPoint: "Prékallikréine → Kallikréine (via KHPM)",
    difficulty: "intermédiaire",
    category: "Voie intrinsèque"
  },
  {
    id: 46,
    question: "L'ordre d'activation dans la voie intrinsèque est :",
    options: [
      "XII → XI → IX → X",
      "VII → X → II → I",
      "VIII → IX → X → II",
      "XI → XII → IX → X",
      "IX → XI → XII → X"
    ],
    correctAnswers: [0],
    explanation: "Dans la voie intrinsèque : XII → XIIa → XI → XIa → IX → IXa, puis le complexe tenase active le X.",
    keyPoint: "Cascade : XII → XI → IX → X",
    difficulty: "difficile",
    category: "Voie intrinsèque"
  },
  {
    id: 47,
    question: "Les déficits en prékallikréine, KHPM et facteur XII entraînent :",
    options: [
      "Un risque hémorragique majeur",
      "Un risque hémorragique modéré",
      "Pas de risque hémorragique",
      "Un risque thrombotique",
      "Une thrombopénie"
    ],
    correctAnswers: [2],
    explanation: "Les déficits en prékallikréine, KHPM et facteur XII n'entraînent pas de risque hémorragique car la voie intrinsèque a un rôle limité in vivo. Ces déficits allongent le TCA in vitro mais sans conséquence clinique.",
    keyPoint: "Déficit PK/KHPM/FXII = Pas de risque hémorragique (rôle limité in vivo)",
    trap: "Un TCA allongé ne signifie pas toujours un risque hémorragique !",
    difficulty: "piège",
    category: "Voie intrinsèque"
  },

  // ========== VOIE COMMUNE ET COMPLEXE PROTHROMBINASE ==========
  {
    id: 48,
    question: "Le complexe prothrombinase est composé de :",
    options: [
      "FT + VIIa + Ca²⁺ + PL",
      "IXa + VIIIa + Ca²⁺ + PL",
      "Xa + Va + Ca²⁺ + PL",
      "XIa + XIIa + Ca²⁺ + PL",
      "IIa + Fibrinogène"
    ],
    correctAnswers: [2],
    explanation: "Le complexe prothrombinase est formé du facteur Xa, du facteur Va (cofacteur), du calcium et des phospholipides. Il transforme la prothrombine en thrombine.",
    keyPoint: "Prothrombinase = Xa + Va + Ca²⁺ + PL",
    difficulty: "difficile",
    category: "Voie commune"
  },
  {
    id: 49,
    question: "Le complexe prothrombinase transforme :",
    options: [
      "Le facteur X en Xa",
      "La prothrombine en thrombine",
      "Le fibrinogène en fibrine",
      "Le facteur VIII en VIIIa",
      "Le facteur V en Va"
    ],
    correctAnswers: [1],
    explanation: "Le complexe prothrombinase (Xa + Va + Ca²⁺ + PL) catalyse la transformation de la prothrombine (facteur II) en thrombine (facteur IIa).",
    keyPoint: "Prothrombinase : Prothrombine → Thrombine",
    difficulty: "intermédiaire",
    category: "Voie commune"
  },
  {
    id: 50,
    question: "La thrombine transforme :",
    options: [
      "La prothrombine en thrombine",
      "Le facteur X en Xa",
      "Le fibrinogène en fibrine",
      "Le facteur XII en XIIa",
      "L'antithrombine en thrombine"
    ],
    correctAnswers: [2],
    explanation: "La thrombine (facteur IIa) est l'enzyme clé qui transforme le fibrinogène soluble en fibrine insoluble.",
    keyPoint: "Thrombine : Fibrinogène → Fibrine",
    difficulty: "facile",
    category: "Voie commune"
  },

  // ========== CONCEPT CELLULAIRE (NOUVEAU CONCEPT) ==========
  {
    id: 51,
    question: "Le nouveau concept cellulaire de la coagulation comprend trois phases :",
    options: [
      "Voie intrinsèque, extrinsèque et commune",
      "Initiation, amplification et propagation",
      "Primaire, secondaire et tertiaire",
      "Adhésion, activation et agrégation",
      "Contact, tissulaire et commune"
    ],
    correctAnswers: [1],
    explanation: "Le concept cellulaire moderne (1990-2000) divise la coagulation en trois phases : initiation, amplification et propagation.",
    keyPoint: "Concept cellulaire = Initiation + Amplification + Propagation",
    difficulty: "facile",
    category: "Concept cellulaire"
  },
  {
    id: 52,
    question: "Dans le concept cellulaire, quel facteur joue un rôle central ?",
    options: [
      "Le facteur XII",
      "Le facteur tissulaire",
      "Le facteur V",
      "Le fibrinogène",
      "L'antithrombine"
    ],
    correctAnswers: [1],
    explanation: "Le concept cellulaire met en avant le rôle central du facteur tissulaire dans l'initiation de la coagulation.",
    keyPoint: "FT = Rôle central dans le concept cellulaire",
    difficulty: "facile",
    category: "Concept cellulaire"
  },
  {
    id: 53,
    question: "Quelle proportion du facteur VII circule sous forme activée (VIIa) à l'état physiologique ?",
    options: [
      "0%",
      "Environ 1%",
      "Environ 10%",
      "Environ 50%",
      "100%"
    ],
    correctAnswers: [1],
    explanation: "Environ 1% du facteur VII circule sous forme activée (VIIa) à l'état physiologique, permettant une réponse immédiate en cas de lésion vasculaire.",
    keyPoint: "1% du FVII est VIIa → Réponse immédiate",
    difficulty: "difficile",
    category: "Concept cellulaire"
  },
  {
    id: 54,
    question: "La phase d'initiation génère :",
    options: [
      "De grandes quantités de thrombine",
      "De premières traces de thrombine",
      "Du fibrinogène",
      "Du facteur XIII activé",
      "Des complexes immuns"
    ],
    correctAnswers: [1],
    explanation: "La phase d'initiation génère de premières traces de thrombine grâce au complexe FT-VIIa qui active le facteur X.",
    keyPoint: "Initiation = Premières traces de thrombine",
    difficulty: "intermédiaire",
    category: "Concept cellulaire"
  },
  {
    id: 55,
    question: "La phase d'amplification est caractérisée par :",
    options: [
      "L'initiation de la coagulation",
      "La génération de grandes quantités de complexes tenase et prothrombinase",
      "La fibrinolyse",
      "L'inhibition par l'antithrombine",
      "La formation du clou plaquettaire"
    ],
    correctAnswers: [1],
    explanation: "La phase d'amplification voit la production d'une grande quantité des complexes tenase et prothrombinase grâce à la thrombine qui active les plaquettes et les facteurs V, VIII, XIII.",
    keyPoint: "Amplification = Grande quantité de complexes tenase + prothrombinase",
    difficulty: "intermédiaire",
    category: "Concept cellulaire"
  },
  {
    id: 56,
    question: "Lors de la phase d'amplification, la thrombine active :",
    options: [
      "Les plaquettes uniquement",
      "Les facteurs V, VIII et XIII uniquement",
      "Les plaquettes et les facteurs V, VIII et XIII",
      "L'antithrombine",
      "Le système PC/PS"
    ],
    correctAnswers: [2],
    explanation: "Lors de l'amplification, la thrombine active à la fois les plaquettes (recrutement au site de la brèche) et les facteurs V, VIII et XIII, créant une boucle d'amplification.",
    keyPoint: "Thrombine active : Plaquettes + FV + FVIII + FXIII",
    difficulty: "intermédiaire",
    category: "Concept cellulaire"
  },
  {
    id: 57,
    question: "La phase de propagation aboutit à :",
    options: [
      "L'initiation de la coagulation",
      "La génération de traces de thrombine",
      "Le nuage thrombinique et la fibrinoformation",
      "L'inhibition de la coagulation",
      "L'activation du facteur XII"
    ],
    correctAnswers: [2],
    explanation: "La propagation génère un nuage thrombinique (grande quantité de thrombine) qui transforme massivement le fibrinogène en fibrine (fibrinoformation).",
    keyPoint: "Propagation = Nuage thrombinique → Fibrinoformation",
    difficulty: "intermédiaire",
    category: "Concept cellulaire"
  },
  {
    id: 58,
    question: "La stabilisation de la fibrine est assurée par le facteur :",
    options: [
      "Xa",
      "Va",
      "XIIIa",
      "VIIa",
      "IIa"
    ],
    correctAnswers: [2],
    explanation: "Le facteur XIII activé (XIIIa) établit des liaisons covalentes entre les domaines D du fibrinogène, stabilisant ainsi le caillot de fibrine.",
    keyPoint: "FXIIIa stabilise la fibrine (liaisons entre domaines D)",
    difficulty: "facile",
    category: "Concept cellulaire"
  },
  {
    id: 59,
    question: "L'ancien concept en Y reste utilisé pour :",
    options: [
      "Comprendre la physiologie in vivo",
      "L'interprétation des bilans de coagulation in vitro",
      "Le traitement des hémophilies",
      "La compréhension des thrombophilies",
      "Il n'est plus utilisé"
    ],
    correctAnswers: [1],
    explanation: "L'ancien concept en Y (voies intrinsèque, extrinsèque, commune) reste la base pour l'interprétation des tests de laboratoire (TQ, TCA) qui reproduisent ces voies in vitro.",
    keyPoint: "Ancien concept = Base des tests de laboratoire (TQ, TCA)",
    difficulty: "intermédiaire",
    category: "Concept cellulaire"
  },

  // ========== EXPLORATION - TQ ==========
  {
    id: 60,
    question: "Le temps de Quick (TQ) explore :",
    options: [
      "La voie intrinsèque uniquement",
      "La voie extrinsèque et la voie commune",
      "La voie commune uniquement",
      "L'hémostase primaire",
      "La fibrinolyse"
    ],
    correctAnswers: [1],
    explanation: "Le temps de Quick explore la voie extrinsèque (facteur VII) et la voie commune (facteurs X, V, II, I).",
    keyPoint: "TQ = Voie extrinsèque + Voie commune",
    difficulty: "facile",
    category: "Exploration"
  },
  {
    id: 61,
    question: "Le principe du temps de Quick consiste à mesurer le temps de coagulation d'un plasma citrate en présence de :",
    options: [
      "Kaolin et phospholipides",
      "Facteur tissulaire et phospholipides",
      "Acide ellagique et calcium",
      "Silice et calcium",
      "Thrombine"
    ],
    correctAnswers: [1],
    explanation: "Le temps de Quick mesure le temps de coagulation d'un plasma citraté recalcifié en présence d'un excès de facteur tissulaire et de phospholipides.",
    keyPoint: "TQ = FT + PL + Ca²⁺ (explore voie extrinsèque)",
    difficulty: "intermédiaire",
    category: "Exploration"
  },
  {
    id: 62,
    question: "Les valeurs normales du temps de Quick sont :",
    options: [
      "8-10 secondes",
      "12-14 secondes",
      "20-30 secondes",
      "35-45 secondes",
      "60-80 secondes"
    ],
    correctAnswers: [1],
    explanation: "Le temps de Quick normal est de 12-14 secondes. En pratique, on utilise plutôt le taux de prothrombine (TP) exprimé en pourcentage.",
    keyPoint: "TQ normal = 12-14 secondes",
    difficulty: "facile",
    category: "Exploration"
  },
  {
    id: 63,
    question: "Le taux de prothrombine (TP) normal est de :",
    options: [
      "30-50%",
      "50-70%",
      "70-100%",
      "100-120%",
      "120-150%"
    ],
    correctAnswers: [2],
    explanation: "Le taux de prothrombine normal est de 70-100%. C'est l'expression en pourcentage du temps de Quick.",
    keyPoint: "TP normal = 70-100%",
    difficulty: "facile",
    category: "Exploration"
  },
  {
    id: 64,
    question: "La droite de Thivolle permet de convertir :",
    options: [
      "Le TCA en facteur de coagulation",
      "Le temps de Quick en taux de prothrombine",
      "L'INR en TP",
      "Le fibrinogène en D-dimères",
      "L'antithrombine en secondes"
    ],
    correctAnswers: [1],
    explanation: "La droite de Thivolle est une courbe d'étalonnage qui permet de convertir le temps de Quick (en secondes) en taux de prothrombine (en %).",
    keyPoint: "Droite de Thivolle : TQ (secondes) → TP (%)",
    difficulty: "intermédiaire",
    category: "Exploration"
  },
  {
    id: 65,
    question: "L'INR est utilisé pour surveiller :",
    options: [
      "L'héparine non fractionnée",
      "Les anticoagulants oraux directs",
      "Les antivitamines K",
      "L'aspirine",
      "Le clopidogrel"
    ],
    correctAnswers: [2],
    explanation: "L'INR (International Normalized Ratio) est utilisé pour surveiller le traitement par antivitamines K (AVK), permettant une standardisation entre les laboratoires.",
    keyPoint: "INR = Surveillance AVK",
    difficulty: "facile",
    category: "Exploration"
  },
  {
    id: 66,
    question: "La formule de l'INR est :",
    options: [
      "TQ malade / TQ témoin",
      "(TQ malade / TQ témoin)^ISI",
      "TP malade / TP témoin",
      "TCA malade / TCA témoin",
      "(TCA malade / TCA témoin)^ISI"
    ],
    correctAnswers: [1],
    explanation: "INR = (TQ malade / TQ témoin)^ISI où ISI est l'indice de sensibilité international de la thromboplastine utilisée.",
    keyPoint: "INR = (TQ malade / TQ témoin)^ISI",
    difficulty: "difficile",
    category: "Exploration"
  },
  {
    id: 67,
    question: "L'ISI dans la formule de l'INR représente :",
    options: [
      "L'indice de standardisation internationale",
      "L'indice de sensibilité international de la thromboplastine",
      "L'intervalle de sécurité international",
      "L'indice de stabilité internationale",
      "L'intervalle de sensibilité interne"
    ],
    correctAnswers: [1],
    explanation: "L'ISI (International Sensitivity Index) est l'indice de sensibilité international de la thromboplastine. Chaque réactif possède son ISI spécifique.",
    keyPoint: "ISI = Indice de Sensibilité International de la thromboplastine",
    difficulty: "intermédiaire",
    category: "Exploration"
  },
  {
    id: 68,
    question: "Un TQ allongé peut être dû à :",
    options: [
      "Une insuffisance hépatocellulaire",
      "Un traitement par AVK ou un déficit en vitamine K",
      "Une CIVD",
      "Un déficit en facteur VII, X, V, II ou I",
      "Toutes les réponses sont correctes"
    ],
    correctAnswers: [4],
    explanation: "Un TQ allongé peut être causé par : insuffisance hépatique, traitement AVK/déficit vit K, CIVD, déficits en facteurs de la voie exogène et commune (VII, X, V, II, I), ou présence d'un anticoagulant circulant.",
    keyPoint: "TQ allongé = IHC, AVK, CIVD, déficit VII/X/V/II/I, ACC",
    difficulty: "intermédiaire",
    category: "Exploration"
  },

  // ========== EXPLORATION - TCA ==========
  {
    id: 69,
    question: "Le TCA explore :",
    options: [
      "La voie extrinsèque uniquement",
      "La voie intrinsèque et la voie commune",
      "La voie commune uniquement",
      "L'hémostase primaire",
      "La fibrinolyse"
    ],
    correctAnswers: [1],
    explanation: "Le TCA explore la voie intrinsèque (système contact : XII, XI, IX, VIII, PK, KHPM) et la voie commune (X, V, II, I).",
    keyPoint: "TCA = Voie intrinsèque + Voie commune",
    difficulty: "facile",
    category: "Exploration"
  },
  {
    id: 70,
    question: "Le principe du TCA consiste à mesurer le temps de coagulation d'un plasma citraté en présence de :",
    options: [
      "Facteur tissulaire et phospholipides",
      "Phospholipides et un activateur (kaolin, silice ou acide ellagique)",
      "Thrombine seule",
      "Fibrinogène et calcium",
      "Facteur VIII recombinant"
    ],
    correctAnswers: [1],
    explanation: "Le TCA mesure le temps de coagulation d'un plasma citraté recalcifié en présence de phospholipides et d'un activateur de la phase contact (kaolin, silice ou acide ellagique).",
    keyPoint: "TCA = PL + Activateur (kaolin/silice/acide ellagique) + Ca²⁺",
    difficulty: "intermédiaire",
    category: "Exploration"
  },
  {
    id: 71,
    question: "Le TCA est exprimé en :",
    options: [
      "Pourcentage uniquement",
      "Secondes avec un rapport patient/témoin",
      "INR",
      "g/L",
      "UI/mL"
    ],
    correctAnswers: [1],
    explanation: "Le TCA est exprimé en secondes et doit être interprété par rapport au témoin (rapport TCA patient/TCA témoin).",
    keyPoint: "TCA = Secondes + Rapport TCA patient/témoin",
    difficulty: "facile",
    category: "Exploration"
  },
  {
    id: 72,
    question: "Le rapport TCA patient/témoin normal est :",
    options: [
      "< 0.5",
      "< 1.0",
      "< 1.2 chez l'adulte, < 1.3 chez l'enfant",
      "< 2.0",
      "> 3.0"
    ],
    correctAnswers: [2],
    explanation: "Le rapport TCA patient/témoin normal est < 1.2 chez l'adulte et < 1.3 chez l'enfant.",
    keyPoint: "Rapport TCA normal : < 1.2 (adulte), < 1.3 (enfant)",
    difficulty: "intermédiaire",
    category: "Exploration"
  },
  {
    id: 73,
    question: "Le TCA est utilisé pour surveiller :",
    options: [
      "Les antivitamines K",
      "L'héparine non fractionnée (HNF) à dose curative",
      "L'aspirine",
      "Les anti-Xa directs",
      "Le clopidogrel"
    ],
    correctAnswers: [1],
    explanation: "Le TCA est utilisé pour surveiller l'héparinothérapie curative par héparine non fractionnée (HNF). Le TCA patient doit être 2 à 3 fois celui du témoin.",
    keyPoint: "TCA surveille HNF curative (TCA = 2-3x témoin)",
    difficulty: "facile",
    category: "Exploration"
  },
  {
    id: 74,
    question: "Sous héparine non fractionnée curative, le TCA patient doit être :",
    options: [
      "1 à 1.5 fois celui du témoin",
      "2 à 3 fois celui du témoin",
      "3 à 4 fois celui du témoin",
      "4 à 5 fois celui du témoin",
      "Identique au témoin"
    ],
    correctAnswers: [1],
    explanation: "Sous HNF curative, le TCA patient doit être 2 à 3 fois celui du témoin pour assurer une anticoagulation efficace.",
    keyPoint: "HNF curative : TCA = 2-3x témoin",
    difficulty: "intermédiaire",
    category: "Exploration"
  },
  {
    id: 75,
    question: "Un TCA allongé peut être dû à :",
    options: [
      "Un déficit en facteurs de la voie intrinsèque (VIII, IX, XI, XII, PK, KHPM)",
      "Un déficit en facteurs de la voie commune (I, II, V, X)",
      "Un traitement par héparine non fractionnée",
      "La présence d'anticoagulants circulants",
      "Toutes les réponses sont correctes"
    ],
    correctAnswers: [4],
    explanation: "Un TCA allongé peut être causé par : déficits en facteurs de la voie intrinsèque ou commune, héparinothérapie, anticoagulants circulants, ou CIVD.",
    keyPoint: "TCA allongé = Déficit voie intrinsèque/commune, HNF, ACC, CIVD",
    difficulty: "intermédiaire",
    category: "Exploration"
  },

  // ========== TEST DE MÉLANGE ET DOSAGES ==========
  {
    id: 76,
    question: "Le test de mélange est réalisé devant :",
    options: [
      "Un TQ allongé",
      "Un TCA allongé",
      "Un fibrinogène bas",
      "Des D-dimères élevés",
      "Une thrombopénie"
    ],
    correctAnswers: [1],
    explanation: "Le test de mélange est réalisé devant un TCA allongé pour distinguer un déficit en facteur (correction) d'un anticoagulant circulant (pas de correction).",
    keyPoint: "Test de mélange = TCA allongé (différencier déficit vs ACC)",
    difficulty: "facile",
    category: "Exploration"
  },
  {
    id: 77,
    question: "Le test de mélange consiste à :",
    options: [
      "Mélanger plasma patient + plasma témoin volume à volume, incuber 2h à 37°C",
      "Mélanger plasma patient + héparine",
      "Mélanger plasma patient + facteur tissulaire",
      "Mélanger plasma patient + thrombine",
      "Mélanger plasma patient + fibrinogène"
    ],
    correctAnswers: [0],
    explanation: "Le test de mélange consiste à mélanger volume à volume le plasma patient et le plasma témoin, incuber 2h à 37°C, puis mesurer le TCA du mélange.",
    keyPoint: "Mélange 1:1 patient/témoin → Incubation 2h à 37°C → TCA",
    difficulty: "intermédiaire",
    category: "Exploration"
  },
  {
    id: 78,
    question: "L'indice de Rosner permet d'interpréter le test de mélange. Un indice > 15% indique :",
    options: [
      "Un déficit en facteur",
      "La présence d'un anticoagulant circulant",
      "Un résultat normal",
      "Une héparinothérapie efficace",
      "Une thrombophilie"
    ],
    correctAnswers: [1],
    explanation: "Un indice de Rosner > 15% indique la présence d'un anticoagulant circulant. < 12% = déficit en facteur. 12-15% = douteux.",
    keyPoint: "Rosner > 15% = ACC, < 12% = déficit, 12-15% = douteux",
    difficulty: "difficile",
    category: "Exploration"
  },
  {
    id: 79,
    question: "La valeur normale du fibrinogène est :",
    options: [
      "0.5-1 g/L",
      "1-2 g/L",
      "2-4 g/L",
      "4-6 g/L",
      "6-8 g/L"
    ],
    correctAnswers: [2],
    explanation: "Le fibrinogène normal est de 2-4 g/L. Il augmente dans les syndromes inflammatoires et diminue en cas de consommation (CIVD).",
    keyPoint: "Fibrinogène normal = 2-4 g/L",
    difficulty: "facile",
    category: "Exploration"
  },
  {
    id: 80,
    question: "Le facteur XIII est exploré par :",
    options: [
      "Le TQ",
      "Le TCA",
      "Le TQ et le TCA",
      "Ni le TQ ni le TCA (dosage immunologique)",
      "Le temps de thrombine"
    ],
    correctAnswers: [3],
    explanation: "Le facteur XIII n'est exploré ni par le TQ ni par le TCA. Son dosage nécessite une technique immunologique spécifique.",
    keyPoint: "FXIII non exploré par TQ/TCA → Dosage immunologique",
    trap: "Un TQ et TCA normaux n'excluent pas un déficit en FXIII",
    difficulty: "piège",
    category: "Exploration"
  },

  // ========== CAT DEVANT TQ/TCA ALLONGÉ ==========
  {
    id: 81,
    question: "Un allongement isolé du TQ (TCA normal) évoque :",
    options: [
      "Une hémophilie A",
      "Une hémophilie B",
      "Un déficit en facteur VII ou début de traitement AVK ou IHC modérée",
      "Un déficit en facteur XI",
      "Un déficit en facteur XII"
    ],
    correctAnswers: [2],
    explanation: "Un TQ isolément allongé (TCA normal) évoque un déficit en facteur VII (le seul facteur exclusif de la voie extrinsèque), un début de traitement AVK, ou une IHC modérée.",
    keyPoint: "TQ allongé isolé = Déficit FVII, début AVK, IHC modérée",
    difficulty: "difficile",
    category: "Exploration"
  },
  {
    id: 82,
    question: "Un allongement isolé du TCA (TQ normal) évoque :",
    options: [
      "Un déficit en facteur VII",
      "Un déficit en facteur de la voie intrinsèque (VIII, IX, XI, XII, PK, KHPM)",
      "Un déficit en vitamine K",
      "Un traitement par AVK",
      "Un déficit en facteur V"
    ],
    correctAnswers: [1],
    explanation: "Un TCA isolément allongé (TQ normal) évoque un déficit en facteur de la voie intrinsèque : VIII (hémophilie A), IX (hémophilie B), XI, XII, PK ou KHPM.",
    keyPoint: "TCA allongé isolé = Déficit voie intrinsèque (FVIII, FIX, FXI, FXII, PK, KHPM)",
    difficulty: "difficile",
    category: "Exploration"
  },
  {
    id: 83,
    question: "Un allongement concomitant du TQ et du TCA évoque :",
    options: [
      "Un déficit en facteur VII uniquement",
      "Un déficit en facteur VIII uniquement",
      "Un déficit en facteurs de la voie commune (I, II, V, X) ou IHC sévère ou AVK",
      "Un déficit en facteur XII",
      "Une anomalie plaquettaire"
    ],
    correctAnswers: [2],
    explanation: "Un allongement concomitant du TQ et TCA évoque un déficit en facteurs de la voie commune (I, II, V, X), une IHC sévère, un traitement AVK à dose efficace, ou une CIVD.",
    keyPoint: "TQ + TCA allongés = Déficit voie commune, IHC sévère, AVK efficace, CIVD",
    difficulty: "difficile",
    category: "Exploration"
  },

  // ========== THROMBOSE ==========
  {
    id: 84,
    question: "Les D-dimères sont des produits de dégradation de :",
    options: [
      "La fibrine",
      "Le fibrinogène",
      "Les plaquettes",
      "L'antithrombine",
      "La prothrombine"
    ],
    correctAnswers: [0],
    explanation: "Les D-dimères sont des produits de dégradation de la fibrine stabilisée. Ils augmentent en présence de toute thrombose (mais aussi grossesse, infection, cancer...).",
    keyPoint: "D-dimères = Dégradation de la fibrine",
    trap: "Des D-dimères élevés ne sont pas spécifiques de thrombose",
    difficulty: "facile",
    category: "Thrombose"
  },
  {
    id: 85,
    question: "Le bilan de thrombophilie standard comprend :",
    options: [
      "TQ, TCA et fibrinogène uniquement",
      "Protéine C, Protéine S, Antithrombine et Résistance à la PC activée",
      "D-dimères et PDF uniquement",
      "NFS et plaquettes uniquement",
      "Facteur VIII uniquement"
    ],
    correctAnswers: [1],
    explanation: "Le bilan de thrombophilie standard comprend : Protéine C, Protéine S, Antithrombine, et Résistance à la Protéine C activée (recherche de facteur V Leiden).",
    keyPoint: "Thrombophilie standard = PC + PS + AT + Résistance PCa",
    difficulty: "intermédiaire",
    category: "Thrombose"
  },
  {
    id: 86,
    question: "La résistance à la protéine C activée est due à :",
    options: [
      "Un déficit en protéine C",
      "Un déficit en protéine S",
      "Une mutation du facteur V (facteur V Leiden)",
      "Un déficit en antithrombine",
      "Un excès de thrombine"
    ],
    correctAnswers: [2],
    explanation: "La résistance à la protéine C activée est due à une mutation du facteur V (facteur V Leiden) qui devient résistant à l'inactivation par la protéine C activée.",
    keyPoint: "Résistance PCa = Mutation FV Leiden",
    difficulty: "intermédiaire",
    category: "Thrombose"
  },
  {
    id: 87,
    question: "La triade de Virchow comprend :",
    options: [
      "Thrombose, hémorragie, fibrinolyse",
      "Stase veineuse, lésion endothéliale, hypercoagulabilité",
      "Plaquettes, facteurs de coagulation, inhibiteurs",
      "TQ, TCA, fibrinogène",
      "Protéine C, Protéine S, Antithrombine"
    ],
    correctAnswers: [1],
    explanation: "La triade de Virchow (1856) décrit les trois facteurs favorisant la thrombose : stase veineuse, lésion endothéliale, et hypercoagulabilité.",
    keyPoint: "Triade de Virchow = Stase + Lésion endothéliale + Hypercoagulabilité",
    difficulty: "intermédiaire",
    category: "Thrombose"
  },

  // ========== CIVD ==========
  {
    id: 88,
    question: "La CIVD est caractérisée par :",
    options: [
      "Une activation localisée de la coagulation",
      "Une activation disséminée et excessive de la coagulation",
      "Une inhibition de la coagulation",
      "Une activation isolée des plaquettes",
      "Une fibrinolyse primaire"
    ],
    correctAnswers: [1],
    explanation: "La CIVD (Coagulation Intravasculaire Disséminée) est une activation disséminée et excessive de la coagulation due à des sources importantes de facteur tissulaire.",
    keyPoint: "CIVD = Activation excessive et disséminée de la coagulation",
    difficulty: "facile",
    category: "CIVD"
  },
  {
    id: 89,
    question: "Les causes de CIVD comprennent :",
    options: [
      "Les infections bactériennes sévères",
      "Les cancers",
      "La leucémie aiguë myéloïde 3 (promyélocytaire)",
      "Toutes les réponses précédentes",
      "Aucune de ces réponses"
    ],
    correctAnswers: [3],
    explanation: "Les principales causes de CIVD sont : infections bactériennes (réaction monocytaire → FT+++), cancers, et notamment la leucémie aiguë promyélocytaire (LAM3).",
    keyPoint: "CIVD = Infections, Cancers, LAM3",
    difficulty: "intermédiaire",
    category: "CIVD"
  },
  {
    id: 90,
    question: "Le bilan biologique typique d'une CIVD montre :",
    options: [
      "TQ normal, TCA normal, fibrinogène élevé",
      "TQ allongé, TCA allongé, fibrinogène bas, D-dimères élevés",
      "TQ raccourci, TCA raccourci, fibrinogène élevé",
      "TQ normal, TCA allongé isolément",
      "TQ allongé isolément, TCA normal"
    ],
    correctAnswers: [1],
    explanation: "La CIVD entraîne une consommation des facteurs : TQ allongé, TCA allongé, fibrinogène bas (consommé), et D-dimères élevés (fibrinolyse secondaire).",
    keyPoint: "CIVD = TQ↑, TCA↑, Fibrinogène↓, D-dimères↑",
    difficulty: "difficile",
    category: "CIVD"
  },
  {
    id: 91,
    question: "Dans la CIVD, le pronostic engagé est :",
    options: [
      "Uniquement fonctionnel",
      "Uniquement esthétique",
      "Vital",
      "Aucun pronostic n'est engagé",
      "Uniquement psychologique"
    ],
    correctAnswers: [2],
    explanation: "La CIVD engage le pronostic vital car elle associe des thromboses multiples et des hémorragies par consommation des facteurs.",
    keyPoint: "CIVD = Pronostic VITAL engagé",
    difficulty: "facile",
    category: "CIVD"
  },

  // ========== HÉMOPHILIE ==========
  {
    id: 92,
    question: "L'hémophilie est une maladie à transmission :",
    options: [
      "Autosomique dominante",
      "Autosomique récessive",
      "Récessive liée à l'X",
      "Dominante liée à l'X",
      "Mitochondriale"
    ],
    correctAnswers: [2],
    explanation: "L'hémophilie est une maladie héréditaire à transmission récessive liée à l'X (gonosomique). C'est donc principalement une pathologie masculine.",
    keyPoint: "Hémophilie = Transmission récessive liée à l'X → Pathologie masculine",
    difficulty: "facile",
    category: "Hémophilie"
  },
  {
    id: 93,
    question: "L'hémophilie A est due à un déficit en :",
    options: [
      "Facteur VII",
      "Facteur VIII",
      "Facteur IX",
      "Facteur X",
      "Facteur XI"
    ],
    correctAnswers: [1],
    explanation: "L'hémophilie A est due à un déficit en facteur VIII (facteur antihémophilique A).",
    keyPoint: "Hémophilie A = Déficit FVIII",
    difficulty: "facile",
    category: "Hémophilie"
  },
  {
    id: 94,
    question: "L'hémophilie B est due à un déficit en :",
    options: [
      "Facteur VII",
      "Facteur VIII",
      "Facteur IX",
      "Facteur X",
      "Facteur XI"
    ],
    correctAnswers: [2],
    explanation: "L'hémophilie B est due à un déficit en facteur IX (facteur antihémophilique B).",
    keyPoint: "Hémophilie B = Déficit FIX",
    difficulty: "facile",
    category: "Hémophilie"
  },
  {
    id: 95,
    question: "La manifestation clinique caractéristique de l'hémophilie est :",
    options: [
      "Le purpura pétéchial",
      "Les ecchymoses superficielles",
      "L'hémarthrose",
      "Les gingivorragies",
      "Les épistaxis"
    ],
    correctAnswers: [2],
    explanation: "L'hémarthrose (saignement intra-articulaire) est la manifestation clinique caractéristique de l'hémophilie, apparaissant dès l'apprentissage de la marche.",
    keyPoint: "Hémophilie = Hémarthrose (début à l'apprentissage de la marche)",
    trap: "Purpura et pétéchies sont des signes de troubles de l'hémostase primaire",
    difficulty: "facile",
    category: "Hémophilie"
  },
  {
    id: 96,
    question: "L'hémophilie touche principalement :",
    options: [
      "Les femmes",
      "Les hommes",
      "Les deux sexes de manière égale",
      "Les nouveau-nés uniquement",
      "Les personnes âgées"
    ],
    correctAnswers: [1],
    explanation: "L'hémophilie touche principalement les hommes (XY) car c'est une maladie récessive liée à l'X. Les cas féminins sont exceptionnels.",
    keyPoint: "Hémophilie = Pathologie masculine (cas féminins exceptionnels)",
    difficulty: "facile",
    category: "Hémophilie"
  },
  {
    id: 97,
    question: "Le bilan de coagulation d'un hémophile montre :",
    options: [
      "TQ allongé, TCA normal",
      "TQ normal, TCA allongé",
      "TQ et TCA allongés",
      "TQ et TCA normaux",
      "TCA raccourci"
    ],
    correctAnswers: [1],
    explanation: "L'hémophilie (A ou B) montre un TCA allongé (FVIII ou FIX font partie de la voie intrinsèque) avec un TQ normal.",
    keyPoint: "Hémophilie = TQ normal + TCA allongé",
    difficulty: "intermédiaire",
    category: "Hémophilie"
  },
  {
    id: 98,
    question: "Pour différencier l'hémophilie A de l'hémophilie B, on dose :",
    options: [
      "Le facteur V et le facteur VII",
      "Le facteur VIII et le facteur IX",
      "Le facteur X et le facteur XI",
      "Le fibrinogène et les D-dimères",
      "La protéine C et la protéine S"
    ],
    correctAnswers: [1],
    explanation: "Pour différencier hémophilie A (déficit FVIII) et hémophilie B (déficit FIX), on dose les facteurs VIII et IX.",
    keyPoint: "Différenciation : Dosage FVIII et FIX",
    difficulty: "facile",
    category: "Hémophilie"
  },
  {
    id: 99,
    question: "Le diagnostic différentiel principal de l'hémophilie A est :",
    options: [
      "L'hémophilie B",
      "La maladie de Willebrand",
      "Le déficit en facteur XI",
      "Le déficit en facteur XII",
      "La CIVD"
    ],
    correctAnswers: [1],
    explanation: "Le diagnostic différentiel principal de l'hémophilie A est la maladie de Willebrand, car le facteur VIII circule lié au facteur von Willebrand. Un déficit en FvW entraîne une diminution secondaire du FVIII.",
    keyPoint: "DD Hémophilie A = Maladie de Willebrand (FVIII lié au FvW)",
    difficulty: "difficile",
    category: "Hémophilie"
  },
  {
    id: 100,
    question: "Le cofacteur du complexe tenase intrinsèque est :",
    options: [
      "Le facteur V",
      "Le facteur VII",
      "Le facteur VIII",
      "Le facteur X",
      "Le facteur tissulaire"
    ],
    correctAnswers: [2],
    explanation: "Le facteur VIII (VIIIa) est le cofacteur du complexe tenase intrinsèque (IXa + VIIIa + Ca²⁺ + PL). Son déficit correspond à l'hémophilie A.",
    keyPoint: "Tenase intrinsèque : Cofacteur = FVIII (déficit = Hémophilie A)",
    difficulty: "difficile",
    category: "Hémophilie"
  },
  {
    id: 101,
    question: "Le traitement de l'hémophilie repose sur :",
    options: [
      "Les AVK",
      "L'héparine",
      "L'apport du facteur déficitaire",
      "La transfusion plaquettaire",
      "Les corticoïdes"
    ],
    correctAnswers: [2],
    explanation: "Le traitement de l'hémophilie repose sur l'apport du facteur déficitaire (FVIII pour hémophilie A, FIX pour hémophilie B) avec une PEC rapide pour prévenir les complications articulaires.",
    keyPoint: "Traitement = Apport du facteur déficitaire",
    difficulty: "facile",
    category: "Hémophilie"
  },

  // ========== SAPL ==========
  {
    id: 102,
    question: "Le syndrome des antiphospholipides (SAPL) est une thrombophilie :",
    options: [
      "Constitutionnelle",
      "Acquise",
      "Mixte",
      "Physiologique",
      "Iatrogène"
    ],
    correctAnswers: [1],
    explanation: "Le SAPL est une thrombophilie acquise caractérisée par des anticorps antiphospholipides. C'est la plus fréquente des thrombophilies acquises.",
    keyPoint: "SAPL = Thrombophilie ACQUISE",
    difficulty: "facile",
    category: "SAPL"
  },
  {
    id: 103,
    question: "Les critères diagnostiques du SAPL nécessitent :",
    options: [
      "Uniquement des critères biologiques",
      "Uniquement des critères cliniques",
      "Au moins un critère clinique ET un critère biologique",
      "Deux critères cliniques ET deux critères biologiques",
      "Trois critères biologiques"
    ],
    correctAnswers: [2],
    explanation: "Le diagnostic de SAPL nécessite au moins un critère clinique (thrombose, fausse couche) ET un critère biologique (lupus anticoagulant, anti-cardiolipine, anti-β2GP1).",
    keyPoint: "SAPL = 1 critère clinique + 1 critère biologique",
    difficulty: "intermédiaire",
    category: "SAPL"
  },
  {
    id: 104,
    question: "Les critères cliniques du SAPL comprennent :",
    options: [
      "Thrombose chez le sujet jeune",
      "Thrombose de site inhabituel",
      "Fausse couche spontanée sans cause obstétricale évidente",
      "Toutes les réponses précédentes",
      "Aucune de ces réponses"
    ],
    correctAnswers: [3],
    explanation: "Les critères cliniques du SAPL comprennent : thrombose chez le sujet jeune, site inhabituel, et fausse couche spontanée sans cause obstétricale évidente.",
    keyPoint: "Clinique SAPL = Thrombose (jeune, site inhabituel) + Fausses couches",
    difficulty: "intermédiaire",
    category: "SAPL"
  },
  {
    id: 105,
    question: "Les tests biologiques du SAPL doivent être positifs sur une période minimale de :",
    options: [
      "1 mois",
      "3 mois",
      "6 mois",
      "1 an",
      "2 ans"
    ],
    correctAnswers: [1],
    explanation: "Pour affirmer un SAPL, au moins un test biologique doit être positif sur une période minimale de 3 mois (persistance des anticorps).",
    keyPoint: "Positivité biologique persistante ≥ 3 mois",
    difficulty: "intermédiaire",
    category: "SAPL"
  },
  {
    id: 106,
    question: "Le lupus anticoagulant peut être détecté par :",
    options: [
      "Le dosage du fibrinogène",
      "Le TCA sensibilisé et le dRVVT",
      "Le dosage de la protéine C",
      "Le dosage des D-dimères",
      "Le temps de Quick"
    ],
    correctAnswers: [1],
    explanation: "Le lupus anticoagulant (anticoagulant circulant de type lupique) est détecté par le TCA sensibilisé et le dRVVT (temps de venin de serpent Russell dilué).",
    keyPoint: "Lupus anticoagulant = TCA sensibilisé + dRVVT",
    trap: "Malgré son nom, le lupus anticoagulant est prothrombotique in vivo",
    difficulty: "difficile",
    category: "SAPL"
  },
  {
    id: 107,
    question: "Les anticorps recherchés dans le SAPL sont :",
    options: [
      "Anti-ADN natif uniquement",
      "Lupus anticoagulant, anti-cardiolipine, anti-β2 glycoprotéine 1",
      "Anti-plaquettes uniquement",
      "Anti-facteur VIII",
      "Anti-thrombine"
    ],
    correctAnswers: [1],
    explanation: "Le bilan biologique du SAPL recherche : lupus anticoagulant, anticorps anti-cardiolipine (aCL), et anticorps anti-β2 glycoprotéine 1 (anti-β2GP1).",
    keyPoint: "SAPL = Lupus anticoagulant + Anti-cardiolipine + Anti-β2GP1",
    difficulty: "intermédiaire",
    category: "SAPL"
  },

  // ========== AVK ET VITAMINE K ==========
  {
    id: 108,
    question: "Les antivitamines K (AVK) inhibent la synthèse des facteurs :",
    options: [
      "I, II, V, VII",
      "II, VII, IX, X",
      "V, VIII, XI, XII",
      "I, V, VIII, XIII",
      "Tous les facteurs"
    ],
    correctAnswers: [1],
    explanation: "Les AVK inhibent la synthèse des facteurs vitamino-K dépendants : II, VII, IX, X (mais aussi PC et PS).",
    keyPoint: "AVK inhibent II, VII, IX, X (+ PC, PS)",
    difficulty: "intermédiaire",
    category: "AVK"
  },
  {
    id: 109,
    question: "Lors d'un début de traitement par AVK, le premier facteur à diminuer est :",
    options: [
      "Le facteur II (80h)",
      "Le facteur VII (6h)",
      "Le facteur IX (24h)",
      "Le facteur X (48h)",
      "Le fibrinogène"
    ],
    correctAnswers: [1],
    explanation: "Le facteur VII a la demi-vie la plus courte (6h), c'est donc le premier à diminuer lors d'un traitement par AVK ou d'un déficit en vitamine K.",
    keyPoint: "AVK : FVII diminue en premier (demi-vie 6h)",
    difficulty: "difficile",
    category: "AVK"
  },
  {
    id: 110,
    question: "Les AVK peuvent entraîner transitoirement une hypercoagulabilité car :",
    options: [
      "Ils activent la coagulation",
      "Ils diminuent aussi la protéine C et la protéine S (vit K-dépendantes)",
      "Ils augmentent le fibrinogène",
      "Ils activent les plaquettes",
      "Ils inhibent l'antithrombine"
    ],
    correctAnswers: [1],
    explanation: "Les AVK diminuent aussi la protéine C et la protéine S (inhibiteurs vit K-dépendants), créant un risque d'hypercoagulabilité transitoire au début du traitement.",
    keyPoint: "AVK diminuent PC/PS → Hypercoagulabilité transitoire possible",
    trap: "C'est pourquoi on associe souvent l'héparine au début du traitement AVK",
    difficulty: "piège",
    category: "AVK"
  },

  // ========== QUESTIONS CLINIQUES ET CAS CLINIQUES ==========
  {
    id: 111,
    question: "Nourrisson de 15 mois avec hémarthrose, TQ 13s (TP 90%), TCA 42s (témoin 28s). Le diagnostic le plus probable est :",
    options: [
      "Maladie de Willebrand",
      "Hémophilie A ou B",
      "CIVD",
      "Déficit en facteur VII",
      "Déficit en facteur V"
    ],
    correctAnswers: [1],
    explanation: "Nourrisson masculin avec hémarthrose + TQ normal + TCA allongé (rapport > 1.3) = tableau typique d'hémophilie A ou B. L'hémarthrose débute à l'apprentissage de la marche.",
    keyPoint: "Nourrisson + Hémarthrose + TQ N + TCA↑ = Hémophilie",
    difficulty: "intermédiaire",
    category: "Cas clinique"
  },
  {
    id: 112,
    question: "Chez ce nourrisson avec suspicion d'hémophilie, les bilans complémentaires à réaliser sont :",
    options: [
      "Dosage des facteurs V et VII",
      "Dosage des facteurs VIII et IX",
      "Dosage de l'antithrombine",
      "Dosage des D-dimères",
      "Recherche d'anticorps anti-plaquettes"
    ],
    correctAnswers: [1],
    explanation: "Pour différencier hémophilie A (déficit FVIII) et hémophilie B (déficit FIX), on dose les facteurs VIII et IX.",
    keyPoint: "Suspicion hémophilie → Dosage FVIII et FIX",
    difficulty: "facile",
    category: "Cas clinique"
  },
  {
    id: 113,
    question: "Si le cofacteur du complexe tenase est déficitaire, le bilan différentiel avec la maladie de Willebrand nécessite :",
    options: [
      "Le dosage du facteur V",
      "Le dosage du facteur von Willebrand",
      "Le dosage du facteur VII",
      "Le temps de thrombine",
      "Le dosage des D-dimères"
    ],
    correctAnswers: [1],
    explanation: "Le cofacteur du tenase intrinsèque est le FVIII. Pour différencier hémophilie A et maladie de Willebrand (qui diminue secondairement le FVIII), on dose le FvW.",
    keyPoint: "Déficit FVIII → DD avec Willebrand → Dosage FvW",
    difficulty: "difficile",
    category: "Cas clinique"
  },
  {
    id: 114,
    question: "Si le facteur von Willebrand est normal et le facteur VIII bas, le diagnostic est :",
    options: [
      "Maladie de Willebrand",
      "Hémophilie A",
      "Hémophilie B",
      "Déficit en facteur XI",
      "SAPL"
    ],
    correctAnswers: [1],
    explanation: "FvW normal + FVIII bas = Hémophilie A. Si FvW anormal + FVIII bas = Maladie de Willebrand.",
    keyPoint: "FvW N + FVIII↓ = Hémophilie A | FvW↓ + FVIII↓ = Willebrand",
    difficulty: "difficile",
    category: "Cas clinique"
  },

  // ========== QUESTIONS COMPLÉMENTAIRES ==========
  {
    id: 115,
    question: "Le concept cellulaire de la coagulation a été développé entre :",
    options: [
      "1950 et 1960",
      "1970 et 1980",
      "1990 et 2000",
      "2000 et 2010",
      "2010 et 2020"
    ],
    correctAnswers: [2],
    explanation: "Le concept cellulaire de la coagulation a été développé entre 1990 et 2000, remplaçant progressivement l'ancien concept en Y.",
    keyPoint: "Concept cellulaire = 1990-2000",
    difficulty: "facile",
    category: "Histoire"
  },
  {
    id: 116,
    question: "La découverte de l'antithrombine date de :",
    options: [
      "1856",
      "1939",
      "1970",
      "1993",
      "2000"
    ],
    correctAnswers: [1],
    explanation: "L'antithrombine a été découverte en 1939. Son déficit a été décrit en 1965.",
    keyPoint: "Antithrombine découverte en 1939, déficit décrit en 1965",
    difficulty: "difficile",
    category: "Histoire"
  },
  {
    id: 117,
    question: "La triade de Virchow a été décrite en :",
    options: [
      "1271",
      "1756",
      "1856",
      "1939",
      "1993"
    ],
    correctAnswers: [2],
    explanation: "La triade de Virchow a été décrite en 1856. Elle comprend : stase veineuse, lésion endothéliale et hypercoagulabilité.",
    keyPoint: "Triade de Virchow = 1856",
    difficulty: "intermédiaire",
    category: "Histoire"
  },
  {
    id: 118,
    question: "La mutation du facteur V Leiden a été découverte en :",
    options: [
      "1939",
      "1965",
      "1970",
      "1993",
      "2000"
    ],
    correctAnswers: [3],
    explanation: "La mutation du facteur V (facteur V Leiden) a été découverte en 1993. Elle est responsable de la résistance à la protéine C activée.",
    keyPoint: "FV Leiden découvert en 1993",
    difficulty: "difficile",
    category: "Histoire"
  },
  {
    id: 119,
    question: "Le premier cas de thrombose veineuse profonde a été décrit en :",
    options: [
      "1271",
      "1456",
      "1756",
      "1856",
      "1939"
    ],
    correctAnswers: [0],
    explanation: "Le premier cas de thrombose veineuse profonde a été décrit en 1271.",
    keyPoint: "Premier cas TVP = 1271",
    difficulty: "difficile",
    category: "Histoire"
  },
  {
    id: 120,
    question: "Quelle est la fonction du fibrinogène ?",
    options: [
      "Inhibiteur de la coagulation",
      "Précurseur de la fibrine",
      "Activateur de la protéine C",
      "Cofacteur du complexe tenase",
      "Zymogène de la thrombine"
    ],
    correctAnswers: [1],
    explanation: "Le fibrinogène (facteur I) est le précurseur de la fibrine. Il est transformé en fibrine par la thrombine.",
    keyPoint: "Fibrinogène = Précurseur de la fibrine",
    difficulty: "facile",
    category: "Facteurs de coagulation"
  },
  {
    id: 121,
    question: "La protéine S a comme fonction :",
    options: [
      "Activateur de la coagulation",
      "Zymogène de la thrombine",
      "Cofacteur de la protéine C",
      "Inhibiteur du facteur tissulaire",
      "Stabilisant de la fibrine"
    ],
    correctAnswers: [2],
    explanation: "La protéine S est un cofacteur non enzymatique de la protéine C. Elle potentialise l'action inhibitrice de la protéine C sur les facteurs Va et VIIIa.",
    keyPoint: "Protéine S = Cofacteur de la Protéine C",
    difficulty: "intermédiaire",
    category: "Inhibiteurs"
  },
  {
    id: 122,
    question: "La protéine S est liée dans le plasma à :",
    options: [
      "L'albumine",
      "Le facteur von Willebrand",
      "Le C4Bp (C4 binding protein)",
      "L'antithrombine",
      "Le fibrinogène"
    ],
    correctAnswers: [2],
    explanation: "La protéine S circule dans le plasma en partie liée au C4Bp (C4 binding protein). Seule la forme libre est active.",
    keyPoint: "PS liée au C4Bp dans le plasma",
    difficulty: "difficile",
    category: "Inhibiteurs"
  },
  {
    id: 123,
    question: "La protéine C est :",
    options: [
      "Un cofacteur",
      "Un zymogène/proenzyme",
      "Un activateur direct de la coagulation",
      "Un précurseur de la fibrine",
      "Un stabilisant de la fibrine"
    ],
    correctAnswers: [1],
    explanation: "La protéine C est un zymogène (proenzyme) qui doit être activé par le complexe thrombine-thrombomoduline pour devenir un inhibiteur actif.",
    keyPoint: "Protéine C = Zymogène activé par thrombine-thrombomoduline",
    difficulty: "intermédiaire",
    category: "Inhibiteurs"
  },
  {
    id: 124,
    question: "Le temps de thrombine (TT) explore :",
    options: [
      "Les déficits en facteur VII",
      "Les hypo et dysfibrinogénémies",
      "Les déficits en facteur VIII",
      "L'antithrombine",
      "La protéine C"
    ],
    correctAnswers: [1],
    explanation: "Le temps de thrombine explore les hypo et dysfibrinogénémies. Il est sensible à la prise d'héparine.",
    keyPoint: "Temps de thrombine = Explore le fibrinogène, sensible à l'héparine",
    difficulty: "intermédiaire",
    category: "Exploration"
  },
  {
    id: 125,
    question: "Le temps de Reptilase permet d'explorer le fibrinogène chez :",
    options: [
      "Les patients sous AVK",
      "Les patients sous héparine",
      "Les patients avec un déficit en facteur VII",
      "Les patients avec un SAPL",
      "Les patients avec une thrombopénie"
    ],
    correctAnswers: [1],
    explanation: "Le temps de Reptilase utilise une enzyme extraite du venin de serpent qui transforme le fibrinogène indépendamment de la présence d'héparine.",
    keyPoint: "Temps de Reptilase = Explore fibrinogène indépendamment de l'héparine",
    difficulty: "difficile",
    category: "Exploration"
  },
  {
    id: 126,
    question: "Les indications du temps de Quick (TQ) comprennent :",
    options: [
      "Bilan préopératoire",
      "Surveillance de traitement AVK",
      "Bilan d'une hémorragie profonde",
      "Atteinte hépatique",
      "Toutes les réponses sont correctes"
    ],
    correctAnswers: [4],
    explanation: "Les indications du TQ sont : bilan préopératoire, surveillance des AVK, bilan d'hémorragie profonde, et évaluation de l'atteinte hépatique.",
    keyPoint: "TQ = Préop, AVK, hémorragie profonde, atteinte hépatique",
    difficulty: "facile",
    category: "Exploration"
  },
  {
    id: 127,
    question: "Les indications du TCA comprennent :",
    options: [
      "Bilan préopératoire",
      "Surveillance de l'HNF curative",
      "Recherche d'anticoagulants circulants",
      "Bilan d'une hémorragie profonde",
      "Toutes les réponses sont correctes"
    ],
    correctAnswers: [4],
    explanation: "Les indications du TCA sont : bilan préopératoire, surveillance HNF curative, recherche d'ACC, et bilan d'hémorragie profonde.",
    keyPoint: "TCA = Préop, HNF, ACC, hémorragie profonde",
    difficulty: "facile",
    category: "Exploration"
  },
  {
    id: 128,
    question: "Le complexe FT-VIIa active directement quel facteur ?",
    options: [
      "Le facteur II",
      "Le facteur V",
      "Le facteur VIII",
      "Le facteur X",
      "Le facteur XIII"
    ],
    correctAnswers: [3],
    explanation: "Le complexe tenase extrinsèque (FT-VIIa) active directement le facteur X en Xa, qui fera partie du complexe prothrombinase.",
    keyPoint: "FT-VIIa active X → Xa",
    difficulty: "intermédiaire",
    category: "Voie extrinsèque"
  },
  {
    id: 129,
    question: "Dans la phase d'initiation, le complexe FT-VIIa active aussi :",
    options: [
      "Le facteur V",
      "Le facteur VIII",
      "Le facteur IX",
      "Le facteur XI",
      "Le facteur XII"
    ],
    correctAnswers: [2],
    explanation: "Le complexe FT-VIIa active aussi le facteur IX en IXa, ce qui explique l'interconnexion entre les deux voies dans le concept cellulaire.",
    keyPoint: "FT-VIIa active aussi IX → IXa",
    difficulty: "difficile",
    category: "Concept cellulaire"
  },
  {
    id: 130,
    question: "La fibrinoformation correspond à :",
    options: [
      "La transformation du fibrinogène en fibrine",
      "La synthèse de fibrinogène",
      "La dégradation de la fibrine",
      "L'activation du facteur XIII",
      "La formation de l'antithrombine"
    ],
    correctAnswers: [0],
    explanation: "La fibrinoformation est la transformation massive du fibrinogène soluble en fibrine insoluble lors de la phase de propagation.",
    keyPoint: "Fibrinoformation = Fibrinogène → Fibrine",
    difficulty: "facile",
    category: "Concept cellulaire"
  },
  {
    id: 131,
    question: "Les liaisons entre les domaines D du fibrinogène sont établies par :",
    options: [
      "Le facteur X activé",
      "La thrombine",
      "Le facteur XIII activé",
      "La protéine C",
      "L'antithrombine"
    ],
    correctAnswers: [2],
    explanation: "Le facteur XIIIa établit des liaisons covalentes entre les domaines D du fibrinogène pour stabiliser le caillot de fibrine.",
    keyPoint: "FXIIIa = Liaisons domaines D (stabilisation fibrine)",
    difficulty: "intermédiaire",
    category: "Voie commune"
  },
  {
    id: 132,
    question: "Le thromboélastogramme est :",
    options: [
      "Un test de routine très utilisé",
      "Un point of care (POC) coûteux et peu reproductible",
      "Un test spécifique du facteur VIII",
      "Un dosage immunologique",
      "Un test de fibrinolyse"
    ],
    correctAnswers: [1],
    explanation: "Le thromboélastogramme est un point of care (POC) qui enregistre les résistances mécaniques du sang. Il est coûteux et peu reproductible, donc peu utilisé en pratique.",
    keyPoint: "Thromboélastogramme = POC coûteux, peu reproductible",
    difficulty: "intermédiaire",
    category: "Exploration"
  },
  {
    id: 133,
    question: "Concernant la PEC de l'hémophilie, il est important de :",
    options: [
      "Attendre avant de traiter",
      "Assurer une PEC rapide pour prévenir les complications articulaires",
      "Donner des AVK",
      "Transfuser des plaquettes",
      "Prescrire des anti-inflammatoires en première intention"
    ],
    correctAnswers: [1],
    explanation: "La PEC de l'hémophilie doit être rapide pour prévenir les complications articulaires (arthropathie hémophilique) et assurer la qualité de vie.",
    keyPoint: "Hémophilie = PEC rapide pour prévenir arthropathie",
    difficulty: "facile",
    category: "Hémophilie"
  },
  {
    id: 134,
    question: "L'hémophilie débute cliniquement à quel âge ?",
    options: [
      "À la naissance",
      "À l'apprentissage de la marche (12-18 mois)",
      "À 5 ans",
      "À l'adolescence",
      "À l'âge adulte"
    ],
    correctAnswers: [1],
    explanation: "Les premiers signes d'hémophilie (hémarthroses) apparaissent à l'âge de l'apprentissage de la marche (vers 12-18 mois) avec les premiers traumatismes.",
    keyPoint: "Hémophilie symptomatique à l'apprentissage de la marche",
    difficulty: "intermédiaire",
    category: "Hémophilie"
  },
  {
    id: 135,
    question: "Quel facteur possède une double distribution : plasma et plaquettes ?",
    options: [
      "Le facteur I (fibrinogène)",
      "Le facteur II (prothrombine)",
      "Le facteur V (proaccélérine)",
      "Le facteur VII (proconvertine)",
      "Le facteur VIII"
    ],
    correctAnswers: [2],
    explanation: "Le facteur V possède une double distribution : plasma et plaquettes, car il est synthétisé par le foie ET les mégacaryocytes.",
    keyPoint: "FV et FI = Plasma + Plaquettes",
    trap: "Le facteur I aussi a une double distribution",
    difficulty: "piège",
    category: "Facteurs de coagulation"
  },
  {
    id: 136,
    question: "Le dRVVT est :",
    options: [
      "Le dosage du facteur V",
      "Le temps de venin de serpent Russell dilué",
      "Le dosage de la résistance à la protéine C",
      "Le dosage des D-dimères",
      "Le temps de Quick rapide"
    ],
    correctAnswers: [1],
    explanation: "Le dRVVT (dilute Russell Viper Venom Time) est le temps de venin de serpent Russell dilué, utilisé pour détecter le lupus anticoagulant dans le SAPL.",
    keyPoint: "dRVVT = Temps de venin de serpent Russell dilué (SAPL)",
    difficulty: "difficile",
    category: "SAPL"
  },
  {
    id: 137,
    question: "En cas de lésion vasculaire, les capacités du TFPI sont dépassées car :",
    options: [
      "Le TFPI est dégradé",
      "La quantité de FT libérée dépasse les capacités d'inhibition du TFPI",
      "Le TFPI se lie au fibrinogène",
      "Le TFPI est inactivé par l'héparine",
      "Le TFPI n'a aucun effet sur l'initiation"
    ],
    correctAnswers: [1],
    explanation: "En cas de lésion, la quantité de facteur tissulaire libérée dépasse les capacités d'inhibition du TFPI, permettant ainsi le déclenchement de la coagulation.",
    keyPoint: "Lésion → FT >> capacités TFPI → Coagulation déclenchée",
    difficulty: "intermédiaire",
    category: "Inhibiteurs"
  },
  {
    id: 138,
    question: "La proaccélérine correspond au :",
    options: [
      "Facteur II",
      "Facteur III",
      "Facteur IV",
      "Facteur V",
      "Facteur VI"
    ],
    correctAnswers: [3],
    explanation: "La proaccélérine est le facteur V. C'est une proenzyme avec une demi-vie de 24h, synthétisée par le foie et les mégacaryocytes.",
    keyPoint: "Proaccélérine = Facteur V",
    difficulty: "facile",
    category: "Facteurs de coagulation"
  },
  {
    id: 139,
    question: "Le facteur V est-il vitamino-K dépendant ?",
    options: [
      "Oui",
      "Non",
      "Partiellement",
      "Uniquement chez l'adulte",
      "Uniquement chez le nouveau-né"
    ],
    correctAnswers: [1],
    explanation: "Le facteur V n'est PAS vitamino-K dépendant, contrairement aux facteurs II, VII, IX, X. Son taux ne diminue pas sous AVK.",
    keyPoint: "FV n'est PAS vit K-dépendant",
    trap: "Piège classique : FV ≠ vit K-dépendant malgré son nom",
    difficulty: "piège",
    category: "Facteurs de coagulation"
  },
  {
    id: 140,
    question: "Le complexe TFPI-Xa se lie au :",
    options: [
      "Complexe tenase intrinsèque",
      "Complexe prothrombinase",
      "Complexe FT-FVIIa",
      "Fibrinogène",
      "Facteur XIII"
    ],
    correctAnswers: [2],
    explanation: "Le complexe TFPI-Xa se lie au complexe FT-FVIIa pour bloquer l'initiation de la coagulation.",
    keyPoint: "TFPI-Xa + FT-VIIa → Blocage de l'initiation",
    difficulty: "difficile",
    category: "Inhibiteurs"
  },
  {
    id: 141,
    question: "Quel est l'inhibiteur le plus puissant de la coagulation ?",
    options: [
      "Le TFPI",
      "La protéine C",
      "La protéine S",
      "L'antithrombine",
      "Le facteur XIII"
    ],
    correctAnswers: [3],
    explanation: "L'antithrombine est l'inhibiteur le plus puissant de la coagulation. Son action est potentialisée par l'héparine (x1000-10000).",
    keyPoint: "Antithrombine = Inhibiteur le PLUS puissant",
    difficulty: "facile",
    category: "Inhibiteurs"
  },
  {
    id: 142,
    question: "La demi-vie du facteur VIII est de :",
    options: [
      "6 heures",
      "12 heures",
      "24 heures",
      "48 heures",
      "80 heures"
    ],
    correctAnswers: [1],
    explanation: "Le facteur VIII a une demi-vie de 12 heures. Il est lié au facteur von Willebrand qui le protège de la dégradation.",
    keyPoint: "FVIII demi-vie = 12h (lié au FvW)",
    difficulty: "difficile",
    category: "Facteurs de coagulation"
  },
  {
    id: 143,
    question: "La demi-vie du facteur IX est de :",
    options: [
      "6 heures",
      "12 heures",
      "24 heures",
      "48 heures",
      "80 heures"
    ],
    correctAnswers: [2],
    explanation: "Le facteur IX a une demi-vie de 24 heures. C'est un facteur vitamino-K dépendant.",
    keyPoint: "FIX demi-vie = 24h",
    difficulty: "difficile",
    category: "Facteurs de coagulation"
  },
  {
    id: 144,
    question: "Le nuage thrombinique est caractéristique de quelle phase ?",
    options: [
      "L'initiation",
      "L'amplification",
      "La propagation",
      "La fibrinolyse",
      "La phase contact"
    ],
    correctAnswers: [2],
    explanation: "Le nuage thrombinique (grande quantité de thrombine) est généré lors de la phase de propagation, permettant la fibrinoformation massive.",
    keyPoint: "Nuage thrombinique = Phase de propagation",
    difficulty: "intermédiaire",
    category: "Concept cellulaire"
  },
  {
    id: 145,
    question: "Les complexes tenase extrinsèque et intrinsèque ont en commun d'activer :",
    options: [
      "Le facteur II",
      "Le facteur V",
      "Le facteur VIII",
      "Le facteur X",
      "Le facteur XIII"
    ],
    correctAnswers: [3],
    explanation: "Les deux complexes tenase (extrinsèque et intrinsèque) activent le facteur X en Xa, qui fera partie du complexe prothrombinase.",
    keyPoint: "Tenase extrinsèque ET intrinsèque → Activation FX",
    difficulty: "intermédiaire",
    category: "Voie commune"
  },
  {
    id: 146,
    question: "Le fibrinogène augmente dans :",
    options: [
      "La CIVD",
      "Les syndromes inflammatoires",
      "Les hypofibrinogénémies",
      "Les déficits constitutionnels",
      "Les traitements par AVK"
    ],
    correctAnswers: [1],
    explanation: "Le fibrinogène est une protéine de l'inflammation : il augmente dans les syndromes inflammatoires. Il diminue en cas de consommation (CIVD).",
    keyPoint: "Fibrinogène↑ dans l'inflammation, ↓ dans CIVD",
    difficulty: "intermédiaire",
    category: "Exploration"
  },
  {
    id: 147,
    question: "Quel bilan réaliser pour explorer un syndrome thrombotique ?",
    options: [
      "TQ et TCA uniquement",
      "D-dimères et bilan radiologique",
      "Dosage du facteur VIII",
      "Temps de saignement",
      "Agrégation plaquettaire"
    ],
    correctAnswers: [1],
    explanation: "Pour explorer un syndrome thrombotique, on réalise un dosage des D-dimères (produits de dégradation de la fibrine) et un bilan radiologique (écho-doppler, angioscanner...).",
    keyPoint: "Thrombose = D-dimères + Radiologie",
    difficulty: "facile",
    category: "Thrombose"
  },
  {
    id: 148,
    question: "Quand réaliser un bilan de thrombophilie ?",
    options: [
      "Systématiquement devant toute thrombose",
      "Thromboses précoces, récidivantes, de siège inhabituel ou mal expliquées",
      "Uniquement chez les femmes enceintes",
      "Uniquement chez les sujets âgés",
      "Jamais"
    ],
    correctAnswers: [1],
    explanation: "Le bilan de thrombophilie est indiqué en cas de : thromboses précoces (sujet jeune), récidivantes, de siège inhabituel, ou non/mal expliquées par le contexte clinique.",
    keyPoint: "Bilan thrombophilie = Thrombose précoce/récidivante/inhabituelle/inexpliquée",
    difficulty: "intermédiaire",
    category: "Thrombose"
  },
  {
    id: 149,
    question: "La technique chromogénique permet de doser :",
    options: [
      "Uniquement le fibrinogène",
      "Les facteurs de coagulation de façon fonctionnelle",
      "L'hémoglobine",
      "Les plaquettes",
      "Les leucocytes"
    ],
    correctAnswers: [1],
    explanation: "Les techniques chromogéniques permettent de doser les facteurs de coagulation de façon fonctionnelle, en mesurant l'activité enzymatique.",
    keyPoint: "Technique chromogénique = Dosage fonctionnel des facteurs",
    difficulty: "intermédiaire",
    category: "Exploration"
  },
  {
    id: 150,
    question: "Concernant l'ancien concept en Y, quelle affirmation est FAUSSE ?",
    options: [
      "Il divise la coagulation en voie intrinsèque, extrinsèque et commune",
      "Il est toujours utilisé pour l'interprétation des bilans de laboratoire",
      "Il explique parfaitement tous les phénomènes physiologiques in vivo",
      "Le rôle des cellules y est mal exprimé",
      "C'est une cascade linéaire de réactions"
    ],
    correctAnswers: [2],
    explanation: "L'ancien concept en Y ne permet PAS d'expliquer tous les phénomènes physiologiques, notamment le rôle des cellules et le fait que les déficits en FXII, PK, KHPM n'entraînent pas de risque hémorragique.",
    keyPoint: "Ancien concept = Limitations (rôle cellules, cascade linéaire)",
    difficulty: "piège",
    category: "Concept cellulaire"
  }
]

export const categories = [
  "Introduction",
  "Cellules impliquées",
  "Facteurs de coagulation",
  "Inhibiteurs",
  "Voie extrinsèque",
  "Voie intrinsèque",
  "Voie commune",
  "Concept cellulaire",
  "Exploration",
  "Thrombose",
  "CIVD",
  "Hémophilie",
  "SAPL",
  "AVK",
  "Histoire",
  "Cas clinique"
]

export const difficulties = ["facile", "intermédiaire", "difficile", "piège"] as const

export const keyTopics = [
  "Facteurs vitamino-K dépendants (II, VII, IX, X)",
  "Complexes tenase (intrinsèque/extrinsèque) et prothrombinase",
  "Inhibiteurs: AT, PC/PS, TFPI",
  "Concept cellulaire: Initiation, Amplification, Propagation",
  "Interprétation TQ/TCA",
  "Hémophilie A vs B vs Willebrand",
  "CIVD: mécanisme et bilan",
  "SAPL: critères diagnostiques",
  "Thrombophilie constitutionnelle vs acquise"
]

export const commonTraps = [
  "FV n'est PAS vitamino-K dépendant",
  "Déficit FXII/PK/KHPM = PAS de risque hémorragique",
  "FXIII n'est pas exploré par TQ/TCA",
  "AVK diminuent aussi PC/PS → hypercoagulabilité transitoire",
  "Lupus anticoagulant = prothrombotique in vivo (malgré le nom)",
  "FVIII lié au FvW → DD avec Willebrand",
  "TCA allongé ≠ toujours risque hémorragique"
]
