import React from 'react';
import DeletePostButton from './DeletePostButton';

type PostProps = {
  id: string; // Assuming 'id' is of type string
  title: string;
  content: string | null; // Allow content to be null
  authorName: string | null; // Allow authorName to be null
};

export const Post = ({ id, title, content, authorName }: PostProps) => {
  return (
    <div className='border solid p-2 my-4'>
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
      <DeletePostButton postId={id} />
    </div>
  );
};
