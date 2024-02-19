import React, {useState} from "react";
import { Bar, Line, Pie} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { BankNifty, Nifty } from '../constants';

function Analyatics(){

    const [bankNiftyData, setBankNiftyData] = useState({
        // labels: BankNifty.map((data) => data.name),
        datasets: [{
          label: "Weight",
          data: BankNifty.map((data) => data.percent),
          backgroundColor: BankNifty.map((data) => data.color),
          borderColor: "rgba(255, 255, 255, 1)",
          borderWidth: 2,
        }]
      })

      const [niftyData, setNiftyData] = useState({
        // labels: BankNifty.map((data) => data.name),
        datasets: [{
          label: "Weight",
          data: Nifty.map((data) => data.percent),
          backgroundColor: Nifty.map((data) => data.color),
          borderColor: "rgba(255, 255, 255, 1)",
          borderWidth: 2,
        }]
      })

    return(
        <div className="flex flex-row w-full justify-center items-center flex-wrap gap-[2rem]">
         {/* <Bar data={chartData} /> */}
         {/* <Line data={chartData} /> */}

         {/* BANK NIFTY  */}
         <div className="my-[1rem] flex flex-col items-center border-[1px] border-solid border-[#fff] rounded-[20px] p-[2rem]">
            <p className="font-semibold text-white">BANK NIFTY</p>
           <div className="flex flex-row items-center justify-center gap-[2rem]">
            <div>
               <Pie data={bankNiftyData} />
            </div>
            <div className="text-white">
                {
                  BankNifty.map((data) => {
                    return(
                      <div key={data.id} className="flex flex-row gap-[10px] my-[1rem]">
                        <span className={`bg-[${data.color}] w-[35px] h-[25px] rounded-md`}></span>
                        <p>{data.name}</p>
                      </div>
                    )
                  })
                }
            </div>
           </div>
         </div>

         {/* NIFTY  */}
         <div className="my-[1rem] flex flex-col items-center border-[1px] border-solid border-[#fff] rounded-[20px] p-[2rem]">
            <p className="font-semibold text-white">NIFTY</p>
           <div className="flex flex-row items-center justify-center gap-[2rem]">
            <div>
               <Pie data={niftyData} />
            </div>
            <div className="text-white">
                {
                  Nifty.map((data) => {
                    return(
                      <div key={data.id} className="flex flex-row gap-[10px] my-[1rem]">
                        <span className={`bg-[${data.color}] w-[35px] h-[25px] rounded-md`}></span>
                        <p>{data.name}</p>
                      </div>
                    )
                  })
                }
            </div>
           </div>
         </div>
        </div>
    )
}

export default Analyatics;