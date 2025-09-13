import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Particles } from "../components/Particle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_8vo6nrq",
        "template_zhz7yve",
        {
          from_name: formData.name,
          to_name: "Lovey",
          from_email: formData.email,
          to_email: "loveychauhan68363@gmail.com",
          message: formData.message,
        },
        "J97sZkANJbmzmTvBH"
      );
      toast.success("Sucess");
    } catch (error) {
      console.log(error);
      toast.error("Failed");
    } finally {
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }

    //service_8vo6nrq
    //template_zhz7yve
  };

  return (
    <section
      className="relative flex items-center c-space section-spacing"
      id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="flex flex-col justify-center items-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col mb-10 items-start w-full gap-5">
          <h2>Let's Work Together</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build new websites, improve your existing
            platform, I am here to help.
          </p>
        </div>
        <form className="w-full" onSubmit={submitHandler}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={formHandler}
              className="field-input field-input-focus "
              placeholder="your name"
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={formHandler}
              className="field-input field-input-focus "
              placeholder="name@g.co"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Message" className="field-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={formHandler}
              className="field-input field-input-focus "
              placeholder="Let's bring ideas into reality."
              autoComplete="message"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full text-center rounded-md cursor-pointer px-1 py-3 bg-radial from-lavender to-royal hover-animation">
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
