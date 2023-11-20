import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define the types for the parameters of your middleware function.
type Params = {
  id: string;
};

type MiddlewareRequest = NextRequest & {
  params: Params;
};

export async function DELETE(
  request: MiddlewareRequest,
  { params }: { params: Params }
) {
  const id = params.id;

  const post = await prisma?.post.delete({
    where: { id },
  });
  // Assuming you want to return the id in the JSON response
  return NextResponse.json({ id });
}
