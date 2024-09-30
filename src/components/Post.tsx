type PostProps = {
  link: string;
  title: string;
  description: string;
};

function Post(props: PostProps) {
  const { title, link, description } = props;

  return (
    <a href={link} target="_blank" className="bg-white hover:bg-white/55 transition p-8 rounded-lg">
		<p>
		  <span className="font-logo font-bold text-3xl">{title}</span>
		</p>
		<p className="mr-5 mt-5">{description}</p>
    </a>
  );
}

export default Post;
