import { RouterProvider } from "react-router-dom";
import router from "./configs/routes.config";

// Apply global scss style
import "./assets/scss/global.scss";

function App() {
    return <RouterProvider router={router} />;
}

export default App;
