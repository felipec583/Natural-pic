import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <h1 className="text-center font-bold text-5xl my-3 text-green-600">
        Natural Pic
      </h1>
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

