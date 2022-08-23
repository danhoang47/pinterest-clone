import { memo, useState } from 'react';
import './IconButton.scss'

function IconButton({ children, color, fontSize, render}) {
    const [isOpen, setOpen] = useState(false);

    const handleClick = (e) => {
        setOpen(!isOpen);
    }

    return (  
        <div 
            className={`icon ${color} ${fontSize ?? ''} ${isOpen ? 'open' : 'close'}`}
            tabIndex={-3}
            onClick={handleClick}
        >
            {children}
            {isOpen && render()}
        </div>
    );
}

export default memo(IconButton);