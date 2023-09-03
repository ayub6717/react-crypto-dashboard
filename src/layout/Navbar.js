import { useLocation } from "react-router-dom";
import Switcher from "../components/Switcher";

export default function Navbar({ showSidebar, setShowSidebar }) {
  const location = useLocation().pathname;

  return (
    <nav className="dark:bg-[#1C1C25] md:ml-[19.2rem] py-[37px] pl-[39px] pr-[37px]">
      <div className="container max-w-full mx-auto flex items-center justify-between">
        <div className="md:hidden">
          <button onClick={() => setShowSidebar("left-0")}>
            <svg
              className="collapse-icon pointer"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 13H22M4 7H22M4 19H16"
                stroke="#898989"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <div
            className={`absolute top-2 md:hidden ${
              showSidebar === "left-0" ? "left-[19.2rem]" : "-left-[19.2rem]"
            } z-50 transition-all duration-300`}
          >
            <button onClick={() => setShowSidebar("-left-[19.2rem]")}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="28" height="28" rx="4" fill="#0505054a" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.24408 9.24408C9.56951 8.91864 10.0972 8.91864 10.4226 9.24408L14 12.8215L17.5774 9.24408C17.9028 8.91864 18.4305 8.91864 18.7559 9.24408C19.0814 9.56951 19.0814 10.0972 18.7559 10.4226L15.1785 14L18.7559 17.5774C19.0814 17.9028 19.0814 18.4305 18.7559 18.7559C18.4305 19.0814 17.9028 19.0814 17.5774 18.7559L14 15.1785L10.4226 18.7559C10.0972 19.0814 9.56951 19.0814 9.24408 18.7559C8.91864 18.4305 8.91864 17.9028 9.24408 17.5774L12.8215 14L9.24408 10.4226C8.91864 10.0972 8.91864 9.56951 9.24408 9.24408Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <h4 className="uppercase text-[#141414] text-sm tracking-wider mt-1">
            {location === "/"
              ? "DASHBOARD"
              : location.toUpperCase().replace("/", "")}
          </h4>

          <div className="flex">
            <form className="max-w-sm px-4">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
              </div>
            </form>
          </div>
          <Switcher />
        </div>
      </div>
    </nav>
  );
}
