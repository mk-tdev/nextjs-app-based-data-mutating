import PostsList from "@/components/posts";
import { getPosts } from "../../lib/posts";

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
