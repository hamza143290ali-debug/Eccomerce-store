import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Footer from "./components/Footer";
import ProductDetail from "./pages/productDetail";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <ProductList />
        <Footer />
      </>
    ),
  },

  {
    path: "/product/:id",
    element: (
      <>
        <Navbar />
        <ProductDetail />,
      </>
    ),
  },
  {
    path: "/cartpage",
    element: (
      <>
        <Navbar />
        <CartPage />,
      </>
    ),
  },
  {
    path: "/Checkout",
    element: (
      <>
        <Navbar />
        <CheckOut />,
      </>
    ),
  },
]);

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
