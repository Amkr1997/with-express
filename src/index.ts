import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/users", async (_, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
