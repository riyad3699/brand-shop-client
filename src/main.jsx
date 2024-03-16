import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import AddProduct from './components/AddProduct.jsx';
import BrandDetails from './components/BrandDetails.jsx';
import UpdateProduct from './components/UpdateProduct.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Cart from './components/Cart.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/brandDetails/:brand',
        element: <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://brand-shop-server-dlb2p4nqa-riyads-projects.vercel.app/products/${params.brand}`)
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://brand-shop-server-dlb2p4nqa-riyads-projects.vercel.app/products/brand/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://brand-shop-server-dlb2p4nqa-riyads-projects.vercel.app/products/brand/${params.id}`)
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('https://brand-shop-server-dlb2p4nqa-riyads-projects.vercel.app/cart')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
