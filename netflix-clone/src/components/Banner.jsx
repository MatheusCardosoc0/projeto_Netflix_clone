import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { instance } from '../assets/api/axios'
import requests from '../assets/api/Request'
import Button from '../assets/Button'
import { useStateContext } from '../context/StateContext'

function Banner() {

  const {movie, setMovie} = useStateContext()

  useEffect(() => {
    async function GetFilms() {
      const response = await instance.get(requests.fetchNetflixOriginals, {
        params: {
          api_key: "ccbfbc8dd52c71d7f1a46e1b46db20ee",
          language: "pt-br",
          page: 2
        }
      })
      setMovie(response.data.results[
      18
      ])
    }
    GetFilms()
  },[])

  function truncate(string, n){
    return string?.length > n? string.substr(0, n - 1) + '...' : string
  }


  return (
    <header style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
      <div className="p-3 text-white items-start">
        <div className='mt-40 font-bold flex flex-col gap-5 '>
          <h1 className="text-6xl">{movie?.name}</h1>
          <div className="flex gap-4">
            <Button>Assistir</Button>
            <Button>Minha lista</Button>
          </div>
          <h1 className="w-[30rem]">{truncate(`${movie.overview}`, 165)}</h1>
        </div>
      </div>
      <div className='h-[7.2rem] bg-transparencia' />
    </header>
  )
}

export default Banner
