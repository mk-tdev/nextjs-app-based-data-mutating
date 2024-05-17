import PostForm from "@/components/post-form";
import { createPost } from "@/lib/postsAction";

export const metadata = {
  title: "New Post",
  description: "Create a new post on the platform.",
};

const NewFeed = () => {
  return <PostForm createPost={createPost} />;
};

export default NewFeed;
