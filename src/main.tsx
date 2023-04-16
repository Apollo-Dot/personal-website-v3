// @ts-nocheck
import { render } from 'preact'
import Router from 'preact-router';
import { Home } from './pages/home'
import { About } from './pages/about';
import './index.scss'
import { NavBar } from './components/NavBar/navbar';

const Main = () => (
    <>
    <NavBar />
    
    <Router>
        <Home path="/" />
        <About path="/about" />
    </Router>
    
    </>
);

render(<Main />, document.getElementById('app') as HTMLElement)
