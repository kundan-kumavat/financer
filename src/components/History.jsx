import React from "react";

function History({img_link, name, text, date, type}) {
    return(
        <div className="flex flex-row justify-between w-[950px] mb-[17px] items-center">
            <div className="flex flex-row items-center">
            <img className="w-[50px] h-[50px] rounded-full mr-[25px] border-2 border-white border-solid" src={img_link} alt="person" />
            <p className="text-[17px] text-white font-medium">{name}</p>
            </div>
            <p className="sub_heading">{text}</p>
            <p className="sub_heading">{date}</p>
            <p className="sub_heading">{type}</p>
        </div>
    )
}

export default History;