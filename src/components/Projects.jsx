import { useNavigate } from "react-router-dom";
export default function Projects() {
  const navigate = useNavigate();
  function handleWeatherApp() {
    navigate("/Weather-App");
  }
  function handleGamingHub() {
    navigate("/GamingHub");
  }
  function handleDogTinder() {
    navigate("/DogTinder");
  }
  function handleShopping() {
    navigate("/ShoppingSite");
  }
  return (
    <>
      <h1 className="projects-headline" id="projects">
        Projects
      </h1>
      <div className="projects">
        <div className="project-card">
          <h1>Weather App</h1>
          <p>
            Developed a dynamic Android application that displays weather
            information based on the user's location, with the added
            functionality to search for other cities. The app includes favorite
            and history pages. Data is fetched from a REST API, and the app is
            built using the MVVM architecture. I implemented GeoCoder for
            location handling, and used WorkManager to run background tasks for
            retrieving the user's location and sending a notification with the
            next day's weather forecast.
          </p>
          <ul className="project-card__technologies">
            <li>Kotlin</li>
            <li>Room DB</li>
            <li>WorkManager</li>
            <li>GeoCoder</li>
            <li>MVVM</li>
            <li>Retrofit</li>
            <li>Coroutines</li>
          </ul>
          <button className="project-card__button" onClick={handleWeatherApp}>
            View More
          </button>
        </div>

        <div className="project-card">
          <h1>Happy Shopping</h1>
          <p>
            Built a full-stack shopping website with features for both users and
            admins. Users can upload, edit, and delete items, while the admin
            panel provides comprehensive management capabilities.
          </p>
          <ul className="project-card__technologies">
            <li>React</li>
            <li>MongoDB</li>
            <li>Javascript</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>Express Js</li>
          </ul>
          <button className="project-card__button" onClick={handleShopping}>
            View More
          </button>
        </div>

        <div className="project-card">
          <h1>Gaming Hub</h1>
          <p>
            Created an app that fetches and displays data about the gaming
            industry, including game details, release dates, ratings, genres,
            and available platforms. The app allows users to explore different
            games and their attributes.
          </p>
          <ul className="project-card__technologies">
            <li>Java</li>
            <li>Firebase</li>
            <li>Rest Api</li>
          </ul>
          <button className="project-card__button" onClick={handleGamingHub}>
            View More
          </button>
        </div>

        <div className="project-card">
          <h1>Dog Tinder</h1>
          <p>
            Developed a social Android application in Kotlin utilizing Firebase,
            where users can create events aimed at bringing dog owners together.
            The app's purpose is to help users connect with others, fostering
            friendships among dog owners and enabling people to meet and make
            new connections.
          </p>
          <ul className="project-card__technologies">
            <li>Kotlin</li>
            <li>Firebase</li>
            <li>Coroutines</li>
            <li>MVVM</li>
          </ul>
          <button className="project-card__button" onClick={handleDogTinder}>
            View More
          </button>
        </div>
      </div>
    </>
  );
}
