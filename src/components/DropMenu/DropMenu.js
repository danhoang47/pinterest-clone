import MenuItem from '../MenuItem'
import { v4 as uuid } from 'uuid'
import './DropMenu.scss'

function DropMenu({ navigations }) {
    return (  
        <div className="drop-down-menu">
            {navigations.map(({title, path}) => (
                <MenuItem 
                    key={uuid()}
                    title={title} 
                    path={path}    
                />
            ))}
        </div>
    );
}

export default DropMenu;

// co the? dang mo -> the do la gi ?