"use server";

import { redirect } from "next/navigation";
import { storePost, updatePostLikeStatus } from "./posts";
import { uploadImage } from "./cloudinary";
import { revalidatePath } from "next/cache";

export const togglePostLike = async (postId: string) => {
  try {
    await updatePostLikeStatus(postId, 2);
    revalidatePath("/", "layout");
  } catch (error: any) {
    throw new Error("Error toggling post like: " + error?.message);
  }
};

export const createPost = async (prevState: any, formData: FormData) => {
  "use server";

  const title = formData.get("title");
  const content = formData.get("shortSum");
  const image = formData.get("imagePicker");

  if (!title || !content || !image) {
    return {
      message: "Missing required fields",
    };
  }
  let imageUrl;
  try {
    imageUrl = await uploadImage(image as File);
  } catch (error: any) {
    throw new Error("Error uploading image: " + error?.message);
  }

  try {
    await storePost({
      imageUrl: imageUrl,
      title: title,
      content: content,
      userId: 1,
    });
  } catch (error: any) {
    throw new Error("Error storing post: " + error?.message);
  }
  revalidatePath("/", "layout");
  redirect("/feed");
};
