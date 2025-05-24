import type Project from "../interfaces/Project.ts";

export const projects: Project[] = [
    {
        name: "E-commerce Client",
        link: "https://ecomerce-client-vercel-arwp.vercel.app/products",
        image: "e-commerce-client",
        priority: 2,
        deployed: true,
        skills: [{name: "TypeScript"}, {name: "React"}, {name: "CSS"}],
        git_link: "https://github.com/TmRAaEx/ecomerce-client-vercel",
        description: "Arbete: Skapa en webshop med ett eget API, itegrera sedan batallösning(stripe) och google sök api."
    }, {
        name: "E-commerce API",
        link: "https://e-commerce-api-vercel-ebon.vercel.app/products",
        image: "e-commerce-api",
        priority: 2,
        deployed: true,
        skills: [{name: "TypeScript"}, {name: "NodeJS"}, {name: "Express"}, {name: "MySQL"}],
        git_link: "https://github.com/TmRAaEx/e-commerce-api-vercel",
        description: "Skapa ett API för en e-handel, integrera med stripe och google sök."
    },
    {
        name: "Viktorshop",
        link: "https://ecommerce-client-clone.vercel.app/",
        image: "viktorshop",
        priority: 1,
        deployed: true,
        skills: [{name: "JavaScript"}, {name: "React"}, {name: "CSS"}],
        git_link: "https://github.com/E-commerce-ViktorsShop/ecommerce-client",
        description: "Grupparbete: Bygga en E-handel med ett färdigt api, som kunde byggas ut efter behov."
    },
    {
        name: "Viktorshop API",
        link: "https://ecommerce-client-clone.vercel.app/",
        image: "viktorshop",
        priority: 1,
        deployed: true,
        skills: [{name: "JavaScript"}, {name: "MongoDB"}, {name: "NodeJS"}, {name: "Express"}],
        git_link: "https://github.com/TmRAaEx/ecommerce-api",
        description: "Grupparbete: Använd och bygg ut färdigställt API efter behov"
    },
    {
        name: "Goal Trackr",
        link: "https://goaltrakr.vercel.app/dashboard/goals?q=1",
        image: "goaltrackr",
        priority: 1,
        deployed: true,
        skills: [{name: "TypeScript"}, {name: "NextJS"}, {name: "PostgreSQL"}, {name: "CSS"}],
        git_link: "https://github.com/TmRAaEx/goaltrakr",
        description: "Task tracking app med syfte att hjälpa mig hålla reda på mina mål och olika uppgifter/tasks.",
    },
    {
        name: "File Router",
        link: "https://www.npmjs.com/package/@tmraaex/simpleframework",
        image: "npm",
        priority: 2,
        deployed: false,
        skills: [{name: "TypeScript"}, {name: "React"}, {name: "npm"}],
        git_link: "",
        description: "Pågående skapande av ett NPM paket som skapar routes baserat på filstruktur i react-router. WIP"
    },
    {
        name: "Portfolio",
        link: "",
        image: "portfolio",
        priority: 4,
        deployed: false,
        skills: [{name: "TypeScript"}, {name: "React"}, {name: "tailwindcss"}],
        git_link: "https://github.com/TmRAaEx/portfolio",
        description: "Portfolio för fullstack utveckling."
    },
    {
        name: "Nyhetsbrevs app",
        link: "",
        image: "newsletters",
        priority: 3,
        deployed: false,
        skills: [{name: "PHP"}, {name: "CodeIgniter4"}, {name: "CSS"}, {name: "MySQL"}],
        git_link: "https://github.com/TmRAaEx/php-newsletter-app",
        description: "Nyhetsbrevs app i php som stödjer lösenords återställning via mejl länk."
    }
]