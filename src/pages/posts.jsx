import { useEffect, useState } from 'preact/hooks'
import { BG } from '../components/3dBG'
import { getPosts } from '../api/supabase-config'
import { PostCard } from '../components/card'
import { NavBar } from '../components/navbar'

export function Posts() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    async function Posts() {
      setPosts(await getPosts())
    }
    
    async function LoadPkg() {
      const { BG } = await import("../components/3dBG")
      BG()
    }

    LoadPkg()
    Posts()
  }, []);

  return (
    <>
      <canvas id='bg'></canvas>
      <NavBar />
      <div id='main'>
        <div className='sm:w-80 sm:m-4 sm:float-right' />
        <div id='bio' className='w-[90%] mx-[5%] p-4 bg-slate-500 border-b-4 border-r-4 border-slate-700 sm:w-80 sm:m-4 sm:fixed sm:right-0 sm:top-12'>
          <p>Hello my name is Apollo_Dot I'm trans and Non-Binary.<br />
            I like making games, videos and I just enjoy programing in general.<br />
            I also enjoy Drawing sometimes and may post what I'm working on from
            time to time.<br />
            My Favorite Food is Street Tacos and a bit specific but my Favorite
            Color is Royal Blue.<br />
            Oh and I almost Forgot my Pronouns are She/They.</p>
        </div>
        <div id='posts' className='sm:grid sm:grid-cols-3 sm:gap-4 p-4'>
          {
            posts.map((post) => (
              <>
                <a href={'/post/' + post.id}>
                  <PostCard title={post.title} header={post.header} body={post.body} />
                </a>
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}
