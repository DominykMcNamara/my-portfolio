type HeaderProps = {
  about: string;
  skills: string;
  projects: string;
  contact: string;
  legal?: string;
};

const Header = ({ about, skills, projects, contact }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-10 bg-indigo-700">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4 text-sky-50">
        <h1 className=" text-3xl">
          <a className="non-trad-link">💻 Dominyk Smith </a>
        </h1>
        <nav className=" space-x-8  text-xl md:block">
          <a>{about}</a>
          <a>{skills}</a>
          <a>{projects}</a>
          <a>{contact}</a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
