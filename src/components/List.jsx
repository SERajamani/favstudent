import { Arrcontext } from "./Contents"; 
import { useContext } from "react";

function Fav() {
    const { ArrActivity, favourite, setfavourite } = useContext(Arrcontext);

    const removefav = (item) => {
        setfavourite(favourite.filter((fav) => fav !== item));
    };

    return (
        <div className="pl-10 mt-5 flex flex-col gap-3">
            { 
                favourite.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <h1>{index + 1}. {item}</h1>
                        <button 
                            onClick={() => removefav(item)} 
                            className="ml-4 bg-red-600 text-white p-1 rounded-md"
                        >
                            Remove
                        </button>
                    </div>
                ))
            }
        </div>
    );
}

export default Fav;
