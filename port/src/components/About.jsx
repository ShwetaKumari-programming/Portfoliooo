import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src="/sur.jpeg" alt="Shweta Kumari" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <div className="underline"></div>
*
          <p className="about-text">
            I'm a passionate Frontend Developer with experience in ReactJS and
            modern web technologies. I enjoy building clean, responsive, and
            user-friendly applications while continuously improving my skills.
          </p>

          <div className="tabs">
            <span className={activeTab === "skills" ? "active" : ""} onClick={() => setActiveTab("skills")}>
              Skills
            </span>
            <span className={activeTab === "education" ? "active" : ""} onClick={() => setActiveTab("education")}>
              Education
            </span>
            <span className={activeTab === "experience" ? "active" : ""} onClick={() => setActiveTab("experience")}>
              Experience
            </span>
          </div>

          <div className="tab-content">
            {activeTab === "skills" && (
              <>
                <p><b>Programming:</b> JavaScript, Python</p>
                <p><b>Web:</b> React, HTML, CSS,  Bootstrap</p>
                <p><b>Tools:</b> Git, GitHub, VS Code,</p>
                <p><b>Concepts:</b>  REST APIs, Responsive UI</p>
              </>
            )}

            {activeTab === "education" && (
              <>
                <p><b>Bachelor’s Degree</b></p>
                <p>Computer Science / IT</p>
                <p>2024– 2028</p>
              </>
            )}

            {activeTab === "experience" && (
              <>
                <p>Frontend Projects using React</p>
                <p>UI Development & API Integration</p>
                <p>Personal & Academic Projects</p>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
