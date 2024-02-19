import React from "react";

const Watchlist = () => {
    return(
        <div className="flex flex-col w-full mt-[20px]">

            <table className="text-white ">
                <tr>
                    <th>Sr. No</th>
                    <th>Name</th>
                    <th>Duration</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tata Motors</td>
                    <td>6 Months</td>
                    <td>2</td>
                    <td>Active</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Tata Steal</td>
                    <td>6 Months</td>
                    <td>5</td>
                    <td>Active</td>
                    <td></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>NHPC</td>
                    <td>6 Months</td>
                    <td>5</td>
                    <td>Active</td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}

export default Watchlist;