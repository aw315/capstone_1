import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { Authorized } from "./views/Authorized";
import { UserViews } from "./views/UserViews.jsx";


function App() {
  return (
    <Routes>

      <Route
        path="*"
        element={

            <UserViews />

        }
      />
    </Routes>
  );
}

export default App;