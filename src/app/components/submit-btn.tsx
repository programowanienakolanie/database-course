'use client';
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' disabled={pending} className='bg-zinc-800'>
      Submit New Post
    </button>
  );
}
