import { Posts } from "@/blocks/landing/posts";
import { getPosts, PostStatus, PostType } from "@/services/post";
import {
  getTaxonomies,
  findTaxonomy,
  TaxonomyStatus,
  TaxonomyType,
} from "@/services/taxonomy";
import { setRequestLocale } from "next-intl/server";
import { Posts as PostsType } from "@/types/blocks/post";
import moment from "moment";

export default async function BlogCategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ page?: number; pageSize?: number }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const category = await findTaxonomy({
    slug,
    status: TaxonomyStatus.PUBLISHED,
  });
  if (!category) {
    return "Category not found";
  }

  const { page: pageNum, pageSize } = await searchParams;
  const page = pageNum || 1;
  const limit = pageSize || 30;

  const posts = await getPosts({
    type: PostType.ARTICLE,
    status: PostStatus.PUBLISHED,
    category: category.id,
    page,
    limit,
  });

  const categories = await getTaxonomies({
    type: TaxonomyType.CATEGORY,
    status: TaxonomyStatus.PUBLISHED,
  });

  const postsData: PostsType = {
    title: "Blog",
    description: "Latest blog posts",
    categories: categories.map((category) => ({
      title: category.title,
      url: `/blog/category/${category.slug}`,
    })),
    items: posts.map((post) => ({
      id: post.id,
      title: post.title || "",
      description: post.description || "",
      author_name: post.authorName || "idoubi",
      author_image:
        post.authorImage ||
        "https://lh3.googleusercontent.com/a/ACg8ocK-lqyZmxqH5I264sp_LimejzP8EfzZ4d-jr--cA5lzXailmJg=s96-c",
      created_at: moment(post.createdAt).format("MMM D, YYYY") || "",
      image: post.image || "https://img.youphoto.ai/web%20img/cover1.png",
      url: `/blog/${post.slug}`,
    })),
  };

  return <Posts posts={postsData} />;
}
