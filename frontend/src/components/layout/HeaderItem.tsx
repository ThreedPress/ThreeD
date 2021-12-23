export const HeaderItem = ({title, Icon}) => {
    return (
        <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
            <Icon className="h-8 w-8 mb-1 " />
            <p className="tracking-widest uppercase">{title}</p>
        </div>
    )
}
