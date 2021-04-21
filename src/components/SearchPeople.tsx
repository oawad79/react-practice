import React, {ChangeEvent, useState} from "react";
import SearchResult from "./SearchResult";
import {Person} from "../types";
import Scroll from "./Scroll";
import SearchBar from "./SearchBar";

type Props = {
    people: Person[];

}

function SearchPeople({people}  : Props) {

    const [searchField, setSearchField] = useState("");

    const filteredPersons : Person[] = people.filter(
        person => {
            return (
                person
                    .name
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                person
                    .email
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setSearchField(e.target.value);
    };

    return (
        <>
            <SearchBar onChange={handleChange} />
            <Scroll>
                <SearchResult people={filteredPersons}/>
            </Scroll>
        </>
    );
}

export default SearchPeople;