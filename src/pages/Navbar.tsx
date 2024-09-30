function Navbar() {
  return (
    <div id="navbar" className="container mx-auto p-10 w-full flex justify-between">
      <div>
        <span className="text-black font-logo font-light text-2xl">
          syed faraaz ahmad
        </span>
      </div>
      <div></div>
      <div className="hidden md:inline lg:inline space-x-10 pt-2 font-logo text-sm text-independence">
        <a href="#about-me" className="hover:text-indigo-500">
          About Me
        </a>
        <a href="#experience" className="hover:text-indigo-500">
          Experience
        </a>
        <a href="#projects" className="hover:text-indigo-500">
          Projects
        </a>
        <a href="#blog-posts" className="hover:text-indigo-500">
          Blog Posts
        </a>
        <a href="#contact-me" className="hover:text-indigo-500">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Navbar;
