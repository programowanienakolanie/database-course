'use client';
import { useRouter } from 'next/navigation';

type DeletePostButtonProps = {
  postId: string;
};

const DeletePostButton = ({ postId }: DeletePostButtonProps) => {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return <button onClick={handleClick}>Delete Post</button>;
};

export default DeletePostButton;
