import React, { useState } from 'react';
import axios from 'axios';
import './MovieExplorer.css';
import Reaction from './Reaction';

const MovieExplorer = () => {
  const [movieName, setMovieName] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState('');

  const fetchMovieData = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?t=${movieName}&apikey=270d7e4f`);
      if (response.data.Response === "True") {
        setMovieData(response.data);
        localStorage.setItem('Movies', JSON.stringify(response.data)); // Storing movie data in localStorage
        setError('');
      } else {
        setError('Movie not found');
        setMovieData(null);
      }
    } catch (err) {
      setError('Server Error');
      setMovieData(null);
    }
  };

  const handleInputChange = (e) => {
    setMovieName(e.target.value);
  };

  const handleSearch = () => {
    fetchMovieData();
  };

  return (
    <div className="movie-explorer min-h-screen flex flex-col items-center justify-center">
      <h1 className='m-8 text-4xl drop-shadow-custom'>Movie Explorer Dashboard</h1>
      <div className="search-bar mb-4">
        <input 
          type="text" 
          value={movieName} 
          onChange={handleInputChange} 
          placeholder="Enter movie name" 
          className='h-10 w-60 rounded text-center text-slate-900'
        />
        <button onClick={handleSearch} className='border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline'>
          Search
        </button>
      </div>
      {error && <p className="error">{error}</p>}
      {movieData && (
        <div className="movie-data w-full max-w-4xl p-4 ">
          <div className="flex flex-col items-center font-serif bg-gray-900">
            <div className="rounded-md bg-gray-800 shadow-lg w-full drop-shadow-custom">
              <div className="md:flex px-4 leading-none">
                <div className="flex-none">
                  <img
                    src={movieData.Poster}
                    alt="pic"
                    className="h-70 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 "
                  />
                </div>
                <div className="flex-col w-full">
                  <p className="pt-3 text-2xl font-bold">{movieData.Title} ({movieData.Year})</p>
                  <hr className="hr-text" data-content=""/>
                  <div className="text-md flex justify-between px-4 my-2">
                    <span className="font-bold">{movieData.Runtime} | {movieData.Genre}</span>
                  </div>
                  <p className="md:block px-4 my-4 text-sm text-left">{movieData.Plot}</p>
                  <p className="flex text-md px-4 my-2">
                    {movieData.imdbRating}
                    <span className="font-bold px-2">|</span>
                     {movieData.Rated}
                  </p>
                  <p className="md:block px-4 my-4 text-md text-left">Boxoffice Collection: {movieData.BoxOffice}</p>
                  <p className="md:block px-4 my-4 text-md text-left">Actors: {movieData.Actors}</p>
                  <p className="md:block px-4 my-4 text-md text-left">Awards: {movieData.Awards}</p>
                  <div className="text-xl flex justify-center">
                    <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">
                      <a href={`https://www.youtube.com/results?search_query=${movieName}+trailer`} target='_blank' rel='noopener noreferrer'>
                        TRAILER
                      </a>
                    </button>
                    <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">
                      <a href={`https://www.google.com/search?q=${movieName}+movie+watch`} target='_blank' rel='noopener noreferrer'>
                        MOVIE
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <Reaction/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieExplorer;
