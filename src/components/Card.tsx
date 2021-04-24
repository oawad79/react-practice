import {Person} from "../types";
import {ReactElement} from "react";

const Card = (person: Person) : ReactElement => (

    <div className="rounded shadow-lg bg-gray-200 w-70 h-auto">
        <img className="w-60 h-56" src={process.env.PUBLIC_URL + person.imgPath} alt="Mountain"/>
            <div className="px-4 py-2 w-60">
                <div className="font-bold text-xl mb-2">{person.name}</div>
                <p className="text-gray-700 text-base">
                    {person.address}<br/>
                    {person.email}
                </p>
            </div>
    </div>


)

export default Card;