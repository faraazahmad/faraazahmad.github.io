import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social() {
  return (
    <div className="social p-5 pl-10 text-independence hidden md:block lg:block">
      <span className="block my-5 hover:text-rose-500">
        <a href="https://linkedin.com/in/syedfaraazahmad" target="_blank">
          <FontAwesomeIcon icon={faLinkedin as IconLookup} className="text-xl align-bottom" />
        </a>
      </span>
      <span className="block my-5 hover:text-rose-500">
        <a href="https://twitter.com/Faraaz98" target="_blank">
          <FontAwesomeIcon icon={faTwitter as IconLookup} className="text-xl align-bottom" />
        </a>
      </span>
      <span className="block my-5 hover:text-rose-500">
        <a href="https://github.com/faraazahmad" target="_blank">
          <FontAwesomeIcon icon={faGithub as IconLookup} className="text-xl align-bottom" />
        </a>
      </span>
    </div>
  );
}

export default Social;
