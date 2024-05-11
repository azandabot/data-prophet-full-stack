import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import NextStrip from "../components/NextStrip/NextStrip";

export default function DeviceParameters() {
  const [showSpinner, setShowSpinner] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [breadcrumbs] = useState([
    { link: "/", icon: "bi bi-hdd-rack-fill text-danger", title: " Devices" },
  ]);

  const fetchDevices = async () => {
    const response = await fetch("http://127.0.0.1:8000/devices/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["devices"],
    queryFn: fetchDevices,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
      setShowContent(true);
    }, 444);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="center center px-0 py-0">
      <Header breadcrumbs={breadcrumbs} />
      <Banner title="Devices" />
      <NextStrip type="list" next_to="/devices-cru?func=add" />

      <div className="page-general form-fs form-custom mt-4 px-4 py-4">
        <div className="table-responsive">
          <table id="tblDataDash" className="table mb-0 small">
            <thead>
              <tr className="py-3">
                <th>ID</th>
                <th>Device Name</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="2">Loading...</td>
                </tr>
              ) : isError ? (
                <tr>
                  <td colSpan="2">Error fetching data</td>
                </tr>
              ) : (
                data?.device?.length > 0 &&
                data.map((device) => (
                  <tr key={device.id}>
                    <td>{device.id}</td>
                    <td>{device.name}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showSpinner && <Spinner />}
      {showContent && <div></div>}
    </section>
  );
}
