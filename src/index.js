import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// dynamic import component
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={<h2 className="text-center">Tracknerd for testing ui</h2>}
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
