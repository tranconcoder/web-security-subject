import { createBrowserRouter } from "react-router-dom";
import {SIGN_IN_PAGE_ID} from "../constants/routeId.constant";

// Pages
import HomePage from "../pages/Home.page";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp.page";

const router = createBrowserRouter([
    {
        path: "*",
        element: <h1>404, Not found!</h1>,
    },
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/auth",
        children: [
        { id: SIGN_IN_PAGE_ID,path: "sign-in", element: <SignInPage /> },
            { path: "sign-up", element: <SignUpPage /> },
        ],
    },
]);

export default router;
