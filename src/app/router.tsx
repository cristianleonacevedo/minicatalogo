import Login from "../module/product/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}