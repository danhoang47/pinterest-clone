import Content from './components/Content' 
import OverlayContext from '../../utils/Context/OverlayContext';
import { useContext } from 'react';

function Home({ children }) {
    const { isOverlay } = useContext(OverlayContext);

    console.log(isOverlay);

    return (  
        <div className={`home ${isOverlay ? 'overlay' : ''}`}>
            {children}
            <Content />
        </div>
    );
}

export default Home;