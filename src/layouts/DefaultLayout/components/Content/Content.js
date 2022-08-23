import './Content.scss'
import { useEffect, useState } from 'react';
import fetchImages from '../../../../api/fetchImages';
import Card from '../../../../components/Card';

function Content({ children }) {
    const [sections, setSections] = useState([0, 1, 2, 3]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchImages('decoration', 3);
            setImages(result.hits);
        }

        fetchData();
    }, [])

    return (  
        <div className='notification-content'>
            {children}
            
            <div className='section-wrapper'>
                {sections.map((value) => (
                    <div 
                        className='section'
                        key={value}
                    >
                        <div className='title'>
                            <span>Đồ tự làm và cải tạo nhà, Phòng cho nam</span> và nhiều Ghim phổ biến trên Pinterest
                        </div>
                        <div className='images-list'>
                            {
                                images.map(({largeImageURL}, index) => (
                                    <Card 
                                        key={index}
                                        url={largeImageURL}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Content;