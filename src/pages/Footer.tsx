import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
	return (
		<div className="w-full bg-slate-800 text-white relative p-20">
			<div
				id="contact-me"
				className="flex flex-col md:grid grid-cols-4 gap-8 items-center"
			>
				<h1 className="text-7xl font-logo font-black">Get in touch!</h1>

				<div className="flex flex-col gap-2">
				</div>
				<div className="flex flex-col gap-2">
				</div>

				<p className="flex flex-col gap-2 w-full">
					<a
						href="https://github.com/faraazahmad"
						target="_blank"
						className="w-full px-4 py-2 bg-slate-900 rounded-lg transition hover:bg-black flex flex-row gap-4 items-center"
					>
					  <FontAwesomeIcon icon={faGithub as IconLookup} className="text-xl align-bottom" />
					  faraazahmad
					</a>
					<a
						href="https://github.com/faraazahmad"
						target="_blank"
						className="w-full px-4 py-2 bg-slate-900 rounded-lg transition hover:bg-black flex flex-row gap-4 items-center"
					>
					  <FontAwesomeIcon icon={faLinkedin as IconLookup} className="text-xl align-bottom" />
					  syedfaraazahmad
					</a>
					<a
						href="https://github.com/faraazahmad"
						target="_blank"
						className="w-full px-4 py-2 bg-slate-900 rounded-lg transition hover:bg-black flex flex-row gap-4 items-center"
					>
					  <FontAwesomeIcon icon={faTwitter as IconLookup} className="text-xl align-bottom" />
					  Faraaz98
					</a>
					<a
						href="mailto:faraaz98@live.com"
						className="w-full px-4 py-2 bg-slate-900 rounded-lg transition hover:bg-black flex flex-row gap-4 items-center"
					>
					  <FontAwesomeIcon icon={faEnvelope as IconLookup} className="text-xl align-bottom" />
					  faraaz98@live.com
					</a>
				</p>
			</div>
		</div>
	);
}

export default Footer;
