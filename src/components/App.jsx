import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Navbar";
import Countries from "../pages/Countries";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />} />
      <Route path="countries" element={<Countries />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
