import { render } from 'preact'
import Router from 'preact-router';
import { App } from './app.tsx'
import './index.css'
import { NavBar } from './components/navbar/navbar.tsx';
import { Photography } from './pages/Photography/photography.tsx';

render(
    <Router>
        <App path="/" />
        <Photography path="/photography" />
    </Router>
    , document.getElementById('app') as HTMLElement)
