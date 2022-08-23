import './Card.scss'

function Card({ children, url, style = '' }) {
    return (  
        <div 
            className={`card ${style}`}
            style={{
                backgroundImage: `url(${url})`
            }}    
        >
            {children}
        </div>
    );
}

export default Card;