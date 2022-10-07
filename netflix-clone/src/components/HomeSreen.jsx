import React from 'react'
import requests from '../assets/api/Request'
import Banner from './Banner'
import Nav from './Nav'
import Row from './Row'

function HomeSreen() {
  return (
    <div className="bg-[#111] h-screen">
      <Nav />

      <Banner />

      <div className="bg-[#111] flex flex-col gap-8 mt-12">
        <Row
          fecthUrl={requests.fetchNetflixOriginals}
          page={1}
          title="Originais da Netflix"
        />

        <Row fecthUrl={requests.fetchHorrorMovies} page={1} title="Terror" large={true} />

        <Row fecthUrl={requests.fetchTopRated} page={1} title="Mais assistidos" />

        <Row fecthUrl={requests.fetchDocumentaries} page={1} title="Documentarios" large={true} />

        <Row fecthUrl={requests.fetchTrending} page={1} title="Tendencias do momemnto" large={true}/>

        <Row fecthUrl={requests.fetchComedyMovies} page={2} title="Filmes de comédia" large={true} />
      </div>
    </div>
  )
}

export default HomeSreen
