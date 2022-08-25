import React, { Suspense, useState } from "react"; 
import Loading from "./Common/Loading/Loading";

import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./Route/AppRoute";
function App() {
  document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
  return (
    <Suspense fallback={<Loading />}>
    <Router>
      <AppRoute />
    </Router>
  </Suspense>
  );
}

export default App;
