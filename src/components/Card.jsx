import React from "react";

function Card({icon_text, text, price}){
    return(
        <div className="flex w-[220px] h-[220px] rounded-xl bg-secondary items-center justify-center card cursor-pointer">
            <div className="flex flex-col w-[150px] h-[150px] m-[10px]">
             <span className="material-symbols-outlined text-white text-[50px]">{icon_text}</span>
             <p className="text-dimWhite text-[20px] max-w-[120px] my-[10px]">{text}</p>
             <p className="text-white text-[25px] font-bold">₹{price}</p>
            </div>
        </div>
    )
}

export default Card;