import PostsList from "@/components/posts";
import { getPosts } from "../../lib/posts";

// export const metadata = {
//   title: "Feed",
//   description: "Browse the latest posts on the platform.",
// };

export const generateMetadata = async (config: any) => {
  const posts = (await getPosts()) || [];

  return {
    title: "Feed" + " (" + posts.length + " posts)",
    description: "Browse the latest posts on the platform.",
  };
};

const Feed = async () => {
  const posts = (await getPosts()) || [];

  return (
    <div className="p-5">
      <h1 className="text-green-500 my-2">Feed</h1>
      <PostsList posts={posts} />
    </div>
  );
};

export default Feed;
