import { ComponentChildren } from "preact";

type TitleCardProps = {
    title: string;
    subTitle: string;
};

type CardProps = {
    heading: string;
    children: ComponentChildren;
}

export function TitleCard({ title, subTitle }: TitleCardProps) {
    return (
        <>
            <div class="rounded-xl p-8 col-[2_/_span_5] bg-black bg-opacity-80 mb-96">
                <h1 class="pb-4 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 h-fit">{title}</h1>
                <h2 class="text-gray-400 text-2xl">{subTitle}</h2>
            </div>
        </>
    )
}

export function LeftCard({ children, heading }: CardProps) {

    return (
        <>
            <div class={"rounded-xl p-4 col-[2_/_8] bg-black bg-opacity-80 mb-96"}>
                <h1 class="text-white text-3xl font-semibold">{heading}</h1>
                {children}
            </div>
        </>
    )
}

export function RightCard({ children, heading }: CardProps) {

    return (
        <>
            <div class={"rounded-xl p-4 col-[6_/_12] bg-black bg-opacity-80 mb-96"}>
                <h1 class="text-white text-3xl font-semibold">{heading}</h1>
                {children}
            </div>
        </>
    )
}