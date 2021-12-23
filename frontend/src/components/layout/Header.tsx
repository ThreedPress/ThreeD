import { HeaderItem } from "./HeaderItem"
import { MdGridView } from "react-icons/md";

export const Header = () => {
    return (
        <header>
            <div>
                <HeaderItem title="feed" Icon={MdGridView}/>
            </div>
            <img className="object-contain" src="/logo.svg" alt="Threed Logo" height={100} width={200}></img>
        </header>
    )
}
