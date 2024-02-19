import React from "react";

function Transactions({icon_text, text, days, price}){
    return(
        <div className="flex flex-row w-[350px] justify-between mt-[15px]">
            <div className="flex flex-row">
                <span className="material-symbols-outlined card p-[12px] rounded-md text-white">{icon_text}</span>
                <div className="flex flex-col ml-[10px]">
                    <p className="text-white">{text}</p>
                    <p className="text-dimWhite text-[14px]">{days} days ago</p>
                </div>
            </div>

            <p className="text-white font-semibold mt-[10px]">₹{price}</p>
        </div>
    )
}

export default Transactions;