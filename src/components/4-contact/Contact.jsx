import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import Animation from "../../../public/animation/done.json";
import messageAnimation from "../../../public/animation/message.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("mnqedaeb");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submiting..." : "submit"}
          </button>
        </form>

        <div className="animation">
        <Lottie animationData={messageAnimation} style={{width:'300px'}} />
        </div>
      </div>

      {state.succeeded && (
        <p style={{ marginTop: "1.7rem", color: "#ffc" }} className="flex">
          <Lottie animationData={Animation} style={{width:'70px'}} loop={false} />
          thanks for joining us🤝
        </p>
      )}
    </section>
  );
};

export default Contact;
