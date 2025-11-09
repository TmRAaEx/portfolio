// lib/getProjects.ts
import clientPromise from "./mongodb";
import type Project from "@/interfaces/Project";

export async function getProjects(): Promise<Project[]> {
  const client = await clientPromise;
  const db = client.db("portfolio");

  const rawProjects = await db.collection("Projects")
    .find()
    .sort({ priority: 1 }) // valfritt, men nice
    .toArray();

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
