import company from "assets/company-logo.png";
import logo from "assets/sugar-logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 pl-6">
        <div className="flex-1">
          <img src={logo} alt="logo" className="h-8 w-8" />
          <img src={company} alt="company" className="w-32" />
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
