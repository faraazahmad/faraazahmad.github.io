import faraaz from "../faraaz.jpg";

function AboutMe() {
  return (
    <div id="about-me" className="container p-10 my-10">
      <div className="flex">
        <div className="p-10 w-1/2">
          <img
            style={{ boxShadow: "-1rem -1rem #F2CC8F", borderRadius: "1rem" }}
            src={faraaz}
            alt=""
          />
        </div>

        <div>
          <p>
            <span className="font-mono text-3xl text-independence">01.</span>
            <span className="font-logo text-5xl text-terracotta">
              &nbsp;about me
            </span>
          </p>

          <p className="block my-5 w-3/4">
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
          </p>
          <p className="block my-5 w-3/4">
            My main focus these days is building well-tested products while
            maintaining or introducing development processes that make it easy
            to do so. Here are a few technologies I’ve been working with
            recently:
          </p>
          <div className="flex justify-between text-terracotta text-l font-mono w-3/4">
            <a>Javascript</a>
            <a>Python</a>
            <a>Java</a>
            <a>Rust</a>
            <a>React</a>
            <a>Spring Boot</a>
            <a>MySQL</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
