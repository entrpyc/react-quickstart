import React, { useState, createContext } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = props => {
  const [totalPrice, setTotalPrice] = useState({})

  return <GlobalContext.Provider value={{
    totalPrice, setTotalPrice
  }}>
    {props.children}
  </GlobalContext.Provider>
}