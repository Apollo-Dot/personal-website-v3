
export function PostCard(props) {
    return (
        <>
            <div className="bg-green-700 min-w-72 h-80 border-b-4 border-r-4 border-green-900 overflow-y-hidden px-3">
                <h1 className="text-3xl text-center text-slate-100 font-extrabold">{props.title}</h1>
                <h2 className="text-xl text-center text-slate-100">{props.header}</h2>
                <p className="text-center">{props.body}</p>
            </div>
        </>
    )
}