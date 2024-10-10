import { createBrowserRouter } from "react-router-dom";

// Pages
import HomePage from "../pages/Home.page";
import SignInPage from "../pages/SignIn.page";
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
            { path: "sign-in", element: <SignInPage /> },
            { path: "sign-up", element: <SignUpPage /> },
        ],
    },
]);

export default router;
