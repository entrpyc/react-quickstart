import React, { useState, createContext } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = props => {
  const [globalState, setGlobalState] = useState('en')

  return <GlobalContext.Provider value={{
    globalState, setGlobalState,
  }}>
    {props.children}
  </GlobalContext.Provider>
}