import React, { Fragment, useEffect, useState } from 'react';
import $ from 'jquery';

const moveToNext = (e) => {
  var $next = $(e.target).closest('section').next();
  if ($next.hasClass('engine')) {
    $next = $next.closest('section').next();
  }
  var offset = $next.offset();
  $('html, body').stop().animate({
    scrollTop: offset.top
  }, 800, 'linear');
}

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [expire, setExpire] = useState(false);

  useEffect(() => {
    const countDownDate = new Date("Feb 17, 2020").getTime();
    var x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      if (distance < 0) {
        clearInterval(x);
        setExpire(true);
      }
    }, 1000)
  });
  return (
    <Fragment>
      <section className="cid-qIia8mgjVj mbr-fullscreen mbr-parallax-background" id="header2-0">
        <div className="container align-center">
          <div className="row justify-content-md-center">
            <div className="mbr-white col-md-10">
              <h2 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">
                Once in a while,
                    <br />
                right in the middle of an ordinary life,
                    <br />
                love gives us a fairy tale
                </h2>
              <h3 className="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-2">
                February 17, 2020
                </h3>
            </div>
          </div>
        </div>
        <div className="mbr-arrow hidden-sm-down" aria-hidden="true">
          <a href="JavaScript:Void(0)" onClick={(e) => { moveToNext(e)}}>
            <i className="mbri-down mbr-iconfont"></i>
          </a>
        </div>
      </section>
      <section className="mbr-section content4 cid-qIieWoha50" id="content4-2" style={{ paddingTop: "80px", paddingBottom: "50px"}}>
        <div className="container">
          <div className="media-container-row">
            <div className="title col-12 col-md-8">
              <h2 className="align-center pb-3 mbr-fonts-style display-1">Parminder Singh Maan</h2>
              <h3 className="align-center mbr-light mbr-fonts-style display-7">
                S/o Sdn. Gurjeet Kaur & S. Kuldeep Singh
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="mbr-section article content9 cid-qIifnNA7oY" id="content9-3" style={{ paddingTop: "35px", paddingBottom: "35px" }}>
        <div className="container">
          <div className="inner-container" style={{ "width": "100%" }}>
            <hr className="line" style={{ "width": "25%" }} />
            <div className="section-text align-center mbr-fonts-style display-2">
              weds</div>
            <hr className="line" style={{ "width": "25%" }} />
          </div>
        </div>
      </section>
      <section className="mbr-section content4 cid-qIifwA2R02" id="content4-4" style={{ paddingTop: "50px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="media-container-row">
            <div className="title col-12 col-md-8">
              <h2 className="align-center pb-3 mbr-fonts-style display-1">Jasmanpreet Kaur</h2>
              <h3 className="align-center mbr-light mbr-fonts-style display-7">
                D/o Sdn. Sandeep Kaur & S. Harpreet Singh </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="mbr-section content5 cid-qIicQ8Vcwz mbr-parallax-background" id="content5-1">
        <div className="container">
          <div className="media-container-row">
            <div className="title col-12 col-md-8">
              <h2 className="align-center mbr-bold mbr-white pb-3 mbr-fonts-style display-5">Wedding</h2>
              <h3 className="mbr-section-subtitle align-center mbr-light mbr-white pb-3 mbr-fonts-style display-2">
                Please grace the event with your presence</h3>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="features11 cid-qIix9MZdYF" id="features11-9">

        <div className="container">
          <div className="col-md-12">
            <div className="media-container-row">
              <div className="mbr-figure" style={{ "width": "50%" }}>
                <img src="assets/images/abc.jpg" alt="Mobirise" title="" />
              </div>
              <div className=" align-left aside-content">
                <div className="block-content">
                  <div className="card p-3 pr-3">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="card-title mbr-fonts-style display-2">
                          Monday, February 17, 2020</h4>
                      </div>
                    </div>
                  </div>

                  <div className="card p-3 pr-3">
                    <div className="media">

                      <div className="media-body">
                        <h4 className="card-title mbr-fonts-style display-5">
                          Mehtab Palace</h4>
                      </div>
                    </div>

                    <div className="card-box">
                      <p className="block-text mbr-fonts-style display-7" style={{fontWeight: '600'}}>
                        Dhulkot Ahmedgarh,
                                    <br />
                        Link Road,
                                    <br />
                        Ludhiana
                                    <br />
                        <br />
                        <br />
                        <a href="#map1-b">Check on Map</a>

                        <br />
                        <br />
                        <a target="blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MzZ0dmQwb2cxZ3NuZTY2czRydTFyaTczdmkgdWh1YXJsN2JzbXRxMGlmNGt0c3BxaGs5a29AZw&amp;tmsrc=uhuarl7bsmtq0if4ktspqhk9ko%40group.calendar.google.com">
                          Add to your calendar
                          <br />
                          <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" /></a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="countdown1 cid-rdSMNc6MYv" id="countdown1-5">
        <div className="container ">
          <h2 className="mbr-section-title pb-1 align-center mbr-fonts-style display-2">
            It's not that far...
    </h2>
        </div>
        <div className="container countdown-cont align-center">
          <div className="daysCountdown" title="Days"></div>
          <div className="hoursCountdown" title="Hours"></div>
          <div className="minutesCountdown" title="Minutes"></div>
          <div className="secondsCountdown" title="Seconds"></div>
          <div className="countdown pt-1 mt-2" data-due-date="2020/02/17">
            <div className="row">
              <div className="col-xs-3 col-sm-3 col-md-3">
                <span className="number-wrap">
                  <span className="number display-2">{expire ? '00' : days}</span>
                  <span mbr-text="" className="period display-7">Days</span>
                  <span className="dot">:</span>
                </span>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3">
                <span className="number-wrap">
                  <span className="number display-2">{expire ? '00' : hours}</span>
                  <span mbr-text="" className="period display-7">Hours</span>
                  <span className="dot">:</span>
                </span>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3">
                <span className="number-wrap">
                  <span className="number display-2">{expire ? '00' : minutes}</span>
                  <span mbr-text="" className="period display-7">Minutes</span>
                  <span className="dot">:</span>
                </span>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3">
                <span className="number-wrap">
                  <span className="number display-2">{expire ? '00' : seconds}</span>
                  <span mbr-text="" className="period display-7">Seconds</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map1 cid-qIiXmYb55q" id="map1-b">
        <div className="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.0763406942588!2d75.81111961840196!3d30.688128105506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x292af8552d013d88!2sMehtab%20Palace!5e0!3m2!1sen!2sin!4v1578978424511!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{ "border": "0px" }} allowfullscreen=""></iframe>  
        </div>
      </section>

      <section once="" className="cid-resodjsu8G" id="footer7-0">
        <div className="container">
          <div className="media-container-row align-center mbr-white">
            <div className="row row-copirayt">
              <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
                © Copyright 2020 Gurpreet Singh - All Rights Reserved
                    <br />
                Made with lots of <span className="fa fa-heart pulse2"></span> for his Friend
                </p>
            </div>
          </div>
        </div>
      </section>
      <div id="scrollToTop" className="scrollToTop mbr-arrow-up"><a style={{ "textAlign": "center" }}><i></i></a></div>
      <input name="animation" type="hidden" />
    </Fragment>
  );
}

export default App;
