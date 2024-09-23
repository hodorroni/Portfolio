import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WeatherApp.css";
export default function DogTinder() {
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
          <h1>DogTinder</h1>
          <p>
            Developed an Android application inspired by my love for dogs, as I
            own one myself. The app facilitates connections between dogs and
            their owners, allowing users to create and attend events. Each user
            can set up an event on a chosen date, and other users can join by
            clicking the plus button or remove themselves from the event.
            Attendees can also see who else is participating. Additionally,
            events can be displayed on Google Maps based on the city and street
            provided by the user, enabling searches for other users and the
            ability to comment on their profiles.
          </p>
          <section className="projects__keyfeatures">
            <h1>Key Features</h1>
            <ul>
              <li>Sign-up functionality using Firebase</li>
              <li>Create events for others to attend</li>
              <li>
                Search for other users and leave comments on their profiles
              </li>
              <li>Display events on Google Maps</li>
              <li>Edit or delete events by the event creator</li>
            </ul>
          </section>

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
                <span className="bold_text_technologies">
                  Kotlin Coroutines:
                </span>{" "}
                Utilized for an enhanced user experience, ensuring smooth app
                flow.
              </li>
              <li>
                <span className="bold_text_technologies">Architecture:</span>{" "}
                MVVM
              </li>
              <li>
                <span className="bold_text_technologies">
                  Real-Time Updates:
                </span>{" "}
                Implemented Firebase snapshot listener for real-time updates.
              </li>
              <li>
                <span className="bold_text_technologies">Database:</span>{" "}
                Firebase
              </li>
            </ul>
          </sction>
        </div>

        <section className="projects__images">
          <div className="project_image__item">
            <img
              className="project__image"
              src={`${process.env.PUBLIC_URL}/images/DogTinder/Image1.jpg`}
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src={`${process.env.PUBLIC_URL}/images/DogTinder/Image2.jpg`}
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src={`${process.env.PUBLIC_URL}/images/DogTinder/Image3.jpg`}
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src={`${process.env.PUBLIC_URL}/images/DogTinder/Image4.jpg`}
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src={`${process.env.PUBLIC_URL}/images/DogTinder/Image5.jpg`}
              alt="project_image"
            />
          </div>
        </section>
      </div>
    </>
  );
}
