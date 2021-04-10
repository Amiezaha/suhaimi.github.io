import React from "react";
import "./ProgressBar.css";
import $ from "jquery";

function ProgressBar() {
  var lang = {
    html: "100%",
    css: "90%",
    javascript: "70%",
    php: "55%",
    react: "65%",
    ionic: "60%"
  };

  var multiply = 4;

  $.each(lang, function (language, pourcent) {
    var delay = 700;

    setTimeout(function () {
      $(".percent_" + language).html(pourcent);
    }, delay * multiply);

    multiply++;
  });
  return (
    <>
      <ul className="skills-bar-container">
        <li>
          <div className="progressbar-title">
            <div className="skills__name">HTML5</div>
            <span className="percent percent_html"></span>
          </div>
          <div className="bar-container">
            <span className="progressbar progressred" id="progress-html"></span>
          </div>
        </li>
        <li>
          <div className="progressbar-title">
            <div className="skills__name">CSS / SASS</div>
            <span className="percent percent_css"></span>
          </div>
          <div className="bar-container">
            <span className="progressbar progressblue" id="progress-css"></span>
          </div>
        </li>

        <li>
          <div className="progressbar-title">
            <div className="skills__name">JavaScript / jQuery</div>
            <span className="percent percent_javascript"></span>
          </div>
          <div className="bar-container">
            <span
              className="progressbar progresspurple"
              id="progress-javascript"
            ></span>
          </div>
        </li>

        <li>
          <div className="progressbar-title">
            <div className="skills__name">PHP</div>
            <span className="percent percent_php"></span>
          </div>
          <div className="bar-container">
            <span
              className="progressbar progressorange"
              id="progress-php"
            ></span>
          </div>
        </li>

        <li>
          <div className="progressbar-title">
            <div className="skills__name">ReactJS</div>
            <span className="percent percent_react"></span>
          </div>
          <div className="bar-container">
            <span
              className="progressbar progressgreen"
              id="progress-react"
            ></span>
          </div>
        </li>

        <li>
          <div className="progressbar-title">
            <div className="skills__name">Ionic and AngularJS</div>
            <span className="percent percent_ionic"></span>
          </div>
          <div className="bar-container">
            <span
              className="progressbar progressionic"
              id="progress-ionic"
            ></span>
          </div>
        </li>
      </ul>
    </>
  );
}

export default ProgressBar;
