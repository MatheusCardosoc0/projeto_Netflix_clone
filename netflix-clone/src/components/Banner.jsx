import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests, { request } from '../assets/api/Request'
import Button from '../assets/Button'

function Banner() {

  const[movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    }
  },[])

  function truncate(string, n){
    return string?.length > n? string.substr(0, n - 1) + '...' : string
  }


  return (
    <header className="bg-black">
      <div className="p-3 text-zinc-200 items-start">
        <div className='mt-40 font-bold flex flex-col gap-5 '>
          <h1 className="text-6xl">Nome do filme</h1>
          <div className="flex gap-4">
            <Button>Assistir</Button>
            <Button>Minha lista</Button>
          </div>
          <h1 className="w-[30rem]">{truncate("Essa é uma descrição teste wejhirjtiorjtf trjgjlkgljhtçtjholtgj fjdjiodsjpooleroe tgjritj jerikjtri rjr jerjeeiuewhoewioeirhtb htheriurihjiohruihrtru hberhtruihurhrhtrhtr erhurhhrjlthjrrthrurht trrtrtt", 165)}</h1>
        </div>
      </div>
      <div className='h-[7.2rem] bg-transparencia' />
    </header>
  )
}

export default Banner
