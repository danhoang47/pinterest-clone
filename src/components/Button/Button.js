import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss'

function Button({ backgroundColor, path, children, render }) {
    const [isOpen, setOpen] = useState(false);
    const buttonRef = useRef();

    const handleOpen = () => {
        setOpen(prevState => !prevState);
    }

    const isLeavingParent = (e) => {
        const focusedElement = e.relatedTarget;
        const isLeaving = e.target.contains(focusedElement);
        if (!isLeaving)
            handleOpen();
    }

    useEffect(() => {
        const ref = buttonRef.current;
        ref.addEventListener('focusout', isLeavingParent);

        return () => {
            ref.removeEventListener('focusout', isLeavingParent)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("Button re-render");

    return (  
        <button 
            ref={buttonRef}
            className={`button ${backgroundColor}`} 
            onClick={handleOpen}
        >
            {
                path ? (
                    <Link to={path}>
                        {children}
                    </Link>
                ) : (
                    <>
                        {children}
                        {isOpen && render()}
                    </>
                )
            }
        </button>
    );
}

export default Button;