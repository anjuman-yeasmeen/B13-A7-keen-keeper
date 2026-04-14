import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Friend from "../pages/friends/Friend";
import Homepage from "../pages/homepage/Homepage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/friends",
        element: <Friend />
      }
    ]
  },
  

]);