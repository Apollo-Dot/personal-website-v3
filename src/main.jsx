import { render } from 'preact'
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Posts } from './pages/posts';
import './index.css'


const Main = () => (

    <Router>
        <Home path='/' />
        <About path='/about' />
        <Posts path='/post/:Num' />
    </Router>
)
render(<Main />, document.getElementById('app'))