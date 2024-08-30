import { createContext, useState } from "react";

export const PopupContext = createContext(null)

export const LoaderProvider = (props) => {
    const [openPopup, setOpenPopup] = useState(false)
    return (
        <PopupContext.Provider value={{ openPopup, setOpenPopup }} >
            {props.children}
        </PopupContext.Provider>
    )
}