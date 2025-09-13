const Project = ({ title, tags, href, live, image, setPreview }) => {
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}>
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          {" "}
          <a
            target="_blank"
            className="flex items-center gap-1 cursor-pointer hover-animation"
            href={href}>
            Github
          </a>
          <a
            target="_blank"
            className="flex items-center gap-1 cursor-pointer hover-animation"
            href={live}>
            Live
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
    </>
  );
};

export default Project;
