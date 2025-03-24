import React from 'react'



function page() {
const list =[{
    strategyname:"dragon tower",
    winrate:"50%",
    maxstreak:"12",
    profit:"10",
    Risk:"low",
},
{
    strategyname:"dice",
    winrate:"20%",
    maxstreak:"5",
    profit:"50",
    Risk:"high",
}
,
{
    strategyname:"dragon tower2",
    winrate:"56%",
    maxstreak:"10",
    profit:"5",
    Risk:"medium",
}
,
{
    strategyname:"Limbo ",
    winrate:"80%",
    maxstreak:"5",
    profit:"5",
    Risk:"low",
}
,{
    strategyname:"dragon tower4",
    winrate:"50%",
    maxstreak:"12",
    profit:"10",
    Risk:"low",
},
{
    strategyname:"Limbo3",
    winrate:"50%",
    maxstreak:"12",
    profit:"10",
    Risk:"low",
},{
    strategyname:"dice6",
    winrate:"50%",
    maxstreak:"12",
    profit:"10",
    Risk:"low",
}
]
    return (
   

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Strategy Name
                </th>
                <th scope="col" className="px-6 py-3">
                    win rate
                </th>
                <th scope="col" className="px-6 py-3">
                    max streak
                </th>
                <th scope="col" className="px-6 py-3">
                    Profit
                </th>
                <th scope="col" className="px-6 py-3">
                    Risk
                </th>
            </tr>
        </thead>
        <tbody>
            {list.map((item,index)=>{return (<>
                <tr key={index}className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.strategyname}
                </th>
                <td className="px-6 py-4">
                {item.winrate}
                </td>
                <td className="px-6 py-4">
                {item.maxstreak}
                </td>
                <td className="px-6 py-4">
                {item.Risk}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            </>)})}
           
        </tbody>
    </table>
</div>

  )
}

export default page