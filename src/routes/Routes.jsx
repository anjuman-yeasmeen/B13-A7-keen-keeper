import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Friend from "../pages/friends/Friend";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "friends", 
        element: <Friend />
      },
      {
        path: "timeline", 
        element: <div className="p-10 text-2xl">Timeline Page</div> 
      },
      {
        path: "stats", 
        element: <div className="p-10 text-2xl">Stats Page</div> 
      }
    ],
  },
]);