"use client";

import { useFormState } from "react-dom";
import FormActionButtons from "./form-action";
import ImagePicker from "./image-picker";

const PostForm = ({ createPost }: any) => {
  const [state, formAction] = useFormState<any>(createPost, {});

  return (
    <div className="p-5">
      {state.message && (
        <div
          className="mt-3 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
          role="alert"
        >
          <p>{state.message || "Please fill proper data!"}</p>
        </div>
      )}
      <form className="py-2" action={formAction}>
        <div className="my-3 flex flex-col ">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="outline-none border-4"
          />
        </div>
        <div className="my-3 flex flex-col ">
          <ImagePicker name={"imagePicker"} label={"Your image"} />
        </div>
        <div className="my-3 flex flex-col ">
          <label htmlFor="shortSum">Short Summary</label>
          <input
            type="text"
            id="shortSum"
            name="shortSum"
            required
            className="outline-none border-4"
          />
        </div>

        <div className="flex justify-end">
          <FormActionButtons />
        </div>
      </form>
    </div>
  );
};

export default PostForm;
