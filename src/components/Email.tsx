import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Email() {
  return (
    <div className="email text-independence hover:text-terracotta hidden md:block lg:block">
      <a href="mailto:faraaz98@live.com">
        <FontAwesomeIcon icon={faEnvelope} className="text-xl align-bottom" />
        <span className="ml-4">faraaz98@live.com</span>
      </a>
    </div>
  );
}

export default Email;
