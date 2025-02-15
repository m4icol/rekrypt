import SunIcon from "../components/icons/sunIcon.svg";
import MoonIcon from "../components/icons/moonIcon.svg";
import Github from "../components/icons/githubIcon.svg";

function Sidebar() {
  return (
    <aside className="py-8 px-10 flex flex-col gap-8">
      <img src={SunIcon} alt="SunIcon" width={50} />
      <img src={MoonIcon} alt="MoonIcon" width={50} />
      <img src={Github} alt="Github" width={50} />
    </aside>
  );
}

export default Sidebar;
