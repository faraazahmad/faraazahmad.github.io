function Experience() {
  return (
    <div id="experience" className="container p-10 my-10">
      <p>
        <span className="font-mono text-3xl text-independence">02.</span>
        <span className="font-logo text-5xl text-terracotta">
          &nbsp;where i've worked
        </span>
      </p>

      <div className="block my-5 w-3/4">
        <p className="my-10 bg-white p-10 border-solid border-4 border-champagne-200 hover:border-champagne-500 rounded-lg">
          <h3 className="text-xl">
            Software Engineer at
            <a
              target="_blank"
              href="https://deepsource.com"
              className="text-terracotta font-bold"
            >
              DeepSource
            </a>
          </h3>
          <span className="font-mono">Sep 2022 - Sep 2023</span>
          <br />
          <br />
          DeepSource is a code health company that statically analyzes your code and finds quality and secuity issues.
          <br />
          <ul className="list-disc">
            <li>
              Led development of best-in-class Ruby static analyzer that detects 300+ code-quality & security issues
			  in Ruby/Rails codebases.
            </li>
            <li>
              Achieved 15x performance improvement in Ruby static analyzer using extensive benchmarking, 
			  CPU profiling and caching.
            </li>
            <li>
				Built new techniques using static analysis and migration-stitching to extract semantic information from Ruby on Rails applications.
			</li>
            <li>
              Integrated real-time performance monitoring of services using Grafana
            </li>
            <li>
				Led re-architecture and development of secrets scanning analyzer that automatically detects and 
				flags 100+ hardcoded API tokens.
            </li>
            <li>
              Created automated performance testing for static analyzers that runs in self-hosted Github actions.
            </li>
			<li>
				Created a graphical interface for MISRA-C code compliance reports.
			</li>
          </ul>

			<span className="font-bold">
				Skills: Vue, Ruby on Rails, GraphQL, Ruby, Golang, Docker, Grafana
			</span>
        </p>

        <p className="my-10 bg-white p-10 border-solid border-4 border-champagne-200 hover:border-champagne-500 rounded-lg">
          <h3 className="text-xl">
            Software Engineer at
            <a
              target="_blank"
              href="https://optum.com"
              className="text-terracotta font-bold"
            >
              Optum
            </a>
          </h3>
          <span className="font-mono">Aug 2020 - Sep 2022</span>
          <br />
          <br />
          Optum is a company that builds products and services for UnitedHealth
          Group, a major health care and insurance company in the USA. <br />{" "}
          <br />
          <ul className="list-disc">
            <li>
              Improved frontend load times by 14% by reducing bundle size and caching requests using service workers.
            </li>
            <li>
              Built advanced search to improve the discoverability of fields in insurance forms.
            </li>
            <li>
				Worked on an internal tool to instantly notify multiple developer teams of database schema changes
			</li>
            <li>
              Mentored a team of junior developers to identify areas of improvement and growth
            </li>
            <li>
              Used code splitting and tree shaking to reduce frontend bundle sizes and improve website load times
            </li>
            <li>
              Integrated event-based microservices by standardizing API results
            </li>
          </ul>

			<span className="font-bold">
				Skills: Java, Spring Boot, MySQL, TypeScript, React, Angular
			</span>
        </p>

        <p className="my-10 bg-white p-10 border-solid border-4 border-champagne-200 hover:border-champagne-500 rounded-lg">
          <h3 className="text-xl">
            Software Engineering Intern at&nbsp;
            <a
              target="_blank"
              href="https://prifina.com"
              className="text-terracotta font-bold"
            >
              Prifina
            </a>
          </h3>
          <span className="font-mono">Jul 2019 - Oct 2019</span>
          <br />
          <br />
          Prifina is a venture-backed company offering resources for developers
          to build apps that run on top of user-held data.
          <br /> <br />
          <ul className="list-disc">
            <li>
              Worked on Data request API for 3rd parties, using Serverless
              framework on AWS Lambda
            </li>
            <li>
              Introduced the need for a GraphQL API for such a project, which
              has now been released
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Experience;
