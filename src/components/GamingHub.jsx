import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./WeatherApp.css";
export default function GamingHub() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []); // Empty dependency array means this runs once on mount
  function handleHomeClick() {
    navigate("/");
  }
  return (
    <>
      <div className="website_content">
        <header className="weather_app__header">
          <h2>R.Borsukovsky</h2>
          <button onClick={handleHomeClick}>Go back to Home</button>
        </header>

        <div className="projects__header_description">
          <h1>Gaming Hub</h1>
          <p>
            Developed an Android app as part of my Android development course at
            HIT. The app fetches and displays data related to the gaming
            industry, including game details, release dates, ratings, genres,
            and available platforms. Users can explore various games and their
            attributes, and each user has a personalized favorites list where
            they can add games. Additionally, users can search for others to
            view their favorites list, provided the other user has set their
            profile to public.
          </p>
          <sction className="projects__keyfeatures">
            <h1>Key Features</h1>
            <ul>
              <li>Sign up feature via firebase.</li>
              <li>Each user can add favorites to his list</li>
              <li>
                Filtering the games or companies by their names, release date,
                rating, genre
              </li>
            </ul>
          </sction>

          <sction className="technologies projects__keyfeatures">
            <h1>Technologies</h1>
            <ul>
              <li>
                <span className="bold_text_technologies">
                  Programming Language:
                </span>{" "}
                Java
              </li>
              <li>
                <span className="bold_text_technologies">Async Work:</span> For
                better user experience, to keep the app flow smooth
              </li>
              <li>
                <span className="bold_text_technologies">Architecture:</span>{" "}
                MVVM
              </li>
              <li>
                <span className="bold_text_technologies">Data Fetching: </span>{" "}
                Through Rest Api
              </li>
            </ul>
          </sction>
        </div>

        <section className="projects__images">
          <div className="project_image__item">
            <img
              className="project__image"
              src="/images/GamingHub/Image1.jpg"
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src="/images/GamingHub/Image2.jpg"
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src="/images/GamingHub/Image3.jpg"
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src="/images/GamingHub/Image4.jpg"
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src="/images/GamingHub/Image5.jpg"
              alt="project_image"
            />
          </div>
        </section>
      </div>
    </>
  );
}
