import profileImage from "../profile.jpg";
export default function TopContent() {
  return (
    <>
      <div className="main__hero">
        <div className="main__hero_left">
          <h1>
            I'm <span className="main__hero_name">Rony Max Borsukovsky</span>
          </h1>
          <h1>B.Sc. in Computer Science, GPA: 93 </h1>
          <section>
            <ul className="about-me__section">
              <li>
                A skilled full-stack developer with expertise in JavaScript,
                React, HTML5, CSS, Java, Kotlin, Python, Node.js, Express, and
                MongoDB.
              </li>
              <li>
                Proficient in SQL database design, object-oriented programming
                (OOP/OOD), and capable of independently designing and building
                systems.
              </li>
              <li>
                Known for problem-solving abilities, quick adaptation to new
                technologies, and experience working both individually and in
                teams, with excellent interpersonal skills.
              </li>
            </ul>
          </section>
          <div className="main__hero_buttons">
            <a
              href="https://drive.google.com/file/d/1NRHYmCeicxyGPlYKb4eByl3GS5ROYBdH/view?usp=drive_link"
              className="button"
            >
              Resume
              <svg
                width="15"
                height="15"
                viewBox="-2.5 -5 75 60"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 l35,50 l35,-50"
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeWidth="10"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="main__hero_image-container">
          <img
            className="hero_emoji"
            src={profileImage}
            alt="emoji"
            loading="lazy"
            decoding="async"
          ></img>
        </div>
      </div>
    </>
  );
}
