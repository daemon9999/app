import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


interface SiteContextInterface {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const SiteContext = createContext<SiteContextInterface>({
    isOpen: false,
    setIsOpen: () => {}
})

export const useSiteContext = () =>  useContext(SiteContext)


export default function SiteProvider({children} : {children: React.ReactNode}) {
    const [isOpen, setIsOpen] = useState(false)
    const data = {
        isOpen,
        setIsOpen
    }
    return (
        <SiteContext.Provider value={data}>
            {children}
        </SiteContext.Provider>
    )
}