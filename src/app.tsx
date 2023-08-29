import { HomeBG } from "./components/HomeBG"
import { TitleCard, RightCard, LeftCard } from "./components/cards"
import { NavBar } from "./components/navbar/navbar"

export function App() {

  return (
    <>
      <HomeBG />
      <NavBar />
      <div class="grid grid-cols-[repeat(12,1fr)] w-screen w-full absolute mx-auto my-0 px-0 py-36 pl-16">
        <TitleCard title="Welcome To My Website" subTitle="And Portfolio" />
        <RightCard heading="✨ About Me ✨">
          <p class="text-gray-300 text-lg">
            Hello my name is River I'm trans and Non-Binary.<br />
            I like making games, videos and I just enjoy programming in general.<br />
            I also enjoy Drawing sometimes and may post what I'm working on from
            time to time.<br />
            My Favorite Food is Street Tacos and a bit specific but my Favorite
            Color is Royal Blue.<br />
            Oh and I almost Forgot my Pronouns are She/They.
          </p>
        </RightCard>

        <LeftCard heading="🔧 Projects 🥽">

        </LeftCard>

        <RightCard heading="🦾 Skills 👓">

        </RightCard>

      </div>
    </>
  )
}
