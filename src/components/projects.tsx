import { ComponentChildren } from "preact";
import { LeftCard } from "./cards";
import "./projects.css";

interface ProjectWraperProps {
  children?: ComponentChildren;
}

interface ProjectProps {
  Name: string;
  About: string;
  State: ProjectState;
  Url?: string;
}

enum ProjectState {
  complete = "Project Is Completed ✅",
  active = "Actively Working On ⚙️",
  hold = "Project On Hold ⏸️",
  planed = "Project Is Planed 📅",
}

function ProjectWraper(props: ProjectWraperProps) {
  return (
    <LeftCard heading="🚧 Projects 💻">
      <ul class="m-6">{props.children}</ul>
    </LeftCard>
  );
}

function Project(props: ProjectProps) {
  if (props.Url == undefined) {
    return (
      <li class="projectItems">
        <h3>{props.Name}</h3>
        <p>{props.State}</p>
        <p>{props.About}</p>
      </li>
    );
  } else {
    return (
      <li class="projectItems">
        <h3>{props.Name}</h3>
        <p>{props.State}</p>
        <p>{props.About}</p>
        <a href={props.Url} target="_blank">
          Project Link
        </a>
      </li>
    );
  }
}

export function ProjectCard() {
  return (
    <ProjectWraper>
      <Project
        Name="Personal Website"
        About={`This Website It's on Version: ${APP_VERSION}`}
        State={ProjectState.active}
        Url="https://github.com/RiverDot/riverdot.github.io"
      />
      <Project
        Name="Project Venus"
        State={ProjectState.hold}
        About="Game Client For spacetraders.io"
      />
      <Project
        Name="Eos Bot"
        State={ProjectState.hold}
        About="Eos is a discord bot for queer and neurodivergent that has many functions it's main ones are Name Generator, Pronouns lookup, Identity Manager, and basic moderation"
      />
      <Project
        Name="Star Wars Droid Digital Companion"
        State={ProjectState.active}
        About=""
      />
      <Project
        Name="Unnamed"
        State={ProjectState.planed}
        About="This Project Dose not have a name yet but it will be a Minecraft Server that will hopefully be a safe space for LGBTQ+ people as well as neurodivergent people"
      />
    </ProjectWraper>
  );
}
