
const Card = ({content}) => {

    return(
        <>
            {content.map((e, index) => 
            <div key={index} className="flex flex-col w-fit h-fit p-[20px] bg-sky rounded-lg shadow-[2px_2px_5px_gray]">
                <div className="w-[300px]"></div>
                <p className="text-[15px] font-medium mb-5">{e.category}</p>
                <p className="font-bold text-[30px] mb-5">{e.value}</p>
                <div className="flex w-full gap-[50px]">
                    <p className="font-medium text-[15px] text-right">{e.sub2}</p>
                    <p className="font-medium text-[15px] text-right">{e.sub1}</p>
                </div>
            </div>
        )}
        </>
    );
}

export default Card;
