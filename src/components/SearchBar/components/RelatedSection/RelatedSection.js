import './RelatedSection.scss'
import fetchImages from '../../../../api/fetchImages';
import { useEffect, useState, memo } from 'react';
import Card from '../../../Card';
import './RelatedSection.scss'

function RelatedSection({ title, keyword }) {
    const [images, setImages] = useState([]);
    const LIMIT = 4;

    console.log('RelatedSection re-render');

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchImages(keyword, LIMIT);
            setImages(result.hits);
        }

        fetchData();
    }, [keyword])

    return (  
        <div className='related-section'>
            <p className='title'>{title}</p>
            <div className='wrapper'>
                {
                    images.map(({largeImageURL}, index) => (
                        <Card 
                            key={index}
                            url={largeImageURL}
                            style={keyword}
                        >
                            {title}
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}

export default memo(RelatedSection);