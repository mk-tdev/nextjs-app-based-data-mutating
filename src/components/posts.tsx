"use client";

import { useOptimistic } from "react";
import PostItem from "./post";
import { togglePostLike } from "@/lib/postsAction";

const PostsList = ({ posts }: any) => {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(
    posts,
    (prevPosts, updatedPostId) => {
      // Optimistic updates for post actions
      const updatedPosts = prevPosts.map((post: any) => {
        if (post.id === updatedPostId) {
          return {
            ...post,
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      });
      return updatedPosts;
    }
  );

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return (
      <div className="text-center text-gray-500 my-8">No posts available.</div>
    );
  }

  const updatePost = async (postId: string) => {
    updateOptimisticPosts(postId);
    await togglePostLike(postId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {optimisticPosts.map((post: any) => (
        <PostItem key={post.id} post={post} action={updatePost} />
      ))}
    </div>
  );
};

export default PostsList;
