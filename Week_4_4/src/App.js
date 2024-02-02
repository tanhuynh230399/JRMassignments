import "./styles.css";
import ImageUploader from "./ImageHandleUpload";
import { useReducer } from "react";
import ImageHolder from "./ImageHolder";

//global variables

export default function MyApp() {
  return (
    <div className="MyApp">
      <h1>Reddit</h1>
      <h2>How's your feeling today?</h2>
      <br />
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
