import React, { useEffect, useState } from 'react'
import { instance } from '../assets/api/axios'
import { useStateContext } from '../context/StateContext'

const Row = props => {
  const [movies, setMovies] = useState()

  const {movie, setMovie} = useStateContext()

  useEffect(() => {
    async function GetFilms() {
      const response = await instance.get(props.fecthUrl, {
        params: {
          api_key: 'ccbfbc8dd52c71d7f1a46e1b46db20ee',
          language: 'pt-br',
          page: props.page
        }
      })
      setMovies(response.data.results)
    }
    GetFilms()
  }, [props.fecthUrl])

  return (
    <div>
      <h2 className="text-6xl font-bold text-white">{props.title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-4 hidden-scroll">
        {movies?.map(movie => {
          return (
            
              <img
                className={`mr-3 object-contain hover:scale-125 cursor-pointer ${
                  props.large ? 'max-h-[300px]' : 'max-h-[300px]'
                }`}
                src={`https://image.tmdb.org/t/p/original/${
                  props.large ? movie.backdrop_path : movie.poster_path
                }`}

                onClick={() => setMovie(movie)}
                
              />
          )
        })}
      </div>
    </div>
  )
}

export default Row
