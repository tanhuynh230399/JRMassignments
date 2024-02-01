import React, { useState } from "react";

export default function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [header, setHeader] = useState("");
  const [status, setStatus] = useState("");

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    setHeader("");
    setStatus("");
    const fileInput = document.getElementById("file-input");
    fileInput.value = null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your logic here to upload the image, header, and status to your server or database
    console.log("Image:", selectedFile);
    console.log("Header:", header);
    console.log("Status:", status);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="file-input" type="file" onChange={handleFileInputChange} />
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
        <button type="submit">Upload</button>
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
    </div>
  );
}

// import React, { useState } from "react";

// export default function ImageUploader() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [header, setHeader] = useState("");
//   const [status, setStatus] = useState("");
//   const [preview, setPreview] = useState(null);

//   const handleFileInputChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//     setPreview(URL.createObjectURL(event.target.files[0]));
//   };

//   const handleFileRemove = () => {
//     setSelectedFile(null);
//     setHeader("");
//     setStatus("");
//     setPreview(null);
//     const fileInput = document.getElementById("file-input");
//     fileInput.value = null;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // You can add your logic here to upload the image, header, and status to your server or database
//     console.log("Image:", selectedFile);
//     console.log("Header:", header);
//     console.log("Status:", status);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input id="file-input" type="file" onChange={handleFileInputChange} />
//         <input
//           type="text"
//           placeholder="Header"
//           value={header}
//           onChange={(event) => setHeader(event.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Status"
//           value={status}
//           onChange={(event) => setStatus(event.target.value)}
//         />
//         <button type="submit">Upload</button>
//       </form>
//       {preview && (
//         <div>
//           <img
//             src={preview}
//             alt="preview"
//             style={{
//               width: "300px",
//               height: "200px",
//               objectFit: "contain",
//             }}
//           />
//           <button onClick={handleFileRemove}>Remove Preview</button>
//         </div>
//       )}
//     </div>
//   );
// }
