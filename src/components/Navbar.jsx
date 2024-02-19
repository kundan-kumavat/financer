import React from "react";
import { sidebar_title } from "../constants";

const Navbar = () => {
    return(
            <div className="flex flex-row items-center justify-between w-full py-[25px]">
                <p className="text-color text-[25px] font-bold">Financer</p>
                <div className="md:flex hidden flex-row text-white w-[600px] justify-between">
                    {sidebar_title.map((title) => (
                        <a className="hover:text-color cursor-pointer" id={title.id} href={`${title.id}`}>{title.title}</a>
                    ))}
                </div>

                <div className="flex flex-row text-white w-[150px] justify-between">
                    <a href="#">Login</a>
                    <a href="#">Signup</a>
                </div>
            </div>
    )
}

export default Navbar;