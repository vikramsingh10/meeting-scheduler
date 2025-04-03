import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="h1-heading2">CNNCT - Easy</h1>
        <h1 className="h1-heading">Scheduling Ahead</h1>
        <Link to="/signup" className="signup-btn">
          Sign up free
        </Link>
      </header>

      <section className="home-content">
        <img src="./assets/homeDashboard.png" alt="dashboard" />
        <div className="home-con1">
          <h2>Simplified scheduling for you and your team</h2>
          <p>
            CNNCT eliminates the back-and-forth of scheduling meetings so you
            can focus on what matters. Set your availability, share your link,
            <br /> and let others book time with you instantly.
          </p>
        </div>
        <div className="home-con2">
          <div className="homme-con2">
            <h2>
              Stay Organized with Your <br />
              Calender & Meetings
            </h2>
            <p>Seamless Event Scheduling </p>
            <ul>
              <li>
                View all your upcoming meetings and appointments in one place.
              </li>
              <li>
                Syncs with Google Calendar, Outlook, and iCloud to avoid
                conflicts
              </li>
              <li>
                Customize event types: one-on-ones, team meetings, group
                sessions, and webinars.
              </li>
            </ul>
          </div>
          <div className="home-images">
            <img src="./assets/homeCal1.png" alt="homeCal1" />
            <img src="./assets/homeCal2.png" alt="homeCal2" />
          </div>
        </div>
        <div className="home-con3">
          <div className="home-con3p1">
            <p>
              Here's what our <span>customer</span> <br />
              has to say
            </p>
            <button>Read customer stories</button>
          </div>
          <div className="home-con3p2">
            <img src="./assets/con3Icon.png" alt="" />
            <p>
              [short description goes in here] lorem <br /> ipsum is a
              placeholder text to demonstrate.
            </p>
          </div>
        </div>
        <div className="home-con4">
          <div className="con4div1">
            <p className="hd1">Amazing tool! Saved me months</p>
            <p className="hd2">
              This is a placeholder for your testimonials and what your client
              has to say. Put themhere and make sure its 100% true and
              meaningful.
            </p>
            <div className="name">
              <div className="blue-circle"></div>
              <p>
                John Master <br />
                Director, Spark.com
              </p>
            </div>
          </div>
          <div className="con4div2">
            <p className="hd1">Amazing tool! Saved me months</p>
            <p className="hd2">
              This is a placeholder for your testimonials and what your client
              has to say. Put themhere and make sure its 100% true and
              meaningful.
            </p>
            <div className="name">
              <div className="blue-circle"></div>
              <p>
                John Master <br />
                Director, Spark.com
              </p>
            </div>
          </div>
          <div className="con4div2">
            <p className="hd1">Amazing tool! Saved me months</p>
            <p className="hd2">
              This is a placeholder for your testimonials and what your client
              has to say. Put themhere and make sure its 100% true and
              meaningful.
            </p>
            <div className="name">
              <div className="blue-circle"></div>
              <p>
                John Master <br />
                Director, Spark.com
              </p>
            </div>
          </div>
          <div className="con4div1">
            <p className="hd1">Amazing tool! Saved me months</p>
            <p className="hd2">
              This is a placeholder for your testimonials and what your client
              has to say. Put themhere and make sure its 100% true and
              meaningful.
            </p>
            <div className="name">
              <div className="blue-circle"></div>
              <p>
                John Master <br />
                Director, Spark.com
              </p>
            </div>
          </div>
        </div>

        <div className="app-link">
          <h2>All Link Apps and Integrations</h2>
          <img src="./assets/apps.png" alt="apps" />
        </div>
      </section>

      <div className="footer">
        <div className="footer-content">
          <div className=" footer-column1">
            <Link to="/login">
              <button className="footer-lbtn">Login</button>
            </Link>

            <Link to="/signup">
              <button className="footer-sbtn">Sign up free</button>
            </Link>
          </div>

          <div className="footer-column">
            <a href="#">About CNNCT</a>
            <a href="#">Careers</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Blog</a>
            <a href="#">Getting Started</a>
          </div>

          <div className="footer-column">
            <a href="#">Privacy Policy</a>
            <a href="#">Press</a>
            <a href="#">Features and How-Tos</a>
            <a href="#">Cookie Notice</a>
            <a href="#">Social Good</a>
          </div>

          <div className="footer-column">
            <a href="#">FAQs</a>
            <a href="#">Trust Center</a>
            <a href="#">Contact</a>
            <a href="#">Report a Violation</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-note">
            We acknowledge the Traditional Custodians of the land on which our
            office stands, The Wurundjeri people of the Kulin Nation, and pay
            our respects to Elders past, present and emerging.
          </p>
          <img src="./assets/footerIcons.png" alt="Footer Icons" />
        </div>
      </div>
    </div>
  );
};

export default Home;
