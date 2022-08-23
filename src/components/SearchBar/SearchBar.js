import { useEffect, useState, useRef, memo, useContext, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMagnifyingGlass,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import './SearchBar.scss'
import SearchRelated from './components/SearchRelated';
import { v4 as uuid } from 'uuid'
import OverlayContext from '../../utils/Context/OverlayContext';

function SearchBar({ placeholder }) {
    const [keyword, setKeyword] = useState('');
    const [isFocus, setFocus] = useState(false);
    const searchBarRef = useRef();
    const { setOverlay } = useContext(OverlayContext);

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    // false
    const handleFocus = (e) => {
        const ref = searchBarRef.current;

        if ((ref.contains(e.target) || ref === e.target ) 
            && !isFocus) {
                setPrevState(setFocus);
                setPrevState(setOverlay);
        }
    }

    const handleFocusOut = (e) => {
        const ref = searchBarRef.current;

        if (!ref.contains(e.relatedTarget) || e.relatedTarget.classList.contains('close-icon')) {
            setPrevState(setFocus);
            setPrevState(setOverlay);
        }
    }

    const setPrevState = useCallback((setState) => {
        setState(prevState => !prevState);
    }, [])

    useEffect(() => {
        const ref = searchBarRef.current;

        ref.addEventListener('focus', handleFocus, true)

        ref.addEventListener('focusout', handleFocusOut, true)

        return () => {
            ref.removeEventListener('focus', handleFocus, true);
            ref.removeEventListener('focusout', handleFocusOut, true);
        }
    // eslint-disable-next-line
    }, [isFocus])

    return (  
        <div className="search-bar"
            ref={searchBarRef}
            tabIndex={-1}
        >
            {
                isFocus || 
                (<div className='search-icon'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>)
            }
            <input 
                className='search-box'
                value={keyword}
                onChange={handleChange} 
                placeholder={placeholder}
            />
            {isFocus && (
                <>
                    <div 
                        className='close-icon'
                        onFocus={handleFocusOut}
                        tabIndex={-2}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                </>    
            )}
            <SearchRelated
                isDisplay={isFocus}
                related={[
                    {
                        id: uuid(),
                        title: 'Spotlight',
                        keyword: 'spotlight'
                    },
                    {
                        id: uuid(),
                        title: 'Ideas',
                        keyword: 'idea'
                    },
                    {
                        id: uuid(),
                        title: 'Famous',
                        keyword: 'anime'
                    }
                ]}
            />
        </div>
    );
}

export default memo(SearchBar);