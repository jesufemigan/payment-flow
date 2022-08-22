import { createContext, useState } from "react";

interface LinkContextProps {
  activePage: string,
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  // setActivePage: (activePage: string) => {}
}

interface Props {
  children: React.ReactNode
}

export const LinkContext = createContext<LinkContextProps>({
  activePage: 'profile',
  setActivePage: () => {}
})


export const LinkProvider: React.FC<Props> = ({children}) => {
  const [activePage, setActivePage] = useState<string>('profile')

  return (
    <LinkContext.Provider
      value={{ activePage, setActivePage }}
    >
      {children}
    </LinkContext.Provider>
  )
}