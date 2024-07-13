import logo from "../../assets/logo/TrainBrainLogo.svg";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/constants";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-sm w-fit md:w-60 px-1 py-3 md:px-3 flex flex-col text-gray-700 rounded-tr-[20px] rounded-br-[20px]">
      <div className="flex items-center justify-center md:justify-normal gap-2 px-0 xs:px-3 md:px-6 select-none cursor-pointer">
        <img src={logo} alt="" className="min-w-10" />
        <h3 className="text-black text-xl font-bold hidden md:block">
          TrainBrain
        </h3>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-stretch px-0 md:px-3 py-8 gap-y-8">
        {DASHBOARD_SIDEBAR_LINKS.map((group) => (
          <div key={group.key}>
            <p className="text-gray-500 font-semibold text-sm pl-3 hidden md:block">
              {group.label}
            </p>
            <div className="flex flex-col gap-0.5">
              {group.tabs.map((tab) => (
                <SidebarLink key={tab.key} item={tab} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-0.5 p-3 md:px-6 md:py-8 border-t border-neutral-200">
        <div
          className="h-[34px] w-[34px] rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url("https://this-person-does-not-exist.com/img/avatar-gen461eff2e34bff5d289a75e5b66e1ad79.jpg")`,
          }}
        >
          <span className="sr-only">Train Wheeler</span>
        </div>
        <strong className="text-sm leading-[18px] mt-2 hidden md:block">
          Train Wheeler
        </strong>
        <span className="text-neutral-400 text-xs hidden md:block">
          trainwheeler@example.com
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
