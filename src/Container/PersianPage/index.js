import React, { Component } from 'react'

export default class PerianPage extends Component {
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
                      <a className="nav-link smooth-scroll fa-font" href="#about">
                        درباره
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll fa-font" href="#skill">
                        مهارت ها
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link smooth-scroll" href="#portfolio">
                        Portfolio
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll fa-font" href="#experience">
                        تجارب
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll fa-font" href="#contact">
                        تماس
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
                      <div className="h2 title fa-font">سید حسین علوی</div>
                      <p className="category text-white fa-font">
                         توسعه دهنده وب
                      </p>
                      {/* <a
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
                      </a> */}
                    </div>
                  </div>
                  <div className="section">
                    <div className="container">
                      <div className="button-container fa-font">
                        <a
                          className="btn btn-default btn-round btn-lg btn-icon"
                          href="https://www.linkedin.com/in/hosseyn-alavi/"
                          rel="tooltip"
                          title="من را در لینکداین دنبال کنید"
                        >
                          <i class="fa fa-linkedin" />
                        </a>
                        <a
                          className="btn btn-default btn-round btn-lg btn-icon"
                          href="https://twitter.com/s_hosseyn_a"
                          rel="tooltip"
                          title="من را در توییتر دنبال کنید"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                        <a
                          className="btn btn-default btn-round btn-lg btn-icon"
                          href="https://www.facebook.com/shosseyn.alavi"
                          rel="tooltip"
                          title="من را در فیسبوک دنبال کنید"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                        <a
                          className="btn btn-default btn-round btn-lg btn-icon"
                          href="https://www.instagram.com/hosseyn298/"
                          rel="tooltip"
                          title="من را در اینستاگرام دنبال کنید"
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
                        <div className="h4 mt-0 title fa-font"> اطلاعات اولیه</div>
                        <div className="row fa-font">
                          <div className="col-sm-4">
                            <strong className="text-uppercase">سن:</strong>
                          </div>
                          <div className="col-sm-8">27</div>
                        </div>
                        <div className="row mt-3 fa-font">
                          <div className="col-sm-4">
                            <strong className="text-uppercase">ایمیل:</strong>
                          </div>
                          <div className="col-sm-8">
                            s.m.hosseyn.alavi@gmail.com
                          </div>
                        </div>
                        <div className="row mt-3 fa-font">
                          <div className="col-sm-4">
                            <strong className="text-uppercase">تلفن:</strong>
                          </div>
                          <div className="col-sm-8" style={{direction:"ltr" , textAlign:"right"}}>+98933-991-9214</div>
                        </div>
                        <div className="row mt-3 fa-font">
                          <div className="col-sm-4">
                            <strong className="text-uppercase">
                              محل سکونت:
                            </strong>
                          </div>
                          <div className="col-sm-8">ایران ، کرمان</div>
                        </div>
                        <div className="row mt-3 fa-font">
                          <div className="col-sm-4">
                            <strong className="text-uppercase">
                              زبان ها:
                            </strong>
                          </div>
                          <div className="col-sm-8">پارسی ، انگلیسی</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="card-body fa-font">
                        <div className="h4 mt-0 title ">درباره</div>
                        <p className="fa-font">
                          سلام! من سید حسین علوی توسعه دهنده وب هستم
                        </p>
                        <p>
                          برنامه نویس وب با بیش از ۵ سال تجربه کدنویسی با زبان های مختلف و پلتفرم های متفاوت.
                          از ReactJS به عوان آخرین تکنولوژی استفاده میکنم <br />
                          همچنین در حوزه های مدیریت پروژه چندین تجربه موفق داشتم.
                          {/* <a href="https://templateflip.com/templates/creative-cv/" target="_blank">Learn More</a> */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section" id="skill">
              <div className="container">
                <div className="h4 text-center mb-4 title fa-font">
                  مهارت های حرفه ای
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
            <div className="section" id="portfolio" style={{ display: "none" }}>
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
                            <i className="fa fa-picture-o" aria-hidden="true" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#Photography"
                            role="tablist"
                          >
                            <i className="fa fa-camera" aria-hidden="true" />
                          </a>
                        </li>
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
                              <figure className="cc-effect">
                                <img src="images/project-1.jpg" alt="Web Development" />
                                <figcaption>
                                  <div className="h4">Recent Project</div>
                                  <p>Web Development</p>
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
                                <img src="images/project-2.jpg" alt="Web Development" />
                                <figcaption>
                                  <div className="h4">Startup Project</div>
                                  <p>Web Development</p>
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
                              <figure className="cc-effect">
                                <img src="images/project-3.jpg" alt="Web Development" />
                                <figcaption>
                                  <div className="h4">Food Order Project</div>
                                  <p>Web Development</p>
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
                                <img src="images/project-4.jpg" alt="Web Development" />
                                <figcaption>
                                  <div className="h4">
                                    Web Advertising Project
                                  </div>
                                  <p>Web Development</p>
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
                                  src="images/graphic-design-1.jpg"
                                  alt="Graphic Design"
                                />
                                <figcaption>
                                  <div className="h4">Triangle Pattern</div>
                                  <p>Graphic Design</p>
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
                                  src="images/graphic-design-2.jpg"
                                  alt="Graphic Design"
                                />
                                <figcaption>
                                  <div className="h4">Abstract Umbrella</div>
                                  <p>Graphic Design</p>
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
                                  src="images/graphic-design-3.jpg"
                                  alt="Graphic Design"
                                />
                                <figcaption>
                                  <div className="h4">Cube Surface Texture</div>
                                  <p>Graphic Design</p>
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
                                  src="images/graphic-design-4.jpg"
                                  alt="Graphic Design"
                                />
                                <figcaption>
                                  <div className="h4">Abstract Line</div>
                                  <p>Graphic Design</p>
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
                <div className="h4 text-center mb-4 title fa-font">تجارب کاری</div>
                <div className="card">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-experience-header fa-font">
                        <p>تیر 1396 - حال حاضر</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.zaravand.com"
                          >
                           شرکت کامپیوتری زراوند
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
                      <div className="card-body fa-font">
                        <div className="h5">توسعه دهنده فرانت اند</div>
                        <p>
                         برنامه نویسی با تکنولوژی ReactJS و با استفاده از RestAPI
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
                      <div className="card-body cc-experience-header fa-font">
                        <p>فروردین 1397 - فروردین 1398</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.zaravand.com"
                          >
                            شرکت کامپیوتری زراوند
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
                      <div className="card-body fa-font">
                        <div className="h5">مدیریت پروژه</div>
                        <p>
                          
                          - تحلیل کامل پروژه
                          <br />
                          - مدیریت منابع انسانی پروژه
                          <br />
                          - زمانبندی و پیگیری زمانبندی فاز به فاز
                          <br />- بررسی کدها ، تحلیل و طراحی در راستای اهداف پروژه
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
                      <div className="card-body cc-experience-header fa-font">
                        <p>فروردین 1395 - شهریور 1395</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.zaravand.com"
                          >
                            شرکت کامپیوتری زراوند
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
                      <div className="card-body fa-font">
                        <div className="h5">برنامه نویس فول استک</div>
                        <p>
                          - برنامه نویسی بک اند (Sql Server , Asp.Net)
                          <br />- برنامه نویسی فرانت اند (HTML , CSS, JavaScript ,
                          JQuery)
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
                      <div className="card-body cc-experience-header fa-font">
                        <p>دی 1394 - تیر 1397</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.bestooran.com"
                          >
                           استارتاپ بستوران
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
                      <div className="card-body fa-font">
                        <div className="h5">بنیانگذار و مدیر</div>
                        <p>
                          - تحلیل کامل پروژه و بازار
                          <br />
                          - ساخت تیم جهت تولید سایت و نرم افزارهای موبایل  <br />
                          - طراحی استراتژی کلی کسب و کار <br />
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
                      <div className="card-body cc-experience-header fa-font">
                        <p>دی 1391 - فروردین 1395</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.zaravand.com"
                          >
                            شرکت کامپیوتری زراوند
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
                      <div className="card-body fa-font">
                        <div className="h5">مسئول پشتیبانی نرم افزار</div>
                        <p>
                          - پشتیبانی محصولات تولید شده در شرکت <br />
                          - پشتیبانی سخت افزاری داخل شرکت
                          <br />
                          - مدیریت سرور و شبکه داخلی شرکت
                          <br />
                          - مدیریت ارتباط با مشتریان و رفع اشکالات نرم افزاری
                          <br />
                          - آموزش نرم افزارها به مشتریان <br />
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
                      <div className="card-body cc-experience-header fa-font">
                        <p>تیر 1391 - دی 1391</p>
                        <div className="h5">
                          <a
                            style={{ color: "white" }}
                            href="http://www.brc-co.ir"
                          >
                            بهارستان رایان
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
                      <div className="card-body fa-font">
                        <div className="h5">کارشناس سخت افزار</div>
                        <p>
                          - بررسی و رفع مشکلات سیستم های کامپیوتری<br />
                          - راه اندازی شبکه های کامپیوتری<br />
                          - آماده سازی و استقرار سرورها در شبکه<br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="container cc-education">
                <div className="h4 text-center mb-4 title fa-font">تحصیلات</div>
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
                <div className="card fa-font">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-education-header">
                        <p>1389 - 1393</p>
                        <div className="h5">مدرک کارشناسی</div>
                      </div>
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body">
                        <div className="h5">مهندسی فناوری اطلاعات</div>
                        <p className="category">
                          موسسه آموزش عالی کرمان
                        </p>
                        <p>
                          برخی دروس : <br />
                          - مدیریت استراتژیک<br />
                          - مدیریت پروژه<br />
                          - مبانی برنامه نویسی<br />
                          - هوش مصنوعی<br />
                          - مدیریت منایع انسانی<br />
                          - شبکه های کامپیوتری<br />
                          - برنامه نویسی پیشرفته<br />
                          - طراحی الگوریتم<br />
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
                        <div className="card mb-0 fa-font" data-aos="zoom-in">
                          <div className="h4 text-center title">ارتباط با من</div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="card-body">
                                <form
                                  action="https://formspree.io/sm92ha@gmail.com"
                                  method="POST"
                                >
                                  <div className="p pb-3 fa-font">
                                    <strong> راه های ارتباطی</strong>
                                  </div>
                                  <div className="row mb-3 " >
                                    <div className="col">
                                      <div className="input-group" style={{direction:"ltr"}}>
                                        <span className="input-group-addon">
                                          <i className="fa fa-user-circle" />
                                        </span>
                                        <input
                                        style={{direction:"rtl"}}
                                          className="form-control"
                                          type="text"
                                          name="name"
                                          placeholder="نام"
                                          required="required"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <div className="col">
                                      <div className="input-group " style={{direction:"ltr"}}>
                                        <span className="input-group-addon">
                                          <i className="fa fa-file-text" />
                                        </span>
                                        <input
                                        style={{direction:"rtl"}}
                                          className="form-control"
                                          type="text"
                                          name="Subject"
                                          placeholder="موضوع"
                                          required="required"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <div className="col">
                                      <div className="input-group" style={{direction:"ltr"}}>
                                        <span className="input-group-addon">
                                          <i className="fa fa-envelope" />
                                        </span>
                                        <input
                                        style={{direction:"rtl"}}
                                          className="form-control"
                                          type="email"
                                          name="_replyto"
                                          placeholder="ایمیل"
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
                                          placeholder="متن پیام"
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
                                        ارسال
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="card-body">
                                <p className="mb-0">
                                  <strong>محل سکونت </strong>
                                </p>
                                <p className="pb-2">
                                  ایران ، کرمان
                                </p>
                                <p className="mb-0">
                                  <strong>تلفن</strong>
                                </p>
                                <p className="pb-2" style={{direction:"ltr" , textAlign:"right"}}>+98933-991-9214</p>
                                <p className="mb-0">
                                  <strong>ایمیل</strong>
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
          <div className="h4 title text-center fa-font">سید حسین علوی</div>
          <div className="text-center text-muted">
            <p>&copy; Creative CV. All rights reserved.<br />Design - <a className="credit" href="https://templateflip.com">TemplateFlip</a></p>
          </div>
        </footer>
      </div>
    )
  }
}
