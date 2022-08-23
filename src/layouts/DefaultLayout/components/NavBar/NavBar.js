import {
    Button,
    Header,
    SearchBar,
    IconButton,
    DropMenu
} from '../../../../components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPinterest
} from '@fortawesome/free-brands-svg-icons';
import { 
    faBell,
    faComment,
    faAngleDown,
    faD
} from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss'
import '../../../../static/style.scss'
import Content from '../Content'

function NavBar({ children }) {
    
    console.log("NavBar re-render");
    
    return (  
        <div className="nav-bar">
            <IconButton
                color={'red'}
            >
                <Link to="/">
                    <FontAwesomeIcon icon={faPinterest} />
                </Link>
            </IconButton>
            <Button 
                backgroundColor="black"
                path="/"
            >
                Trang chủ
            </Button>
            <Button
                backgroundColor="white"
                render={() => (
                    <DropMenu navigations={[
                        {
                            title: 'Tạo Ghim ý tưởng',
                            path: '/pin-builder'
                        },
                        {
                            title: 'Tạo Ghim',
                            path: '/pin-builder'
                        }
                    ]}/>
                )}
            >
                Tạo
                <FontAwesomeIcon icon={faAngleDown} />
            </Button>
            <SearchBar
                placeholder="Tìm kiếm"
            />
            <IconButton color='gray' render={() => (
                <Content>
                    <Header>
                        Cập nhật
                    </Header>
                </Content>
            )}>
                <FontAwesomeIcon icon={faBell}/>
            </IconButton>
            <IconButton color='gray'>
                <FontAwesomeIcon icon={faComment}/>
            </IconButton>
            <IconButton 
                color='gray'
                fontSize='sm'
            >
                <Link to={"/profile"}>
                    <FontAwesomeIcon icon={faD}/>
                </Link>
            </IconButton>
        </div>
    );
}

export default NavBar;