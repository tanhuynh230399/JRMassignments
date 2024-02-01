import React, { useState } from "react";

const ImageHolder = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
    props.onImageSelected(event.target.files[0]);
  };

  const handleRemoveButtonClick = () => {
    setSelectedFile(null);
    props.onImageSelected(null);
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      {selectedFile && (
        <div>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="selected"
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <button onClick={handleRemoveButtonClick}>Remove Image</button>
        </div>
      )}
    </div>
  );
};

export default ImageHolder;
