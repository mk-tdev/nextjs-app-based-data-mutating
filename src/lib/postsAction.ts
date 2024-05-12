"use server";

import { redirect } from "next/navigation";
import { storePost } from "./posts";

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

  await storePost({
    imageUrl: "",
    title: title,
    content: content,
    userId: 1,
  });

  redirect("/feed");
};
