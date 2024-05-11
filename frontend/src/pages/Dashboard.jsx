import { useState, useEffect } from "react";

import Spinner from "../components/Spinner";
import Header from "../components/Header/Header";
import FilterForm from "../components/Dashboard/FilterForm";
import DataVisualization from "../components/Dashboard/DataVisualization";

export default function Dashboard() {
  const [showSpinner, setShowSpinner] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [breadcrumbs] = useState([
    { link: "/", icon: "bi bi-grid-1x2-fill text-danger", title: " Dashboard" }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
      setShowContent(true);
    }, 444);

    const deviceParameterData = [
      { device: 'Device 1', total: 85 },
      { device: 'Device 2', total: 70 },
      { device: 'Device 3', total: 60 },
      { device: 'Device 4', total: 92 },
      { device: 'Device 5', total: 45 },
      { device: 'Device 6', total: 78 },
      { device: 'Device 7', total: 83 },
      { device: 'Device 8', total: 60 },
      { device: 'Device 9', total: 75 },
      { device: 'Device 10', total: 100 }
    ];

    deviceParameterData.sort((a, b) => b.total - a.total);

    const populateTable = () => {
      const tableBody = document.querySelector('#tblDataDash tbody');
      if (!tableBody) return; // Check if tableBody exists

      tableBody.innerHTML = '';

      deviceParameterData.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td className="py-3">
              <div className="form-check">
                  <input className="form-check-input me-3 highlight-checkbox mb-0 " type="checkbox" name="">
                  ${item.device}
              </div>
          </td>
          <td className="py-3">${item.total}</td>
      `;
        tableBody.appendChild(row);
      });
    };

    populateTable();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showContent) return; // Wait for content to be visible

    // Crew Performance Chart Data
    const crewPerformanceData = {
      labels: ['Device', 'Device', 'Device', 'Device', 'Device', 'Device', 'Device', 'Device', 'Device', 'Device'],
      datasets: [{
        label: 'Rating',
        data: [85, 70, 60, 92, 45, 78, 83, 60, 75, 100],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2
      }]
    };

    // Crew Split Chart Data
    const crewSplitData = {
      labels: ['Parameter 1', 'Parameter 2', 'Parameter 3', 'Parameter 4'],
      datasets: [{
        data: [15, 25, 40, 20],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(255, 205, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(54, 162, 235, 0.5)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
        barThickness: 30
      }]
    };

    // Crew Performance Chart Initialization
    const crewPerformanceChartCtx = document.getElementById('crewPerformanceChart');
    const crewPerformanceChart = new Chart(crewPerformanceChartCtx, {
      type: 'bar',
      data: crewPerformanceData,
      options: {
        indexAxis: 'y',
        aspectRatio: 1.5,
        scales: {
          x: { display: false }, // Hide x-axis
          y: { display: true, grid: { display: false } } // Hide y-axis grid lines
        }
      }
    });

    // Crew Split Chart Initialization
    const crewSplitChartCtx = document.getElementById('crewSplitChart');
    const crewSplitChart = new Chart(crewSplitChartCtx, {
      type: 'pie',
      data: crewSplitData,
      options: { aspectRatio: 1.5 }
    });

    return () => {
      crewPerformanceChart.destroy(); // Cleanup crewPerformanceChart
      crewSplitChart.destroy(); // Cleanup crewSplitChart
    };
  }, [showContent]);



const toggleView = (view) => {
    const chartButton = document.getElementById('chartButton');
    const tableButton = document.getElementById('tableButton');

    if (view === 'chart') {
        document.getElementById('crewPerformanceChart').style.display = 'block';
        document.getElementById('tableContainer').style.display = 'none';

        chartButton.classList.remove('btn-light');
        chartButton.classList.add('btn-primary');
        chartButton.classList.add('active');

        tableButton.classList.remove('btn-primary');
        tableButton.classList.remove('active');
        chartButton.classList.add('btn-light');
    } else if (view === 'table') {
        document.getElementById('crewPerformanceChart').style.display = 'none';
        document.getElementById('tableContainer').style.display = 'block';

        tableButton.classList.remove('btn-light');
        tableButton.classList.add('btn-primary');
        tableButton.classList.add('active');

        chartButton.classList.remove('btn-primary');
        chartButton.classList.remove('active');
        chartButton.classList.add('btn-light');
    }
};

  const handleFilterSubmit = (startDate, endDate) => {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  return (
    
    <section className="center center px-0 py-0">
      <Header breadcrumbs={breadcrumbs} />
      <FilterForm onClickFn={handleFilterSubmit} />

      
      {showSpinner && <Spinner />}
      {showContent && (
        <div>
          <div className="row px-4 py-3">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="display-3 py-5 text-success"><i
                                        className="bi bi-hdd-rack-fill"></i></span>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <h5 className="form-fs mb-2 text-right">Total Devices</h5>
                                <p className="fs-3 text-muted text-right fw-bold">100</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="display-3 py-5 text-danger"><i
                                        className="bi bi-hdd-fill"></i></span>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <h5 className="form-fs mb-2 text-right">Total Device Paramters</h5>
                                <p className="fs-3 text-muted text-end fw-bold">50</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="row">
                            <div className="col-lg-12">
                            <span className="display-3 py-5" style={{ color: 'var(--bs-orange)' }}><i className="bi bi-cpu-fill"></i></span>


                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <h5 className="form-fs mb-2 text-end">Total Sensor Data</h5>
                                <p className="fs-3 text-muted text-right fw-bold">1000</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
        
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header bg-white">
                            <div className="row px-1 py-1">
                                <div className="col-lg-9">
                                    <h6 className="fw-bold fs-6 py-1 text-start">Sensor Data Total Per Device</h6>
                                </div>
                                <div className="col-lg-3">
                                    <div className="btn-group" role="group" aria-label="View Type">
                                        <button id="chartButton" type="button" className="btn btn-primary active" onClick={() => toggleView('chart')}>
                                            <i className="bi bi-bar-chart-fill"></i>
                                        </button>
                                        <button id="tableButton" type="button" className="btn btn-light" onClick={() => toggleView('table')}>
                                            <i className="bi bi-list-ul"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                        <canvas id="crewPerformanceChart" style={{ display: 'block', height: '300px', width: '100%' }}></canvas>
                        <div className="table-responsive" id="tableContainer" style={{ display: 'none' }}>
                                <table id="tblDataDash" className="table mb-0 small" style={{ width: '100% !important' }}>
                                    <thead>
                                        <tr className="py-3">
                                            <th>Device-Parameter</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header bg-white">
                            <div className="row px-1 py-1">
                                <div className="col-lg-9">
                                    <h6 className="fw-bold fs-6 py-1 text-start">Parameter Split Per Device - 20</h6>
                                </div>
                                <div className="col-lg-3">
                                    <div className="btn-group" role="group" aria-label="View Type">
                                        <button type="button" className="btn btn-primary active"><i className="bi bi-bar-chart-fill"></i></button>
                                        <button type="button" className="btn btn-light"><i className="bi bi-list-ul"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <canvas id="crewSplitChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
