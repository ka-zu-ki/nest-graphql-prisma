import { PrismaClient, Role, User } from '@prisma/client';
const prisma = new PrismaClient();

const userData: User[] = [
  {
    id: 'fa119cb6-9135-57f5-8a5a-54f28d566d0e',
    name: 'test',
    email: 'test@email.com',
    password: 'password',
    role: Role.USER,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '545d5237-15ee-169c-13a2-30f8748e3d6e',
    name: 'test2',
    email: 'test2@email.com',
    password: 'password',
    role: Role.USER,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
];

const doSeed = async () => {
  const users = [];
  for (const user of userData) {
    const createUsers = prisma.user.create({
      data: user,
    });
    users.push(createUsers);
  }
  return await prisma.$transaction(users);
};

const main = async () => {
  console.log(`Start seeding ...`);

  await doSeed();

  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
