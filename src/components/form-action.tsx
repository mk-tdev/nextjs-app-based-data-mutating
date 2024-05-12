"use client";

import { useFormStatus } from "react-dom";

export default function FormActionButtons() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button disabled className="bg-blue-600 text-white p-3 rounded-md">
          Posting
        </button>
      ) : (
        <button className="bg-green-600 text-white p-3 rounded-md">Post</button>
      )}
    </>
  );
}
