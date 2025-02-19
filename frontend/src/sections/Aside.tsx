import SunIcon from "../components/icons/SunIcon.tsx";
// import MoonIcon from "../components/icons/MoonIcon.tsx";
import GithubIcon from "../components/icons/GithubIcon.tsx";

function Sidebar() {
  return (
    <aside className="py-15 pr-15 flex flex-col gap-8">
      <SunIcon width={25} height={25} className="text-white" />
      {/* <MoonIcon width={28} height={28} className="text-white" /> */}
      <a target="_blank" href="https://github.com/m4icol/rekrypt">
        <GithubIcon width={25} height={25} className="text-white" />
      </a>
    </aside>
  );
}

export default Sidebar;
