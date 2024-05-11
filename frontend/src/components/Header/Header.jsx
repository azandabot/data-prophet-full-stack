import { Link } from 'react-router-dom';

const Header = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumb-title">
        <div className="flex-left" >
          {breadcrumbs.map((breadcrumb, index) => (
            <Link to={breadcrumb.link} className="text-decoration-none text-dark cursor-pointer" key={index}>
              <i className={breadcrumb.icon}></i>
              <span>{breadcrumb.title}</span>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Header;
