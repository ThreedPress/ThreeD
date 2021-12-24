import { FC } from "react";
import { IconType } from "react-icons";

interface OwnProps {
  title: string;
  Icon: IconType;
}
export const SidebarItem: FC<OwnProps> = ({ title, Icon }) => {
  return (
    <div className="flex items-center my-1 space-x-2 transition ease-in-out delay-150 origin-left cursor-pointer select-none motion-reduce:transition-none motion-reduce:transform-none hover:text-white hover:translate-x-1 hover:bg-red-500 hover:-translate-y-1 hover:scale-110">
      <Icon className="w-8 h-8" data-testid="header-item-icon" />
      <p className="tracking-widest uppercase">{title}</p>
    </div>
  );
};
