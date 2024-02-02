import { useState } from "react";
import { Link } from "react-router-dom";
import ImageUploader from "./ImageHandleUpload";

const LandingPage = () => {
  return (
    <div>
      <nav>
        <Link to="/image">View Uploaded Image</Link>
      </nav>
      <h1>Landing Page</h1>
      <ImageUploader />
    </div>
  );
};

export default LandingPage;
