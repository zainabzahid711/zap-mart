import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testConnection() {
  try {
    const users = await prisma.user.findMany();
    console.log("Connected to database and fetched users:", users);
  } catch (error) {
    console.error("Error connecting to database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
