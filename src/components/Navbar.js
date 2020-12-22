import React, {useState,useEffect,useRef} from 'react'
import Links from '../constants/Links'


function Navbar() {

    const [open, setOpen] = useState(false);

    const toggleOverlay = () => {
        setOpen(!open);
    } 

    // ===== Clik Outside Feature to close the OverlayMenu (start) =====
    let menuRef = useRef();
    
    const handler = (event) => {
          //if the event where we click is not in the menuRef, close it
            if (!menuRef.current.contains(event.target)) { 
                setOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener('mousedown', handler)
    })
    // ===== Clik Outside Feature to close the OverlayMenu (end) =====

    return (
        <nav className="navBar">        
           
            <div ref={menuRef} className={`overlayContainer ${open ? "active" : ""}`}>
                <Links styleClass="linksItemsXs" />
            </div>
            <div aria-hidden="true" className={`openCloseBtn ${open ? "change" : ""}`} onClick={toggleOverlay}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
             </div>
            <Links styleClass="linksItemsMs" />
           
        </nav>
    )
}

export default Navbar
