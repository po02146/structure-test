import React, { createContext } from "react"

interface ContextValueType {

}

export const userContext = createContext<ContextValueType | null>(null)

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const value: ContextValueType = {

  }

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider