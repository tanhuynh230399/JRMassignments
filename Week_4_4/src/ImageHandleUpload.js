import React, { useState } from "react";
import MySocialPage from "./SocialPage";
export default function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [header, setHeader] = useState("");
  const [status, setStatus] = useState("");

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    const fileInput = document.getElementById("file-input");
    fileInput.value = null;
  };

  const handleTextRemove = () => {
    setHeader("");
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFileRemove();
    handleTextRemove();
    // You can add your logic here to upload the image, header, and status to your server or database
    const data = {
      image: selectedFile,
      header: header,
      status: status,
    };
    console.log(data);
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="Header"
            value={header}
            onChange={(event) => setHeader(event.target.value)}
          />
          <input
            type="text"
            placeholder="Status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
          <input id="file-input" type="file" onChange={handleFileInputChange} />
        </form>
        {selectedFile && (
          <div>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="selected"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "contain",
              }}
            />
            <button onClick={handleFileRemove}>Remove Image</button>
          </div>
        )}
        <button onClick={handleSubmit}>Upload</button>
      </div>
      <MySocialPage
        // image={selectedFile}
        header={header}
        status={status}
      ></MySocialPage>
    </>
  );
}

// const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!selectedFile) {
//       console.error("No file selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", selectedFile);
//     formData.append("header", header);
//     formData.append("status", status);

//     try {
//       const response = await fetch("your-upload-url", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to upload");
//       }

//       console.log("Image uploaded successfully");
//       handleFileRemove();
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
