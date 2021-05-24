import React, { useState } from 'react'

export const NavStateContext = React.createContext()

export default function Nav({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <NavStateContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
            { children }
        </NavStateContext.Provider>
    )
}
