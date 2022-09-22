import React, { useState } from 'react'
import aboutImage from "../images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg"
import aboutMiniImage from "../images/annie-spratt-5cFwQ-WMcJU-unsplash (1).jpg"
import blueImage from "../images/undraw_moving_forward_re_rs8p.svg"

const About = () => {
  const [active, setActive] = useState(false);

  const classToggle = () => {
    setActive(!active);
  }
  return (
    <section className="about wp">  

      <div className="about-left">
        <div className="header">
          <h1>About</h1>
          <p>▶︎私たちについて</p>
        </div>

        <div className="main">
          <div className="main-text">
            <p>日々の暮らしを<br />もっと豊かに、<br />もっと自分らしく。<br /></p>
          </div>

          <nav>
            <ul>
              <li onClick={classToggle} className={active ? "is-show" : ""}>
                <h3>テキストテキスト</h3>
                <p>+</p>
                <h5>➡︎ テキストテキストテキストテキストテキスト</h5>
              </li>
              <li>
                <h3>テキストテキスト</h3>
                <p>+</p>
                <h5>➡︎ テキストテキストテキストテキストテキスト</h5>
              </li>
              <li>
                <h3>テキストテキスト</h3>
                <p>+</p>
                <h5>➡︎ テキストテキストテキストテキストテキスト</h5>
              </li>
              <li>
                <h3>テキストテキスト</h3>
                <p>+</p>
                <h5>➡︎ テキストテキストテキストテキストテキスト</h5>
              </li>
              <li>
                <h3>テキストテキスト</h3>
                <p>+</p>
                <h5>➡︎ テキストテキストテキストテキストテキスト</h5>
              </li>
              <li>
                <h3>テキストテキスト</h3>
                <p>+</p>
                <h5>➡︎ テキストテキストテキストテキストテキスト</h5>
              </li>
            </ul>

            <div className="blue-btn">
              <img src={blueImage} className="blueImage" />
              <h4>テキスト</h4>
            </div>
          </nav>


        </div>
      </div>

      <div className="about-right">
        <div className="about-img">
          <img src={aboutImage} className="aboutImage" />
          <img src={aboutMiniImage} className="aboutMiniImage" />
        </div>
      </div>

    </section>

    
  )
}

export default About