import { Routes, Route } from "react-router-dom";
import { routesList } from "routes";

function App() {
  return (
    <Routes>
      {routesList.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
