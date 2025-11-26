const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Agent Overview",
    link: "#experience",
  },
  {
    name: "Service",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const growthAgents = [
  {
    title: "AI-Powered Customer Service Automation",
    desc: "24/7 chat and voice agents handle FAQs, tickets, and responses so teams focus on higher-value work while customers get fast, accurate help.",
    short: "Customer support agents that work 24/7 across chat, voice, and tickets.",
    highlights: [
      "Escalation routing keeps complex issues human-led",
      "Works across chat, email, and voice channels",
      "Integrates with ticketing to log and close faster",
    ],
  },
  {
    title: "Automated Cold Email Outreach",
    desc: "Targeted lists, tailored messages, and automated follow-ups that scale outreach and fill your pipeline without extra effort.",
    short: "Personalized prospecting sequences that build and follow-up automatically.",
    highlights: [
      "Enriches leads to personalize at scale",
      "Sequenced follow-ups tuned to reply signals",
      "Metrics to double-down on winning copy",
    ],
  },
  {
    title: "Meeting Automation: Live Transcripts, Notes & Action Items",
    desc: "Real-time transcription plus summaries, takeaways, and action steps so nothing is missed across video or audio meetings.",
    short: "Transcripts, summaries, and action items from every call, auto-generated.",
    highlights: [
      "Instant recap with owners and deadlines",
      "Searchable transcript history for every call",
      "Plugs into calendars and conferencing tools",
    ],
  },
  {
    title: "AI-Assisted Thesis & Research Automation",
    desc: "Research structuring, literature analysis, drafting, editing, and formatting support with originality and accuracy baked in.",
    short: "Structured research, drafting, and formatting assistance for theses and papers.",
    highlights: [
      "Outline, citations, and drafting guardrails",
      "Plagiarism-safe rewrites and clarity passes",
      "Exports to your required formatting style",
    ],
  },
  {
    title: "Social Media Automation & Content Creation",
    desc: "Idea generation, captions, scheduling, and performance insights to keep your brand active and engaging on autopilot.",
    short: "Ideas, captions, schedules, and analytics to keep social channels active.",
    highlights: [
      "Brand-safe tone and visuals per channel",
      "Calendar and queue with best-post times",
      "Performance loops to improve every week",
    ],
  },
  {
    title: "Custom Agents For You",
    desc: "Any bespoke workflow or growth goal—built as an agent tailored to your personal or business needs.",
    short: "Bespoke agents tailored to your exact workflow and success metrics.",
    highlights: [
      "Scoped to your tools and success metrics",
      "Fast prototypes with iterative releases",
      "Ownership handoff and documentation included",
    ],
  },
];

const expCards = [
  {
    review:
      "Medibot keeps responses clinical-grade by grounding an LLM with a RAG pipeline built on verified medical literature.",
    imgPath: "/images/poject/medibot.png",
    logoPath: "/images/poject/medibot.png",
    title: "MediBot | Medical RAG Chatbot",
    date: "2025 - Present",
    responsibilities: [
      "User query -> LLM -> knowledge base -> answer flow keeps hallucinations out of the loop.",
      "Pipeline: extract and chunk medical documents, generate Hugging Face embeddings, and persist them in Pinecone.",
      "LangChain orchestrates retrieval and grounding, FastAPI serves the API, Gemini/OpenAI finalize the response.",
    ],
  },
  {
    review:
      "QuizPoolAi turns long-form videos into multilingual, test-ready study kits that ship straight to learners.",
    imgPath: "/images/poject/QuizPoolAi.png",
    logoPath: "/images/poject/QuizPoolAi.png",
    title: "QuizPoolAi | Multilingual Video Tutor",
    date: "2025 Launch",
    responsibilities: [
      "Accepts a YouTube link and generates concise notes plus quizzes in any supported language.",
      "Auto-emails study notes so students and edtech teams can distribute material immediately.",
      "Built to help students and education businesses accelerate assessment workflows from day one.",
    ],
  },
  {
    review:
      "Fyplace automates local outreach by pairing place-based lead discovery with ready-to-send cold emails.",
    imgPath: "/images/poject/fyplace.png",
    logoPath: "/images/poject/fyplace.png",
    title: "Fyplace | Local Outreach Agent",
    date: "2023 - Present",
    responsibilities: [
      "User selects a location and the agent returns businesses and institutions worth contacting.",
      "Generates and dispatches cold emails automatically to streamline agency outreach.",
      "Designed for agency owners looking to double growth by scaling personalized prospecting.",
    ],
  },
];

const expLogos = [
  {
    name: "medibot",
    imgPath: "/images/poject/medibot.png",
  },
  {
    name: "quizpoolai",
    imgPath: "/images/poject/QuizPoolAi.png",
  },
  {
    name: "fyplace",
    imgPath: "/images/poject/fyplace.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Autonomiaai. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Atonomiaai was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with AutonomiaAI was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Atonomiaai was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Their expertise in web development is truly impressive. They delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "AutonomiaAI agencies was a pleasure to work with them. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  growthAgents,
  techStackImgs,
  navLinks,
};
