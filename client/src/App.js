import "./App.css";
import Form from "./components/Form";
import { RouterProvider } from "react-router-dom";
import User from "./components/User";
function App() {
  return (
    <div className="App">
      <RouterProvider router={User} />
    </div>
  );
}

export default App;
