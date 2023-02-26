import { createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import Form from "./Form";
const User = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/Login",
    element: <LogIn />,
  },
  {
    path: "/Form",
    element: <Form />,
  },
]);

export default User;
