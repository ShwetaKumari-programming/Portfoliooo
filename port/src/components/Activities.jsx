import khun from '../assets/khun.jpg';
import Shwe from '../assets/Shwe.jpg';
import learn from '../assets/learn.jpg';

export default function Activities() {
  return (
    <section className="activities-section" id="activities">
      <div className="activities-container">

        <h2>Activities & Achievements</h2>
        <div className="underline"></div>

        <div className="activities-cards">

          {/* CARD 1 */}
          <div className="activity-card">
            <img src={khun} alt="TCS Digital Offer" />
            <h3>Web-D-Explore</h3>
            <p>
              Attended a hands-on web development workshop to strengthen understanding of HTML, CSS, JavaScript, and modern web development concepts.
            </p >
          </div>

          {/* CARD 2 */}
          <div className="activity-card">
            <img src={Shwe} alt="College Seminars" />
            <h3>Git Set Go</h3>
            <p>
                Organised and Participated in a Git and GitHub workshop to learn version control, collaboration, and best practices for managing code repositories.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="activity-card">
            <img src={learn} alt="GDSC WOW" />
            <h3>Python</h3>
            <p>
              Completed a Python programming workshop to build a strong foundation in Python syntax, data structures, and problem-solving techniques.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
