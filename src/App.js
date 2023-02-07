import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Reviews} from "./routes/Reviews";
import {Review} from "./routes/Review";
import {Comments} from "./routes/Comments";

function App() {
return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Reviews />} />
      <Route path="/review/:review_id" element={<Review/>} />
      <Route path="/comments/:review_id" element={<Comments/>} />
    </Routes>
  </BrowserRouter>
)

}

export default App;
