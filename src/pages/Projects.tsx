import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import tispSS from "../tisp.png";
import apiLandSS from "../apiland.png";
import loopSS from "../loop.png";
import { IconLookup } from "@fortawesome/fontawesome-svg-core";

function Projects() {
  return (
    <div id="projects" className="container p-10 mt-10">
      <p>
        <span className="font-mono text-3xl text-independence">03.</span>
        <span className="font-logo text-5xl text-terracotta">
          &nbsp;some things i've built
        </span>
      </p>

      <section>
        <div className="w-1/2 md:hidden lg:hidden mt-10">
          <img
            style={{ boxShadow: "1rem -1rem #F2CC8F" }}
            src={tispSS}
            alt="tisp code screenshot"
            className="rounded-lg"
          />
        </div>
        <div className="flex md:m-10 lg:m-10 my-5 justify-between">
          <div className="w-full md:w-1/2 lg:w-1/2">
            <p>
              <span className="font-logo font-black text-3xl text-independence">
                tisp (programming language)
              </span>
            </p>
            <p className="mr-5 mt-5">
              Tisp is a functional programming language whose syntax is based on
              Lisp. It is built using Rust programming language and LLVM (a
              compiler framework). Unlike popular iterations of Lisp, Tisp is
              compiled to machine code instead of being interpreted directly.
            </p>
            <br />
            <p>
              If you're interested, I wrote a blog post&nbsp;
              <a
                className="text-terracotta"
                target="_blank"
                href="https://bit.ly/tisp-lang"
              >
                here
              </a>
              &nbsp;about how I did it.
            </p>
            <a target="_blank" href="https://asciinema.org/a/401435">
              <button className="text-white my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400">
                View Demo
              </button>
            </a>
            &emsp;
            <a target="_blank" href="https://github.com/faraazahmad/tisp">
              <button className="text-white my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400">
                View Repository
              </button>
            </a>
          </div>
          <div className="w-1/2 hidden md:block lg:block">
            <img
              style={{ boxShadow: "1rem -1rem #F2CC8F" }}
              src={tispSS}
              alt="tisp code screenshot"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="w-1/2 md:hidden lg:hidden mt-10">
          <img
            style={{ boxShadow: "1rem -1rem #F2CC8F" }}
            src={apiLandSS}
            alt="tisp code screenshot"
            className="rounded-lg"
          />
        </div>
        <div className="flex md:m-10 lg:m-10 my-5 justify-between">
          <div className="w-1/2 hidden md:block lg:block">
            <img
              style={{ boxShadow: "-1rem -1rem #F2CC8F" }}
              src={apiLandSS}
              alt="apiland screenshot"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 lg:w-1/2 md:pl-10 lg:pl-10">
            <p>
              <span className="font-logo font-black text-3xl text-independence">
                API land
              </span>
            </p>
            <p className="mt-5">
              API land is an interative web app to explore freely available public
              APIs, that you can use to build your side projects. It's built using
              Vue.js and you can interactively filter the topics on which you want
              your APIs, for example: Weather, Animals, Health etc.
            </p>
            <a target="_blank" href="https://faraazahmad.github.io/apiland">
              <button className="text-white my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400">
                View Demo
              </button>
            </a>
            &emsp;
            <a target="_blank" href="https://github.com/faraazahmad/apiland">
              <button className="text-white my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400">
                View Repository
              </button>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="w-1/2 md:hidden lg:hidden">
          <img
            style={{ boxShadow: "1rem -1rem #F2CC8F" }}
            src={loopSS}
            alt="loop editor screenshot"
            className="rounded-lg"
          />
        </div>
        <div className="flex md:m-10 lg:m-10 my-5 justify-between">
          <div className="w-full md:w-1/2 lg:w-1/2">
            <p>
              <span className="font-logo font-black text-3xl text-independence">
                loop (text editor)
              </span>
            </p>
            <p className="mr-5 mt-5">
              Loop is a (simple) text editor than runs in your terminal, built in
              Rust. It can open files, edit, and search through them.
            </p>
            <br />
            <a target="_blank" href="https://asciinema.org/a/317801">
              <button className="text-white my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400">
                View Demo
              </button>
            </a>
            &emsp;
            <a target="_blank" href="https://github.com/faraazahmad/loop">
              <button className="text-white my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400">
                View Repository
              </button>
            </a>
          </div>
          <div className="w-1/2 hidden md:block lg:block">
            <img
              style={{ boxShadow: "1rem -1rem #F2CC8F" }}
              src={loopSS}
              alt="loop editor screenshot"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <p className="p-5 text-center text-l">
        <a href="https://github.com/faraazahmad" target="_blank">
          <button className="text-gray-800 px-7 py-4 bg-champagne-200 rounded hover:bg-champagne-500">
            <FontAwesomeIcon icon={faGithub as IconLookup} className="text-xl align-bottom" />
            &emsp; View more projects at Github
          </button>
        </a>
      </p>
    </div>
  );
}

export default Projects;
