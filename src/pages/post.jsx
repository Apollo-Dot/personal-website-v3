import { useEffect, useState } from "preact/hooks";
import { getPosts } from '../api/supabase-config'
import { NavBar } from '../components/navbar'

export function Post(props) {

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

        Posts()
    }, []);

    return (
        <>
            <NavBar />
            <div className="text-center flex flex-col">
                <h1 className="text-white text-4xl">{postTitle}</h1>
                <h2 className="text-white text-xl">{postHeader}</h2>
                <br/>
                <p className="text-white">{postBody}</p>
            </div>
        </>
    )
}