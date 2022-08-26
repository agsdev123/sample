import React, { Suspense, useState } from "react"; 


import { BrowserRouter as Router } from "react-router-dom";
import PlotAreaSection from "./PlotAreaSection/PlotAreaSection";


function App() {
//   document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });
  return (
    <Suspense>
<PlotAreaSection/>
  </Suspense>
  );
}

export default App;
