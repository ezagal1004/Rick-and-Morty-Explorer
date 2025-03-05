import { useState, useEffect } from "react";
import { fetchCharacterById } from "../api/rickAndMortyAPI";

const useCharacterFetch = (id) => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCharacter = async () => {
            try {
                setLoading(true);
                const response = await fetch(fetchCharacterById(id));
                if (!response.ok) throw new Error("Character not found");

                const data = await response.json();
                setCharacter(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getCharacter();
    }, [id]);

    return { character, loading, error };
};

export default useCharacterFetch;
