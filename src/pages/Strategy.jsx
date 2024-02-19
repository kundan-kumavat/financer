import React from "react";

const Strategy = () => {
    return(
        <div className="flex flex-row w-full items-center justify-between mt-[20px]">
            <div className="p-[20px] bg-[#1B1843] rounded-md">
                <p className="heading text-gradient">Rules For Trading</p>
                <div className="text-white px-[20px] py-[10px]">
                    <ul>
                        <li>Enter at Perfect Setup</li>
                        <li>Enter after Candle Closing</li>
                        <li>Exit Trade after hitting the Stoploss</li>
                        <li>Respect Option Chain Data</li>
                        <li>Don't Over Trade</li>
                        <li>1 Stoploss a Day</li>
                        <li>Don't enter in a Running Trade</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Strategy;