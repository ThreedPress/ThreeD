import { FC } from "react";
import { IconType } from "react-icons";

interface OwnProps {
  title: string;
  Icon: IconType;
}

export const HeaderItem: FC<OwnProps> = ({ title, Icon }) => {
  return (
    <div className="flex flex-col transition motion-reduce:transition-none motion-reduce:transform-none ease-in-out delay-150 items-center cursor-pointer w-12 mx-3 mt-3 sm:w-20 hover:text-white hover:-translate-y-1 hover:scale-110 select-none">
      <Icon className="h-8 w-8 mb-1 " data-testid="header-item-icon" />
      <p className="tracking-widest uppercase">{title}</p>
    </div>
  );
};
