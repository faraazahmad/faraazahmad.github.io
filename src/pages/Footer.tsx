function Footer() {
  return (
    <div className="p-5 w-full bg-greensheen-500 text-white">
      <div
        id="contact-me"
        className="items-center md:container lg:px-40 py-20"
      >
        <h1 className="text-7xl font-logo">Get in touch!</h1>

        <p className="mt-10 text-xl md:mx-auto">
          My inbox is always open.
          <br/>
          Whether you have a question or just want to
          say hi, I'll try my best to get back to you!
        </p>

        <a href="mailto:faraaz98@live.com">
          <button className="my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400">
            Say Hello
          </button>
        </a>

        <p>
          (Or if you just want to copy the email address)
          <br />
          <span className="font-bold">faraaz98@live.com</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
