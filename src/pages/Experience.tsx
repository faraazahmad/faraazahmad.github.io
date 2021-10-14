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
            Software Engineer at{" "}
            <a
              target="_blank"
              href="https://optum.com"
              className="text-terracotta font-bold"
            >
              Optum
            </a>
          </h3>
          <span className="font-mono">Aug 2020 - Present</span>
          <br />
          <br />
          Optum is a company that builds products and services for UnitedHealth
          Group, a major health care and insurance company in the USA. <br />{" "}
          <br />
          <ul className="list-disc">
            <li>
              Built Backend with microservice architecture using Spring Boot
            </li>
            <li>
              Built micro frontends in React, which share a common session using
              Redis
            </li>
            <li>Took initiative to add UI integration testing using Cypress</li>
            <li>
              Improved frontend performance using Workbox service worker library
            </li>
            <li>
              Used code splitting and tree shaking to reduce frontend bundle
              sizes and improve website load times
            </li>
            <li>
              Took initiatives to make the codebase more streamlined by
              introducing standardised code style to the team
            </li>
          </ul>
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
