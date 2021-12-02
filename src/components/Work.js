import React from "react";
import "./Work.scss";
import MiriumImg from "../images/Mirum.jpg";
import WeatherImg from "../images/Clouds.jpg";
import PlannerImg from "../images/planner.jpg";
import CityComparisonImg from "../images/Two-City-Comparison-Tool.jpg";
import BudgetTracker from "../images/BudgetTracker.jpg";
import FitnessTracker from "../images/FitnessTracker.jpg";
import Beecomingme from "../images/Beecomingme.jpg"

function Work() {
  return (
    <section className="work">
      <h3 id="Work">Work</h3>
      
      <div className="container">
        <div className="small-container">
          <div
            className="item"
            href="http://beecomingme.com/"
            style={{
              backgroundImage: `url(${Beecomingme})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h4>Beecoming Me</h4>
            <p>
              <a href="https://github.com/courtbourt12/beecomingme">
                Github Repository Link
              </a>
            </p>
          </div>
        </div>

      <div className="container">
        <div className="small-container">
          <div
            className="item"
            href="https://mirum.herokuapp.com/"
            style={{
              backgroundImage: `url(${MiriumImg})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h4>Mirum</h4>
            <p>
              <a href="https://github.com/Pgandhi21/Mirum">
                Github Repository Link
              </a>
            </p>
          </div>
        </div>

        <div className="small-container">
          <div
            className="item"
            href="https://pgandhi21.github.io/Weather-Dashboard/"
            style={{
              backgroundImage: `url(${WeatherImg})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h4>Weather Dashboard</h4>
            <p>
              <a href="https://pgandhi21.github.io/Weather-Dashboard/">
                Github Repository Link
              </a>
            </p>
          </div>
        </div>

        <div className="small-container">
          <div
            className="item"
            href="https://pgandhi21.github.io/Day-planner/"
            style={{
              backgroundImage: `url(${PlannerImg})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h4>Day Planner</h4>
            <p>
              <a href="https://github.com/Pgandhi21/Day-planner">
                Github Repository Link
              </a>
            </p>
          </div>
        </div>

        <div className="small-container">
          <div
            className="item"
            href="https://pgandhi21.github.io/Two-City-Comparison-Tool/"
            style={{
              backgroundImage: `url(${CityComparisonImg})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h4>Two City Comparison Tool</h4>
            <p>
              <a href="https://github.com/Pgandhi21/Two-City-Comparison-Tool">
                Github Repository Link
              </a>
            </p>
          </div>
        </div>

        <div className="small-container">
          <div
            className="item"
            href="https://budget-tracker-55208.herokuapp.com/"
            style={{
              backgroundImage: `url(${BudgetTracker})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h4>Budget Tracker</h4>
            <p>
              <a href="https://github.com/Pgandhi21/Budget-tracker">
                Github Repository Link
              </a>
            </p>
          </div>
        </div>

        <div className="small-container">
          <div
            className="item"
            href="https://workout-tracker-86140.herokuapp.com/?id=618bd4808a677400167395c8"
            style={{
              backgroundImage: `url(${FitnessTracker})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h4>Fitness Tracker</h4>
            <p>
              <a href="https://github.com/Pgandhi21/Workout-Tracker">
                Github Repository Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
