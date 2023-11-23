'use server';

import prisma from '@/lib/prisma';

export async function createPost(title: string, content: string) {
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        author: {
          create: {
            name: 'Jan',
          },
        },
      },
    });
    return { post };
  } catch (error) {
    return { error };
  }
}
