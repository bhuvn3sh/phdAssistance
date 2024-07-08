import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./home.css";

function Home() {
  return (
    <>
      <Topbar />

      <div className="header">
        <div
          className="hero-wrap"
          style={{
            backgroundImage: "url(./assets/bg-2.jpg)",
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
                  <p
                    className="mb-4"
                    style={{ fontSize: "18px", color: "rgba(0, 0, 0, 0.8)" }}
                  >
                    The research journey is messy, full of difficulties and
                    surprises, hard work, beginnings and some form of closure.
                    ‘PhDAssistance Research Lab’ travels as part of this journey
                    by supervising and mentoring PhD researchers across the
                    globe.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn py-2 px-4"
                      style={{
                        backgroundColor: "#ADBBDA",
                        color: "#141619",
                        borderRadius: "1",
                        textDecoration: "none",
                      }}
                    >
                      Request a Quote
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-dark py-2 px-4"
                      style={{
                        color: "#fff",
                        borderRadius: "1",
                        textDecoration: "none",
                        marginLeft: "20px",
                      }}
                    >
                      Hire a Reasearcher
                    </a>
                  </p>
                </div>
              </div>
              <a
                href="https://vimeo.com/45830194"
                className="d-flex justify-content-end align-items-center"
                style={{
                  marginRight: "200px",
                  color: "#fff",
                  marginBottom: "200px",
                  paddingBottom: "300px",
                }}
              >
                <span className="fa fa-play"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section class="ftco-intro">
        <div class="container" style ={{ width: '100%', marginRight: 'auto', marginLeft: 'auto', paddingLeft: '15px', paddingRight: '15px'}}>
          <div class="row no-gutters ">

            <div class="col-md-3 d-flex">
              <div class="intro aside-stretch d-lg-flex w-60">
                <div class="icon">
                  <span class="fa-regular fa-bookmark"></span>
                </div>
                <div class="text">
                  <h2>Writing & Rewriting</h2>
                  <p>
                    Talk to our experts to rewrite your thesis or manuscript at any stage of your research or from scratch. 
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex" style ={{ marginLeft: '0px'}}>
              <div class="intro color-1 d-lg-flex w-60">
                <div class="icon">
                  <span class="fa-solid fa-magnifying-glass-chart"></span>
                </div>
                <div class="text">
                  <h2>Statistical Analysis </h2>
                  <p>
                  Consult us for statistical analyses, biostatistics or coding & algorithm development-related services. 
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="intro color-1 d-flex w-60">
                <div class="icon">
                  <span class="fa-regular fa-folder-open"></span>
                </div>
                <div class="text">
                  <h2>Peer Reviewing & Editing </h2>
                  <p>
                     Our experts edit your thesis and manuscripts, ensuring that they are easy to understand and acceptable for publication. 
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="intro color-1 d-lg-flex w-60">
                <div class="icon">
                  <span class="fa-regular fa-folder"></span>
                </div>
                <div class="text">
                  <h2>Consulting Services </h2>
                  <p>
                    Need consultation services on an hourly basis, use our hire a research assistant service. Easy and flexible. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
