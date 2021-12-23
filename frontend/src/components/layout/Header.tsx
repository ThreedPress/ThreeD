import { HeaderItem } from "./HeaderItem"
import { MdGridView, MdAccountCircle, MdAddBox } from "react-icons/md";

export const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <img className="object-contain" src="/logo.svg" alt="Threed Logo" height={100} width={200}></img>
            <div className="flex flex-grow justify-evenly max-w-md">
                <HeaderItem title="feed" Icon={MdGridView}/>
                <HeaderItem title="profile" Icon={MdAccountCircle}/>
                <HeaderItem title="create" Icon={MdAddBox}/>
            </div>
        </header>
    )
}
