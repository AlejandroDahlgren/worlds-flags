import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from "react-router-dom";
import Countries, {countryDetailsLoader} from "../pages/Countries";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
      <Route path="country/:id" element={<countryDetailsLoader />} loader={countryLoader} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
)}

export default App;



