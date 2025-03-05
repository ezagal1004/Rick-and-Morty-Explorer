const BASE_URL = "https://rickandmortyapi.com/api";

// Fetch all characters with pagination support
export const fetchCharacters = (page = 1) => `${BASE_URL}/character/?page=${page}`;

// Fetch a specific character by ID
export const fetchCharacterById = (id) => `${BASE_URL}/character/${id}`;

