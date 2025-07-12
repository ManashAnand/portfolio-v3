
export const tags = [
    {
        id: 'full-stack',
        title: "full-stack",
    },
    {
        id: 'gen-ai',
        title: "gen-ai",
    },
    {
        id: 'rust',
        title: "rustcean",
    },

];


export const resume_link = "https://drive.google.com/file/d/1w5FIrtbSffRxgjW8iWVqYMyX5KOiDA-c/view?usp=sharing"

export const email_addr = "anandmanash321@gmail.com"

export const experiences = [
    {
        company: "Truffles.ai",
        position: "Backend Engineer",
        duration: "June 2024 – Present",

        href: "https://www.truffles.ai/",
        logoUrl: "/truffles.png",
        location: "Remote/Singapore"
    },
    {
        company: "UNICORNIZ",
        position: "Full Stack Developer",
        duration: "April 2023 – March 2024",

        href: "",
        logoUrl: "/unicorniz.jpeg",
        location: "Remote/A&N"
    },
    {
        company: "Symutte Labs",
        position: "Full stack developer Intern",
        duration: "Nov 2022 – Jan 2023",
        href: "https://unicorniz.com/",
        logoUrl: "/sym.png",
        location: "Remote/Mandi"
    },
    {
        company: "Gradup",
        position: "Web developer Intern",
        duration: "July 2022 – Sep 2022",
        href: "https://www.gradup.in/",
        logoUrl: "/gradup.jpeg",
        location: "Remote/Noida"
    },
];


export const features = [
    {
        id: "Tokenizer",
        title: "Tokenizer",
    },
    {
        id: "warp-v1",
        title: "warp-v1",
    },
    {
        id: "roadmap",
        title: "Personalised roadmap",
    },
    {
        id: "core",
        title: "Core subjects",
    },
    {
        id: "oops",
        title: "OOPs module end to end",
    },
    {
        id: "premium",
        title: "Premium Problems",
    },
]



export const featureDetails: Record<string, {
    imageUrl: string;
    descp: string;
    tags: string[];
    punchline: string;
    github: string;
    livelink: string;
    liveVideo: string;
}> = {
    Tokenizer: {
        imageUrl: "/harry.png",
        descp: "Use natural language to interact with your blockchain agents via the tokenizer interface.",
        tags: ["agent", "LLM", "blockchain"],
        punchline: "Chat with your chain, not your CLI.",
        github: "asdf",
        livelink: "adf",
        liveVideo: "adf"
    },
    "warp-v1": {
        imageUrl: "/assets/warp-v1.png",
        descp: "A Rust-powered CLI infused with AI capabilities, system-level knowledge, and blazing speed.",
        tags: ["Rust", "CLI", "AI", "system"],
        punchline: "Warp into productivity with AI at your terminal.",
        github: "",
        livelink: "",
        liveVideo: ""
    },
    roadmap: {
        imageUrl: "/assets/roadmap.png",
        descp: "Create a time-sensitive learning roadmap tailored to your schedule and career goals.",
        tags: ["personalized", "learning", "planner"],
        punchline: "No more guesswork. Just your roadmap, your pace.",
        github: "",
        livelink: "",
        liveVideo: ""
    },
    core: {
        imageUrl: "/assets/core.png",
        descp: "Master Computer Science fundamentals — DBMS, OS, and CN — from the ground up.",
        tags: ["DBMS", "OS", "Computer Networks", "fundamentals"],
        punchline: "Foundations that build futures.",
        github: "",
        livelink: "",
        liveVideo: ""
    },
    oops: {
        imageUrl: "/assets/oops.png",
        descp: "A complete OOPs module with videos, quizzes, and real-world problems to solidify your concepts.",
        tags: ["OOP", "quiz", "video", "problems"],
        punchline: "OOPs made simple, smart, and solid.",
        github: "",
        livelink: "",
        liveVideo: ""
    },
    premium: {
        imageUrl: "/assets/premium.png",
        descp: "Access curated premium coding problems from top platforms — all in one place.",
        tags: ["DSA", "premium", "coding", "interview"],
        punchline: "Your backstage pass to elite problem sets.",
        github: "",
        livelink: "",
        liveVideo: ""
    },
};
