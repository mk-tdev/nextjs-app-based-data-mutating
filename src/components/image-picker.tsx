"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ImagePicker({ label, name }: any) {
  const [uploadedFile, setUploadedFile] = useState<any>();
  const inputFileRef = useRef<any>();

  const handlePickClick = () => {
    inputFileRef.current.click();
  };

  const handlePickImage = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      setUploadedFile(null);
      return;
    }

    console.log(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setUploadedFile(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <div>
        <div className="border-green-600 border w-48 h-48 p-2 my-2 relative">
          {!uploadedFile ? (
            <p>Pick an Image</p>
          ) : (
            <Image src={uploadedFile} fill alt="picked image" />
          )}
        </div>
        <input
          ref={inputFileRef}
          type="file"
          name={name}
          id={name}
          className="outline-none border-4 w-full hidden"
          accept="image/png, image/jpeg"
          multiple={false}
          onChange={handlePickImage}
          required
        />
        <button
          className="bg-green-600 text-white rounded-sm p-3"
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
