import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-[24px]">Pictoria </h2>{" "}
      <p>
        {" "}
        Full-Stack Photo Sharing Web App Technologies: React, Firebase, Tailwind
        CSS.{" "}
      </p>
      <ul className="space-y-1 text-gray-300 px-4 list-disc">
        <li>
          Responsive UI with authentication, real-time interactions, and dynamic
          image sharing.
        </li>
        <li>
          Secure user management via Firebase Authentication & Firestore,
          ensuring data integrity.
        </li>
        <li>
          Features protected routes, image uploads, likes, favorites, and
          intuitive search filtering.
        </li>
      </ul>
      <div className="flex gap-3 mt-2">
        <Link to="https://pictoria-web.netlify.app">
          {" "}
          <Button Icon={FaLink} name="Live Demo" />
        </Link>
        <Link to="https://github.com/loveychauhan/pictoria">
          {" "}
          <Button Icon={FaGithub} name="Github Repo" />
        </Link>
      </div>
    </div>
  );
};

export default Work;
