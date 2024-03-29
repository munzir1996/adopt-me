import React, {useState, useEffect} from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = () => {

    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);

    async function requestPets(){

        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        });

        setPets(animals || []);

    }

    useEffect(() => {
        setBreeds([]);
        setBreed("");
        
        pet.breeds(animal).then(({ breeds }) => {
            const breedString = breeds.map( ({name}) => name);
            setBreeds(breedString);
        }, console.error);

    }, [animal, setBreed, setBreeds])

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} placeholder="Location" onChange={event => setLocation(event.target.value)}/>
                </label>

                <AnimalDropdown />
                <BreedDropdown />

                <button>Submit</button>
            </form>

            <Results pets={pets} />
        
        </div>
    );

};

export default SearchParams
