function Footer() {
  return (
    <div
      id="contact-me"
      className="text-center md:container md:mx-auto px-40 py-20 w-full bg-greensheen-500 text-white"
    >
      <h1 className="text-7xl font-logo">Get in touch!</h1>

      <p className="mt-10 text-xl w-1/2 md:mx-auto">
        My inbox is always open. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!
      </p>

      <a href="mailto:faraaz98@live.com">
        <button className="m-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400">
          Say Hello
        </button>
      </a>

      <p>
        (Or if you just want to copy the email address)
        <br />
        <span className="font-bold">faraaz98@live.com</span>
      </p>
    </div>
  );
}

export default Footer;
