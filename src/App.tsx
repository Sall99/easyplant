import { Routes, Route } from "react-router-dom";
import { routesList } from "routes";

function App() {
  return (
    <div>
      <Routes>
        {routesList.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
