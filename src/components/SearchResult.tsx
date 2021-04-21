import React, {ReactElement} from "react";
import {Person} from "../types";
import Card from "./Card";

type Props = {
    people: Person[];

}
const SearchResult = ({people} : Props) : ReactElement => {
    const filtered = people
        .flatMap(person => <Card key={person.id} {...person} /> );

    return (
        <div className="ml-5 mr-5 flex flex-wrap gap-5">
            {filtered}
        </div>);
}

export default SearchResult;