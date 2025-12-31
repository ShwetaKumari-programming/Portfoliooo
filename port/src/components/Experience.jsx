export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <h2>Experience</h2>
        <div className="underline"></div>

        <div className="experience-cards">

          {/* CARD 1 */}
          <div className="experience-card">
            <img src="/src/assets/xav_page-0001.jpg" alt="Experience 1" />
            <h3>Frontend Developer – Solidus Lifesciences Pvt. Ltd.</h3>
            <p>
              Worked as a Frontend Developer on analytics tools designed for
              e-commerce platforms. Built a SIP fund management system to help users track investments, calculate returns, and understand systematic investment planning through an intuitive and responsive web interface..
            </p>
          </div>

          {/* CARD 2 */}
          <div className="experience-card">
            <img src="/src/assets/Shweta.jpg" alt="Experience 2" />
            <h3>ReactJS Developer –Food Technologies</h3>
            <p>
              Built a food ordering and restaurant showcase web application using React, focusing on responsive design, dynamic components, and smooth navigation to enhance user experience.
            </p>
          </div>

          
          </div>

        </div>
    
    </section>
  );
}
