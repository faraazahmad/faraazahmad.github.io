import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import tispSS from "../tisp.png";
import apiLandSS from "../apiland.png";
import loopSS from "../loop.png";
import { IconLookup } from "@fortawesome/fontawesome-svg-core";

function Projects() {
	return (
		<div id="projects" className="bg-indigo-500 text-white p-10">
			<div className="container mx-auto">
				<h2 className="font-logo text-7xl my-4 font-black text-white">
					some things i've built
				</h2>

				<div className="flex flex-col gap-10">
					<section className="pt-10">
						<div className="flex flex-col md:grid md:grid-cols-6 gap-4">
							<img
								src={tispSS}
								alt="tisp code screenshot"
								className="col-span-3 rounded-lg"
							/>
							<div className="col-span-2 bg-white text-slate-800 rounded-lg p-10">
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
							</div>
							<div className="col-span-1 grid grid-cols-3 md:grid-rows-3 md:grid-cols-1 items-stretch gap-4 md:text-xl">
								<a className="transition hover:bg-amber-600 col-span-1 row-span-1 justify-center flex items-center px-8 py-4 md:p-0 bg-amber-500 rounded-lg" target="_blank" href="https://dev.to/faraazahmad/i-was-bored-so-i-built-my-own-programming-language-30f1">
									 Read Blog
								</a>
								<a className="transition hover:bg-amber-600 col-span-1 row-span-1 justify-center flex items-center px-8 py-4 md:p-0 bg-amber-500 rounded-lg" target="_blank" href="https://asciinema.org/a/401435">
									View Demo
								</a>
								<a className="transition hover:bg-amber-600 col-span-1 row-span-1 justify-center flex items-center px-8 py-4 md:p-0 bg-amber-500 rounded-lg" target="_blank" href="https://github.com/faraazahmad/tisp">
									Visit Repo
								</a>
							</div>
						</div>
					</section>

					<section>
						<div className="flex flex-col md:grid md:grid-cols-6 gap-4">
							<img
								src={apiLandSS}
								alt="tisp code screenshot"
								className="row-start-1 md:col-start-4 col-span-3 rounded-lg"
							/>
							<div className="row-start-1 md:col-start-2 md:col-end-4 bg-white text-slate-800 rounded-lg p-10">
								<p>
									<span className="font-logo font-black text-3xl text-independence">
										API Land
									</span>
								</p>
								<p className="mr-5 mt-5">
									API land is an interative web app to explore freely available public
									APIs, that you can use to build your side projects. It's built using
									Vue.js and you can interactively filter the topics on which you want
									your APIs, for example: Weather, Animals, Health etc.
								</p>
							</div>
							<div className="row-start-1 md:col-start-1 col-span-1 grid grid-cols-2 md:grid-rows-2 md:grid-cols-1 items-stretch gap-4">
								<a className="transition hover:bg-amber-600 col-span-1 row-span-1 justify-center flex items-center py-4 md:p-0 md:text-xl bg-amber-500 rounded-lg" target="_blank" href="https://faraazahmad.github.io/apiland">
									View Demo
								</a>
								<a className="transition hover:bg-amber-600 col-span-1 row-span-1 justify-center flex items-center py-4 md:p-0 md:text-xl bg-amber-500 rounded-lg" target="_blank" href="https://github.com/faraazahmad/apiland">
									Visit Repo
								</a>
							</div>
						</div>
					</section>

					<section>
						<div className="flex flex-col md:grid md:grid-cols-6 gap-4">
							<img
								src={loopSS}
								alt="tisp code screenshot"
								className="col-span-3 rounded-lg"
							/>
							<div className="col-span-2 bg-white text-slate-800 rounded-lg p-10">
								<p>
									<span className="font-logo font-black text-3xl text-independence">
										Loop text editor
									</span>
								</p>
								<p className="mr-5 mt-5">
									Loop is a (simple) text editor than runs in your terminal, built in
									Rust. It can open files, edit, and search through them.
								</p>
							</div>
							<div className="col-span-1 grid grid-cols-2 md:grid-rows-2 md:grid-cols-1 items-stretch gap-4 md:text-xl">
								<a className="transition hover:bg-amber-600 col-span-1 row-span-1 justify-center flex items-center py-4 md:p-0 bg-amber-500 rounded-lg" target="_blank" href="https://asciinema.org/a/317801">
									View Demo
								</a>
								<a className="transition hover:bg-amber-600 col-span-1 row-span-1 justify-center flex items-center py-4 md:p-0 bg-amber-500 rounded-lg" target="_blank" href="https://github.com/faraazahmad/loop">
									Visit Repo
								</a>
							</div>
						</div>
					</section>
				</div>

				<p className="p-5 mt-5 text-center text-lg">
					<a href="https://github.com/faraazahmad" target="_blank">
						<button className="text-white px-7 py-4 bg-black/10 transition rounded hover:bg-black/15">
							<FontAwesomeIcon icon={faGithub as IconLookup} className="text-xl align-bottom" />
							&emsp; View all projects at Github
						</button>
					</a>
				</p>
			</div>
		</div>
	);
}

export default Projects;
