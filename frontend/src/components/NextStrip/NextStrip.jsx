import { Link } from 'react-router-dom'

export default function NextStrip({ type, next_to }) {
  return (
    <div className="pagefilter d-flex justify-content-between">
      <div className="col-md-6">
        <select className="form-control-custom">
          <option value="" disabled="">
            View By:
          </option>
          {type && type == "grid" && <option value="General View">Grid</option>}
          {type && type == "list" && <option value="List View">List</option>}
        </select>
      </div>
      <div className="col-md-6">
        <Link
          to={next_to}
          className="btn btn-primary btn-medium px-4 gap-3"
        >Add</Link>
      </div>
    </div>
  );
}
