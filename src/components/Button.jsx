import React from "react";

function Button({text, styles}) {
    return(
        <button 
         className={`button text-white text-[20px] font-semibold w-[150px] p-[7px] rounded-[30px] ${styles}`}
        >
            {text}
        </button>
    )
}

export default Button;