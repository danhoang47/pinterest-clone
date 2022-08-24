import './static/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { 
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import routes from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { Content } from './components'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App >
            <Routes>
                {routes.map(({path, Component, defaultLayout}) => {
                    return <Route key={uuid()} path={path} element={
                                <Component 
                                    render={(children) => (
                                        <Content>
                                            {children}
                                        </Content>
                                    )}
                                    children={defaultLayout ? <DefaultLayout /> : ''}
                                />
                            }>
                            </Route>
                })}
            </Routes>
        </App>
    </Router>
);
