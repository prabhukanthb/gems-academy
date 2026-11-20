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
    name: { en: "TODDLER", te: "టాడ్లర్" },
    description: {
      en: "Pre-beginner level before joining school",
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
    level: { en: "Toddler / Beginner", te: "టాడ్లర్ / బిగినర్" },
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
      en: "Absolutely. Baseline tests help us place you in the right level from Toddler to Professional.",
      te: "అవును. బేస్‌లైన్ పరీక్షలు మిమ్మల్ని టాడ్లర్ నుండి ప్రొఫెషనల్ వరకు సరైన స్థాయిలో ఉంచడానికి సహాయపడతాయి.",
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
  name: Bilingual;
  role: Bilingual;
  quote: Bilingual;
}[] = [
  {
    name: { en: "Lakshmi Devi", te: "లక్ష్మీ దేవి" },
    role: { en: "Parent · Beginner batch", te: "తల్లి · బిగినర్ బ్యాచ్" },
    quote: {
      en: "My daughter now greets guests in English with confidence. The Telugu support made all the difference.",
      te: "నా కూతురు ఇప్పుడు అతిథులను నమ్మకంగా ఇంగ్లీష్‌లో పలకరిస్తుంది. తెలుగు సహాయం చాలా ఉపయోగపడింది.",
    },
  },
  {
    name: { en: "Ravi Kumar", te: "రవి కుమార్" },
    role: {
      en: "IT Professional · Professional level",
      te: "ఐటీ నిపుణుడు · ప్రొఫెషనల్ స్థాయి",
    },
    quote: {
      en: "Workplace emails and meetings became easier after the Professional track at GEMS.",
      te: "GEMS ప్రొఫెషనల్ ట్రాక్ తర్వాత కార్యాలయ ఇమెయిల్‌లు మరియు మీటింగ్‌లు సులభమయ్యాయి.",
    },
  },
  {
    name: { en: "Sita Reddy", te: "సీతా రెడ్డి" },
    role: { en: "Home Tutor · Earn programme", te: "హోమ్ ట్యూటర్ · ఎర్న్ ప్రోగ్రామ్" },
    quote: {
      en: "I recovered my course fee within months by tutoring juniors through GEMS Home Tutors.",
      te: "GEMS హోమ్ ట్యూటర్ల ద్వారా జూనియర్లకు బోధించి కొన్ని నెలల్లోనే నా కోర్సు ఫీజు తిరిగి సంపాదించాను.",
    },
  },
];

export function getLevel(id: string) {
  return levels.find((l) => l.id === id);
}

export function getTopic(id: string) {
  return topics.find((t) => t.id === id);
}
