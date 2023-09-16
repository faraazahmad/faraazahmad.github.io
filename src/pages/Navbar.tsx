function Navbar() {
  return (
    <div id="navbar" className="p-7 w-full flex justify-between">
      <div>
        <span className="font-semibold text-terracotta font-logo text-3xl">
          syed faraaz ahmad
        </span>
      </div>
      <div></div>
      <div className="hidden md:inline lg:inline space-x-10 pt-2 font-mono text-sm text-independence">
        <a href="#about-me" className="hover:text-terracotta">
          <span className="text-terracotta">01. </span>
          About Me
        </a>
        <a href="#experience" className="hover:text-terracotta">
          <span className="text-terracotta">02. </span>
          Experience
        </a>
        <a href="#projects" className="hover:text-terracotta">
          <span className="text-terracotta">03. </span>
          Projects
        </a>
        <a href="#blog-posts" className="hover:text-terracotta">
          <span className="text-terracotta">04. </span>
          Blog Posts
        </a>
        <a href="#contact-me" className="hover:text-terracotta">
          <span className="text-terracotta">05. </span>
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Navbar;
