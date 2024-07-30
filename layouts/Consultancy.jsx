import React from 'react'

function Consultancy() {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Axtra HTML5 Template" />
        <title>Service - Axtra</title>
        {/* Fav Icon */}
        <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* All CSS files */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/all.min.css" />
        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="assets/css/progressbar.css" />
        <link rel="stylesheet" href="assets/css/meanmenu.min.css" />
        <link rel="stylesheet" href="assets/css/master.css" />
        <link rel="stylesheet" href="style.css" />
        {/* Cursor Animation */}
        <div className="cursor1" />
        <div className="cursor2" />
        {/* Preloader */}
        <div className="preloader">
          <div className="loading">
            <div className="bar bar1" />
            <div className="bar bar2" />
            <div className="bar bar3" />
            <div className="bar bar4" />
            <div className="bar bar5" />
            <div className="bar bar6" />
            <div className="bar bar7" />
            <div className="bar bar8" />
          </div>
        </div>
        {/* Switcher Area Start */}
        <div className="switcher__area">
          <div className="switcher__icon">
            <button id="switcher_open">
              <i className="fa-solid fa-gear" />
            </button>
            <button id="switcher_close">
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="switcher__items">
            <div className="switcher__item">
              <div className="switch__title-wrap">
                <h2 className="switcher__title">Cursor</h2>
              </div>
              <div className="switcher__btn">
                <select name="cursor-style" id="cursor_style">
                  <option value={1}>default</option>
                  <option selected="" value={2}>
                    animated
                  </option>
                </select>
              </div>
            </div>
            <div className="switcher__item">
              <div className="switch__title-wrap">
                <h2 className="switcher__title">mode</h2>
              </div>
              <div className="switcher__btn mode-type wc-col-2">
                <button className="active" data-mode="light">
                  light
                </button>
                <button data-mode="dark">dark</button>
              </div>
            </div>
            <div className="switcher__item">
              <div className="switch__title-wrap">
                <h2 className="switcher__title">Language Support</h2>
              </div>
              <div className="switcher__btn lang_dir wc-col-2">
                <button className="active" data-mode="ltr">
                  LTR
                </button>
                <button data-mode="rtl">RTL</button>
              </div>
            </div>
          </div>
        </div>
        {/* Switcher Area End */}
        {/* Scroll Smoother */}
        <div className="has-smooth" id="has_smooth" />
        {/* Go Top Button */}
        <button id="scroll_top" className="scroll-top">
          <i className="fa-solid fa-arrow-up" />
        </button>
        {/* Header area start */}
        <header className="header__area">
          <div className="header__inner">
            <div className="header__logo">
              <a href="index.html">
                <img
                  className="logo-primary"
                  src="assets/imgs/logo/site-logo-white.png"
                  alt="Site Logo"
                />
                <img
                  className="logo-secondary"
                  src="assets/imgs/logo/site-logo-white-2.png"
                  alt="Moibile Logo"
                />
              </a>
            </div>
            <div className="header__nav-icon">
              <button id="open_offcanvas">
                <img src="assets/imgs/icon/menu-white.png" alt="Menubar Icon" />
              </button>
            </div>
            <div className="header__support">
              <p>
                Support center <a href="tel:+9587325902">+9 587 325 902</a>
              </p>
            </div>
          </div>
        </header>
        {/* Header area end */}
        {/* Offcanvas area start */}
        <div className="offcanvas__area">
          <div className="offcanvas__body">
            <div className="offcanvas__left">
              <div className="offcanvas__logo">
                <a href="index.html">
                  <img src="assets/imgs/logo/site-logo-white-2.png" alt="Offcanvas Logo" />
                </a>
              </div>
              <div className="offcanvas__social">
                <h3 className="social-title">Follow Us</h3>
                <ul>
                  <li>
                    <a href="#">Dribbble</a>
                  </li>
                  <li>
                    <a href="#">Behance</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">YouTube</a>
                  </li>
                </ul>
              </div>
              <div className="offcanvas__links">
                <ul>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="contact.html">contact</a>
                  </li>
                  <li>
                    <a href="career.html">Career</a>
                  </li>
                  <li>
                    <a href="blog.html">blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="offcanvas__mid">
              <div className="offcanvas__menu-wrapper">
                <nav className="offcanvas__menu">
                  <ul className="menu-anim">
                    <li>
                      <a>home</a>
                      <ul>
                        <li>
                          <a href="index.html">Digital Maketing</a>
                        </li>
                        <li>
                          <a href="index-dark.html">Digital Maketing dark</a>
                        </li>
                        <li>
                          <a href="index-2.html">Design Studio </a>
                        </li>
                        <li>
                          <a href="index-2-dark.html">Design Studio dark</a>
                        </li>
                        <li>
                          <a href="index-3.html">Digital Agency</a>
                        </li>
                        <li>
                          <a href="index-3-dark.html">Digital Agency dark</a>
                        </li>
                        <li>
                          <a href="index-7.html">creative Agency</a>
                        </li>
                        <li>
                          <a href="index-7-dark.html">creative Agency dark</a>
                        </li>
                        <li>
                          <a href="index-6.html">Startup Agency</a>
                        </li>
                        <li>
                          <a href="index-6-dark.html">Startup Agency dark</a>
                        </li>
                        <li>
                          <a href="index-8.html">modern agency</a>
                        </li>
                        <li>
                          <a href="index-8-dark.html">modern agency dark</a>
                        </li>
                        <li>
                          <a href="index-4.html">personal Portfolio</a>
                        </li>
                        <li>
                          <a href="index-4-dark.html">personal Portfolio dark</a>
                        </li>
                        <li>
                          <a href="index-5.html">portfolio showcase</a>
                        </li>
                        <li>
                          <a href="index-5-dark.html">portfolio showcase dark</a>
                        </li>
                        <li>
                          <a href="index-10.html">showcase carousel</a>
                        </li>
                        <li>
                          <a href="index-10-dark.html">showcase carousel dark</a>
                        </li>
                        <li>
                          <a href="index-12.html">Interactive link </a>
                        </li>
                        <li>
                          <a href="index-12-dark.html">Interactive link dark</a>
                        </li>
                        <li>
                          <a href="index-13.html">portfolio masonry</a>
                        </li>
                        <li>
                          <a href="index-13-dark.html">portfolio masonry dark</a>
                        </li>
                        <li>
                          <a href="index-14.html">vertical grid</a>
                        </li>
                        <li>
                          <a href="index-14-dark.html">vertical grid dark</a>
                        </li>
                        <li>
                          <a href="index-15.html">Interactive image slider</a>
                        </li>
                        <li>
                          <a href="index-15-dark.html">Interactive image slider dark</a>
                        </li>
                        <li>
                          <a href="index-16.html">showcase parallax</a>
                        </li>
                        <li>
                          <a href="index-16-dark.html">showcase parallax dark</a>
                        </li>
                        <li>
                          <a href="index-17.html">logo showcase</a>
                        </li>
                        <li>
                          <a href="index-17-dark.html">logo showcase dark</a>
                        </li>
                        <li>
                          <a href="index-9.html">showcase slider</a>
                        </li>
                        <li>
                          <a href="index-11.html">Interactive hover showcase</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">about</a>
                    </li>
                    <li>
                      <a>Service</a>
                      <ul>
                        <li>
                          <a href="service.html">service</a>
                        </li>
                        <li>
                          <a href="service-dark.html">service dark</a>
                        </li>
                        <li>
                          <a href="service-2.html">service V.2</a>
                        </li>
                        <li>
                          <a href="service-2-dark.html">service V.2 dark</a>
                        </li>
                        <li>
                          <a href="service-3.html">service V.3</a>
                        </li>
                        <li>
                          <a href="service-3-dark.html">service V.3 dark</a>
                        </li>
                        <li>
                          <a href="service-4.html">service V.4</a>
                        </li>
                        <li>
                          <a href="service-4-dark.html">service V.4 dark</a>
                        </li>
                        <li>
                          <a href="service-5.html">service V.5</a>
                        </li>
                        <li>
                          <a href="service-5-dark.html">service V.5 dark</a>
                        </li>
                        <li>
                          <a href="service-6.html">service V.6</a>
                        </li>
                        <li>
                          <a href="service-6-dark.html">service V.6 dark</a>
                        </li>
                        <li>
                          <a href="service-details.html">service details</a>
                        </li>
                        <li>
                          <a href="service-details-dark.html">service details dark</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>pages</a>
                      <ul>
                        <li>
                          <a>Service</a>
                          <ul>
                            <li>
                              <a href="service.html">service</a>
                            </li>
                            <li>
                              <a href="service-dark.html">service dark</a>
                            </li>
                            <li>
                              <a href="service-2.html">service V.2</a>
                            </li>
                            <li>
                              <a href="service-2-dark.html">service V.2 dark</a>
                            </li>
                            <li>
                              <a href="service-3.html">service V.3</a>
                            </li>
                            <li>
                              <a href="service-3-dark.html">service V.3 dark</a>
                            </li>
                            <li>
                              <a href="service-4.html">service V.4</a>
                            </li>
                            <li>
                              <a href="service-4-dark.html">service V.4 dark</a>
                            </li>
                            <li>
                              <a href="service-5.html">service V.5</a>
                            </li>
                            <li>
                              <a href="service-5-dark.html">service V.5 dark</a>
                            </li>
                            <li>
                              <a href="service-6.html">service V.6</a>
                            </li>
                            <li>
                              <a href="service-6-dark.html">service V.6 dark</a>
                            </li>
                            <li>
                              <a href="service-details.html">service details</a>
                            </li>
                            <li>
                              <a href="service-details-dark.html">service details dark</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>portfolio</a>
                          <ul>
                            <li>
                              <a href="portfolio.html">portfolio</a>
                            </li>
                            <li>
                              <a href="portfolio-dark.html">portfolio dark</a>
                            </li>
                            <li>
                              <a href="portfolio-2.html">portfolio v.2</a>
                            </li>
                            <li>
                              <a href="portfolio-2-dark.html">portfolio v.2 dark</a>
                            </li>
                            <li>
                              <a href="portfolio-3.html">portfolio v.3</a>
                            </li>
                            <li>
                              <a href="portfolio-3-dark.html">portfolio v.3 dark</a>
                            </li>
                            <li>
                              <a href="portfolio-4.html">portfolio v.4</a>
                            </li>
                            <li>
                              <a href="portfolio-4-dark.html">portfolio v.4 dark</a>
                            </li>
                            <li>
                              <a href="portfolio-5.html">portfolio v.5</a>
                            </li>
                            <li>
                              <a href="portfolio-5-dark.html">portfolio v.5 dark</a>
                            </li>
                            <li>
                              <a href="portfolio-details.html">portfolio details</a>
                            </li>
                            <li>
                              <a href="portfolio-details-dark.html">portfolio details dark</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>team</a>
                          <ul>
                            <li>
                              <a href="team.html">Team</a>
                            </li>
                            <li>
                              <a href="team-dark.html">Team dark</a>
                            </li>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                            <li>
                              <a href="team-details-dark.html">Team Details dark</a>
                            </li>
                            <li>
                              <a href="career.html">career</a>
                            </li>
                            <li>
                              <a href="career-dark.html">career dark</a>
                            </li>
                            <li>
                              <a href="job-details.html">job details</a>
                            </li>
                            <li>
                              <a href="job-details-dark.html">job details dark</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>blog</a>
                          <ul>
                            <li>
                              <a href="blog.html">blog</a>
                            </li>
                            <li>
                              <a href="blog-dark.html">blog dark</a>
                            </li>
                            <li>
                              <a href="blog-2.html">blog v.2</a>
                            </li>
                            <li>
                              <a href="blog-2-dark.html">blog v.2 dark</a>
                            </li>
                            <li>
                              <a href="category.html">category</a>
                            </li>
                            <li>
                              <a href="category-dark.html">category dark</a>
                            </li>
                            <li>
                              <a href="blog-details.html">blog details</a>
                            </li>
                            <li>
                              <a href="blog-details-dark.html">blog details dark</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>Others</a>
                          <ul>
                            <li>
                              <a href="about.html">about</a>
                            </li>
                            <li>
                              <a href="about-dark.html">about dark</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQs</a>
                            </li>
                            <li>
                              <a href="faq-dark.html">FAQs dark</a>
                            </li>
                            <li>
                              <a href="contact.html">contact</a>
                            </li>
                            <li>
                              <a href="contact-dark.html">contact dark</a>
                            </li>
                            <li>
                              <a href="404.html">404</a>
                            </li>
                            <li>
                              <a href="404-dark.html">404 dark</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">blog</a>
                        </li>
                        <li>
                          <a href="blog-dark.html">blog dark</a>
                        </li>
                        <li>
                          <a href="blog-2.html">blog v.2</a>
                        </li>
                        <li>
                          <a href="blog-2-dark.html">blog v.2 dark</a>
                        </li>
                        <li>
                          <a href="category.html">category</a>
                        </li>
                        <li>
                          <a href="category-dark.html">category dark</a>
                        </li>
                        <li>
                          <a href="blog-details.html">blog details</a>
                        </li>
                        <li>
                          <a href="blog-details-dark.html">blog details dark</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="offcanvas__right">
              <div className="offcanvas__search">
                <form action="#">
                  <input type="text" name="search" placeholder="Search keyword" />
                  <button>
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </form>
              </div>
              <div className="offcanvas__contact">
                <h3>Get in touch</h3>
                <ul>
                  <li>
                    <a href="tel:02094980547">+(02) - 094 980 547</a>
                  </li>
                  <li>
                    <a href="mailto:info@extradesign.com">info@extradesign.com</a>
                  </li>
                  <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
                </ul>
              </div>
              <img src="assets/imgs/shape/11.png" alt="shape" className="shape-1" />
              <img src="assets/imgs/shape/12.png" alt="shape" className="shape-2" />
            </div>
            <div className="offcanvas__close">
              <button type="button" id="close_offcanvas">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
          </div>
        </div>
        {/* Offcanvas area end */}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              {/* Hero area start */}
              <section className="solution__area">
                <div className="hero-line container" />
                <div className="solution__wrapper">
                  <div className="solution__left">
                    <div className="solution__img-1">
                      <img src="assets/imgs/thumb/solution.png" alt="Solution Image" />
                    </div>
                    <div className="solution__img-2">
                      <img src="assets/imgs/thumb/solution-2.png" alt="Solution Image" />
                    </div>
                  </div>
                  <div className="solution__mid">
                    <h1 className="solution__title animation__char_come">Digital Solution</h1>
                    <p>
                      We’re designing digital experiences that enrich human lives and it helps to
                      grow your business globally trends.
                    </p>
                  </div>
                  <div className="solution__right">
                    <div className="solution__img-3">
                      <img src="assets/imgs/thumb/solution-3.png" alt="Solution Image" />
                    </div>
                  </div>
                </div>
                <div className="pb-130 container">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="solution__btm">
                        <ul>
                          <li>Approch</li>
                          <li>Creativity</li>
                          <li>Experienced</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="solution__shape">
                  <img src="assets/imgs/icon/1.png" alt="Shape Image" className="shape-1" />
                  <img src="assets/imgs/icon/2.png" alt="Shape Image" className="shape-2" />
                  <img src="assets/imgs/icon/3.png" alt="Shape Image" className="shape-3" />
                  <img src="assets/imgs/icon/4.png" alt="Shape Image" className="shape-4" />
                  <img src="assets/imgs/icon/5.png" alt="Shape Image" className="shape-5" />
                </div>
              </section>
              {/* Hero area end */}
              {/* Service area start */}
              <section className="service__area-6">
                <div className="container">
                  <div className="row inherit-row">
                    <div className="col-xxl-12">
                      <div className="content-wrapper">
                        <div className="left-content">
                          <ul className="service__list-6">
                            <li className="active">
                              <a href="#service_1">
                                Interaction <br />
                                Design
                              </a>
                            </li>
                            <li>
                              <a href="#service_2">
                                Web &amp; Mobile <br />
                                Development
                              </a>
                            </li>
                            <li>
                              <a href="#service_3">
                                Motion &amp; Branding <br />
                                Design
                              </a>
                            </li>
                            <li>
                              <a href="#service_4">
                                Digital <br /> Maketing
                              </a>
                            </li>
                            <li>
                              <a href="#service_5">
                                Concept and <br />
                                Strategy
                              </a>
                            </li>
                            <li>
                              <a href="#service_6">
                                Illustrations &amp; <br /> Prototype
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mid-content">
                          <div className="service__image">
                            <img src="assets/imgs/service/1.jpg" alt="Service Image" />
                          </div>
                          <div className="service__image">
                            <img src="assets/imgs/service/2.jpg" alt="Service Image" />
                          </div>
                          <div className="service__image">
                            <img src="assets/imgs/service/3.jpg" alt="Service Image" />
                          </div>
                          <div className="service__image">
                            <img src="assets/imgs/service/4.jpg" alt="Service Image" />
                          </div>
                          <div className="service__image">
                            <img src="assets/imgs/service/5.jpg" alt="Service Image" />
                          </div>
                          <div className="service__image">
                            <img src="assets/imgs/service/4.jpg" alt="Service Image" />
                          </div>
                        </div>
                        <div className="right-content">
                          <div className="service__items-6">
                            <div
                              className="service__item-6 has__service_animation"
                              id="service_1"
                              data-secid={1}
                            >
                              <div className="image-tab">
                                <img src="assets/imgs/service/1.jpg" alt="Service Image" />
                              </div>
                              <div className="animation__service_page">
                                <h2 className="service__title-6">
                                  User paths or user flows functional models
                                </h2>
                                <p>
                                  This is the second workshop of the UX design methodology. Given
                                  all the conclusions drawn in the personae workshop, we will
                                  project ourselves towards the production of ideal user journeys.
                                  In other words: how each persona can achieve their goal.
                                </p>
                                <ul>
                                  <li>+ API Development</li>
                                  <li>+ WordPress</li>
                                  <li>+ Cloud Migration</li>
                                  <li>+ Front End Development</li>
                                  <li>+ JavaScript</li>
                                  <li>+ Fluter Framework</li>
                                </ul>
                                <div className="btn_wrapper">
                                  <a
                                    href="service-details.html"
                                    className="wc-btn-secondary btn-item btn-hover"
                                  >
                                    <span />
                                    Get free
                                    <br />
                                    qoutes <i className="fa-solid fa-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="service__item-6" id="service_2" data-secid={2}>
                              <div className="image-tab">
                                <img src="assets/imgs/service/2.jpg" alt="Service Image" />
                              </div>
                              <div className="animation__service_page">
                                <h2 className="service__title-6">Web &amp; Mobile Development</h2>
                                <p>
                                  This is the second workshop of the UX design methodology. Given
                                  all the conclusions drawn in the personae workshop, we will
                                  project ourselves towards the production of ideal user journeys.
                                  In other words: how each persona can achieve their goal.
                                </p>
                                <ul>
                                  <li>+ API Development</li>
                                  <li>+ WordPress</li>
                                  <li>+ Cloud Migration</li>
                                  <li>+ Front End Development</li>
                                  <li>+ JavaScript</li>
                                  <li>+ Fluter Framework</li>
                                </ul>
                                <div className="btn_wrapper">
                                  <a
                                    href="service-details.html"
                                    className="wc-btn-secondary btn-item btn-hover"
                                  >
                                    <span />
                                    Get free
                                    <br />
                                    qoutes <i className="fa-solid fa-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="service__item-6" id="service_3" data-secid={3}>
                              <div className="image-tab">
                                <img src="assets/imgs/service/3.jpg" alt="Service Image" />
                              </div>
                              <div className="animation__service_page">
                                <h2 className="service__title-6">UMotion &amp; Branding Design</h2>
                                <p>
                                  This is the second workshop of the UX design methodology. Given
                                  all the conclusions drawn in the personae workshop, we will
                                  project ourselves towards the production of ideal user journeys.
                                  In other words: how each persona can achieve their goal.
                                </p>
                                <ul>
                                  <li>+ API Development</li>
                                  <li>+ WordPress</li>
                                  <li>+ Cloud Migration</li>
                                  <li>+ Front End Development</li>
                                  <li>+ JavaScript</li>
                                  <li>+ Fluter Framework</li>
                                </ul>
                                <div className="btn_wrapper">
                                  <a
                                    href="service-details.html"
                                    className="wc-btn-secondary btn-item btn-hover"
                                  >
                                    <span />
                                    Get free
                                    <br />
                                    qoutes <i className="fa-solid fa-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="service__item-6" id="service_4" data-secid={4}>
                              <div className="image-tab">
                                <img src="assets/imgs/service/4.jpg" alt="Service Image" />
                              </div>
                              <div className="animation__service_page">
                                <h2 className="service__title-6">
                                  User paths or user flows functional models
                                </h2>
                                <p>
                                  This is the second workshop of the UX design methodology. Given
                                  all the conclusions drawn in the personae workshop, we will
                                  project ourselves towards the production of ideal user journeys.
                                  In other words: how each persona can achieve their goal.
                                </p>
                                <ul>
                                  <li>+ API Development</li>
                                  <li>+ WordPress</li>
                                  <li>+ Cloud Migration</li>
                                  <li>+ Front End Development</li>
                                  <li>+ JavaScript</li>
                                  <li>+ Fluter Framework</li>
                                </ul>
                                <div className="btn_wrapper">
                                  <a
                                    href="service-details.html"
                                    className="wc-btn-secondary btn-item btn-hover"
                                  >
                                    <span />
                                    Get free
                                    <br />
                                    qoutes <i className="fa-solid fa-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="service__item-6" id="service_5" data-secid={5}>
                              <div className="image-tab">
                                <img src="assets/imgs/service/5.jpg" alt="Service Image" />
                              </div>
                              <div className="animation__service_page">
                                <h2 className="service__title-6">
                                  User paths or user flows functional models
                                </h2>
                                <p>
                                  This is the second workshop of the UX design methodology. Given
                                  all the conclusions drawn in the personae workshop, we will
                                  project ourselves towards the production of ideal user journeys.
                                  In other words: how each persona can achieve their goal.
                                </p>
                                <ul>
                                  <li>+ API Development</li>
                                  <li>+ WordPress</li>
                                  <li>+ Cloud Migration</li>
                                  <li>+ Front End Development</li>
                                  <li>+ JavaScript</li>
                                  <li>+ Fluter Framework</li>
                                </ul>
                                <div className="btn_wrapper">
                                  <a
                                    href="service-details.html"
                                    className="wc-btn-secondary btn-item btn-hover"
                                  >
                                    <span />
                                    Get free
                                    <br />
                                    qoutes <i className="fa-solid fa-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="service__item-6" id="service_6" data-secid={6}>
                              <div className="image-tab">
                                <img src="assets/imgs/service/4.jpg" alt="Service Image" />
                              </div>
                              <div className="animation__service_page">
                                <h2 className="service__title-6">Illustrations &amp; Prototype</h2>
                                <p>
                                  This is the second workshop of the UX design methodology. Given
                                  all the conclusions drawn in the personae workshop, we will
                                  project ourselves towards the production of ideal user journeys.
                                  In other words: how each persona can achieve their goal.
                                </p>
                                <ul>
                                  <li>+ API Development</li>
                                  <li>+ WordPress</li>
                                  <li>+ Cloud Migration</li>
                                  <li>+ Front End Development</li>
                                  <li>+ JavaScript</li>
                                  <li>+ Fluter Framework</li>
                                </ul>
                                <div className="btn_wrapper">
                                  <a
                                    href="service-details.html"
                                    className="wc-btn-secondary btn-item btn-hover"
                                  >
                                    <span />
                                    Get free
                                    <br />
                                    qoutes <i className="fa-solid fa-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Service area end */}
              {/* Brand area start */}
              <section className="brand__area">
                <div className="line pt-140 pb-100 container">
                  <span className="line-3" />
                  <div className="row">
                    <div className="col-xxl-12">
                      <h2 className="brand__title-3 title-anim">
                        We are happy to work with global largest brands
                      </h2>
                      <div className="brand__list brand-gap">
                        <div className="brand__item-2 fade_bottom">
                          <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                        </div>
                        <div className="brand__item-2 fade_bottom">
                          <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                        </div>
                        <div className="brand__item-2 fade_bottom">
                          <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                        </div>
                        <div className="brand__item-2 fade_bottom">
                          <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                        </div>
                        <div className="brand__item-2 fade_bottom">
                          <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                        </div>
                        <div className="brand__item-2 fade_bottom">
                          <img src="assets/imgs/brand/6.png" alt="Brand Logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Brand area end */}
              {/* CTA area start */}
              <section className="cta__area">
                <div className="line pt-100 pb-110 no-p container">
                  <div className="line-3" />
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="cta__content">
                        <p className="cta__sub-title">Work with us</p>
                        <h2 className="cta__title title-anim">
                          We would love to hear more about your project
                        </h2>
                        <div className="btn_wrapper">
                          <a href="contact.html" className="wc-btn-primary btn-item btn-hover">
                            <span />
                            Let’s talk us <i className="fa-solid fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* CTA area end */}
            </main>
            {/* Footer area start */}
            <footer className="footer__area">
              <div className="footer__top">
                <div className="footer-line container" />
                <img src="assets/imgs/thumb/footer.jpg" alt="Footer Image" data-speed="0.5" />
              </div>
              <div className="footer__btm">
                <div className="container">
                  <div className="row footer__row">
                    <div className="col-xxl-12">
                      <div className="footer__inner">
                        <div className="footer__widget">
                          <img
                            className="footer__logo"
                            src="assets/imgs/logo/footer-logo-white.png"
                            alt="Footer Logo"
                          />
                          <p>
                            When do they work well, and when do they on us and finally, when do we
                            actually need how can we avoid them.
                          </p>
                          <ul className="footer__social">
                            <li>
                              <a href="#">
                                <span>
                                  <i className="fa-brands fa-facebook-f" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>
                                  <i className="fa-brands fa-twitter" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>
                                  <i className="fa-brands fa-instagram" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>
                                  <i className="fa-brands fa-linkedin" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="footer__widget-2">
                          <h2 className="footer__widget-title">Information</h2>
                          <ul className="footer__link">
                            <li>
                              <a href="about.html">About Company</a>
                            </li>
                            <li>
                              <a href="portfolio.html">Case Study</a>
                            </li>
                            <li>
                              <a href="career.html">Career</a>
                            </li>
                            <li>
                              <a href="blog.html">blog</a>
                            </li>
                            <li>
                              <a href="contact.html">contact</a>
                            </li>
                          </ul>
                        </div>
                        <div className="footer__widget-3">
                          <h2 className="footer__widget-title">Contact Us</h2>
                          <ul className="footer__contact">
                            <li>Valentin, Street Road 24, New York, USA - 67452</li>
                            <li>
                              <a href="tel:02574328301" className="phone">
                                +02) 574 - 328 - 301{' '}
                              </a>
                            </li>
                            <li>
                              <a href="mailto:info@buildyexample.com">info@buildyexample.com</a>
                            </li>
                          </ul>
                        </div>
                        <div className="footer__widget-4">
                          <h2 className="project-title">Have a project in your mind?</h2>
                          <div className="btn_wrapper">
                            <a href="contact.html" className="wc-btn-primary btn-hover btn-item">
                              <span /> contact us <i className="fa-solid fa-arrow-right" />
                            </a>
                          </div>
                          <h3 className="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                          <h4 className="contact-day">Saturday - Thursday</h4>
                        </div>
                        <div className="footer__copyright">
                          <p>
                            © 2022 - 2025 | Alrights reserved by{' '}
                            <a href="https://wealcoder.com/" target="_blank" rel="noreferrer">
                              Wealcoder
                            </a>
                          </p>
                        </div>
                        <div className="footer__subscribe">
                          <form action="#">
                            <input type="email" name="email" placeholder="Enter your email" />
                            <button type="submit" className="subs-btn">
                              <i className="fa-solid fa-paper-plane" />
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* Footer area end */}
          </div>
        </div>
        {/* All JS files */}
      </>
    </div>
  )
}

export default Consultancy
