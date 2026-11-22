export type Bilingual = { en: string; te: string };

export const brand = {
  name: "GEMS Academy",
  domain: "gemsacademy.in",
  tagline: {
    en: "Grow. Excel. Master. Succeed.",
    te: "ఎదగండి. మెరుస్తూ ఉండండి. నైపుణ్యం సాధించండి. విజయం పొందండి.",
  },
};

export const ui = {
  welcome: { en: "Welcome", te: "స్వాగతం" },
  to: { en: "to", te: "కి" },
  gems: { en: "GEMS", te: "GEMS" },
  clickHint: {
    en: "Click or Tap on this Button",
    te: "ఈ బటన్ మీద నొక్కండి",
  },
  learning: { en: "LEARNING @ GEMS", te: "GEMS వద్ద నేర్చుకోండి" },
  earning: { en: "EARNING @ GEMS", te: "GEMS తో సంపాదించండి" },
  home: { en: "HOME SCREEN", te: "హోమ్ స్క్రీన్" },
  aboutUs: { en: "ABOUT US", te: "మా గురించి" },
  back: { en: "BACK", te: "వెనుకకు" },
  feeDetails: { en: "FEE DETAILS", te: "ఫీజు వివరాలు" },
  payFee: { en: "PAY — the — FEE", te: "ఫీజు చెల్లించండి" },
  baselineTests: { en: "BASELINE TESTS", te: "బేస్‌లైన్ పరీక్షలు" },
  handwriting: { en: "Beautiful Handwriting", te: "అందమైన చేతిరాత" },
  familyEnglish: { en: "English for the FAMILY", te: "కుటుంబానికి ఇంగ్లీష్" },
  englishCourses: {
    en: "ENGLISH Courses @ GEMS",
    te: "GEMS వద్ద ఇంగ్లీష్ కోర్సులు",
  },
  sampleContent: {
    en: "Sample Course Content",
    te: "నమూనా కోర్సు విషయాలు",
  },
  ourTrack: { en: "OUR TRACK RECORD", te: "మా విజయ గాథ" },
  conceptCards: { en: "CONCEPT CARDS", te: "కాన్సెప్ట్ కార్డులు" },
  conceptVideos: { en: "CONCEPT VIDEOS", te: "కాన్సెప్ట్ వీడియోలు" },
  testimonials: { en: "TESTIMONIALS", te: "విద్యార్థి అభిప్రాయాలు" },
  faqs: { en: "FAQs", te: "తరచు అడిగే ప్రశ్నలు" },
  demoVideos: { en: "DEMO VIDEOS", te: "డెమో వీడియోలు" },
  yourComments: { en: "YOUR COMMENTS", te: "మీ వ్యాఖ్యలు" },
  contactUs: { en: "CONTACT US", te: "మమ్మల్ని సంప్రదించండి" },
  tuitionCenter: {
    en: "GEMS TUITION CENTER",
    te: "GEMS ట్యూషన్ సెంటర్",
  },
  homeTutors: { en: "GEMS Home TUTORS", te: "GEMS హోమ్ ట్యూటర్లు" },
  earnBack: { en: "EARN BACK YOUR FEE", te: "మీ ఫీజు తిరిగి సంపాదించండి" },
  workWith: { en: "WORK WITH GEMS", te: "GEMS తో పని చేయండి" },
};

export type LevelId =
  | "toddler"
  | "beginner"
  | "elementary"
  | "standard"
  | "professional";

export const levels: {
  id: LevelId;
  name: Bilingual;
  description: Bilingual;
  color: string;
  accent: string;
}[] = [
  {
    id: "toddler",
    name: { en: "PRE-BEGINNER", te: "ప్రీ-బిగినర్" },
    description: {
      en: "Pre-Beginner level before joining school",
      te: "స్కూల్‌లో చేరే ముందు ప్రీ-బిగినర్ స్థాయి",
    },
    color: "#1e3a5f",
    accent: "#2d4a6f",
  },
  {
    id: "beginner",
    name: { en: "BEGINNER", te: "బిగినర్" },
    description: {
      en: "KG to 5th Class level",
      te: "కేజీ నుండి 5వ తరగతి స్థాయి",
    },
    color: "#2d8a4e",
    accent: "#3a9d5c",
  },
  {
    id: "elementary",
    name: { en: "ELEMENTARY", te: "ఎలిమెంటరీ" },
    description: {
      en: "6th – Inter – Degree Level",
      te: "6వ తరగతి – ఇంటర్ – డిగ్రీ స్థాయి",
    },
    color: "#e07a2f",
    accent: "#f08a3f",
  },
  {
    id: "standard",
    name: { en: "STANDARD", te: "స్టాండర్డ్" },
    description: {
      en: "Degree – PG Level",
      te: "డిగ్రీ – పీజీ స్థాయి",
    },
    color: "#d4a017",
    accent: "#e4b027",
  },
  {
    id: "professional",
    name: { en: "PROFESSIONAL", te: "ప్రొఫెషనల్" },
    description: {
      en: "Teachers, Doctors, Nurses, Lawyers, CAs, CSs, IT Professionals, Business People, Hospitality & Tourism, Telecallers and more",
      te: "ఉపాధ్యాయులు, వైద్యులు, నర్సులు, న్యాయవాదులు, సీఏలు, సీఎస్‌లు, ఐటీ నిపుణులు, వ్యాపారవేత్తలు, హాస్పిటాలిటీ & టూరిజం, టెలికాలర్లు మరియు మరిన్ని",
    },
    color: "#3a8fd4",
    accent: "#4a9fe4",
  },
];

export type TopicId =
  | "prayer"
  | "pledge"
  | "preamble"
  | "motivational-song"
  | "tongue-twister"
  | "common-action-words"
  | "english-at-home"
  | "english-at-school"
  | "tenses"
  | "air-news"
  | "vocabulary"
  | "contextual-grammar"
  | "handwriting";

export const topics: {
  id: TopicId;
  title: Bilingual;
  group: "opening" | "core";
  highlight?: boolean;
  body: Bilingual;
}[] = [
  {
    id: "prayer",
    title: { en: "Prayer", te: "ప్రార్థన" },
    group: "opening",
    body: {
      en: "Begin each session with a short prayer that sets a calm, focused mood for learning English together.",
      te: "ప్రతి సెషన్‌ను చిన్న ప్రార్థనతో ప్రారంభించి, కలిసి ఇంగ్లీష్ నేర్చుకోవడానికి ప్రశాంతమైన వాతావరణం సృష్టించండి.",
    },
  },
  {
    id: "pledge",
    title: { en: "Pledge", te: "ప్రతిజ్ఞ" },
    group: "opening",
    body: {
      en: "Students recite a learning pledge: speak clearly, listen kindly, and practise English every day.",
      te: "విద్యార్థులు నేర్చుకునే ప్రతిజ్ఞ చేస్తారు: స్పష్టంగా మాట్లాడండి, దయతో వినండి, ప్రతిరోజూ ఇంగ్లీష్ అభ్యసించండి.",
    },
  },
  {
    id: "preamble",
    title: { en: "Preamble", te: "ఆముఖం" },
    group: "opening",
    body: {
      en: "A short preamble introduces the day’s goal so learners know what skill they will strengthen.",
      te: "ఆ రోజు లక్ష్యాన్ని తెలియజేసే చిన్న ఆముఖంతో, విద్యార్థులు ఏ నైపుణ్యం పెంచుకుంటారో అర్థం చేసుకుంటారు.",
    },
  },
  {
    id: "motivational-song",
    title: { en: "Motivational Song", te: "ప్రేరణాత్మక గీతం" },
    group: "opening",
    body: {
      en: "A lively motivational song builds energy and helps pronunciation through rhythm and repetition.",
      te: "ఉత్సాహభరితమైన గీతం శక్తిని పెంచుతుంది మరియు లయ, పునరావృత్తి ద్వారా ఉచ్చారణను మెరుగుపరుస్తుంది.",
    },
  },
  {
    id: "tongue-twister",
    title: { en: "Tongue Twister", te: "నాలుక తిప్పే పదాలు" },
    group: "opening",
    body: {
      en: "Fun tongue twisters warm up the mouth muscles and sharpen clarity and speed of speech.",
      te: "ఆసక్తికరమైన నాలుక తిప్పే పదాలు నోటి కండరాలను వేడి చేసి, స్పష్టత మరియు వేగాన్ని పెంచుతాయి.",
    },
  },
  {
    id: "common-action-words",
    title: { en: "Common Action Words", te: "సాధారణ క్రియా పదాలు" },
    group: "opening",
    body: {
      en: "Learn everyday action verbs with gestures so speaking becomes natural and confident.",
      te: "రోజువారీ క్రియా పదాలను సంజ్ఞలతో నేర్చుకొని, మాట్లాడటం సహజంగా మరియు నమ్మకంగా మారుతుంది.",
    },
  },
  {
    id: "english-at-home",
    title: { en: "English @ Home", te: "ఇంట్లో ఇంగ్లీష్" },
    group: "core",
    body: {
      en: "Practise kitchen, greeting, and family conversation phrases you can use at home every day.",
      te: "ప్రతిరోజూ ఇంట్లో ఉపయోగించగల వంటగది, శుభాకాంక్షలు మరియు కుటుంబ సంభాషణ పదబంధాలు అభ్యసించండి.",
    },
  },
  {
    id: "english-at-school",
    title: { en: "English @ School", te: "స్కూల్‌లో ఇంగ్లీష్" },
    group: "core",
    body: {
      en: "Classroom English for asking questions, answering teachers, and working with classmates.",
      te: "ప్రశ్నలు అడగడం, ఉపాధ్యాయులకు సమాధానం ఇవ్వడం, సహచరులతో పని చేయడం కోసం తరగతి గది ఇంగ్లీష్.",
    },
  },
  {
    id: "tenses",
    title: { en: "Tenses", te: "కాలాలు" },
    group: "core",
    body: {
      en: "Master present, past, and future tenses with clear examples from real life in India.",
      te: "భారతదేశం నుండి నిజ జీవిత ఉదాహరణలతో వర్తమాన, భూత, భవిష్యత్ కాలాలను నేర్చుకోండి.",
    },
  },
  {
    id: "air-news",
    title: { en: "AIR News", te: "ఏఐఆర్ వార్తలు" },
    group: "core",
    body: {
      en: "Listen to All India Radio style news snippets to build listening and vocabulary skills.",
      te: "వినికిడి మరియు పదజాలం నైపుణ్యాల కోసం ఆల్ ఇండియా రేడియో శైలి వార్తా సంక్షిప్తాలు వినండి.",
    },
  },
  {
    id: "vocabulary",
    title: { en: "Vocabulary", te: "పదజాలం" },
    group: "core",
    body: {
      en: "Themed word banks with Telugu meanings help you remember and use new English words.",
      te: "తెలుగు అర్థాలతో కూడిన థీమ్ పద సంగ్రహాలు కొత్త ఇంగ్లీష్ పదాలను గుర్తుంచుకోవడంలో సహాయపడతాయి.",
    },
  },
  {
    id: "contextual-grammar",
    title: { en: "Contextual Grammar", te: "సందర్భోచిత వ్యాకరణం" },
    group: "core",
    body: {
      en: "Grammar taught through stories and dialogues — not dry rules alone.",
      te: "కథలు మరియు సంభాషణల ద్వారా వ్యాకరణం — పొడి నియమాలు మాత్రమే కాదు.",
    },
  },
  {
    id: "handwriting",
    title: { en: "Handwriting", te: "చేతిరాత" },
    group: "core",
    highlight: true,
    body: {
      en: "Beautiful handwriting practice sheets for neat English letters, words, and sentences.",
      te: "సుందరమైన ఇంగ్లీష్ అక్షరాలు, పదాలు మరియు వాక్యాల కోసం చేతిరాత అభ్యాస పత్రాలు.",
    },
  },
];

export const feePlans: {
  level: Bilingual;
  monthly: Bilingual;
  note: Bilingual;
}[] = [
  {
    level: { en: "Pre-Beginner / Beginner", te: "ప్రీ-బిగినర్ / బిగినర్" },
    monthly: { en: "₹1,500 / month", te: "నెలకు ₹1,500" },
    note: {
      en: "2 sessions per week · group batch",
      te: "వారానికి 2 సెషన్లు · గ్రూప్ బ్యాచ్",
    },
  },
  {
    level: { en: "Elementary / Standard", te: "ఎలిమెంటరీ / స్టాండర్డ్" },
    monthly: { en: "₹2,200 / month", te: "నెలకు ₹2,200" },
    note: {
      en: "3 sessions per week · speaking labs included",
      te: "వారానికి 3 సెషన్లు · స్పీకింగ్ ల్యాబ్‌లు ఉన్నాయి",
    },
  },
  {
    level: { en: "Professional", te: "ప్రొఫెషనల్" },
    monthly: { en: "₹3,500 / month", te: "నెలకు ₹3,500" },
    note: {
      en: "Flexible timings · workplace English focus",
      te: "సౌకర్యవంతమైన సమయాలు · కార్యాలయ ఇంగ్లీష్ ప్రాధాన్యత",
    },
  },
  {
    level: { en: "Family English", te: "కుటుంబ ఇంగ్లీష్" },
    monthly: { en: "₹4,000 / family", te: "కుటుంబానికి ₹4,000" },
    note: {
      en: "Up to 4 family members · weekend batches",
      te: "4 మంది కుటుంబ సభ్యుల వరకు · వారాంత బ్యాచ్‌లు",
    },
  },
];

export const faqs: { q: Bilingual; a: Bilingual }[] = [
  {
    q: {
      en: "Do you teach in both English and Telugu?",
      te: "మీరు ఇంగ్లీష్ మరియు తెలుగు రెండింటిలోనూ బోధిస్తారా?",
    },
    a: {
      en: "Yes. Every page and classroom explanation is bilingual so Telugu speakers feel supported while learning English.",
      te: "అవును. ప్రతి పేజీ మరియు తరగతి వివరణ ద్విభాషా, కాబట్టి తెలుగు మాట్లాడేవారు ఇంగ్లీష్ నేర్చుకుంటూ సహాయం పొందుతారు.",
    },
  },
  {
    q: {
      en: "Can I take a baseline test before joining?",
      te: "చేరే ముందు బేస్‌లైన్ పరీక్ష రాయవచ్చా?",
    },
    a: {
      en: "Absolutely. Baseline tests help us place you in the right level from Pre-Beginner to Professional.",
      te: "అవును. బేస్‌లైన్ పరీక్షలు మిమ్మల్ని ప్రీ-బిగినర్ నుండి ప్రొఫెషనల్ వరకు సరైన స్థాయిలో ఉంచడానికి సహాయపడతాయి.",
    },
  },
  {
    q: {
      en: "Is there an earn-back option for fees?",
      te: "ఫీజు తిరిగి సంపాదించే అవకాశం ఉందా?",
    },
    a: {
      en: "Yes. Through Home Tutors and Work With GEMS programmes, eligible learners can earn while they learn.",
      te: "అవును. హోమ్ ట్యూటర్లు మరియు Work With GEMS కార్యక్రమాల ద్వారా అర్హులైన విద్యార్థులు నేర్చుకుంటూ సంపాదించవచ్చు.",
    },
  },
];

export const testimonials: {
  id: string;
  name: Bilingual;
  role: Bilingual;
  quote: Bilingual;
  image: string;
  link?: { label: Bilingual; href: string };
}[] = [
  {
    id: "ghanta-subba-rao",
    name: { en: "Dr. Ghanta Subba Rao", te: "డా. ఘంటా సుబ్బా రావు" },
    role: {
      en: "Soft skills & skill development · Andhra Pradesh",
      te: "సాఫ్ట్ స్కిల్స్ & నైపుణ్య అభివృద్ధి · ఆంధ్రప్రదేశ్",
    },
    quote: {
      en: "Mr. Kiron Satyamurthy is a passionate and thoughtful English language Communication and soft-skills trainer who puts a lot of thought into how he presents the material and builds confidence in a learner. For over three decades he has been teaching communication skills. He passionately advocates Oracy first and Literacy next. Through smart teaching, joyful learning and his GEMS methodology he was able to train successfully over 20,000 students. We made use of his expertise in imparting soft skills to graduate students entering Information Technology at the Institute for Electronic Governance (IEG).",
      te: "శ్రీ కిరణ్ సత్యమూర్తి గారు ఉత్సాహవంతులైన ఇంగ్లీష్ కమ్యూనికేషన్ మరియు సాఫ్ట్ స్కిల్స్ ట్రైనర్. మూడు దశాబ్దాలుగా సంభాషణ నైపుణ్యాలు బోధిస్తున్నారు. ముందు మాట్లాడటం (Oracy), తర్వాత రాత (Literacy) అని ఆయన సూచిస్తారు. GEMS పద్ధతి ద్వారా 20,000 కంటే ఎక్కువ మంది విద్యార్థులకు శిక్షణ ఇచ్చారు. IEGలో ఐటీలో చేరే గ్రాడ్యుయేట్ విద్యార్థులకు సాఫ్ట్ స్కిల్స్ బోధించడంలో ఆయన నైపుణ్యాన్ని ఉపయోగించుకున్నాము.",
    },
    image: "/testimonials/ghanta-subba-rao.jpg",
  },
  {
    id: "sunita-gandhi",
    name: { en: "Dr. Sunita Gandhi", te: "డా. సునీతా గాంధీ" },
    role: {
      en: "Director, Global Education & Training Institute (GETI)",
      te: "డైరెక్టర్, గ్లోబల్ ఎడ్యుకేషన్ & ట్రైనింగ్ ఇన్‌స్టిట్యూట్ (GETI)",
    },
    quote: {
      en: "Mr. Kiron impressed our Master Trainers and joined GETI. He trained teachers in Vaniyambadi, Tamil Nadu and our franchise schools in Pune and Mumbai on improving English communication skills. He and his children Bhavya and Ray took part in programmes at City Montessori School, Lucknow — the world’s largest school — and at our Hyderabad GETI Convention. I am impressed with his presentation skills and out-of-the-box thinking. He is dedicated to changing education so young children can enjoy learning.",
      te: "శ్రీ కిరణ్ మా మాస్టర్ ట్రైనర్లను ఆకట్టుకొని GETIలో చేరారు. వాణియంబడి, పూణే, ముంబైలో ఉపాధ్యాయులకు ఇంగ్లీష్ కమ్యూనికేషన్ శిక్షణ ఇచ్చారు. లక్నో CMS మరియు హైదరాబాద్ GETI కాన్వెన్షన్‌లో కుటుంబంతో పాల్గొన్నారు. ఆయన ప్రెజెంటేషన్ నైపుణ్యాలు మరియు కొత్త ఆలోచనలు నన్ను ఆకట్టుకున్నాయి. పిల్లలు సంతోషంగా నేర్చుకునేలా విద్యా వ్యవస్థను మార్చాలని ఆయన కృషి చేస్తున్నారు.",
    },
    image: "/testimonials/sunita-gandhi-geti.jpg",
  },
  {
    id: "venkataramana-reddy",
    name: {
      en: "Prof. Dr. C. Venkataramana Reddy",
      te: "ప్రొఫెసర్ డా. సి. వెంకటరమణ రెడ్డి",
    },
    role: {
      en: "Vice Chancellor, K. K. University, Nalanda",
      te: "వైస్ ఛాన్సలర్, కె.కె. యూనివర్సిటీ, నలంద",
    },
    quote: {
      en: "Sri Kiron Satyamurthy is an English trainer with a difference — on a mission to make Listening, Speaking, Reading and Writing a pleasure, especially for rural learners. As Founder-Principal of Vivekananda Institute of Technology and Science, Karimnagar, I invited him as a Guest Trainer for engineering students and the outcome was wonderful. His method appears close to the way we learn our mother tongue. Thank you for helping students gain a good command over English in a fun way.",
      te: "శ్రీ కిరణ్ సత్యమూర్తి గారు విభిన్నమైన ఇంగ్లీష్ ట్రైనర్ — ముఖ్యంగా గ్రామీణ విద్యార్థులకు LSRW నైపుణ్యాలు సరదాగా నేర్పించాలని కృషి చేస్తున్నారు. కరీంనగర్‌లో ఇంజనీరింగ్ విద్యార్థులకు గెస్ట్ ట్రైనర్‌గా ఆహ్వానించగా ఫలితాలు అద్భుతంగా ఉన్నాయి. ఆయన పద్ధతి మాతృభాష నేర్చుకునే విధానానికి దగ్గరగా ఉంటుంది.",
    },
    image: "/testimonials/venkataramana-reddy.jpg",
  },
  {
    id: "gnanakan",
    name: { en: "Dr. Gnanakan", te: "డా. ఙ్ఞానకన్" },
    role: {
      en: "Educator & mentor",
      te: "విద్యావేత్త & మార్గదర్శకులు",
    },
    quote: {
      en: "Primarily a Zoology professor, Mr. Kiron left that role to structure his own style of teaching Spoken English — easily yet concretely. His experiments with children of the Banjara tribe are living proof that nothing is impossible: tribal kids communicating in fine English with correct accent and intonation. He is a Trainer of Trainers. I prayerfully wish that he continues to fine-tune the learning world with good English.",
      te: "జంతుశాస్త్ర ప్రొఫెసర్‌గా ఉన్న శ్రీ కిరణ్, స్పోకెన్ ఇంగ్లీష్‌ను సులభంగా, స్పష్టంగా బోధించే స్వంత పద్ధతిని రూపొందించారు. బంజారా గిరిజన పిల్లలతో ఆయన ప్రయోగాలు — సరైన యాస, స్వరంతో ఇంగ్లీష్ మాట్లాడటం — అసాధ్యం అనేది లేదని నిరూపిస్తాయి. ఆయన ట్రైనర్ ఆఫ్ ట్రైనర్స్. మంచి ఇంగ్లీష్‌తో నేర్చుకునే ప్రపంచాన్ని మెరుగుపరచాలని నా ఆశీర్వాదాలు.",
    },
    image: "/testimonials/gnanakan.jpg",
  },
  {
    id: "luder-luers",
    name: { en: "Lüder Lüers", te: "లూడర్ లూయర్స్" },
    role: {
      en: "Founder Director, Kindernothilfe, Germany",
      te: "వ్యవస్థాపక డైరెక్టర్, కిండర్‌నోత్‌హిల్ఫే, జర్మనీ",
    },
    quote: {
      en: "I am indeed very happy about the amazing performance of children at BSS High School, Garla, where Mr. Kiron Satyamurthy has been working as Academic Director. The Government of Telangana should undertake a special study of the school and his teaching concepts. BSS High School could be declared a Model School. I have read his paper to the NCERT Expert Committee — ENGLISH IS BEING TAUGHT AND LEARNT IN THE WRONG WAY IN MOST OF THE PLACES IN INDIA — and I am fully convinced that HE IS RIGHT.",
      te: "గార్లా BSS హైస్కూల్‌లో అకడమిక్ డైరెక్టర్‌గా పనిచేస్తున్న శ్రీ కిరణ్ సత్యమూర్తి గారి వద్ద పిల్లల అద్భుత ప్రదర్శన చూసి సంతోషంగా ఉన్నాను. తెలంగాణ ప్రభుత్వం ఆ పాఠశాలను మోడల్ స్కూల్‌గా ప్రకటించి మద్దతు ఇవ్వాలి. NCERTకి ఆయన సమర్పించిన పత్రం చదివాను — భారతదేశంలో చాలా చోట్ల ఇంగ్లీష్ తప్పు విధంగా నేర్పబడుతోంది అని — మరియు ఆయన సరైనవారని నేను నమ్ముతున్నాను.",
    },
    image: "/testimonials/luder-luers.jpg",
  },
  {
    id: "prof-carol",
    name: { en: "Prof. Carol", te: "ప్రొఫెసర్ కరోల్" },
    role: {
      en: "IEG JKC · Mana TV, USA",
      te: "IEG JKC · మన టీవీ, USA",
    },
    quote: {
      en: "On the Mana TV show about communication — words, tonality and body language — Prof. Carol said: “Wow, but I really like your body language… You talked about body language and you did body language.” When asked whether the topic or the body language was good, she answered: “Both.”",
      te: "కమ్యూనికేషన్ — పదాలు, స్వరం, భాషా భావాలు — గురించి మన టీవీ కార్యక్రమంలో ప్రొఫెసర్ కరోల్: “మీ బాడీ లాంగ్వేజ్ నచ్చింది… మీరు బాడీ లాంగ్వేజ్ గురించి మాట్లాడారు మరియు చూపించారు.” అంశం మంచిదా, బాడీ లాంగ్వేజ్ మంచిదా అని అడిగితే: “రెండూ” అన్నారు.",
    },
    image: "/testimonials/prof-carol.jpg",
    link: {
      label: { en: "Watch on YouTube", te: "YouTubeలో చూడండి" },
      href: "https://youtu.be/iO0SO7Zj6Y4",
    },
  },
  {
    id: "james-mary-pearce",
    name: { en: "James & Mary Pearce", te: "జేమ్స్ & మేరీ పియర్స్" },
    role: {
      en: "GETI Master Trainers · USA",
      te: "GETI మాస్టర్ ట్రైనర్లు · USA",
    },
    quote: {
      en: "We have worked for Dr. Sunita Gandhi for 8 years in India. We have closely followed Kiron’s work and are quite impressed. Kiron has dedicated his life (and family) to bringing excellent English skills to young people who would never otherwise attain this. His concepts and practices are creative and extremely useful. Kiron’s best legacy is the trail of success he leaves as he gives his best to rural India.",
      te: "మేము భారతదేశంలో డా. సునీతా గాంధీ గారి కోసం 8 సంవత్సరాలు పనిచేశాము. కిరణ్ పనిని దగ్గరగా చూశాము — చాలా ఆకట్టుకుంది. లేకపోతే ఈ నైపుణ్యాలు రాని యువతకు అద్భుతమైన ఇంగ్లీష్ తీసుకురావడానికి ఆయన జీవితాన్ని (కుటుంబాన్ని కూడా) అంకితం చేశారు. గ్రామీణ భారతదేశానికి ఆయన ఇచ్చే విజయ మార్గమే ఆయన ఉత్తమ వారసత్వం.",
    },
    image: "/testimonials/james-mary-pearce.jpg",
  },
  {
    id: "judy-thompson",
    name: { en: "Prof. Judy Thompson", te: "ప్రొఫెసర్ జూడీ థాంప్సన్" },
    role: {
      en: "Language Coach, Author & Innovator",
      te: "లాంగ్వేజ్ కోచ్, రచయిత & ఇన్నోవేటర్",
    },
    quote: {
      en: "Hi Kiron — we are not alone. Last year I organised a meeting in England for radical English teachers from all over the world. Each of us had developed simple systems for teaching different aspects of English. The Radical English Summit was so successful that all participants decided to go forward together to support change in the way English is being taught. Stay in touch. — Judy Thompson, July 27, 2013",
      te: "హాయ్ కిరణ్ — మనం ఒంటరిగా లేము. ప్రపంచవ్యాప్తంగా రాడికల్ ఇంగ్లీష్ ఉపాధ్యాయుల సమావేశాన్ని ఇంగ్లాండ్‌లో నిర్వహించాను. ఇంగ్లీష్ బోధనలో మార్పుకు కలిసి ముందుకు వెళ్లాలని అందరూ నిర్ణయించుకున్నారు. సంప్రదింపులో ఉండండి. — జూడీ థాంప్సన్, జూలై 27, 2013",
    },
    image: "/testimonials/judy-thompson.jpg",
  },
];

export function getLevel(id: string) {
  return levels.find((l) => l.id === id);
}

export function getTopic(id: string) {
  return topics.find((t) => t.id === id);
}
