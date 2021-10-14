type PostProps = {
  link: string;
  title: string;
  description: string;
};

function Post(props: PostProps) {
  const { title, link, description } = props;

  return (
    <a href={link} target="_blank">
      <div className="bg-white m-5 p-5 rounded-lg border-solid border-4 border-champagne-200 hover:border-champagne-500">
        <p>
          <span className="font-logo text-3xl text-independence">{title}</span>
        </p>
        <p className="mr-5 mt-5">{description}</p>
      </div>
    </a>
  );
}

export default Post;
