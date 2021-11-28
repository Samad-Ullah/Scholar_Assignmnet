import React from "react";
import { BrowserRouter } from "react-router-dom";
import AssignmentRoutes from "./Router";

function App() {
  return (
    <BrowserRouter>
      <AssignmentRoutes></AssignmentRoutes>
    </BrowserRouter>
  );
}

export default App;
