import { render } from 'preact'
import Router from 'preact-router';
import { App } from './app'
import './index.scss'
import { NavBar } from './components/NavBar/navbar';

const Main = () => (

    <>
    <NavBar />
    
    <Router>
        <App path="/" />
    </Router>
    
    </>
);

render(<Main />, document.getElementById('app') as HTMLElement)
