export const Card = ( {timeA, timeB, match}) => {
    return (
        <div className=" rounded-xl text-center border border-gray-300 p-4">
                        <span className="text-sm md:text-base text-gray-700 font-bold">{match.time}</span>

                        <div className="flex space-x-4 justify-center items-center space-y-4">

                            <span className="uppercase">{timeA.slug}</span>
                            <img src={ `/imgs/flags/${timeA.slug}.png` } />

                            <input max={10} className="bg-red-300/[0.2] text-center w-14 rounded w-[55] h-[55px] text-red-700 text-xl" type="number" />
                            <span className=" text-red-500 font-bold">X</span>
                            <input max={10} className="bg-red-300/[0.2] text-center w-14 rounded w-[55] h-[55px] text-red-700 text-xl" type="number" />

                            <img src={ `/imgs/flags/${timeB.slug}.png` } ></img>
                            <span className="uppercase">{timeB.slug}</span>
                

                        </div>
                    </div>
    )
}


