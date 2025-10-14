import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "John Doe", email: "a@b.com" },
      { name: "Jane Doe", email: "a@c.com" },
    ],
  });
}

seed().then(() => prisma.$disconnect());
