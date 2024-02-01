import { useState } from "react";

const ImagePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1>Image Page</h1>
      {selectedImage && (
        <div>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="selected"
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImagePage;
