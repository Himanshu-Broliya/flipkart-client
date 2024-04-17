import { navData } from "../../Constant/data"

export const Navbar = () => {
    return (
        <div className="grid grid-cols-4 md:flex justify-between px-3 lg:px-[130px] py-6 text-center items-center bg-white">
            {
                navData.map((data, i) =>
                    <div className="flex flex-col text-center items-center justify-center cursor-pointer">
                        <img src={data.url} alt="nav" className="h-12 md:h-16"/>
                        <p className="font-semibold">{data.text}</p>
                    </div>
                )
            }
        </div>
    )
}
