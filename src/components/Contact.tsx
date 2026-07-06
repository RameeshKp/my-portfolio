import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:irameeshkp@gmail.com" data-cursor="disable">
                irameeshkp@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Bachelor&apos;s in Electronics and Communication Engineering,
              Government Engineering College Wayanad (2014 - 2018)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="mailto:irameeshkp@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:+917560961914"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kerala%2C%20India"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Location <MdArrowOutward />
            </a>
            <a
              href="/Rameesh_KP_Resume_2026.pdf"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rameesh K P</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
