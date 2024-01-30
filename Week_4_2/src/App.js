import "./styles.css";
import AddImage from "./AddImage";
import { useReducer, useRef } from "react";
import ImageHolder from "./ImageHolder";

//global variables
nextId = 0;

export default function MyApp() {
  const [image, dispatch] = useReducer(tasksReducer, initialImage);
  const fileInputRef = useRef(null);
  function handleAddImage(image) {
    dispatch({ type: "added", id: nextId++, content: image });
    fileInputRef.current.click();
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="MyApp">
      <h1>Image Uploader</h1>
      <h2>Give me an image to classify</h2>
      <AddImage onAddImage={handleAddImage}> </AddImage>
      <h3> Your Image: </h3>
      <ImageHolder> </ImageHolder>
    </div>
  );
}
function tasksReducer(image, action) {
  switch (action.type) {
    case "added": {
      return [];
    }
  }
}

initialImage = null;
