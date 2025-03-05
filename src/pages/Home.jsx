import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { motion } from 'motion/react';
import { fetchCharacters } from '../api/rickAndMortyAPI';
import CharacterCard from '../components/CharacterCard';
import Loader from '../components/Loader';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Spinner from '../components/Spinner';


const Home = () => {

    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [speciesFilter, setSpeciesFilter] = useState("");
    const [showSpinner, setShowSpinner] = useState(true);


    const buildApiUrl = () => {
        let url = fetchCharacters(page);
        if (searchTerm) url += `&name=${searchTerm}`;
        if (statusFilter) url += `&status=${statusFilter}`;
        if (speciesFilter) url += `&species=${speciesFilter}`;
        return url;
    };

    const { data: characters, loading, error, pagination } = useFetch(buildApiUrl());


    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => setShowSpinner(false), 500); // Show for at least 1 second
            return () => clearTimeout(timer);
        } else {
            setShowSpinner(true);
        }
    }, [loading]);

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container"
        >
            <div className='container'>
                <h1>Rick and Morty Characters</h1>

                {/* 🔍 Search and Filter Bar */}
                <SearchBar setSearchTerm={setSearchTerm} />
                <Filters setStatusFilter={setStatusFilter} setSpeciesFilter={setSpeciesFilter} />

                {/* Show Loading Spinner */}
                {showSpinner && (
                    <div className="spinner-container">
                        <Spinner />
                    </div>
                )}

                {/* Show Error Message if API fails */}
                {!showSpinner && error && <p>Error: {error}</p>}

                {/* Show Characters */}

                {!showSpinner && (
                    <div className="character-grid">
                        {characters.map((character) => (
                            <CharacterCard key={character.id} character={character} />
                        ))}
                    </div>
                )}


                {/* 🔄 Pagination Controls */}
                <motion.div
                    className="pagination"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.button
                        className="pagination-btn prev"
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        whileHover={{ scale: pagination.prev ? 1.05 : 1 }}
                        transition={{ duration: 0.2 }}
                        disabled={!pagination.prev}
                    >
                        ← Previous
                    </motion.button>

                    <span className="pagination-number">Page {page} of {pagination.pages}</span>

                    <motion.button
                        className="pagination-btn next"
                        onClick={() => setPage((prev) => prev + 1)}
                        whileHover={{ scale: pagination.next ? 1.05 : 1 }}
                        transition={{ duration: 0.2 }}
                        disabled={!pagination.next}
                    >
                        Next →
                    </motion.button>
                </motion.div>

            </div>
        </motion.div>

    );
};

export default Home