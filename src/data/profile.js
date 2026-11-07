// All site content lives here, so updating the portfolio never means touching layout code.

export const profile = {
  name: 'Abheejan Lal Shrestha',
  role: 'Backend Developer',
  location: 'Lalitpur, Nepal',
  university: 'Pokhara University',
  email: 'abheejanlal@gmail.com',
  phone: '+977 9762416046',
  phoneHref: 'tel:+9779762416046',
  cv: '/Abheejan_Lal_Shrestha_CV.pdf',
  headline: 'I build the Go and MongoDB backends behind Flutter apps.',
  intro:
    'Backend developer and Computer Engineering student at Pokhara University. I design APIs, data models and search pipelines in Go, with Dart and Flutter on the client and MongoDB as my database of choice.',
  about: [
    'I work on the part of an app people never see: the API, the data model, authentication, and the rules that keep a marketplace trustworthy. My usual stack is a Go service with MongoDB, serving a Flutter client written in Dart.',
    'My main project, RoomieKTM, grew from a real problem in the Kathmandu Valley, where finding a room is fragmented, broker-driven and full of fake listings. It became a full system and a research paper, published in October 2026.',
  ],
};

export const links = {
  github: 'https://github.com/studyaabhee-gif',
  linkedin: 'https://www.linkedin.com/in/abheejan-lal-shrestha-5b9919313/',
  instagram: 'https://www.instagram.com/abheejan/',
  facebook: 'https://www.facebook.com/abheejan.shrestha',
};

export const paper = {
  title:
    'AI-Driven Conversational Rental Marketplace with Fuzzy Hybrid Search and Trust-Based Moderation',
  authors: ['Abheejan Lal Shrestha', 'Pratik Mishra', 'Swastik Shrestha', 'Amit K. Shrivastava'],
  venue:
    'Proceedings of International Conference on Innovation in Computing, Science, Engineering and Technology',
  volume: 'Vol. 3, No. 1',
  publisher: 'Nepal College of Information Technology',
  date: '2 October 2026',
  doi: '10.65091/icicset.v3i1.97',
  url: 'https://doi.org/10.65091/icicset.v3i1.97',
  summary:
    'Presents RoomieKtm, a rental marketplace for the Kathmandu Valley that combines conversational search, hybrid retrieval, fuzzy re-ranking and automated trust scoring in one pipeline. The evaluation is a four-arm ablation on a controlled pilot collection.',
  citation:
    'A. L. Shrestha, P. Mishra, S. Shrestha, and A. K. Shrivastava, "AI-Driven Conversational Rental Marketplace with Fuzzy Hybrid Search and Trust-Based Moderation," Proceedings of International Conference on Innovation in Computing, Science, Engineering and Technology, vol. 3, no. 1, Oct. 2026, doi: 10.65091/icicset.v3i1.97.',
};

export const roomie = {
  name: 'RoomieKTM',
  tagline: 'A room-finding marketplace for Kathmandu, built to make fake listings hard to survive.',
  code: 'https://github.com/studyaabhee-gif/RoomieKTM',
  problem:
    'Property portals reduce what renters care about, like water reliability, sunlight and power backup, to a few rigid filters, and do little to stop fake ads.',
  built: [
    'Go REST API on chi, with MongoDB as the primary database',
    'Firebase ID token verification on protected requests, plus FCM push',
    'Hybrid search: BM25 and vector k-NN results merged with Reciprocal Rank Fusion',
    'Fuzzy re-ranking that models graded, tolerant preferences',
    'Five-factor trust score driving a three-way automated moderation router',
    'Landlord KYC review, tenant reports and an append-only audit log',
    'Python NLP service (FastAPI, sentence-transformers) alongside the Go API',
    'Flutter mobile app and admin panel, with Docker Compose and GitHub Actions CI',
  ],
  stack: ['Go', 'chi', 'MongoDB', 'Flutter', 'Dart', 'Firebase', 'FastAPI', 'Docker'],
  arch: {
    caption: 'RoomieKTM architecture, simplified',
    client: { name: 'Flutter app', detail: 'Dart, Riverpod, Dio' },
    link: 'HTTP/JSON + Firebase ID token',
    core: { name: 'Go API', detail: 'chi, search, moderation' },
    services: [
      { name: 'MongoDB', detail: 'primary store', primary: true },
      { name: 'Firebase', detail: 'auth, push' },
      { name: 'NLP', detail: 'FastAPI' },
    ],
  },
  pipeline: [
    {
      label: 'Query',
      detail: 'Conversational search',
      explain:
        'Renters describe what they need in plain language, including hyper-local details like water reliability, sunlight and power backup.',
    },
    {
      label: 'Retrieve',
      detail: 'BM25 + vector k-NN',
      explain:
        'Two retrievers run side by side: BM25 catches exact words, while dense vector search catches meaning when the wording differs.',
    },
    {
      label: 'Fuse',
      detail: 'Reciprocal Rank Fusion',
      explain: 'Reciprocal Rank Fusion merges both candidate lists into one ranking, using each listing\'s rank in each list.',
    },
    {
      label: 'Re-rank',
      detail: 'Sugeno fuzzy aggregation',
      explain:
        'A weighted, zero-order Sugeno-type fuzzy aggregation re-orders candidates, so a near match on a preference still counts instead of failing a hard filter.',
    },
    {
      label: 'Results',
      detail: 'Trust-moderated listings',
      explain:
        'Listings are governed by a five-factor trust score and a three-way moderation router, backed by human review, tenant reports and an audit log.',
    },
  ],
  results: [
    { value: '0.662', label: 'nDCG@10 on paraphrased queries, against 0.622 for fusion alone' },
    { value: '13 / 15', label: 'constructed fraud patterns flagged (recall 0.867)' },
    { value: '0.914', label: 'trust router accuracy' },
  ],
  caveat:
    'Pilot evaluation on 93 listings and 42 labeled queries. None of the differences reached statistical significance at this sample size, and the paper says so plainly.',
};

export const revah = {
  name: 'Revah Management System',
  tagline: 'A self-hosted workspace for projects, tasks, teams, reports and communication in one web app.',
  built: [
    'Go backend-for-frontend on chi, combining its own data with the Vikunja task engine',
    'Type-safe PostgreSQL access with pgx and sqlc, and goose migrations applied at startup',
    'Projects, tasks, approvals, budgets, calendars and dashboards under one /api/v1',
    'Realtime chat over WebSockets, LiveKit calls and Keycloak OIDC sign-in',
    'Docker Compose for local infrastructure and Render deployment configuration',
  ],
  stack: ['Go', 'chi', 'PostgreSQL', 'sqlc', 'Flutter Web', 'Vikunja', 'Keycloak', 'Docker'],
  arch: {
    caption: 'Revah architecture, simplified',
    client: { name: 'Flutter web', detail: 'Riverpod, Dio, go_router' },
    link: 'REST',
    core: { name: 'Go BFF', detail: 'chi, aggregates and proxies' },
    services: [
      { name: 'PostgreSQL', detail: 'app data', primary: true },
      { name: 'Vikunja', detail: 'task engine' },
      { name: 'Keycloak', detail: 'OIDC' },
    ],
  },
};

export const projects = [
  {
    title: 'Academic Portfolio Platform',
    description:
      'Portfolio site for a university professor: a Go API with per-IP rate limiting and graceful shutdown, serving a Flutter Web frontend that still renders fully when the API is offline.',
    tags: ['Go', 'chi', 'Flutter Web', 'Riverpod', 'Docker'],
    code: 'https://github.com/studyaabhee-gif/srijan-portfolio',
  },
  {
    title: 'Modern Chess Web App',
    description:
      'Play a bot or challenge friends online, with player profiles, achievements and game statistics.',
    tags: ['React', 'Firebase', 'Material UI'],
    image: '/img/chess-app.jpg',
    live: 'https://chess-app-20717.web.app/',
  },
  {
    title: 'Image Super Resolution',
    description:
      'An Image Processing and Pattern Recognition project that enhances image quality and resolution.',
    tags: ['React', 'Image Processing', 'Computer Vision'],
    image: '/img/image-super-resolution.jpg',
    live: 'https://ai-image-enhancer-abheejan.netlify.app/',
  },
];

export const stack = [
  { group: 'Backend', primary: true, items: ['Go', 'chi', 'REST APIs', 'WebSockets', 'JWT', 'OIDC', 'Firebase Admin SDK'] },
  { group: 'Data', primary: true, items: ['MongoDB', 'PostgreSQL', 'MySQL', 'sqlc', 'goose migrations', 'BM25 and vector search'] },
  { group: 'Mobile', primary: true, items: ['Dart', 'Flutter', 'Riverpod', 'Dio', 'go_router'] },
  { group: 'Delivery', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Render', 'Firebase Cloud Messaging'] },
  { group: 'Also used', items: ['Python', 'FastAPI', 'JavaScript', 'React', 'Node.js', 'Java', 'C', 'C++'] },
];

export const education = [
  {
    period: '2023 to 2027',
    title: 'Bachelor of Engineering, Computer Engineering',
    place: 'Pokhara University (Nepal College of Information Technology)',
  },
  { period: 'Dec 2024 to Apr 2025', title: 'Node.js Training', place: 'NCIT, Kathmandu' },
  { period: '2022', title: 'Senior Secondary (NEB), Science', place: 'Xavier Academy, 77%' },
  { period: '2020', title: 'Secondary (CBSE)', place: 'Modern Indian School, Nepal, 70%' },
];

// Sample responses for the hero console, generated from the data above.
export const endpoints = [
  {
    path: '/v1/profile',
    body: {
      name: profile.name,
      role: profile.role,
      location: profile.location,
      degree: 'B.E. Computer Engineering',
      university: profile.university,
      languages: ['Go', 'Dart'],
      preferred_database: 'MongoDB',
    },
  },
  {
    path: '/v1/projects',
    body: [
      { name: roomie.name, stack: ['Go', 'MongoDB', 'Flutter'] },
      { name: revah.name, stack: ['Go', 'PostgreSQL', 'Flutter Web'] },
      { name: projects[0].title, stack: ['Go', 'Flutter Web'] },
    ],
  },
  {
    path: '/v1/research',
    body: {
      title: paper.title,
      author_position: 1,
      published: '2026-10-02',
      doi: paper.doi,
    },
  },
  {
    path: '/v1/contact',
    body: { email: profile.email, phone: profile.phone, github: 'studyaabhee-gif' },
  },
];
