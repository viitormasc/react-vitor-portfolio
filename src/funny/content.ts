export const marqueeText =
  "🚧 WELCOME 2 MY HOMEPAGE 🚧 best viewed at 800x600 in Netscape Navigator 4.0 🚧 if err != nil { hireVitor() } 🚧 now with 40% less bugs 🚧 arrays start at 1 here (Lua rules) 🚧 HIRE ME 🚧 sign my guestbook 🚧";

export const rotatingTitles = [
  "Backend",
  "Golang Gopher",
  "Lua Wizard",
  "Full-Stack",
  "API Plumber",
  "Ctrl+C Ctrl+V",
  "10x (after coffee)",
];

export const asSeenOn = [
  "My Mom's Facebook",
  "localhost:8080",
  "Stack Overflow (marked as duplicate)",
  "git blame",
  "a LinkedIn post with 3 likes",
];

export const techJokes: Record<string, { joke: string; skill: number }> = {
  Golang: { joke: "if err != nil { return err } x 9000", skill: 93 },
  Lua: { joke: "arrays start at 1 and i'm at peace with it", skill: 90 },
  TypeScript: { joke: "any any any any", skill: 92 },
  JavaScript: { joke: "[] + {} === ??? 🤯", skill: 95 },
  React: { joke: "professional useEffect enjoyer", skill: 88 },
  NextJS: { joke: "server? client? yes.", skill: 78 },
  Tailwind: { joke: "className length: 412 chars", skill: 85 },
  Git: { joke: "git push --force (sorry)", skill: 88 },
  NodeJS: { joke: "node_modules heavier than the sun", skill: 94 },
  MongoDB: { joke: "schema? never heard of her", skill: 85 },
  PostgreSQL: { joke: "JOINs me in my dreams", skill: 87 },
  MariaDB: { joke: "MySQL's cooler cousin", skill: 74 },
  Stripe: { joke: "takes ur money, professionally", skill: 86 },
  Docker: { joke: "works on my machine. so i ship my machine.", skill: 91 },
  Caddy: { joke: "free HTTPS, basically witchcraft", skill: 84 },
  Nginx: { joke: "config file whisperer", skill: 80 },
  Express: { joke: "app.listen(3000) and pray 🙏", skill: 94 },
};

export const projectJokes: {
  match: string;
  name: string;
  joke: string;
  stat: string;
}[] = [
  {
    match: "Study Timer",
    name: "Study Timer App ⏰",
    joke: "Built a timer app to help me study. Used all my study time building the timer app.",
    stat: "Hours studied: ∞ (it says so on the dashboard)",
  },
  {
    match: "SaaS",
    name: "SaaS Starter Kit 💸",
    joke: "Login, Stripe payments, dark mode, password recovery. Everything a SaaS needs except customers.",
    stat: "Monthly recurring revenue: $0.00 (open source, baby)",
  },
  {
    match: "Code To Text",
    name: "Code To Text AI 🤖",
    joke: "Squishes your whole codebase into ONE .txt so the AI can roast all of it at once.",
    stat: "Tokens saved: a lot. Feelings hurt: also a lot.",
  },
  {
    match: "VitCoin",
    name: "VitCoin 🪙🚀",
    joke: "A real blockchain in TypeScript. Proof-of-Work, wallets, WebSockets. NOT A RUG PULL.",
    stat: "Market cap: $0.00 · Holders: 1 (me) · Destination: 🌕",
  },
  {
    match: "BitTorrent",
    name: "BitTorrent CLI 🏴‍☠️",
    joke: "Wrote my own BitTorrent client from scratch to download Linux ISOs. Only Linux ISOs. I swear.",
    stat: "Seeders: 1 (my mom) · Leechers: you",
  },
];

export const pricingTiers = [
  {
    name: "Intern Vitor",
    price: "$0.00",
    period: "/mo*",
    note: "*paid in pizza 🍕",
    features: [
      "Fixes ur typos",
      "Says 'works on my machine'",
      "Asks 400 questions (good ones tho)",
      "Brings energy drinks",
    ],
    cta: "HIRE INTERN",
    popular: false,
  },
  {
    name: "Senior Vitor",
    price: "$$$",
    period: "/mo",
    note: "MOST POPULER 🔥🔥",
    features: [
      "Backends in Go, Node & Lua",
      "APIs that don't fall over",
      "Postgres, Mongo, Docker → prod",
      "Writes tests (voluntarily!!)",
      "Can also do frontend (if u ask nicely)",
    ],
    cta: "HIRE SENIOR",
    popular: true,
  },
  {
    name: "Vitor After Coffee ☕",
    price: "Contact sales",
    period: "",
    note: "(the sales team is also Vitor)",
    features: [
      "10x mode for 45 minutes",
      "Rewrites the monolith in Go for fun",
      "Types 140 WPM",
      "Mild jitters (not a bug)",
    ],
    cta: "TALK 2 SALES",
    popular: false,
  },
];

export const reviews = [
  {
    stars: 5,
    text: "He is the best software engineer son I have. (Please hire him so he gets off my couch.)",
    author: "My Mom 👩‍🦳",
  },
  {
    stars: 4,
    text: "He fixed my printer in 2009. Still waiting for him to fix it again. 4 stars.",
    author: "Also My Mom",
  },
  {
    stars: 5,
    text: "He fixed a production bug at 2am during our anniversary dinner. Please hire him so he does that at work instead.",
    author: "My Wife 💍",
  },
  {
    stars: 3,
    text: "Every night he says 'just one more commit'. It is never one. 3 stars, but I love him.",
    author: "Also My Wife",
  },
  {
    stars: 5,
    text: "Thank god we have Claude to fix his mess. (jk, he is the best)",
    author: "His Laptop",
  },
  {
    stars: 5,
    text: "I didn't say anything. He fixed the bug anyway.",
    author: "Rubber Duck 🦆",
  },
  {
    stars: 1,
    text: "Too many commits. Please go to sleep.",
    author: "GitHub Contribution Graph",
  },
  {
    stars: 5,
    text: "if err != nil { praise(vitor) }",
    author: "The Go Compiler",
  },
];

export const pokeMessages = [
  "↑ real photo. not stock. poke him.",
  "ouch.",
  "hey!",
  "he's trying to deploy.",
  "ok stop.",
  "you're very persistent. he likes that in a team.",
];

export const resumeSteps = [
  "Compressing ego...",
  "Removing typos...",
  "Adding typos back for authenticity...",
  "Making font size bigger to fill page...",
  "Rewriting CV in Go for performance...",
  "Almost there...",
  "Almost there... (for real)",
];

export const botLines = [
  "beep boop 🤖 i didn't read that but YES",
  "have you tried hiring Vitor?",
  "i'm not an AI. i'm a for-loop in a trench coat 🧥",
  "error 418: i'm a teapot ☕",
  "that's a great question. anyway, Vitor knows Go.",
  "sorry, i only speak Lua. arrays start at 1 btw",
  "let me check with my manager (it's Vitor)",
  "lol",
  "my sources say: hire him 🎱",
  "i have no idea but i'm VERY confident about it",
  "processing... processing... ok i forgot",
  "*plays dial-up noises* 📞",
  "u seem smart. u know who else is smart? Vitor.",
  "this conversation is being recorded for quality hiring purposes",
];

export const wrongFacts = {
  photo: "Vitor is 7ft tall (in Go units)",
  title: "Golang was named after Vitor's cat, Go",
  counter: "this counter is 100% real (it is not)",
  tech: "Lua means 'moon' in Portuguese. (this one is actually true!!)",
  techSide: "99% of bugs are caused by NOT hiring Vitor",
  projects: "every project here was built in 1 night* *many nights",
  projectsSide: "Docker whales are real whales. Vitor has seen one.",
  pricing: "studies show hiring Vitor boosts productivity by 420%",
  reviews: "these reviews are verified by his mom",
  footer: "this website loads in -3 seconds",
  bot: "VitorBot passed the Turing test (the test was easy)",
};

export const alerts = [
  "🚨 BREAKING: local backend dev still unemployed by you. more at 11.",
  "⚠️ WARNING: this section contains real code. viewer discretion advised.",
  "🚨 ALERT: your company's servers called. they want a Go backend.",
];

export const errorDialogs = [
  { title: "Error", icon: "❌", text: "Error: Success." },
  { title: "VitorOS", icon: "❌", text: "Task failed successfully." },
  {
    title: "Warning",
    icon: "⚠️",
    text: "Too much talent detected on this page.",
  },
  {
    title: "Vitor.exe",
    icon: "❌",
    text: "Vitor.exe has stopped being unemployed. (pending your approval)",
  },
  {
    title: "System",
    icon: "⚠️",
    text: "Your recruiter.dll is out of date. Update by hiring Vitor.",
  },
  {
    title: "Go Runtime",
    icon: "❌",
    text: "panic: not hiring Vitor (goroutine 1 [running])",
  },
  {
    title: "Lua",
    icon: "❌",
    text: "attempt to index a nil value (field 'yourBackendDev')",
  },
  { title: "Info", icon: "ℹ️", text: "Nothing happened. Just checking in. 👋" },
];

export const virusList = [
  "unemployment.exe",
  "boring_portfolio.dll",
  "Trojan.NotHiringVitor.exe",
  "imposter_syndrome.sys",
  "merge_conflict.tmp",
  "node_modules (4.2 GB)",
  "nil_pointer_dereference.go",
  "monday.morning.virus",
  "Worm.LegacyPHP.exe",
];
