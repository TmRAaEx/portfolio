import {MongoClient} from "mongodb";
import type Project from "@/interfaces/Project";

let cachedClient: MongoClient | null = null;

const connection_uri = process.env.MONGODB_URI!


export async function getProjects(): Promise<Project[]> {
    if (!cachedClient) {
        cachedClient = new MongoClient(connection_uri);
        await cachedClient.connect();
    }

    const db = cachedClient.db("portfolio");
    const rawProjects = await db.collection("Projects").find().toArray();

    return rawProjects.map((doc) => ({
        _id: doc._id.toString(),
        name: doc.name,
        link: doc.link,
        npm_link: doc.npm_link,
        image: doc.image,
        priority: doc.priority,
        deployed: doc.deployed,
        skills: doc.skills,
        git_link: doc.git_link,
        description: doc.description,
    }));
}
