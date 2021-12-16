import React, { Dispatch, SetStateAction } from "react"

type IContextProps = {
  user: string | undefined
  setUser: Dispatch<SetStateAction<string | undefined>>
}
type Props = {
  [x: string]: unknown
}

const UserContext = React.createContext({} as IContextProps)
UserContext.displayName = "UserContext"

/** Set up user state and provide it to all children via context */
function UserProvider(props: Props) {
  // Set up state to hold user (just a string for now)
  const [user, setUser] = React.useState<string>()

  // remove value prop, dont want anything unexpeted to sneak through and overrite our context
  const { value, ...safeProps } = props

  // return context provider with user state
  return <UserContext.Provider value={{ user, setUser }} {...safeProps} />
}

/** Hook to access user state from context */
function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`)
  }
  return context
}

export { UserProvider, useUser }
