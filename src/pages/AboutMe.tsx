import faraaz from "../faraaz.jpg";
import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Social from "../components/Social";
import Email from "../components/Email";

function AboutMe() {
	return (
		<div id="about-me" className="container mx-auto p-10 py-20 md:my-10 font-logo">
			<Social />
			<Email />
			<div className="flex">
				<div className="flex flex-col md:grid grid-cols-5 gap-8 w-full">
					<div className="col-span-1">
						<img
							className="rounded-lg grayscale transition-all hover:grayscale-0"
							src={faraaz}
							alt=""
						/>
					</div>

					<div className="text-justify col-span-2">
						Hello! My name is Faraaz and I enjoy building interesting things
						with new (or old) tech. My interest in software engineering started
						when in high school I started editing config files in video games —
						and in that process made farmers drive expensive sports cars by
						default and rich people drive tractors! - Fast-forward to today, and
						so far I’ve had the privilege of working at a&nbsp;
						<a
							href="https://prifina.com"
							target="_blank"
							className="text-terracotta"
						>
							start-up
						</a>{" "}
						and a{" "}
						<a
							href="https://optum.com"
							target="_blank"
							className="text-terracotta"
						>
							large company
						</a>
						.
					</div>
					<div className="col-span-1 text-justify relative">
						My main focus these days is building well-tested products while
						maintaining or introducing development processes that make it easy
						to do so. Here are a few technologies I’ve been working with
						recently
					</div>

					<div className="self-center text-center animate-bounce md:p-0 py-8">
						<FontAwesomeIcon className="opacity-10 text-6xl text-right font-black" icon={faArrowDown as IconLookup} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
