import { PrismaClient } from '@prisma/client';

declare global {
  // For Node.js, declare a global 'namespace' which is a globally available object where we can attach our PrismaClient instance.
  // This prevents the reinitialization of the PrismaClient on hot reloads in development, which can lead to too many connections in the development database.
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
