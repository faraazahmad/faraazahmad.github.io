import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social() {
  return (
    <div className="social p-5 pl-10 text-independence hidden md:block lg:block">
      <span className="block my-5 hover:text-terracotta">
        <a href="https://linkedin.com/in/syedfaraazahmad" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="text-xl align-bottom" />
        </a>
      </span>
      <span className="block my-5 hover:text-terracotta">
        <a href="https://twitter.com/Faraaz98" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="text-xl align-bottom" />
        </a>
      </span>
      <span className="block my-5 hover:text-terracotta">
        <a href="https://github.com/faraazahmad" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="text-xl align-bottom" />
        </a>
      </span>
    </div>
  );
}

export default Social;
