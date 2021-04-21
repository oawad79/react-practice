import React from "react";

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchBar(props: Props) {
    return <div className="text-center py-4">
        <label htmlFor="first_field" className="font-bold text-lg py-2 px-3">Search</label>
        <input name="first_field" className="border-2 border-black py-2 px-2 text-grey-darkest" type="text" onChange={props.onChange}/>
    </div>;
}

export default SearchBar;