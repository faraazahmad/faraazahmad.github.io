import personClipArt from "../person.png";

function Intro() {
  return (
    <div className="container px-10 lg:py-40">
      <div className="flex">
        <div>
          <span className="font-mono text-lg block text-independence">
            Hi! I'm
          </span>

          <span className="text-8xl font-bold block text-terracotta font-logo">
            Faraaz
          </span>

          <span className="text-4xl font-semibold text-champagne-500 block">
            I like to build cool projects and write about them.
          </span>

          <p className="block my-5 w-3/4">
            I'm fullstack software engineer that builds engaging, responsive
            frontends and solid, reliable backends. I love to try new
            technologies and build cool stuff with them.
          </p>
        </div>

        <div className="person hidden md:inline lg:inline">
          <img src={personClipArt} alt="person clip art" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
