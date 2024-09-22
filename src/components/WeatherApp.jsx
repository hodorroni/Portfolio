import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./WeatherApp.css";
export default function WeatherApp() {
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
          <h1>Weather App</h1>
          <p>
            Developed an Android weather app as part of my Android development
            course at HIT. The app delivers real-time weather updates using the
            user's current location, with options for location and push
            notification permissions. The home screen displays weather data
            based on the user's location, and the app features both a search
            history screen and a favorites screen. Users can schedule daily
            notifications for the next day's weather forecast, which are sent
            even if the app is closed, utilizing background services.
          </p>
          <sction className="projects__keyfeatures">
            <h1>Key Features</h1>
            <ul>
              <li>
                Displays weather updates based on the current user's location.
              </li>
              <li>
                RoomDB: Locally stores both favorites and search history of the
                user.
              </li>
              <li>
                Voice-to-text integration by Google for easy weather searches.
              </li>
              <li>Application localized for both Hebrew and English.</li>
              <li>
                Push notification feature to show tomorrow's forecast based on
                the user's location.
              </li>
              <li>
                Permission handling for location, notifications, and scheduled
                alarms.
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
                Kotlin
              </li>
              <li>
                <span className="bold_text_technologies">WorkManager:</span>{" "}
                Fetch data when the app is closed
              </li>
              <li>
                <span className="bold_text_technologies">Architecture:</span>{" "}
                MVVM
              </li>
              <li>
                <span className="bold_text_technologies">
                  Dependency Injection:{" "}
                </span>{" "}
                Simplifying dependency management
              </li>
              <li>
                <span className="bold_text_technologies">
                  Asynchronous work:{" "}
                </span>{" "}
                Kotlin Coroutines
              </li>
            </ul>
          </sction>
        </div>

        <section className="projects__images">
          <div className="project_image__item">
            <img
              className="project__image"
              src="/images/WeatherApp/imag1.jpg"
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src="/images/WeatherApp/Image2.jpg"
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src="/images/WeatherApp/Image3.jpg"
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src="/images/WeatherApp/Image4.jpg"
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src="/images/WeatherApp/Image5.jpg"
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src="/images/WeatherApp/Image6.jpg"
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src="/images/WeatherApp/Image7.jpg"
              alt="project_image"
            />
          </div>
        </section>
      </div>
    </>
  );
}
