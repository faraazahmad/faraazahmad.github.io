import Post from "../components/Post";

function BlogPosts() {
  return (
    <div id="blog-posts" className="container p-10 pb-20">
      <p>
        <span className="font-mono text-3xl text-independence">04.</span>
        <span className="font-logo text-5xl text-terracotta">
          &nbsp;a few of my ramblings
        </span>
      </p>

      <div className="flex pt-10">
        <Post
          title="I was bored, so I built a programming language"
          link="https://bit.ly/tisp-lang"
          description="A fun blog post detailing how I built a programming language in
                the first lockdown of 2020"
        />
        <Post
          title="Writing your first package in Elixir"
          link="https://bit.ly/elixir-pkg-tut"
          description="A tutorial on how to build and submit a package for the Elixir programming language"
        />
        <Post
          title="An introduction to Neural Networks"
          link="https://bit.ly/intro-to-nn"
          description="Introductory article about Neural Networks for someone that is unfamiliar with the concept"
        />
      </div>
    </div>
  );
}

export default BlogPosts;
