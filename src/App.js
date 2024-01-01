import React from "react";
import "./App.css";
import Home from "./Components/home";
import About from "./Components/about";
import Services from "./Components/services";
import Contact from "./Components/contact";
export default function App() {
  return (
    <div className="bg_primary">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex  justify-content-between">
          <div>
            <a className="navbar-brand " href="#">
              Kumar Creators
            </a>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
       
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="\Assets\download.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="\Assets\download (1).jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="\Assets\images (2).jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
       
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Home />
      <About />
      <Services />
      
      <div className="card">
        <div class="card-group">
          <div class="card">
            <img
              src="\Assets\images (1).jpg"
              class="card-img-top h-50"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Web Development</h5>
              <p class="card-text">
                {" "}
                We are providing web-development services and a seasoned web
                developer with a passion for crafting exceptional online
                experiences. With a strong foundation in web technologie`s and a
                creative mindset, I specialize in designing and building
                websites that are not only visually stunning but also functional
                and user-friendly.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="\Assets\images.png" class="card-img-top h-50" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Consultancy</h5>
              <p class="card-text">
                We are a trusted consultancy firm committed to delivering
                exceptional solutions and strategic guidance to our clients.
                With a wealth of expertise in diverse industries, we bring
                clarity to complex challenges and empower organizations to
                thrive in an ever-changing business landscape.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="\Assets\images (5).jpg"
              class="card-img-top h-50"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Event Orsiginers</h5>
              <p class="card-text">
                {" "}
                We are dedicated and experienced event organizer with a passion
                for curating memorable experiences. With a proven track record
                of successfully planning and executing a wide range of events, I
                bring creativity, attention to detail, and exceptional
                organizational skills to every projec.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>

        

       
      </div>
     
     <Contact />
    </div>
  );
}
