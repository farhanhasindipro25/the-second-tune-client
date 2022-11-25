import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import "typeface-montserrat";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div style={{ fontFamily: "montserrat" }}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
