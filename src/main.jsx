import { render } from 'preact'
import Router from 'preact-router';
import { Home } from './pages/home';
import { Post } from './pages/post';
import { Posts } from './pages/posts';
import './index.css'


const Main = () => (

    <Router>
        <Home path='/' />
        <Posts path='/posts' />
        <Post path='/post/:Num' />
    </Router>
)
render(<Main />, document.getElementById('app'))