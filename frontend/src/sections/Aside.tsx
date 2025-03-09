import GithubIcon from "../components/icons/GithubIcon.tsx";

function Sidebar() {
  return (
    <aside className="flex flex-col-reverse py-15 pr-13">
      <a
        target="_blank"
        href="https://github.com/m4icol/rekrypt"
        rel="noopener noreferrer"
        title="View Rekrypt on GitHub"
        aria-label="View Rekrypt on GitHub"
      >
        <GithubIcon width={25} height={25} className="text-white" />
      </a>
    </aside>
  );
}

export default Sidebar;
