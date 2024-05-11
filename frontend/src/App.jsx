import { Routes, Route } from "react-router-dom";
// pages
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import DeviceParameters from "./pages/DeviceParameters";
import SensorData from "./pages/SensorData";

// components
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
<main>
    <SideNav />
    
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/device-parameters" element={<DeviceParameters />} />
        <Route path="/sensor-data" element={<SensorData />} />
      </Routes>
  
</main>
);
}

export default App;
