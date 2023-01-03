import { render } from 'preact'
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { Home } from './pages/home';
import { Post } from './pages/post';
import { Posts } from './pages/posts';
import './index.css'


const Main = () => (

    <Router>
        <Home path='/' />
        <AsyncRoute
        path='/posts'
        getComponent={() => import('./pages/posts').then(module => module.Posts)}
        loading={() => <div>Loading...</div>} />
        <AsyncRoute
        path='/post/:Num'
        getComponent={() => import('./pages/post').then(module => module.Post)}
        loading={() => <div>Loading...</div>} />
    </Router>
)
render(<Main />, document.getElementById('app'))