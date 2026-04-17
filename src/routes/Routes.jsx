import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import FriendDetails from "../pages/FriendDetails/FriendDtails"; 
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Timeline from "../pages/timeline/Timeline";
import Status from "../pages/status/Status";

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
        
        path: "friend/:id", 
        element: <FriendDetails />
      },
      {
        path: "timeline", 
        element: <Timeline></Timeline> 
      },
      {
        path: "stats", 
        element: <Status></Status>
      }
    ],
  },
]);