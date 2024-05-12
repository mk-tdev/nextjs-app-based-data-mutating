import PostForm from "@/components/post-form";
import { createPost } from "@/lib/postsAction";

const NewFeed = () => {
  return <PostForm createPost={createPost} />;
};

export default NewFeed;
