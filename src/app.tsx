import { TitleCard, RightCard, LeftCard } from "./components/cards"

export function App() {

  return (
    <>
      <div class="md:grid md:grid-cols-[repeat(12,1fr)] w-screen w-full absolute mx-auto my-0 px-0 py-36 md:pl-16">
        <TitleCard title="Welcome To My Website" subTitle="and portfolio" />
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
          <div class="m-6">
            <ul class="text-gray-300 text-lg list-disc">
              <li><a href="https://cyps.itch.io/dasa" target="_blank">Dino Jam 2023</a> (Finished)</li>
            </ul>
          </div>
        </LeftCard>

        <RightCard heading="✉ Contact and Site Info 👩‍💻">
          <div class="text-gray-300 text-lg">
            <h3 class="text-2xl">Contact</h3>
            <p>Email: <a href="mailto:river@riverdot.tech">river@riverdot.tech</a></p>
            <br />
            <h3 class="text-2xl">Site Info</h3>
            <p>Site Version: v7.0.0</p>
            <a class="text-blue-400" href="https://github.com/RiverDot/riverdot.github.io" target="_blank">Github Repo</a>
          </div>

        </RightCard>


      </div>
    </>
  )
}
