import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Email() {
  return (
    <div className="email hover:bg-rose-500 hover:text-white font-logo transition px-4 py-2 rounded-full hidden md:block lg:block">
      <a href="mailto:faraaz98@live.com">
        <FontAwesomeIcon icon={faEnvelope as IconLookup} className="text-xl align-bottom" />
        <span className="ml-4">faraaz98@live.com</span>
      </a>
    </div>
  );
}

export default Email;
