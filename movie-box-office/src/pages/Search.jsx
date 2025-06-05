import React, { useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const Search = () => {
  const [search, setSearch] = useState({ name: '', year: '', language: '' });
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setSearched(true);
    axios.get('/api/movies', { params: search })
      .then(res => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Search Movies</h1>
      <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} />
      {loading && <div className="text-center py-10">Loading...</div>}
      {!loading && searched && <MovieList movies={movies} onMovieClick={() => {}} />}
    </div>
  );
};

export default Search;
