import useUsers from "@/hooks/useUsers"
import React, { createContext } from "react"

interface ContextValueType {
  usersHook: ReturnType<typeof useUsers>;
}

export const userContext = createContext<ContextValueType | null>(null)

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const usersHook = useUsers()

  const value: ContextValueType = {
    usersHook
  }

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider