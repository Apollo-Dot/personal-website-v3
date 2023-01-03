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
                    <h1 className='text-2xl'>Posts</h1>
                    <a href='/posts' className='text-teal-400 underline'>All Posts</a>
                    <h2 className='text-xl'>Most Recent Post</h2>
                    <a href={'/post/' + postId}>
                        <PostCard title={postTitle} header={postHeader} body={postBody} />
                    </a>
                </section>
                <section>
                    <h1 className='text-2xl'>About Me</h1>
                    <p>
                        Hello my name is Apollo_Dot I'm trans and Non-Binary.<br />
                        I like making games, videos and I just enjoy programing in general.<br />
                        I also enjoy Drawing sometimes and may post what I'm working on from
                        time to time.<br />
                        My Favorite Food is Street Tacos and a bit specific but my Favorite
                        Color is Royal Blue.<br />
                        Oh and I almost Forgot my Pronouns are She/They.
                    </p>
                </section>
                <section className='left'>
                    <h1 className='text-2xl'>About Website</h1>
                    <p>So this is v4 of my personal Website I remake it when I want to add a large feature this time it was a post Database using supabase and moving to github and setting up a github action. The source code can be found <a href='https://github.com/Apollo-Dot/apollo-dot.github.io' target='_blank' className='text-teal-400 underline'>here</a></p>

                </section>
            </main>

        </>
    )
}