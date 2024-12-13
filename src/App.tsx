import { RouterProvider } from "react-router-dom";
import routes from "@/pages/route";
import { Provider } from "react-redux";
import { store } from "./application/store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
