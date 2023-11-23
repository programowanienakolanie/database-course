'use client';
import { createPost } from '@/app/actions';
import { useRef } from 'react';

function SubmitButton() {
  return <button type='submit'>Add</button>;
}

export function AddForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function formAction(data: FormData) {
    const title = data.get('title');
    const content = data.get('content');
    if (
      typeof title === 'string' &&
      title.trim() !== '' &&
      typeof content === 'string' &&
      content.trim() !== ''
    ) {
      await createPost(title, content);
      formRef.current?.reset();
    }
  }

  return (
    <form ref={formRef} action={formAction} className='space-y-4'>
      <div>
        <label
          htmlFor='title'
          className='block text-sm font-medium text-gray-700'
        >
          Title
        </label>
        <input
          type='text'
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
          name='content'
          rows={4}
          className='mt-1 bg-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
          required
        />
      </div>
      <SubmitButton />
      <p aria-live='polite' className='sr-only' role='status'></p>
    </form>
  );
}
