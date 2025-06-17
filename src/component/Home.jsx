import { Link } from "react-router-dom";
import { FaGoogleDrive } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import Button from "./Button";

const buttons = [
  { Icon: FaJsSquare, name: "JavaScript" },
  { Icon: FaReact, name: "React" },
  { Icon: RiTailwindCssFill, name: "Tailwind CSS" },
  { Icon: FaCss3Alt, name: "CSS" },
  { Icon: FaHtml5, name: "HTML5" },
  { Icon: IoLogoFirebase, name: "Firebase" },
];
const Home = () => {
  return (
    <div className="grid gap-4">
      <header className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-2xl">Lovey Singh Chauhan</h1>
        <Link to="https://drive.google.com/file/d/1aGB0XYrMxauesddyV1bUP7QuUosG6kjY/view?usp=drive_link">
          <Button Icon={FaGoogleDrive} name="View resume" />
        </Link>
      </header>

      <section className="grid gap-3">
        <p>
          Developer based in India, passionate about web development and solving
          real-world problems with code. Built{" "}
          <Link to="https://pictoria-web.netlify.app">
            <strong>PICTORIA</strong>
          </Link>
          , a modern image-sharing app enabling users to view, save, and like
          images seamlessly.
        </p>
        <p>
          Coding in JavaScript since 2024. Graduated with a Computer Science
          degree in 2024 and currently learning web technologies full-time.
        </p>
        <p>
          you can connect me on{" "}
          <Link to="https://www.linkedin.com/in/loveychauhan01/">
            <strong>LinkedIN</strong>
          </Link>
          ,{" "}
          <Link to="https://github.com/loveychauhan">
            <strong>Github</strong>
          </Link>
          <Link
            to="mailto:loveychauhan68363@gmail.com"
            className="flex items-center gap-2">
            <IoMail />
            <span>loveychauhan68363@gmail.com</span>
          </Link>
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {buttons.map(({ Icon, name }) => (
            <Button key={name} Icon={Icon} name={name} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
