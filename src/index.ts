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

    // const allUsers = await prisma.user.findMany({
    //   where: { isMarried: true, age: { gt: 25 } },
    // });

    // using OR operator
    // const allUsers = await prisma.user.findMany({
    //   where: { OR: [{ nationality: "Canadian" }, { nationality: "American" }] },
    // });

    // using AND operator with gte operator
    // const allUsers = await prisma.user.findMany({
    //   where: {
    //     AND: [{ nationality: "Canadian" }, { age: { gte: 20 } }],
    //   },
    // });

    // using NOT operator
    // const allUsers = await prisma.user.findMany({
    //   where: { NOT: { nationality: "American" } },
    // });

    // // using LIKE operator
    // const allUsers = await prisma.user.findMany({
    //   where: { name: { contains: "John" } },
    // });

    // using IN operator
    // const allUsers = await prisma.user.findMany({
    //   where: { nationality: { in: ["Canadian", "American"] } },
    // });

    // using findUnique fetch single user
    // const singleUser = await prisma.user.findUnique({
    //   where: { email: "a@b.com" },
    // });

    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/api/users", async (_, res) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { email: "a@b.com" },
      data: {
        name: "Aman Khare",
        isMarried: false,
        age: 27,
        nationality: "Indian",
      },
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/api/users", async (_, res) => {
  try {
    // delete single user
    const deletedUser = await prisma.user.delete({
      where: { email: "a@c.com" },
    });

    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
