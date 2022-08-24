import './Home.scss';
import {
    useEffect
} from 'react';

function Home({ children, render }) {

    return (  
        <div className='home'>
            {children}
            {render(
                
            )}
        </div>
    );
}

export default Home;