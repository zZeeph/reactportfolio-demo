import React from 'react'
import blueImage from "../images/undraw_moving_forward_re_rs8p.svg"
import businessImage from "../images/hal-gatewood-weRQAu9TA-A-unsplash.jpg"

export const Business = () => {
  return (
    <section className="business wp"> 
      <div className="header">
        <h1>Business</h1>
        <p>▶︎私たちの事業</p>
      </div>

      <div className="business-text">
        <h2>私らしくいられる<br />暮らし。</h2>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>

      <ul>
        <li>
          <img src={businessImage} className="businessImage" />
          <p>サンプル</p>
        </li>
        <li>
          <img src={businessImage} className="businessImage" />
          <p>サンプル</p>
        </li>
        <li>
          <img src={businessImage} className="businessImage" />
          <p>サンプル</p>
        </li>
        <li>
          <img src={businessImage} className="businessImage" />
          <p>サンプル</p>
        </li>
      </ul>

      <div className="blue-btn">
        <img src={blueImage} className="blueImage" />
        <h4>テキスト</h4>
      </div>
    </section>
  )
}

