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
    ...doc,
    _id: doc._id.toString(),
  })) as unknown as Project[];
}
