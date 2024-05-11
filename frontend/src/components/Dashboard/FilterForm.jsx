import { useState } from 'react';

export default function FilterForm({ onClickFn: onClickFnPass }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleReload = (e) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      setErrorMessage('Start Date and End Date are required');
      return;
    }

    onClickFnPass(startDate, endDate);
  };

  const handleCloseAlert = () => {
    setErrorMessage('');
  };

  return (
    <div className="page-general px-4 py-4 form-fs form-custom mt-3 mb-0">
      {errorMessage && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {errorMessage}
          <button type="button" className="btn-close" onClick={handleCloseAlert}></button>
        </div>
      )}
      <form action="" method="POST">
        <div className="row mb-3">
          <div className="col-lg-6">
            <label htmlFor="edtStartDate" className="form-label">Start Date</label>
            <input type="date" name="edtStartDate" id="edtStartDate" className="form-control"
              value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
          </div>
          <div className="col-lg-6">
            <label htmlFor="edtEndDate" className="form-label">End Date</label>
            <input type="date" name="edtEndDate" id="edtEndDate" className="form-control"
              value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-end">
            <button type="submit" className="btn btn-primary-mcd text-white" onClick={handleReload}>
              Reload <i className="bi bi-arrow-counterclockwise"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
