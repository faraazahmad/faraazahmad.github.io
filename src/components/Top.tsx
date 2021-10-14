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
        className="scroll-top bg-terracotta hover:bg-red-400 text-white px-4 py-2 m-5 rounded-md"
        href="#navbar"
      >
        <FontAwesomeIcon icon={faArrowUp} />
        <span className="top-desc">&emsp;Go to Top</span>
      </a>
    );
  } else return null;
}

export default Top;
