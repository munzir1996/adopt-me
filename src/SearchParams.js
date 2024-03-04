import React, {useState, useEffect} from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {

    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("breed", "", breeds);

    useEffect(() => {
        console.log(pet);
        // console.log(ANIMALS);
        // console.log(pet.breeds("dog"));
        setBreeds([]);
        setBreed("");

        setTimeout(() => {
            console.log("nigga");
            setBreeds(ANIMALS);
        }, 500);
        
        // pet.breeds(animal).then(({ breeds }) => {
        //     const breedString = breeds.map( ({name}) => name);
        //     setBreeds(breedString);
        // }, console.error);
    }, [animal, setBreed, setBreeds])

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} placeholder="Location" onChange={event => setLocation(event.target.value)}/>
                </label>

                <AnimalDropdown />
                <BreedDropdown />

                <button>Submit</button>
            </form>
        </div>
    );

};

export default SearchParams
