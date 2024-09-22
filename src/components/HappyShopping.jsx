import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./WeatherApp.css";
export default function HappyShopping() {
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
          <h1>Happy Shopping</h1>
          <p>
            Developed a full-stack shopping website that allows users to sign up
            or browse as guests. Registered users can add new items to the
            store, as well as edit or delete their own listings. The site
            features a filter option to sort items by category, price, and name.
            Additionally, there is a user panel for registered users where they
            can view their listings and update their details, including
            username, email, and password. An admin panel is also available,
            enabling admins to delete users and remove all their associated
            listings from the site.
          </p>
          <sction className="projects__keyfeatures">
            <h1>Key Features</h1>
            <ul>
              <li>Sign-up functionality using MongoDB</li>
              <li>List new items</li>
              <li>User panel and Admin panel</li>
              <li>Filter through various items by name,price,category</li>
              <li>Event creators can edit or delete their events</li>
            </ul>
          </sction>

          <sction className="technologies projects__keyfeatures">
            <h1>Technologies</h1>
            <ul>
              <li>
                <span className="bold_text_technologies">
                  Programming Languages:
                </span>{" "}
                Utilizing JavaScript, HTML, and CSS.
              </li>
              <li>
                <span className="bold_text_technologies">Frameworks:</span>{" "}
                Built with React for an enhanced user experience and
                flexibility, along with Express.js and Node.js for server-side
                development.
              </li>
              <li>
                <span className="bold_text_technologies">Backend:</span> Powered
                by Express.js and Node.js.
              </li>
              <li>
                <span className="bold_text_technologies">
                  Real-Time Updates:
                </span>{" "}
                Incorporated Firebase snapshot listener to deliver instant
                updates.
              </li>
              <li>
                <span className="bold_text_technologies">Database:</span>{" "}
                Utilized MongoDB for effective data management.
              </li>
            </ul>
          </sction>
        </div>

        <section className="projects__images">
          <div className="project_image__item">
            <img
              className="project__image"
              src={`${process.env.PUBLIC_URL}/images/HappyShopping/Image1.png`}
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src={`${process.env.PUBLIC_URL}/images/HappyShopping/Image2.png`}
              alt="project_image"
            />
          </div>
          <div className="project_image__item resize__width">
            <img
              className="project__image"
              src={`${process.env.PUBLIC_URL}/images/HappyShopping/Image3.png`}
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src={`${process.env.PUBLIC_URL}/images/HappyShopping/Image4.png`}
              alt="project_image"
            />
          </div>
          <div className="project_image__item">
            <img
              className="project__image"
              src={`${process.env.PUBLIC_URL}/images/HappyShopping/Image5.png`}
              alt="project_image"
            />
          </div>
        </section>
      </div>
    </>
  );
}
