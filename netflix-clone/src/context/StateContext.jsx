import { createContext, useContext, useState } from 'react'

const context = createContext()

export const StateContext = ({ children }) => {
  const[movie, setMovie] = useState([])

  return (
    <context.Provider
      value={{
        movie,
        setMovie
      }}
    >
      {children}
    </context.Provider>
  )
}

export const useStateContext = () => useContext(context)