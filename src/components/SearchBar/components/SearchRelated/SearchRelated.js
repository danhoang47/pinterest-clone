import RelatedSection from "../RelatedSection";
import { memo } from 'react';
import './SearchRelated.scss'

function SearchRelated({ related, isDisplay }) {
    console.log('SearchRelated re-render');

    return (  
        <div 
            className='search-related'
            style={{
                display: isDisplay ? 'block' : 'none'
            }}    
        >
            {related.map(({id, title, keyword}) => (
                <RelatedSection 
                    key={id}
                    title={title}
                    keyword={keyword}    
                />
            ))}
        </div>
    );
}

export default memo(SearchRelated);