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
   

<div className="relative overflow-x-auto shadow-md sm:rounded-lg py-7 px-5">
    
    <table className="w-full text-sm text-left rtl:text-right text-gray-100 dark:text-gray-400 rounded-md">
        <thead className="text-xs text-gray-100 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
            {list.map((item,index)=>{return (
                <tr key={index}className="odd:bg-gray-700 odd:dark:bg-gray-900 even:bg-gray-700 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="font-bold px-6 py-4  text-gray-300 whitespace-nowrap dark:text-gray-200">
                    {item.strategyname}
                </th>
                <td className="px-6 py-4">
                {item.winrate}
                </td>
                <td className="px-6 py-4">
                {item.maxstreak}
                </td>
                <td className="px-6 py-4">
                {item.profit}
                </td>
                <td className="px-6 py-4">
                {item.Risk}
                </td>
                
            </tr>
            )})}
           
        </tbody>
    </table>
</div>

  )
}

export default page