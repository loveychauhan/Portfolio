import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import Work from "./component/Work";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
