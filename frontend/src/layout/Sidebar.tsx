import { SidebarItem } from "./SidebarItem";
import {
  MdViewModule,
  MdAccountCircle,
  MdAddBox,
  MdGridView,
  MdOutlineLocalFireDepartment,
} from "react-icons/md";

export const Sidebar = () => {
  return (
    <div className="flex-col bg-gray-900 border-r border-gray-900 ">
      <div className="flex-col h-screen mx-5 mt-5 overflow-y-scroll">
        <img
          className="object-contain"
          src="/logo.svg"
          alt="Threed Logo"
          height={100}
          width="md"
        />
        <div className="flex flex-col my-5 mr-5 space-y-2">
          <SidebarItem title="feed" Icon={MdViewModule} />
          <SidebarItem title="categories" Icon={MdGridView} />
          <SidebarItem title="trending" Icon={MdOutlineLocalFireDepartment} />
          <hr className="border-t-[0.1px] mr-5" />
          <SidebarItem title="create" Icon={MdAddBox} />
          <SidebarItem title="account" Icon={MdAccountCircle} />
        </div>
      </div>
    </div>
  );
};
