import Post from "../components/Post";

function BlogPosts() {
	return (
		<div id="blog-posts" className="bg-slate-200 p-10">
			<div className="container mx-auto">
				<h2 className="font-logo text-6xl md:text-7xl my-4 font-black text-slate-700">
					some of my ramblings
				</h2>
				<br />
				<br />
				<div className="flex flex-col md:grid grid-cols-3 gap-8">
					<Post
						title="I was bored, so I built a programming language"
						link="https://bit.ly/tisp-lang"
						description="A fun blog post detailing how I built a programming language in
                the first lockdown of 2020"
					/>
					<Post
						title="Try Different Things"
						link="https://faraazahmad.github.io/blog/post/try-different-things/"
						description="A life journey kind of post where I explore the different topics I've tried to learn in tech,
						and why you don't need to specialise too soon."
					/>
					<Post
						title="An introduction to Neural Networks"
						link="https://bit.ly/intro-to-nn"
						description="Introductory article about Neural Networks for someone that is unfamiliar with the concept"
					/>
				</div>

				<p className="my-10 text-center">
					<a href="https://faraazahmad.github.io/blog" target="_blank">
						<button className="px-7 py-4 bg-black/10 transition rounded hover:bg-black/15">
							View more blog posts
						</button>
					</a>
				</p>
			</div>
		</div>
	);
}

export default BlogPosts;
