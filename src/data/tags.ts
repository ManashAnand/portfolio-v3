
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
        id: "Sol Terminal",
        title: "Sol Terminal",
    },
    {
        id: "Spy Kam",
        title: "Spy Kam",
    },
    {
        id: "alfred",
        title: "Alfred",
    },
    {
        id: "Akhand Bharat",
        title: "Akhand Bharat",
    },
]


export const blogPosts = [
    {
        author: "Manash Anand",
        title: "Impermanent loss example",
        src: "imp.webp",
        link: "https://medium.com/@anandmanash321/impermanent-loss-example-e99ed5efe395"
    },
    {
        author: "Manash Anand",
        title: "Squadcast interview experience for SDE Intern + PPO ( Part 1 )",
        src: "squadcast.webp",
        link: "https://medium.com/@anandmanash321/squadcast-interview-experience-for-sde-intern-ppo-part-1-3cb2c8aad260"
    },
    {
        author: "Manash Anand",
        title: "Error: A Serverless Function has exceeded the unzipped maximum size of 250 MB",
        src: "serverless.webp",
        link: "https://medium.com/@anandmanash321/error-a-serverless-function-has-exceeded-the-unzipped-maximum-size-of-250-mb-990af9b2346d"
    },
    {
        author: "Manash Anand",
        title: "Tired of node_modules in your drives or folder",
        link: "https://medium.com/@anandmanash321/tired-of-node-modules-in-your-drives-or-folder-dd73f88e13eb",
        src: "modules.webp"
    },
    {
        author: "Manash Anand",
        title: "How to make a webhook for email using gmail api ?",
        link: "https://medium.com/@anandmanash321/how-to-make-a-webhook-for-email-using-gmail-api-4ee6f60a481f",
        src: "webhook.webp"
    },
    {
        author: "Manash Anand",
        title: "Using Nextjs, Aceternity UI and ShadcnUI all together",
        link: "https://medium.com/@anandmanash321/using-nextjs-aceternity-ui-and-shadcnui-all-together-e59c1ee93091",
        src: "shadcn.webp"
    },
];

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
        imageUrl: "/products.png",
        descp: "Use natural language to interact with your blockchain agents via the tokenizer interface.",
        tags: ["agent", "LLM", "blockchain", "Mastra"],
        punchline: "Chat with your chain, not your CLI.",
        github: "https://github.com/ManashAnand/Tokenizer",
        livelink: "https://tokenizer-alpha.vercel.app/",
        liveVideo: "https://x.com/manashanand2/status/1911339161950310552"
    },
    "warp-v1": {
        imageUrl: "warp.png",
        descp: "A Rust-powered CLI infused with AI capabilities, system-level knowledge, and blazing speed.",
        tags: ["Rust", "CLI", "AI", "system"],
        punchline: "Warp into productivity with AI at your terminal.",
        github: "https://github.com/ManashAnand/warp-v1",
        livelink: "",
        liveVideo: ""
    },
    "Sol Terminal": {
        imageUrl: "sol_terminal.png",
        descp: "Have multiple lousy CLI in a single web interface .",
        tags: ["Solana", "Web3", "motion"],
        punchline: "No more fancy sites, just terminal interface on web.",
        github: "https://github.com/ManashAnand/sol-terminal",
        livelink: "https://sol-terminal.vercel.app/",
        liveVideo: "https://x.com/manashanand2/status/1882101822309167434"
    },
    "Spy Kam": {
        imageUrl: "spykam.png",
        descp: "Just look up for the whole room with object detection using small model.",
        tags: ["Shadcn", "Nextjs", "langchain"],
        punchline: "See yourself as a person.",
        github: "https://github.com/ManashAnand/SpyKam",
        livelink: "https://spy-kam.vercel.app/",
        liveVideo: ""
    },
    alfred: {
        imageUrl: "alfred.png",
        descp: "Generate a chatbot with your specific data in 2 minutes, comes with an chrome extension too .",
        tags: ["Cloudflare worker ai","Nextjs","Prisma"],
        punchline: "Need an assistant, contact me .",
        github: "https://github.com/ManashAnand/Alfred",
        livelink: "https://alfred-tau.vercel.app/login",
        liveVideo: "https://x.com/manashanand2/status/1856652531675369753"
    },
    "Akhand Bharat": {
        imageUrl: "akhand.png",
        descp: "Compare your State, language and Caste — all in one place.",
        tags: ["Jai", "Shree", "Ram"],
        punchline: "And see how united we were .",
        github: "https://github.com/ManashAnand/akhand-bharat",
        livelink: "https://akhand-bharat.vercel.app/",
        liveVideo: ""
    },
};
