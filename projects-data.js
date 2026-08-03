/* =========================================================
   PROJECTS-DATA.JS
   Single source of truth for project content.
   Set image: "images/projects/your-file.jpg" on any project
   to fill the card media slot (null shows a placeholder).
   ========================================================= */

const GITHUB_PROFILE = 'https://github.com/Nosh-thee-techy';

const projectCategories = [
  { id: 'all', label: 'All work' },
  { id: 'design', label: 'Design work' },
  { id: 'machine-learning', label: 'Machine learning' },
  { id: 'data-analytics', label: 'Data analytics' },
  { id: 'software', label: 'Software' },
  { id: 'fintech', label: 'Fintech' },
  { id: 'community', label: 'Community' }
];

const projectData = [
  {
    id: 'kali',
    tag: 'Graph ML · Fintech',
    categories: ['machine-learning', 'data-analytics', 'fintech'],
    title: 'KaLI',
    summary: 'Relationship-driven credit scoring for smallholder farmers, using graph data and explainable ML.',
    problem: 'Smallholder farmers are usually invisible to formal credit systems — no collateral, no transaction history, no paper trail a bank recognizes. But they\'re deeply embedded in real economic relationships: cooperatives, suppliers, buyers.',
    helped: 'Designed and built the full scoring pipeline with Eugene Mutembei — from Neo4j relationship graphs to explainable ML models lenders can actually audit. Turned informal economic networks into something a credit decision can use.',
    whatItDid: 'Scores a farmer\'s creditworthiness from their position and behavior in real supply-chain networks, not just isolated paperwork. SHAP explanations show why a score landed where it did, so a rejected applicant isn\'t left with a black box.',
    approach: 'KaLI models farmer relationships as a graph in Neo4j, then layers XGBoost and LightGBM with a GNN on top. Creditworthiness comes from network position and behavior, with SHAP keep every score auditable.',
    impact: '1st Place at the Kenya AI Challenge. Proved that relationship graphs can unlock credit visibility for farmers formal systems ignore.',
    stack: ['Neo4j', 'XGBoost', 'LightGBM', 'GNN', 'SHAP', 'Python'],
    result: '1st Place — Kenya AI Challenge, built with teammate Eugene Mutembei.',
    tone: 1,
    image: null,
    liveLink: null,
    github: GITHUB_PROFILE + '/kali',
    article: {
      title: 'KaLI: scoring credit from relationships, not paperwork',
      excerpt: 'How graph structure and explainable ML turn farmer networks into an auditable credit signal.',
      kind: 'Article',
      url: null
    }
  },
  {
    id: 'tahadhari',
    tag: 'Health Tech',
    categories: ['software', 'design'],
    title: 'Tahadhari',
    summary: 'Maternal emergency response system spanning WhatsApp, USSD, voice, and web.',
    problem: 'Maternal emergencies in Kenya are often a race against three things at once: recognizing risk in time, finding transport, and finding a facility with the right blood stock. Most tools solve only one.',
    helped: 'Architected a multi-channel emergency flow that works on smartphones and feature phones alike — risk detection, transport coordination, and blood-stock matching in one system instead of three disconnected apps.',
    whatItDid: 'Lets a family raise an alert over WhatsApp, USSD, or voice, then routes them toward transport and a facility that can actually help — including cross-facility blood stock awareness when minutes matter.',
    approach: 'One system across WhatsApp, USSD, voice, and a web dashboard. Covers risk detection, transport coordination, and blood matching in a single calm flow under pressure.',
    impact: 'Compressed maternal emergency response into one multi-channel flow — WhatsApp, USSD, voice, and web — so families are not forced to juggle three apps in a crisis.',
    stack: ['WhatsApp API', 'USSD', 'Voice', 'Multi-channel architecture', 'Web dashboard'],
    result: 'Built for an AI Hackathon focused on maternal health emergency response.',
    tone: 2,
    image: null,
    liveLink: null,
    github: GITHUB_PROFILE + '/tahadhari',
    article: {
      title: 'Tahadhari: designing maternal emergency flow under pressure',
      excerpt: 'WhatsApp, USSD, voice, and web — one calm system when minutes matter.',
      kind: 'Documentation',
      url: null
    }
  },
  {
    id: 'contrabot',
    tag: 'Health Tech · AI',
    categories: ['machine-learning', 'software', 'design'],
    title: 'ContraBot',
    summary: 'Multilingual AI contraception counselor designed for real conversations, not clinical scripts.',
    problem: 'Contraception counseling is often inaccessible — limited clinic hours, language barriers, and stigma keep people from asking the questions they need answered privately and clearly.',
    helped: 'Led Team RKO on product direction and conversational design — building an AI counselor that meets people in their language, with privacy and clarity as first-class requirements.',
    whatItDid: 'Answers contraception questions in multiple languages through a chat experience people can use without walking into a clinic or explaining themselves out loud.',
    approach: 'A multilingual AI counselor focused on accessible reproductive health guidance rather than one-size-fits-all pamphlets.',
    impact: 'Made contraception guidance private, multilingual, and available outside clinic hours — reducing stigma as a barrier to asking.',
    stack: ['AI conversation', 'Multilingual NLP', 'Health UX'],
    result: 'Built with Team RKO — focused on accessible reproductive health guidance.',
    tone: 3,
    image: null,
    liveLink: null,
    github: GITHUB_PROFILE + '/contrabot',
    article: {
      title: 'ContraBot: private contraception guidance in people’s languages',
      excerpt: 'Product notes on multilingual counseling, stigma, and conversational design.',
      kind: 'Article',
      url: null
    }
  },
  {
    id: 'equitygrid',
    tag: 'Civic Tech',
    categories: ['data-analytics', 'software'],
    title: 'EquityGrid Kenya',
    summary: 'Equity scoring platform layering utility billing data with poverty classification.',
    problem: 'Utility billing data (like KPLC electricity records) quietly encodes a lot about household wellbeing — but it\'s rarely used to identify who needs support most.',
    helped: 'Built a six-variable equity scoring model that layers KPLC billing patterns with NSPS poverty classification, plus a household dashboard and NAJI voice agent so insights aren\'t trapped in a spreadsheet.',
    whatItDid: 'Surfaces which households are most likely to need support, using data that already exists in the utility system — and makes those insights reachable by voice, not only by dashboard.',
    approach: 'Combine KPLC billing patterns with NSPS classification into an equity score, exposed through a dashboard and the NAJI voice agent.',
    impact: '1st Runner Up at EPRA Hackathon. Turned existing utility billing data into an equity signal decision-makers can act on.',
    stack: ['KPLC data', 'NSPS classification', 'Scoring model', 'Voice agent', 'Dashboard'],
    result: '1st Runner Up — EPRA Hackathon.',
    tone: 4,
    image: null,
    liveLink: null,
    github: GITHUB_PROFILE + '/equitygrid-kenya',
    article: {
      title: 'EquityGrid Kenya: reading wellbeing in utility billing data',
      excerpt: 'How KPLC patterns and poverty classification became an equity score decision-makers can use.',
      kind: 'Article',
      url: null
    }
  },
  {
    id: 'promogpt',
    tag: 'AI × Marketing',
    categories: ['software', 'machine-learning', 'design'],
    title: 'PromoGPT',
    summary: 'AI marketing tool helping African SMEs reach customers without a marketing team.',
    problem: 'Most African SMEs can\'t afford a marketing hire or agency, but still need consistent, locally relevant promotion to grow.',
    helped: 'Productized AI marketing for African SME contexts — from content generation to workflows a small business can run without a dedicated marketer. Currently pressure-testing with real operators ahead of launch.',
    whatItDid: 'Helps SMEs create and manage locally relevant marketing content on a cadence they can sustain, without hiring an agency first.',
    approach: 'AI agents generate and manage marketing content tailored to African SME contexts, validated in beta with 50+ businesses.',
    impact: '50+ SMEs onboarded in beta — giving operators marketing capacity without hiring a full team first.',
    stack: ['AI agents', 'Content generation', 'SME-focused UX'],
    result: '50+ SMEs onboarded for beta. Preparing for commercial launch.',
    tone: 1,
    image: null,
    liveLink: null,
    github: GITHUB_PROFILE + '/promogpt',
    article: {
      title: 'PromoGPT: AI marketing capacity for African SMEs',
      excerpt: 'What we learned pressure-testing content workflows with 50+ small businesses.',
      kind: 'Article',
      url: null
    }
  },
  {
    id: 'clearscan',
    tag: 'Med Tech',
    categories: ['software', 'design', 'machine-learning'],
    title: 'ClearScan',
    summary: 'Two-sided medical scan communication platform with 3D organ visualization.',
    problem: 'Patients often receive scan results full of clinical language they can\'t interpret, while doctors lack an easy way to visually walk them through findings.',
    helped: 'Built the dual-dashboard experience and 3D organ visualization layer, then wired Claude-powered plain-language explanations so doctors and patients each get a view designed for them.',
    whatItDid: 'Lets doctors walk patients through scan findings visually, while patients get clear language instead of a PDF full of medical jargon.',
    approach: 'Three.js organ visualization + Claude explanations across separate doctor and patient dashboards.',
    impact: 'Closed the gap between clinical scan language and patient understanding with dual dashboards and 3D walkthroughs.',
    stack: ['Three.js', 'Claude API', 'Dual dashboards'],
    result: 'Built for the Build With Claude Hackathon.',
    tone: 2,
    image: null,
    liveLink: null,
    github: GITHUB_PROFILE + '/clearscan',
    article: {
      title: 'ClearScan: making medical scans understandable',
      excerpt: 'Dual dashboards, 3D organs, and plain-language explanations for patients and doctors.',
      kind: 'Documentation',
      url: null
    }
  },
  {
    id: 'chaiconnect',
    tag: 'Fintech · Agritech',
    categories: ['fintech', 'software'],
    title: 'ChaiConnect',
    summary: 'Payment transparency for smallholder tea farmers in the KTDA supply chain.',
    problem: 'Tea farmers within the KTDA supply chain often face delayed payments and limited visibility into what they\'re owed, despite consistent production.',
    helped: 'Built the farmer-facing transparency layer of the M-Pesa Money in Motion winning entry — making supply-chain payments something farmers can track instead of wait on blindly.',
    whatItDid: 'Gave KTDA tea farmers a clear view of payments moving through the supply chain so they can plan around real money, not rumors.',
    approach: 'MERN-based payment visibility across the tea supply chain, paired with FlowCredit for flexible credit.',
    impact: 'Winner — M-Pesa Money in Motion. Made KTDA tea payments visible to the farmers who earn them.',
    stack: ['MERN stack', 'Payment integration', 'Supply chain data'],
    result: 'Winner — M-Pesa Money in Motion Hackathon (with FlowCredit).',
    tone: 3,
    image: null,
    liveLink: null,
    github: GITHUB_PROFILE + '/chaiconnect',
    article: {
      title: 'ChaiConnect: payment transparency for KTDA tea farmers',
      excerpt: 'Building visibility into supply-chain payments so farmers can plan around real money.',
      kind: 'Article',
      url: null
    }
  },
  {
    id: 'flowcredit',
    tag: 'Fintech · Agritech',
    categories: ['fintech', 'data-analytics'],
    title: 'FlowCredit',
    summary: 'Flexible credit for KTDA tea farmers, built alongside ChaiConnect.',
    problem: 'Even productive tea farmers struggle to access short-term credit because formal lenders don\'t see them — and when cash is delayed up the supply chain, everyday costs still show up on time.',
    helped: 'Designed credit flows grounded in actual production and payment patterns from the tea economy, so lending decisions reflect how farmers already earn — not a bank form they can\'t fill.',
    whatItDid: 'Opened flexible credit options for tea farmers using signals from their real production and payment behavior, not just formal collateral.',
    approach: 'Pair credit scoring with ChaiConnect payment data inside the M-Pesa ecosystem.',
    impact: 'Winner — M-Pesa Money in Motion. Linked credit access to real tea production and payment patterns.',
    stack: ['Credit scoring', 'M-Pesa ecosystem', 'Agritech data'],
    result: 'Winner — M-Pesa Money in Motion Hackathon (with ChaiConnect).',
    tone: 4,
    image: null,
    liveLink: null,
    github: GITHUB_PROFILE + '/flowcredit',
    article: {
      title: 'FlowCredit: lending from production, not paperwork',
      excerpt: 'Credit design notes for tea farmers inside the M-Pesa Money in Motion stack.',
      kind: 'Documentation',
      url: null
    }
  },
  {
    id: 'policylens',
    tag: 'Civic Tech · AI',
    categories: ['machine-learning', 'software', 'data-analytics'],
    title: 'PolicyLens AI',
    summary: 'RAG-powered policy intelligence platform for making dense policy actually usable.',
    problem: 'Public policy documents are long, technical, and hard to navigate — so the people most affected by them rarely get clear answers from the source material itself.',
    helped: 'Built a RAG pipeline that turns dense policy PDFs into grounded, source-linked answers — so civic and policy questions don\'t die in a 200-page document.',
    whatItDid: 'Lets users ask policy questions in plain language and get answers tied back to the source text, instead of vague chatbot summaries.',
    approach: 'Retrieval-augmented generation over policy corpora with a civic-friendly query UX.',
    impact: 'Recognized at the ITU AI Readiness Hackathon. Made policy documents queryable in plain language with source grounding.',
    stack: ['RAG', 'LLMs', 'Document intelligence', 'Civic UX'],
    result: 'Recognized at the ITU AI Readiness Hackathon.',
    tone: 1,
    image: null,
    liveLink: null,
    github: GITHUB_PROFILE + '/policylens-ai',
    article: {
      title: 'PolicyLens AI: RAG that keeps policy answers grounded',
      excerpt: 'Turning dense civic documents into source-linked answers people can actually use.',
      kind: 'Article',
      url: null
    }
  },
  {
    id: 'saccoflow',
    tag: 'Fintech',
    categories: ['fintech', 'software'],
    title: 'Saccoflow',
    summary: 'SACCO management system built during the Techno Brain Incubator.',
    problem: 'Community savings and credit cooperatives (SACCOs) often run on spreadsheets, paper, and tribal knowledge — which makes membership, loans, and contributions harder to manage as they grow.',
    helped: 'Built core SACCO management workflows at Techno Brain Incubator — membership, loans, and contributions — learning early that fintech only works when it respects the community structure it sits inside.',
    whatItDid: 'Gave SACCO operators a digital way to track membership, loans, and contributions instead of relying only on paper and tribal knowledge.',
    approach: 'Web app for membership workflows and loan tracking inside community savings structures.',
    impact: 'Digitized SACCO membership, loans, and contributions — an early foundation in community fintech systems.',
    stack: ['Web app', 'Membership workflows', 'Loan tracking'],
    result: 'Built at Techno Brain Incubator — early foundation in community fintech.',
    tone: 2,
    image: null,
    liveLink: null,
    github: GITHUB_PROFILE + '/saccoflow',
    article: {
      title: 'Saccoflow: digitizing community savings without erasing community',
      excerpt: 'Early lessons from building SACCO membership and loan workflows at Techno Brain.',
      kind: 'Documentation',
      url: null
    }
  },
  {
    id: 'wote',
    tag: 'Community · Women in Tech',
    categories: ['community', 'design'],
    title: 'WoTe',
    summary: 'A women-in-tech community built on access + community = representation.',
    problem: 'Talent alone doesn\'t create representation. Without structured access to skills, networks, and rooms where decisions happen, women in tech stay under-visible — even when they\'re already building.',
    helped: 'Founded and structured the launch — Pitching Masterclass, blockchain theory track, and a content rhythm that turns sessions into public signal. Applied systems thinking to community, not just product.',
    whatItDid: 'Gives women in tech structured access to skills, pitching practice, and a network — so representation is built, not hoped for.',
    approach: '4-week Pitching Masterclass, 6-week blockchain theory track, and session-recap content strategy.',
    impact: 'Founded a living women-in-tech system — pitching practice, blockchain literacy, and a network that makes representation intentional.',
    stack: ['Community design', 'Curriculum', 'Content strategy', 'Mentorship'],
    result: 'Founded and actively building — access + community = representation.',
    tone: 3,
    image: null,
    liveLink: null,
    github: GITHUB_PROFILE,
    article: {
      title: 'WoTe: access + community = representation',
      excerpt: 'Why I founded a women-in-tech system around pitching, literacy, and public signal — not vibes alone.',
      kind: 'Article',
      url: null
    }
  }
];

const articleFilters = [
  { id: 'all', label: 'All writing' },
  { id: 'article', label: 'Articles' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'machine-learning', label: 'Machine learning' },
  { id: 'software', label: 'Software' },
  { id: 'fintech', label: 'Fintech' },
  { id: 'design', label: 'Design' },
  { id: 'data-analytics', label: 'Data analytics' },
  { id: 'community', label: 'Community' }
];

/** Journey writing list — derived from projects that have an `article` block.
 *  Set article.url on each project when ready.
 *  When url is null, the card falls back to the project GitHub.
 */
function getJourneyArticles() {
  return projectData
    .filter(function (p) { return p.article; })
    .map(function (p) {
      var a = p.article;
      var hasUrl = !!(a.url && String(a.url).trim());
      var kind = a.kind || 'Documentation';
      return {
        projectId: p.id,
        project: p.title,
        tag: p.tag,
        categories: p.categories || [],
        title: a.title,
        excerpt: a.excerpt,
        kind: kind,
        kindId: String(kind).toLowerCase() === 'article' ? 'article' : 'documentation',
        url: hasUrl ? a.url : p.github,
        external: true
      };
    });
}

function filterJourneyArticles(filterId) {
  var items = getJourneyArticles();
  if (!filterId || filterId === 'all') return items;
  if (filterId === 'article' || filterId === 'documentation') {
    return items.filter(function (a) { return a.kindId === filterId; });
  }
  return items.filter(function (a) {
    return (a.categories || []).indexOf(filterId) !== -1;
  });
}
