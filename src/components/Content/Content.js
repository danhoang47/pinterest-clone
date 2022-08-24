import './Content.scss'
import OverlayContext from '../../utils/Context/OverlayContext';
import { useContext } from 'react';

function Content({ children }) {
    const { isOverlay } = useContext(OverlayContext);

    return (  
        <div className={`content ${isOverlay ? 'overlay' : ''}`}>
            {children}
        </div>
    );
}

export default Content;