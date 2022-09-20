import "./app.css";
import { Route, Routes } from "react-router-dom";
import ContactRoutes from "./contactRoutes";
import Header from "./components/Header";
import { Box } from "@mui/system";

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Routes>
          <Route path="/*" element={<ContactRoutes />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
