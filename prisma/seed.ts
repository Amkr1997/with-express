import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  // await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: [
      {
        name: "John Doe",
        email: "a@b.com",
        age: 20,
        isMarried: false,
        nationality: "American",
      },
      {
        name: "Jane Doe",
        email: "a@c.com",
        age: 21,
        isMarried: true,
        nationality: "Canadian",
      },
      {
        name: "Jim Doe",
        email: "a@d.com",
        age: 22,
        isMarried: false,
        nationality: "British",
      },
      {
        name: "Jill Doe",
        email: "a@e.com",
        age: 23,
        isMarried: true,
        nationality: "Australian",
      },
      {
        name: "Jack Doe",
        email: "a@f.com",
        age: 24,
        isMarried: false,
        nationality: "New Zealander",
      },
      {
        name: "Jill Doe",
        email: "a@g.com",
        age: 25,
        isMarried: true,
        nationality: "Indian",
      },
      {
        name: "Jill Doe",
        email: "a@h.com",
        age: 26,
        isMarried: false,
        nationality: "Irish",
      },
      {
        name: "Jill Doe",
        email: "a@i.com",
        age: 27,
        isMarried: true,
        nationality: "Scottish",
      },
      {
        name: "Jill Doe",
        email: "a@j.com",
        age: 28,
        isMarried: false,
        nationality: "Welsh",
      },
      {
        name: "Jill Doe",
        email: "a@k.com",
        age: 29,
        isMarried: true,
        nationality: "Scottish",
      },
      {
        name: "Jill Doe",
        email: "a@l.com",
        age: 30,
        isMarried: false,
        nationality: "Welsh",
      },
    ],
  });
}

seed().then(() => prisma.$disconnect());
