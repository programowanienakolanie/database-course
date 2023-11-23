import prisma from '@/lib/prisma';
import { Post } from './components/Post';
import Link from 'next/link';
import { AddForm } from './components/AddForm/AddForm';

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className='p-20'>
      <Link href={'/add-post'}>Add Post</Link>
      <AddForm />
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content ?? 'Default Content'} // Provide a default string if content is null
            authorName={post.author?.name ?? 'Unknown Author'}
          />
        );
      })}
    </main>
  );
}
