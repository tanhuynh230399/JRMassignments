import "./styles.css";
import ImageUploader from "./ImageHandleUpload";
import { useReducer } from "react";
import ImageHolder from "./ImageHolder";

//global variables

export default function MyApp() {
  return (
    <div className="MyApp">
      <h1>Image Uploader</h1>
      <h2>Give me an image to classify</h2>
      <ImageUploader></ImageUploader>
    </div>
  );
}
// import "./styles.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { LandingPage } from "./LandingPage";
// import { ImagePage } from "./ImagePage";

// export default function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <LandingPage />
//         </Route>
//         <Route path="/image">
//           <ImagePage />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }
