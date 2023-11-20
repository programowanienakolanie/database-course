'use client';

import prisma from '@/lib/prisma';
import Link from 'next/link';
import SubmitBtn from './submit-btn';

export default function AddPostForm() {
  const addPost = async (formData: FormData) => {
    'use server';

    await prisma.post.create({
      data: {
        title: formData.get('title') as string,
        content: formData.get('body') as string,
      },
    });
  };

  return (
    <>
      <Link href={'/'}>View Feed</Link>
      <form action={addPost} className='space-y-4'>
        <div>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-gray-700'
          >
            Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            className='mt-1 block bg-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            required
          />
        </div>
        <div>
          <label
            htmlFor='content'
            className='block text-sm font-medium text-gray-700'
          >
            Content
          </label>
          <textarea
            id='content'
            name='content'
            rows={4}
            className='mt-1 bg-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            required
          />
        </div>
        <SubmitBtn />
      </form>
    </>
  );
}
