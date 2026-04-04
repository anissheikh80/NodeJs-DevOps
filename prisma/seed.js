import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const usersData = [
  {
    name: 'Jesse',
    email: 'jesse@mongodb.com',
    posts: {
      create: [
        {
          title: 'Join the MongoDB Community',
          content: 'https://community.mongodb.com/',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Mira',
    email: 'mira@mongodb.com',
    posts: {
      create: [
        {
          title: 'Follow MongoDB on Twitter',
          content: 'https://www.twitter.com/mongodb',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Mike',
    email: 'mike@mongodb.com',
    posts: {
      create: [
        {
          title: 'We have a podcast!',
          content: 'https://podcasts.mongodb.com/',
          published: true,
        },
        {
          title: 'MongoDB on YouTube',
          content: 'https://www.youtube.com/c/MongoDBofficial',
        },
      ],
    },
  },
];

async function seed() {
  console.log('🌱 Starting MongoDB seed...');
  for (const userData of usersData) {
    const user = await prisma.user.create({
      data: userData,
    });
    console.log(`Created user with id: ${user.id}`);
  }

  console.log('✅ MongoDB seeding completed.');
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });