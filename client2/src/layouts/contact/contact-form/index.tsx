import InputGroup from "@/components/input-group";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [data, setData] = useState({ email: "", fullName: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.email && data.fullName && data.message) {
      toast.success("Your email was sent successfully!");
    } else {
      toast.error("You should fill all fields!");
    }
  };
  return (
    <section className="py-10" id="contact">
      <div className="w-[90%] container mx-auto flex flex-col md:flex-row gap-y-10 items-center gap-x-10">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-full xs:w-2/3 md:w-[calc(50%-40px)] flex flex-col gap-y-10"
        >
          <h2 className="text-4xl tracking-widest font-black font-montserrat uppercase text-10 text-center">
            Contact with us
          </h2>
          <InputGroup
            type="text"
            name="fullName"
            id="full-name"
            label="Full Name"
            onChange={handleChange}
            value={data.fullName}
          />
          <InputGroup
            type="email"
            name="email"
            id="email"
            label="Email"
            onChange={handleChange}
            value={data.email}
          />
          <InputGroup
            type="text"
            name="message"
            id="message"
            label="Message"
            onChange={handleChange}
            value={data.message}
          />
          <button
            type="submit"
            className="w-full py-2 rounded bg-10 text-400 text-xl font-medium border border-10 hover:bg-transparent hover:text-10 transition-all duration-300"
          >
            Send
          </button>
        </form>

        <span className="flex-auto h-auto md:h-[400px]">
          <img
            src="/images/contact-image.png"
            alt="Contact Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </span>
      </div>
    </section>
  );
}
