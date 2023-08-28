import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import Layout from "./Components/Layout";
import Doc from './Pages/Doc'
import Examples from './Pages/Examples'
import Icons from './Pages/Icons'
import Theme from './Pages/Theme'
import Blog from './Pages/Blog'
import Items from './Pages/Items'
import {products} from './db/db'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Doc />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/items" element={<Items products={products}/>} />
      </Route>
    )
  );
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
