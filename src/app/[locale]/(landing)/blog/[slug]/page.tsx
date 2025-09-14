import { findPost } from "@/services/post";
import { type PostItem } from "@/types/blocks/post";
import { PostDetail } from "@/blocks/landing/post-detail";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await findPost({ slug });
  if (!post) {
    return "Post not found";
  }

  const postData: PostItem = {
    id: post.id,
    title: post.title || "",
    description: post.description || "",
    content: post.content || "",
    created_at: post.createdAt.toISOString(),
  };

  return <PostDetail post={postData} />;
}
