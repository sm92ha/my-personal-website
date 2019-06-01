import React, { Component } from 'react'

export default class EnglishPage extends Component {
  render() {
    return (
         <div>
        <header>
          <div className="profile-page sidebar-collapse">
            <nav
              className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"
              color-on-scroll="400"
            >
              <div className="container">
                <div className="navbar-translate">
                {/* <a className="navbar-brand" href="http:\\www.hosseyn-alavi.ir" rel="tooltip"></a> */}
              <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-bar bar1"></span><span className="navbar-toggler-bar bar2"></span><span className="navbar-toggler-bar bar3"></span></button>
            </div>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navigation"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll" href="#about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll" href="#skill">
                        Skills
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll" href="#portfolio">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll" href="#experience">
                        Experience
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div className="page-content">
          <div>
            <div className="profile-page">
              <div className="wrapper">
                <div
                  className="page-header page-header-small"
                  filter-color="green"
                >
                  <div
                    className="page-header-image"
                    data-parallax="true"
                    style={{backgroundImage:`url(${require("../../images/cc-bg-1.jpg")})` }}
                  />
                  <div className="container">
                    <div className="content-center">
                      <div className="cc-profile-image">
                        <a href="http://www.hosseyn-alavi.ir">
                          <img
                            src={require("../../images/s-hosseyn.jpg")}
                            alt="hosseyn alavi"
                          />
                        </a>
                      </div>
                      <div className="h2 title">Hosseyn Alavi</div>
                      <p className="category text-white">
                        Web Developer
                      </p>
                      <a
                        className="btn btn-primary smooth-scroll mr-2"
                        href="#contact"
                        data-aos="zoom-in"
                        data-aos-anchor="data-aos-anchor"
                      >
                        Hire Me
                      </a>
                      <a
                        className="btn btn-primary"
                        href="http://www.hosseyn-alavi.ir/cv.pdf"
                        data-aos="zoom-in"
                        data-aos-anchor="data-aos-anchor"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                  <div className="section">
                    <div className="container">
                      <div className="button-container">
                        <a
                          className="btn btn-default btn-round btn-lg btn-icon"
                          href="https://www.linkedin.com/in/hosseyn-alavi/"
                          rel="tooltip"
                          title="Follow me on LinkedIn"
                        >
                          <i class="fa fa-linkedin" />
                        </a>
                        <a
                          className="btn btn-default btn-round btn-lg btn-icon"
                          href="https://twitter.com/s_hosseyn_a"
                          rel="tooltip"
                          title="Follow me on Twitter"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                        <a
                          className="btn btn-default btn-round btn-lg btn-icon"
                          href="https://www.facebook.com/shosseyn.alavi"
                          rel="tooltip"
                          title="Follow me on Facebook"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                        <a
                          className="btn btn-default btn-round btn-lg btn-icon"
                          href="https://www.instagram.com/hosseyn298/"
                          rel="tooltip"
                          title="Follow me on Instagram"
                        >
                          <i className="fa fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section" id="about">
              <div className="container">
                <div className="card" data-aos="fade-up" data-aos-offset="10">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="card-body">
                        <div className="h4 mt-0 title">About</div>
                        <p>
                          Hello! I am Hosseyn Alavi.Project Manager and Web
                          Developer
                        </p>
                        <p>
                        A passionate front-end developer with 5 years of programming experience using a variety of languages.<br/> During all my professional life, I do not remember even one day of not learning something new and now I can make beautiful, smooth, yet sophisticated applications, also when facing a challenge, I get so excited to solve it.<br /> My biggest concern is to stay up-to-date and I love contributing my knowledge and experience to others. 
                          {/* <a href="https://templateflip.com/templates/creative-cv/" target="_blank">Learn More</a> */}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="card-body">
                        <div className="h4 mt-0 title">Basic Information</div>
                        <div className="row">
                          <div className="col-sm-4">
                            <strong className="text-uppercase">Age:</strong>
                          </div>
                          <div className="col-sm-8">27</div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-sm-4">
                            <strong className="text-uppercase">Email:</strong>
                          </div>
                          <div className="col-sm-8">
                            s.m.hosseyn.alavi@gmail.com
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-sm-4">
                            <strong className="text-uppercase">Phone:</strong>
                          </div>
                          <div className="col-sm-8">+98933-991-9214</div>
                        </div>
                        {/* <div className="row mt-3">
                          <div className="col-sm-4">
                            <strong className="text-uppercase">
                              Location:
                            </strong>
                          </div>
                          <div className="col-sm-8">Kerman , Iran</div>
                        </div> */}
                        <div className="row mt-3">
                          <div className="col-sm-4">
                            <strong className="text-uppercase">
                              Language:
                            </strong>
                          </div>
                          <div className="col-sm-8">English, Persian</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section" id="skill">
              <div className="container">
                <div className="h4 text-center mb-4 title">
                  Professional Skills
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <div className="card-body">
                    <div className="row">

                    <div className="col-md-6">
                        <div className="progress-container progress-primary">
                          <span className="progress-badge">Java Script </span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              data-aos="progress-full"
                              data-aos-offset="10"
                              data-aos-duration="2000"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "80%" }}
                            />
                            <span className="progress-value">80%</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="progress-container progress-primary">
                          <span className="progress-badge">React JS</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              data-aos="progress-full"
                              data-aos-offset="10"
                              data-aos-duration="2000"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "90%" }}
                            />
                            <span className="progress-value">90%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">

                   
                      
                      <div className="col-md-6">
                        <div className="progress-container progress-primary">
                          <span className="progress-badge">Node JS </span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              data-aos="progress-full"
                              data-aos-offset="10"
                              data-aos-duration="2000"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "65%" }}
                            />
                            <span className="progress-value">65%</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="progress-container progress-primary">
                          <span className="progress-badge">React Native</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              data-aos="progress-full"
                              data-aos-offset="10"
                              data-aos-duration="2000"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "50%" }}
                            />
                            <span className="progress-value">50%</span>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    {/* <div className="row">
                     
                   

                      
                    </div> */}
                    <div className="row">
                    <div className="col-md-6">
                        <div className="progress-container progress-primary">
                          <span className="progress-badge">SQL Server</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              data-aos="progress-full"
                              data-aos-offset="10"
                              data-aos-duration="2000"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "70%" }}
                            />
                            <span className="progress-value">70%</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="progress-container progress-primary">
                          <span className="progress-badge">MongoDB</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              data-aos="progress-full"
                              data-aos-offset="10"
                              data-aos-duration="2000"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "50%" }}
                            />
                            <span className="progress-value">50%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="progress-container progress-primary">
                          <span className="progress-badge">Restfull Api</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              data-aos="progress-full"
                              data-aos-offset="10"
                              data-aos-duration="2000"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "80%" }}
                            />
                            <span className="progress-value">80%</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="progress-container progress-primary">
                          <span className="progress-badge">Graph QL</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              data-aos="progress-full"
                              data-aos-offset="10"
                              data-aos-duration="2000"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "50%" }}
                            />
                            <span className="progress-value">50%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="progress-container progress-primary">
                          <span className="progress-badge">HTML</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              data-aos="progress-full"
                              data-aos-offset="10"
                              data-aos-duration="2000"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "80%" }}
                            />
                            <span className="progress-value">80%</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="progress-container progress-primary">
                          <span className="progress-badge">CSS</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              data-aos="progress-full"
                              data-aos-offset="10"
                              data-aos-duration="2000"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "80%" }}
                            />
                            <span className="progress-value">80%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section" id="portfolio" 
            // style={{ display: "none" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6 ml-auto mr-auto">
                    <div className="h4 text-center mb-4 title">Portfolio</div>
                    <div className="nav-align-center">
                      <ul
                        className="nav nav-pills nav-pills-primary"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#web-development"
                            role="tablist"
                          >
                            <i className="fa fa-laptop" aria-hidden="true" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#graphic-design"
                            role="tablist"
                          >
                            <i className="fa fa-internet-explorer" aria-hidden="true" />
                          </a>
                        </li>
                        {/* <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#Photography"
                            role="tablist"
                          >
                            <i className="fa fa-camera" aria-hidden="true" />
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-content gallery mt-5">
                  <div className="tab-pane active" id="web-development">
                    <div className="ml-auto mr-auto">
                      <div className="row">
                        <div className="col-md-6">
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#web-development">
                              <figure className="cc-effect" style={{display:"flex",justifyContent:"space-around"}}>
                                <img src={require("../../images/portfolio/BestooranMobile1.jpg")} alt="Web Development" style={{width: "45%",height:"100%"}}/>
                                <img src={require("../../images/portfolio/BestooranMobile2.jpg")} alt="Web Development" style={{width: "45%",height:"100%"}}/>
                                <figcaption>
                                  <div className="h4">Bestooran Mobile App</div>
                                  <p>Project Manager , FrontEnd Developer</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#web-development">
                              <figure className="cc-effect">
                                <img src={require("../../images/portfolio/BestooranWebSite2.jpg")}  alt="Web Development" />
                                <figcaption>
                                  <div className="h4">Bestooran Website</div>
                                  <p>Project Manager , FrontEnd Developer</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#web-development">
                              <figure className="cc-effect">
                                <img src={require("../../images/portfolio/HHS2.jpg")}  alt="Web Development" />
                                <figcaption>
                                  <div className="h4">Home Service Website</div>
                                  <p>FullStack Developer , Part Of team</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#web-development">
                              <figure className="cc-effect">
                                <img src={require("../../images/portfolio/chapimoCP.JPG")}  alt="Web Development" />
                                <figcaption>
                                  <div className="h4">Chapimo Conrol Panel</div>
                                  <p>FrontEnd Developer</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#web-development">
                              <figure className="cc-effect" style={{display:"flex",justifyContent:"space-around"}}>
                                <img src={require("../../images/portfolio/ITSGCO1.jpg")} alt="Web Development" style={{width: "45%",height:"100%"}} />
                                <img src={require("../../images/portfolio/ITSGCO2.jpg")} alt="Web Development" style={{width: "45%",height:"100%"}} />
                                <figcaption>
                                  <div className="h4">ITSGCO Company Login App</div>
                                  <p>iOS and Andriod Developer With React native</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#web-development">
                              <figure className="cc-effect">
                                <img src={require("../../images/portfolio/SuniMarket.JPG")} alt="Web Development" />
                                <figcaption>
                                  <div className="h4">
                                    Suni Market Project
                                  </div>
                                  <p>Project Manager , FrontEnd Developer</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#web-development">
                              <figure className="cc-effect">
                                <img src={require("../../images/portfolio/Quizztion1.JPG")} alt="Web Development" />
                                <figcaption>
                                  <div className="h4">
                                    Quiztion Game Control Panel
                                  </div>
                                  <p>FrontEnd Developer</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="graphic-design" role="tabpanel">
                    <div className="ml-auto mr-auto">
                      <div className="row">
                        <div className="col-md-6">
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#graphic-design">
                              <figure className="cc-effect">
                                <img
                                  src={require("../../images/portfolio/Cargo1.PNG")}
                                  alt="Graphic Design"
                                />
                                <figcaption>
                                  <div className="h4">Online Cargo Project - 1</div>
                                  <p>FrontEnd Developer</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#graphic-design">
                              <figure className="cc-effect">
                                <img
                                  src={require("../../images/portfolio/Cargo2.JPG")}
                                  alt="Graphic Design"
                                />
                                <figcaption>
                                  <div className="h4">Online Cargo Project - 2</div>
                                  <p>FrontEnd Developer</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#graphic-design">
                              <figure className="cc-effect">
                                <img
                                  src={require("../../images/portfolio/Cargo4.JPG")}
                                  alt="Graphic Design"
                                />
                                <figcaption>
                                  <div className="h4">Online Cargo Project - 3</div>
                                  <p>FrontEnd Developer</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#graphic-design">
                              <figure className="cc-effect">
                                <img
                                  src={require("../../images/portfolio/Zaramad2.jpg")}
                                  alt="Graphic Design"
                                />
                                <figcaption>
                                  <div className="h4">Municipality Income Management System</div>
                                  <p>Project Manager ,Analyzer, FrontEnd Developer</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#graphic-design">
                              <figure className="cc-effect">
                                <img
                                  src={require("../../images/portfolio/Zaramad3.jpg")}
                                  alt="Graphic Design"
                                />
                                <figcaption>
                                  <div className="h4">Municipality Income Management System</div>
                                  <p>Project Manager ,Analyzer, FrontEnd Developer</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#graphic-design">
                              <figure className="cc-effect">
                                <img
                                  src={require("../../images/portfolio/Zaramad4.jpg")}
                                  alt="Graphic Design"
                                />
                                <figcaption>
                                  <div className="h4">Municipality Income Management System</div>
                                  <p>Project Manager ,Analyzer, FrontEnd Developer</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="Photography" role="tabpanel">
                    <div className="ml-auto mr-auto">
                      <div className="row">
                        <div className="col-md-6">
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#Photography">
                              <figure className="cc-effect">
                                <img
                                  src="images/photography-1.jpg"
                                  alt="Photography"
                                />
                                <figcaption>
                                  <div className="h4">Photoshoot</div>
                                  <p>Photography</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#Photography">
                              <figure className="cc-effect">
                                <img
                                  src="images/photography-3.jpg"
                                  alt="Photography"
                                />
                                <figcaption>
                                  <div className="h4">Wedding Photoshoot</div>
                                  <p>Photography</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#Photography">
                              <figure className="cc-effect">
                                <img
                                  src="images/photography-2.jpg"
                                  alt="Photography"
                                />
                                <figcaption>
                                  <div className="h4">Beach Photoshoot</div>
                                  <p>Photography</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                          <div
                            className="cc-porfolio-image img-raised"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <a href="#Photography">
                              <figure className="cc-effect">
                                <img
                                  src="images/photography-4.jpg"
                                  alt="Photography"
                                />
                                <figcaption>
                                  <div className="h4">Nature Photoshoot</div>
                                  <p>Photography</p>
                                </figcaption>
                              </figure>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section" id="experience">
              <div className="container cc-experience">
                <div className="h4 text-center mb-4 title">Work Experience</div>
                <div className="card">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-experience-header">
                        <p>June 2017 - Present</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.zaravand.com"
                          >
                            Zaravand
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body">
                        <div className="h5">FrontEnd Developer</div>
                        <p>
                          Coding With ReactJS Technology And Using Restfull Api <br />
                          Leading Other Developers (FrontEnd and BackEnd) <br />
                          Analysis Of The Projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-experience-header">
                        <p>March 2019 - June 2019</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.akafweb.com"
                          >
                            Akaf Web
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body">
                        <div className="h5">FrontEnd Developer</div>
                        <p>
                          Coding With ReactJS Technology And Using Restfull Api
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-experience-header">
                        <p>February 2018 - March 2019</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.zaravand.com"
                          >
                            Zaravand
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body">
                        <div className="h5">Project Manager</div>
                        <p>
                          - Complete The Project Before Deadline <br />
                          - Deploy It Successfully In Over 20 Cities <br />
                          - Full Analysis Of The Project
                          <br />
                          - Human Resource Management Of The Project
                          <br />
                          - Schedule And Track The Schedule Of The Project Team
                          <br />- Code Review, Analysis And Design In Line With
                          The Purpose Of The Project
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-experience-header">
                        <p>February 2016 - June 2017</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.zaravand.com"
                          >
                            Zaravand
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body">
                        <div className="h5">Full Stack Developer</div>
                        <p>
                          - BackEnd Develop (Sql Server , Asp.Net)
                          <br />- FrontEnd Develop (HTML , CSS, JavaScript ,
                          JQuery) <br />
                          - Database Admin <br />
                          - R&D team
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-experience-header">
                        <p>January 2016 - May 2018</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.bestooran.ir"
                          >
                            Bestooran
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body">
                        <div className="h5">Founder and Manager</div>
                        <p>
                          - Analysis Of The Whole Project And Market
                          <br />
                          - Create A Team To Develop BackEnd ,FrontEnd , Android
                          App And iOS App <br />
                          - Design General Business Strategy <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-experience-header">
                        <p>January 2013 - February 2016</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.zaravand.com"
                          >
                            Zaravand
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body">
                        <div className="h5">Software Support</div>
                        <p>
                          - Company Software Products Support <br />
                          - Hardware Support Inside The Company
                          <br />
                          - Server And Network Admin Inside The Company
                          <br />
                          - Customer Relationship Management to Fix Software
                          Problems
                          <br />
                          - Training Clients To Work With Software <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-experience-header">
                        <p>June 2012 - January 2013</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.brc-co.ir"
                          >
                            BRC Co.
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body">
                        <div className="h5">Hardware Technician</div>
                        <p>
                          - Check And Fix Computer Problems<br />
                          - Setting Up Computer Networks<br />
                          - Setting up and Deploying Servers In Networks<br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="container cc-education">
                <div className="h4 text-center mb-4 title">Education</div>
                {/* <div className="card">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-education-header">
                        <p>2013 - 2015</p>
                        <div className="h5">Master's Degree</div>
                      </div>
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body">
                        <div className="h5">
                          Master of Information Technology
                        </div>
                        <p className="category">
                          University of Computer Science
                        </p>
                        <p>
                          Euismod massa scelerisque suspendisse fermentum
                          habitant vitae ullamcorper magna quam iaculis,
                          tristique sapien taciti mollis interdum sagittis
                          libero nunc inceptos tellus, hendrerit vel eleifend
                          primis lectus quisque cubilia sed mauris. Lacinia
                          porta vestibulum diam integer quisque eros pulvinar
                          curae, curabitur feugiat arcu vivamus parturient
                          aliquet laoreet at, eu etiam pretium molestie
                          ultricies sollicitudin dui.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="card">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-education-header">
                        <p>2010 - 2014</p>
                        <div className="h5">Bachelor's Degree</div>
                      </div>
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body">
                        <div className="h5">Information Technology Engineering</div>
                        <p className="category">
                          Kerman Institute of Higher Education
                        </p>
                        <p>
                          Courses : <br />
                          - Strategic Management<br />
                          - Project Management<br />
                          - Programming Basics<br />
                          - Artificial Intelligence<br />
                          - Human Resources Management<br />
                          - Computer Networks<br />
                          - Advanced programming<br />
                          - Algorithm Design <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="card">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-education-header">
                        <p>2007 - 2009</p>
                        <div className="h5">High School</div>
                      </div>
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body">
                        <div className="h5">Science and Mathematics</div>
                        <p className="category">School of Secondary board</p>
                        <p>
                          Euismod massa scelerisque suspendisse fermentum
                          habitant vitae ullamcorper magna quam iaculis,
                          tristique sapien taciti mollis interdum sagittis
                          libero nunc inceptos tellus, hendrerit vel eleifend
                          primis lectus quisque cubilia sed mauris. Lacinia
                          porta vestibulum diam integer quisque eros pulvinar
                          curae, curabitur feugiat arcu vivamus parturient
                          aliquet laoreet at, eu etiam pretium molestie
                          ultricies sollicitudin dui.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="section" id="reference" style={{ display: "none" }}>
              <div className="container cc-reference">
                <div className="h4 mb-4 text-center title">References</div>
                <div className="card" data-aos="zoom-in">
                  <div
                    className="carousel slide"
                    id="cc-Indicators"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        className="active"
                        data-target="#cc-Indicators"
                        data-slide-to="0"
                      />
                      <li data-target="#cc-Indicators" data-slide-to="1" />
                      <li data-target="#cc-Indicators" data-slide-to="2" />
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-lg-2 col-md-3 cc-reference-header">
                            <img
                              src="images/reference-image-1.jpg"
                              alt="Aiyana"
                            />
                            <div className="h5 pt-2">Aiyana</div>
                            <p className="category">CEO / WEBM</p>
                          </div>
                          <div className="col-lg-10 col-md-9">
                            <p>
                              Habitasse venenatis commodo tempor eleifend arcu
                              sociis sollicitudin ante pulvinar ad, est porta
                              cras erat ullamcorper volutpat metus duis platea
                              convallis, tortor primis ac quisque etiam luctus
                              nisl nullam fames. Ligula purus suscipit tempus
                              nascetur curabitur donec nam ullamcorper, laoreet
                              nullam mauris dui aptent facilisis neque elementum
                              ac, risus semper felis parturient fringilla
                              rhoncus eleifend.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-lg-2 col-md-3 cc-reference-header">
                            <img
                              src="images/reference-image-2.jpg"
                              alt="Braiden"
                            />
                            <div className="h5 pt-2">Braiden</div>
                            <p className="category">CEO / Creativem</p>
                          </div>
                          <div className="col-lg-10 col-md-9">
                            <p>
                              Habitasse venenatis commodo tempor eleifend arcu
                              sociis sollicitudin ante pulvinar ad, est porta
                              cras erat ullamcorper volutpat metus duis platea
                              convallis, tortor primis ac quisque etiam luctus
                              nisl nullam fames. Ligula purus suscipit tempus
                              nascetur curabitur donec nam ullamcorper, laoreet
                              nullam mauris dui aptent facilisis neque elementum
                              ac, risus semper felis parturient fringilla
                              rhoncus eleifend.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-lg-2 col-md-3 cc-reference-header">
                            <img
                              src="images/reference-image-3.jpg"
                              alt="Alexander"
                            />
                            <div className="h5 pt-2">Alexander</div>
                            <p className="category">CEO / Webnote</p>
                          </div>
                          <div className="col-lg-10 col-md-9">
                            <p>
                              Habitasse venenatis commodo tempor eleifend arcu
                              sociis sollicitudin ante pulvinar ad, est porta
                              cras erat ullamcorper volutpat metus duis platea
                              convallis, tortor primis ac quisque etiam luctus
                              nisl nullam fames. Ligula purus suscipit tempus
                              nascetur curabitur donec nam ullamcorper, laoreet
                              nullam mauris dui aptent facilisis neque elementum
                              ac, risus semper felis parturient fringilla
                              rhoncus eleifend.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section" id="contact">
              <div
                className="cc-contact-information"
                style={{ backgroundImage:`url(${require("../../images/staticmap.png")})`  }}
              >
                <div className="container">
                  <div className="cc-contact">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="card mb-0" data-aos="zoom-in">
                          <div className="h4 text-center title">Contact Me</div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="card-body">
                                <form
                                  action="https://formspree.io/sm92ha@gmail.com"
                                  method="POST"
                                >
                                  <div className="p pb-3">
                                    <strong>Feel free to contact me </strong>
                                  </div>
                                  <div className="row mb-3">
                                    <div className="col">
                                      <div className="input-group">
                                        <span className="input-group-addon">
                                          <i className="fa fa-user-circle" />
                                        </span>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="name"
                                          placeholder="Name"
                                          required="required"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <div className="col">
                                      <div className="input-group">
                                        <span className="input-group-addon">
                                          <i className="fa fa-file-text" />
                                        </span>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="Subject"
                                          placeholder="Subject"
                                          required="required"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <div className="col">
                                      <div className="input-group">
                                        <span className="input-group-addon">
                                          <i className="fa fa-envelope" />
                                        </span>
                                        <input
                                          className="form-control"
                                          type="email"
                                          name="_replyto"
                                          placeholder="E-mail"
                                          required="required"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <div className="col">
                                      <div className="form-group">
                                        <textarea
                                          className="form-control"
                                          name="message"
                                          placeholder="Your Message"
                                          required="required"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <button
                                        className="btn btn-primary"
                                        type="submit"
                                      >
                                        Send
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="card-body">
                                {/* <p className="mb-0">
                                  <strong>Location </strong>
                                </p>
                                <p className="pb-2">
                                  Kerman , Iran
                                </p> */}
                                <p className="mb-0">
                                  <strong>Phone</strong>
                                </p>
                                <p className="pb-2">+98933-991-9214</p>
                                <p className="mb-0">
                                  <strong>Email</strong>
                                </p>
                                <p>s.m.hosseyn.alavi@gmail.com</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container text-center">
            <a className="cc-facebook btn btn-link" href="https://www.facebook.com/shosseyn.alavi">
              <i className="fa fa-facebook fa-2x " aria-hidden="true" />
            </a>
            <a className="cc-twitter btn btn-link " href="https://twitter.com/s_hosseyn_a">
              <i className="fa fa-twitter fa-2x " aria-hidden="true" />
            </a>
            <a className="cc-linkedin btn btn-link" href="https://www.linkedin.com/in/hosseyn-alavi/">
              <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
            </a>
            <a className="cc-instagram btn btn-link" href="https://www.instagram.com/hosseyn298/">
              <i className="fa fa-instagram fa-2x " aria-hidden="true" />
            </a>
          </div>
          <div className="h4 title text-center">Hosseyn Alavi</div>
          <div className="text-center text-muted">
            <p>&copy; Creative CV. All rights reserved.<br />Design - <a className="credit" href="https://templateflip.com">TemplateFlip</a></p>
          </div>
        </footer>
      </div>
    )
  }
}
