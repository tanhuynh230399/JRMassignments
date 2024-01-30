import { useState } from "react";
export default function AddImage({ onAddImage }) {
  const [image, setImage] = useState();
  return (
    <>
      <button
        onClick={() => {
          setImage("");
          onAddImage(image);
        }}
      >
        Upload
      </button>
      <input
        type="file"
        accept="image/*"
        const file = image.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
        setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
        // ref={fileInputRef}
        style={{ display: "none" }}
      />
    </>
  );
}
