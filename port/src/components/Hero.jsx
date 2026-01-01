import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import shuu from '../assets/shuu.jpeg';

export default function Hero() {
  const texts = [
    "Hi, I am Shweta Kumari",
    "Welcome to my portfolio!",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timer;

    if (!isDeleting && charIndex < currentText.length) {
      // typing
      timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } 
    else if (isDeleting && charIndex > 0) {
      // deleting
      timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } 
    else if (!isDeleting && charIndex === currentText.length) {
      // pause before delete
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } 
    else if (isDeleting && charIndex === 0) {
      // move to next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-left">

        {/* SOCIAL ICONS */}
        <div className="social-icons">
          <a href="https://instagram.com/your_instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/shweta-kumari-209781323/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="mailto:shwetakumari108swetaA@gmail.com"><FaEnvelope /></a>
          <a href="https://github.com/ShwetaKumari-programming" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        </div>

        {/* TEXT */}
        <div className="hero-text">
          <h1 className="typing-text">
            {displayText}
            <span className="cursor">|</span>
          </h1>

          <h3>Full Stack Web Developer</h3>

          <p>
            Frontend Developer with experience building responsive React
            applications and integrating backend APIs using ReactJs.
            Passionate about learning and delivering smooth user experiences.
          </p>

          <a
            href="/khushikumariresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            My Resume
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={shuu} alt="Shweta Kumari" />
      </div>
    </section>
  );
}
