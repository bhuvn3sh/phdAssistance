import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./home.css";

function Home() {
  return (
    <>
      <Topbar />
      <div
        className="hero-wrap"
        style={{
          backgroundImage:
            "url(https://themewagon.github.io/counselor/images/bg_1.jpg)",
          backgroundPosition: "50% 0%",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div classNameName="row no-gutters slider-text align-items-center">
            <div className="col-md-6 ftco-animate d-flex align-items-end">
              <div
                className="text w-100"
                style={{ marginTop: "200px", marginLeft: "40px" }}
              >
                <h1
                  className="mb-4"
                  style={{ fontSize: "50px", fontWeight: 600 }}
                >
                  {" "}
                  Your PhD Research Journey Starts Here !{" "}
                </h1>
                <p className="mb-4" style={{ fontSize: "18px", color: 'rgba(0, 0, 0, 0.8)' }}>
                  The research journey is messy, full of difficulties and
                  surprises, hard work, beginnings and some form of closure.
                  ‘PhDAssistance Research Lab’ travels as part of this journey
                  by supervising and mentoring PhD researchers across the globe.
                </p>
                <p>
                  <a href="#" className="btn py-2 px-4" style= {{ backgroundColor: '#ADBBDA',color: '#141619', borderRadius: '1', textDecoration: 'none'}}>
                    Request a Quote
                  </a>{" "}
                  <a href="#" className="btn btn-dark py-2 px-4" style= {{ color: '#fff', borderRadius: '1', textDecoration: 'none', marginLeft: '20px'}}>
                    Hire a Reasearcher
                  </a>
                </p>
              </div>
            </div>
            <a
              href="https://vimeo.com/45830194"
              className="img-video popup-vimeo d-flex align-items-center justify-content-center"
            >
              <span className="fa fa-play"></span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
