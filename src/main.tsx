import { render } from 'preact'
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { App } from './app.tsx'
import './index.css'
//import { Photography } from './pages/Photography/photography.tsx';

function getPhotography(){
    return import('./pages/Photography/photography.tsx').then(module => module.Photography);
}

render(
    <Router>
        <App path="/" />
        <AsyncRoute
            path="/photography"
            getComponent={getPhotography}
        />
    </Router>
    , document.getElementById('app') as HTMLElement)
