import { memo } from "react";
import { Link } from 'react-router-dom';
import './MenuItem.scss';

function MenuItem({ title, path}) {

    const handleClick = (e) => {
        console.log('Link clicked');
    }

    return (  
        <div className="menu-item" onClick={handleClick}>
            <Link to={path} className='nav-link'>
                {title}
            </Link>
        </div>
    );
}

export default memo(MenuItem);