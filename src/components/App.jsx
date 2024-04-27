import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Navbar";
import Countries, {countryDetailsLoader} from "../pages/Countries";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />} />
      <Route path="/" element={<Countries />} loader={countryDetailsLoader} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
