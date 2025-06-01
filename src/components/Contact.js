import emailjs from "emailjs-com";
import { useState, useRef } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, message, subject } = mailData;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);
  const statusRef = useRef(null);

  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
      statusRef.current.focus();
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            setSuccess(true);
            clearError();
            setMailData({ name: "", email: "", message: "", subject: "" });
            statusRef.current.focus();
          },
          (err) => {
            console.log(err.text);
            setError(true);
            statusRef.current.focus();
            clearError();
          }
        );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
      setSuccess(false);
    }, 5000);
  };

  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="title">
          <h3 id="contact-heading">Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>What's your story? Get in touch</h4>
              <p>
                Always available for freelancing if the right project comes
                along, Feel free to contact me.
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" aria-hidden="true" />
                  <address className="media-body">
                    123 Stree New York City , United States Of America 750065.
                  </address>
                </li>
                <li className="media">
                  <i className="ti-email" aria-hidden="true" />
                  <span className="media-body">
                    <a href="mailto:support@domain.com">support@domain.com</a>
                  </span>
                </li>
                <li className="media">
                  <i className="ti-mobile" aria-hidden="true" />
                  <span className="media-body">
                    <a href="tel:+044969696963636">+044 9696 9696 3636</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              <h4>Say Something</h4>

              <div
                ref={statusRef}
                className="alert-container"
                aria-live="assertive"
                tabIndex="-1"
              >
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error === true
                      ? "Please fill all required fields!"
                      : "Something went wrong! Please try again later."}
                  </div>
                )}
                {success && (
                  <div className="alert alert-success" role="alert">
                    Message sent successfully!
                  </div>
                )}
              </div>

              <form
                id="contact-form"
                onSubmit={(e) => onSubmit(e)}
                ref={formRef}
                aria-labelledby="form-heading"
                noValidate
              >
                <h5 id="form-heading" className="sr-only">Contact Form</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        id="name"
                        placeholder="Name *"
                        className={`form-control ${
                          error ? (!name ? "invalid" : "") : ""
                        }`}
                        type="text"
                        aria-required="true"
                        aria-invalid={!name && error ? "true" : "false"}
                      />
                      {!name && error && (
                        <span className="error-message" id="name-error">
                          Name is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input
                        name="email"
                        onChange={(e) => onChange(e)}
                        value={email}
                        id="email"
                        placeholder="Email *"
                        className={`form-control ${
                          error ? (!email ? "invalid" : "") : ""
                        }`}
                        type="email"
                        aria-required="true"
                        aria-invalid={!email && error ? "true" : "false"}
                      />
                      {!email && error && (
                        <span className="error-message" id="email-error">
                          Email is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="subject" className="sr-only">Subject</label>
                      <input
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id="subject"
                        placeholder="Subject *"
                        className={`form-control ${
                          error ? (!subject ? "invalid" : "") : ""
                        }`}
                        type="text"
                        aria-required="true"
                        aria-invalid={!subject && error ? "true" : "false"}
                      />
                      {!subject && error && (
                        <span className="error-message" id="subject-error">
                          Subject is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message" className="sr-only">Message</label>
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
                        placeholder="Message *"
                        rows={5}
                        className={`form-control ${
                          error ? (!message ? "invalid" : "") : ""
                        }`}
                        aria-required="true"
                        aria-invalid={!message && error ? "true" : "false"}
                      />
                      {!message && error && (
                        <span className="error-message" id="message-error">
                          Message is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn px-btn-theme"
                        type="submit"
                        aria-label="Send Message"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
