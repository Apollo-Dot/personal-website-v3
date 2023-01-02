import { useEffect, useState } from 'preact/hooks'
import { NavBar } from "../components/navbar"
import { BG } from "../components/3dBG"
import { PostCard } from '../components/card'
import { getPosts } from '../api/supabase-config'

export function Home(props) {

    const [postId, setPostId] = useState(0)
    const [postTitle, setPostTitle] = useState('')
    const [postHeader, setPostHeader] = useState('')
    const [postBody, setPostBody] = useState('')

    useEffect(() => {
        async function Posts() {
            const posts = await getPosts()

            setPostId(posts[0].id)
            setPostTitle(posts[0].title)
            setPostHeader(posts[0].header)
            setPostBody(posts[0].body)
        }

        BG()
        Posts()
    }, []);

    return (
        <>
            <canvas id='bg'></canvas>
            <NavBar />
            <main className=''>
                <header className=''>
                    <h1
                        className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2"
                    >
                        Welcome To My Website!
                    </h1>
                    <p>Enjoy Your Stay</p>
                </header>
                <section className='left'>
                    <h1 className='text-2xl'>About/Posts</h1>
                    <a href='/about' className='text-teal-400 underline'>About/Posts</a>
                    <h2 className='text-xl'>Most Recent Post</h2>
                    <a href={'/post/' + postId}>
                        <PostCard title={postTitle} header={postHeader} body={postBody} />
                    </a>
                </section>
            </main>

        </>
    )
}