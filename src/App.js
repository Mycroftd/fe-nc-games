import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reviews } from "./routes/Reviews";
import { Review } from "./routes/Review";
import { Users } from "./routes/Users";
import { Nav } from "./Nav/Nav";
import {Error} from "./error/Error404";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews/:category" element={<Reviews />} />
          <Route path="/review/:review_id" element={<Review />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
