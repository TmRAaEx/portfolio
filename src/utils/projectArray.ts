import type Project from "../interfaces/Project.ts";

export const projects: Project[] = [
    {
        name: "E-commerce Client",
        link: "https://ecomerce-client-vercel-arwp.vercel.app/products",
        image: "e-commerce-client",
        priority: 2,
        deployed: true,
        skills: [{name: "TypeScript"}, {name: "React"}],
        git_link: "https://github.com/TmRAaEx/ecomerce-client-vercel",
        description: "Arbete: Skapa en webshop med ett eget API, itegrera sedan batallösning(stripe) och google sök api."
    }, {
        name: "E-commerce API",
        link: "https://e-commerce-api-vercel-ebon.vercel.app/products",
        image: "e-commerce-api",
        priority: 1,
        deployed: true,
        skills: [{name: "TypeScript"}, {name: "NodeJS"}, {name: "Express"}],
        git_link: "https://github.com/TmRAaEx/ecomerce-api-vercel",
        description: "Skapa ett API för en e-handel, integrera med stripe och google sök."
    },
    {
        name: "Viktorshop",
        link: "https://ecommerce-client-clone.vercel.app/",
        image: "viktorshop",
        priority: 3,
        deployed: true,
        skills: [{name: "TypeScript"}, {name: "React"}],
        git_link: "https://github.com/E-commerce-ViktorsShop/ecommerce-client",
        description: "Grupparbete: Bygga en E-handel med ett färdigt api, som kunde byggas ut efter behov."
    },
    {
        name: "File Router",
        link: "https://www.npmjs.com/package/@tmraaex/simpleframework",
        image: "npm",
        priority: 4,
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
    }
]