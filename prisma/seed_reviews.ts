import "dotenv/config";
// import { PrismaClient } from "./generated/prisma/client";

// const prisma = new PrismaClient();

import prisma from "@/lib/prisma";
async function main() {
  const reviews = [
    {
      clientName: "Sophia Martinez",
      rating: 5,
      comment:
        "Maymyo is an absolute magician! She did my bridal makeup, and I felt like the most beautiful version of myself. It lasted all night through dancing and tears.",
      isApproved: true,
      imageUrl:
        "https://images.unsplash.com/photo-1595168019747-0628e932ec79?q=80&w=200",
    },
    {
      clientName: "Emily Chen",
      rating: 5,
      comment:
        "Highly professional and incredibly talented. She understood exactly what I wanted for my editorial shoot. The photos turned out stunning thanks to her work.",
      isApproved: true,
      imageUrl:
        "https://images.unsplash.com/photo-1487412947132-2d9bed996eb7?q=80&w=200",
    },
    {
      clientName: "Jessica Alverez",
      rating: 5,
      comment:
        "I've never felt so confident. The makeup was natural yet glamorous, just as I asked. I've already booked her for my next event!",
      isApproved: true,
      imageUrl: "",
    },
  ];

  console.log("Seeding reviews...");

  for (const review of reviews) {
    await prisma.review.create({
      data: review,
    });
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
