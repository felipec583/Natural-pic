import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
  
      <Outlet />
      <footer className="flex justify-center">
        <a
          href="https://www.pexels.com"
          className="font-bold text-2xl underline text-center my-5 hover:text-green-600"
        >
          Photos provided by Pexels
        </a>
      </footer>
    </>
  );
}

export default App;

