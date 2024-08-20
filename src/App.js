import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import FormApply from "./pages/form";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FormApply" element={<FormApply />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </Fragment>
  );
}

function Error() {
  return (
    <div >
      <h2>Böyle bir sayfa bulunamadı</h2>
    </div>
  );
}

export default App;
