import React from "react";
import "./Contact.css";
import resume from "../../assets/resume/ResumeCopy.pdf";

const Contact = () => {
  const openPdf = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file.
    const pdfPath = "../../assets/resume/ResumeCopy.pdf";
    window.open(pdfPath, "_blank");
  };
  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <p>If you have any questions or inquiries, feel free to reach out:</p>
      <ul>
        <li>Email: skyrj50031@gmail.com</li>
      </ul>

      <a className="resume-btn" href={resume} download="Resume">
        Resume
      </a>
    </div>
  );
};

export default Contact;
