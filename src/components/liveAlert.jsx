export function LiveAlert(props) {
    if (props.live == true) {
        return (
            <>
                <a href='https://www.twitch.tv/apollo_dot' target="_blank">
                    <div className='flex flex-row bg-gray-900 h-10 w-[400px] rounded-[30px] absolute top-4 right-4'>
                        <span className='flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center'>Apollo_Dot Is Live!</span>
                        <div className='w-[10%] bg-violet-700 rounded-r-2xl shadow-md shadow-violet-600 flex justify-center items-center'>
                            <BsTwitch size="30" />
                        </div>
                    </div>
                </a>
            </>
        )
    }
    else return
}