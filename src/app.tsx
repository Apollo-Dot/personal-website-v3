//import { useState } from 'preact/hooks'
import "./app.css";
import { AboutMe } from "./components/about";
import { TitleCard } from "./components/cards";
import { ProjectCard } from "./components/projects";

export function App() {
  //const [count, setCount] = useState(0)

  return (
    <div class="md:grid md:grid-cols-[repeat(12,1fr)] w-screen w-full absolute mx-auto my-0 px-0 py-36 md:pl-16">
      <TitleCard title="Welcome To My Website" subTitle="WIP" />
      <AboutMe />
      <ProjectCard />
    </div>
  );
}
