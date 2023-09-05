/* eslint-disable no-script-url */
import Switcher from "../components/Switcher";
import InputField from "../components/InputField";
import ProfilePic from "../assets/images/profile.png"
import CustomDropdown from "../components/CustomDropdown";
import user from '../assets/svg/user.svg'
import adminIcon from '../assets/svg/adminIcon.svg'
import logout from '../assets/svg/logout.svg'

export default function Navbar({ showSidebar, setShowSidebar }) {
  const buttonContent = (
    <div className="w-[10px]">
      <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.53259 17.3748C4.53259 17.9759 4.29382 18.5523 3.8688 18.9773C3.44379 19.4023 2.86735 19.6411 2.26629 19.6411C1.66523 19.6411 1.08879 19.4023 0.663781 18.9773C0.238769 18.5523 -7.27897e-08 17.9759 -9.90628e-08 17.3748C-1.25336e-07 16.7738 0.238769 16.1973 0.663781 15.7723C1.08879 15.3473 1.66523 15.1085 2.26629 15.1085C2.86735 15.1085 3.44379 15.3473 3.8688 15.7723C4.29382 16.1973 4.53259 16.7738 4.53259 17.3748ZM4.53259 9.82051C4.53259 10.4216 4.29382 10.998 3.8688 11.423C3.44379 11.848 2.86735 12.0868 2.26629 12.0868C1.66523 12.0868 1.08879 11.848 0.663781 11.423C0.238769 10.998 -4.02999e-07 10.4216 -4.29272e-07 9.82051C-4.55545e-07 9.21945 0.238769 8.64301 0.663781 8.218C1.08879 7.79299 1.66523 7.55422 2.26629 7.55422C2.86735 7.55422 3.44379 7.79299 3.8688 8.218C4.29382 8.64301 4.53259 9.21945 4.53259 9.82051ZM4.53258 2.2662C4.53258 2.86726 4.29382 3.4437 3.8688 3.86871C3.44379 4.29373 2.86735 4.5325 2.26629 4.5325C1.66523 4.5325 1.08879 4.29373 0.663781 3.86871C0.238768 3.4437 -7.33208e-07 2.86726 -7.59481e-07 2.2662C-7.85755e-07 1.66514 0.238768 1.08871 0.663781 0.663692C1.08879 0.23868 1.66523 -8.97182e-05 2.26629 -8.97444e-05C2.86735 -8.97707e-05 3.44379 0.23868 3.8688 0.663692C4.29382 1.0887 4.53258 1.66514 4.53258 2.2662Z" fill="#A2A7B4"/>
      </svg>
    </div>
);
  const menuItems = [
    { label: 'My Account', href: 'javascript:void(0)', image: user },
    { label: 'Admin Panel', href: 'javascript:void(0)', image: adminIcon },
    { label: 'Vendor Panel', href: 'javascript:void(0)', image: adminIcon },
    { label: 'Logout', href: 'javascript:void(0)', image: logout },
];

  return (
    <nav className="dark:bg-[#1C1C25] md:ml-[19.2rem] py-[19.5px] pl-[39px] pr-[37px]">
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
          <div className="flex">
            <form className="w-[626px]">
              <InputField />
            </form>
          </div>
          <div className="flex items-center gap-4">
              <Switcher />
              <div className="flex relative items-center justify-between px-5 py-[7px] rounded-[12px] bg-[#F2F8FF] dark:bg-[#131313] w-[256px]">
                <div className="flex gap-2.5 items-center">
                  <div className="w-[45px] h-[45px]">
                    <img className="w-full rounded-full object-cover" src={ProfilePic} alt="ProfilePic" />
                  </div>
                  <div>
                    <p className="text-[13px]  font-medium text-[#1F1F1F] dark:text-[#E0E0E0]">Andy Warhol</p>
                    <p className="text-[11px]  font-medium text-[#5E6E78]">andywarhol@mail.com</p>
                  </div>
                </div>
                <div className="cursor-pointer">
                    <CustomDropdown buttonContent={buttonContent} menuItems={menuItems} />
                </div>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
