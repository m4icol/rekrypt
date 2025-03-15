import GithubIcon from "../components/icons/GithubIcon.tsx";

function Sidebar() {
  return (
    <aside className="flex-col-reverse hidden pr-8 lg:py-10 2xl:py-14 pl-7 lg:flex">
      <a
        target="_blank"
        href="https://github.com/m4icol/rekrypt"
        rel="noopener noreferrer"
        title="View Rekrypt on GitHub"
        aria-label="View Rekrypt on GitHub"
      >
        <GithubIcon className="text-white lg:w-5 2xl:w-8" />
      </a>
    </aside>
  );
}

export default Sidebar;
