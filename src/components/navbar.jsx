import { BsTwitch, BsGithub, BsYoutube } from 'react-icons/bs'

export function NavBar() {
    return (
        <div id='navBar' className='bg-red-700 w-screen h-12 border-b-4 border-red-900 text-white relative'>
            <div id='links' className='p-2 absolute top-0 left-0 flex gap-2'>
                <a href='https://github.com/Apollo-Dot' target='_blank'><BsGithub size='25' /></a>
                <a href='https://www.twitch.tv/apollo_dot' target='_blank'><BsTwitch size='25' /></a>
                <a href='https://www.youtube.com/@apollo_dot4586' target='_blank'><BsYoutube size='25' /></a>
            </div>

            <a href='/'>
                <h1 className='text-4xl text-center font-extrabold'>Apollo_Dot</h1>
            </a>
        </div>
    )
}