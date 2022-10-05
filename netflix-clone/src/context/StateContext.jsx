import { createContext, useContext, useState } from 'react'

const context = createContext()

export const StateContext = ({ children }) => {
  const [Teste, setTeste] = useState(0)

  return (
    <context.Provider
      value={{
        Teste,
        setTeste
      }}
    >
      {children}
    </context.Provider>
  )
}

export const useStateContext = () => useContext(context)