import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import ApiPage from "./pages/ApiPage";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api" element={<ApiPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
