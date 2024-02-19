import React from "react";
import Card from "../components/Card";
import { cards, history, receipts, transactions } from "../constants";
import Transactions from "../components/Transactions";
import History from "../components/History";

function Dashboard() {
    return(
       <div className="flex flex-row bg-primary">

        {/* Section 1 */}
         <div className="flex flex-col mr-[50px]">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                    <p className="heading">Dashboard</p>
                    <p className="sub_heading">Payment Summary</p>
                </div>

                <div className="flex flex-row bg-secondary rounded-xl items-center p-[5px] w-[250px]">
                    <span className="material-symbols-outlined text-dimWhite">Search</span>
                    <input className="border-none bg-secondary text-color mx-[5px] text-[12px]" type="text" name="search" id="search" placeholder="Search" />
                </div>
            </div>

            <div className="flex flex-row justify-between mt-[30px]">
                {cards.map((card) => (
                    <Card icon_text={card.icon_text} text={card.text} price={card.price} />
                ))
                }
            </div>

            <div className="flex flex-col mt-[30px]">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <p className="heading">Analytics</p>
                        <p className="sub_heading">Past 7 days</p>
                    </div>

                    <div className="mt-[10px] flex flex-row p-[10px] rounded-md text-white bg-secondary items-center h-[30px]">
                        <p>Past 7 Days</p>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                </div>

                <div className="flex flex-row justify-between mt-[30px]">
                {cards.map((card) => (
                    <Card icon_text={card.icon_text} text={card.text} price={card.price} />
                ))
                }
                </div>
            </div>

            <div className="flex flex-col mt-[50px]">
                    <div className="flex flex-col">
                        <p className="heading">History</p>
                        <p className="sub_heading">Transactions of past 30 days</p>
                    </div>

                <div className="flex flex-col mt-[25px]">
                    {
                        history.map((detail) => (
                            <History img_link={detail.img_link} name={detail.name} text={detail.text} date={detail.date} type={detail.type} />
                        ))
                    }
                </div>

            </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col">
            <div className="flex flex-row mt-[15px]">
                <span className="material-symbols-outlined text-white">notifications</span>
                
            </div>

            <div className="flex credit-card w-[350px] h-[220px] rounded-xl mt-[40px] justify-center items-center">
                <div className="flex relative flex-col w-[300px] h-[160px]">
                    <span className="bg-color w-[35px] h-[25px] rounded-md"></span>
                    <p className="text-white font-poppins mt-[10px] font-medium text-[20px] tracking-wider">8512 4569 7249 3325</p>

                    <div className="absolute flex flex-row bottom-0">
                        <div className="flex flex-col text-white text-[10px] mr-[15px]">
                            <p>Bank Branch</p>
                            <p className="font-semibold">Aagashi</p>
                        </div>
                        <div className="flex flex-col text-white text-[10px]">
                            <p>Valid till</p>
                            <p className="font-semibold">01/24</p>
                        </div>

                        <span className="w-[25px] h-[25px] rounded-full bg-secondary ml-[120px]"></span>
                        <span className="w-[25px] h-[25px] rounded-full bg-color ml-[-7px]"></span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-[50px]">
                <p className="text-white text-[20px] font-medium]">Recent Transactions</p>

                {
                    transactions.map((transaction) => (
                        <Transactions icon_text={transaction.icon_text} text={transaction.text} price={transaction.price} days={transaction.days} />
                    ))
                }
                {/* <Transactions icon_text={`water_drop`} text={`Water bill`} days={`2`} price={`50`} /> */}
            </div>

            <div className="flex flex-col mt-[30px]">
                <p className="text-white text-[20px] font-medium">Upcoming Transactions</p>

                {
                    receipts.map((receipt) => (
                        <Transactions icon_text={receipt.icon_text} price={receipt.price} text={receipt.text} days={receipt.days} />
                    ))
                }
            </div>
        </div>
       </div>
    )
}

export default Dashboard;