import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TopProps = {
  scrollY: number;
};

function Top(props: TopProps) {
  const { scrollY } = props;

  if (scrollY !== 0) {
    return (
      <a
        className="scroll-top bg-rose-500 hover:bg-red-600 text-white px-4 py-2 m-5 rounded-md"
        href="#navbar"
      >
        <FontAwesomeIcon icon={faArrowUp as IconLookup} />
        <span className="top-desc">&emsp;Go to Top</span>
      </a>
    );
  } else return null;
}

export default Top;
