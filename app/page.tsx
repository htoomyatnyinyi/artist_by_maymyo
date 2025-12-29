import prisma from "@/lib/prisma";

const page = async () => {
  // const prisma = new PrismaClient();
  const data = await prisma.user.findMany();
  return <div>{data.map((d: any) => d.name)}</div>;
};

export default page;
