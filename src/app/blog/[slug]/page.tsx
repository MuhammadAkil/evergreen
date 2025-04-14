import type { Metadata } from "next";

// Simulate fetching a blog post
async function getPost(slug: string) {
  // Replace with real API call or database query
  const posts: Record<string, { title: string; description: string }> = {
    "first-post": {
      title: "First Post",
      description: "This is the first blog post",
    },
    "second-post": {
      title: "Second Post",
      description: "This is the second blog post",
    },
  };
  return posts[slug] || { title: "Not Found", description: "Post not found" };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
}