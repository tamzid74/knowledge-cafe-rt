/* eslint-disable react/prop-types */

const Blog = ({ blog }) => {
  const {
    cover_img,
    author_name,
    author_img,
    date_publish,
    reading_time,
    title,
    Hashtags,
  } = blog;
  return (
    <div className="space-y-4 mb-10">
      <img src={cover_img} alt="" />
      <div className="flex justify-between space-y-4">
        <div className="flex gap-2 justify-between items-center">
          <img className="w-12" src={author_img} alt="" />
          <div>
            <h1>{author_name}</h1>
            <p>{date_publish}</p>
          </div>
        </div>
        <div>
          <p>{reading_time} min read</p>
        </div>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p>
        {Hashtags.map((hash,idx) => (
          <span key={idx} className="text-blue-700">
            <a href=""> {hash} </a>
          </span>
        ))}
      </p>
    </div>
  );
};

export default Blog;
