import React from 'react'
import newsImage from "../images/f1373_0.png"
import newsImages from "../images/f1373_0 (1).png"
import blueImage from "../images/undraw_moving_forward_re_rs8p.svg"

export const News = () => {
  return (
    <section className="news">
      <div className="header">
        <h1>News</h1>
        <p>▶︎新着のお知らせ</p>
      </div>

      <div className="allNews">
        <div className="news-left wp">
          <p>すべて</p>
          <ul>
            <li>
              <a href="#">テキスト</a>
            </li>
            <li>
              <a href="#">テキスト</a>
            </li>
            <li>
              <a href="#">テキスト</a>
            </li>
          </ul>
          
          <div className="blue-btn">
            <img src={blueImage} className="blueImage" />
            <h4>テキスト</h4>
          </div>
        </div>

        <div className="news-right wp">
          <article>
            <div className="news-img">
              <p>2020.<span>04.13</span></p>
              <img src={newsImage} className="newsImage" />
            </div>
            <div className="news-text">
              <a href="#">テキストテキスト</a>
              <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </article>
          <article>
            <div className="news-img">
              <p>2020.<span>04.13</span></p>
              <img src={newsImage} className="newsImage" />
            </div>
            <div className="news-text">
              <a href="#">テキストテキスト</a>
              <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </article>
          <article>
            <div className="news-img">
              <p>2020.<span>04.13</span></p>
              <img src={newsImage} className="newsImage" />
            </div>
            <div className="news-text">
              <a href="#">テキストテキスト</a>
              <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </article>
          <article>
            <div className="news-img">
              <p>2020.<span>04.13</span></p>
              <img src={newsImages} className="newsImage" />
            </div>
            <div className="news-text">
              <a href="#">テキストテキスト</a>
              <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </article>
          <article>
            <div className="news-img">
              <p>2020.<span>04.13</span></p>
              <img src={newsImages} className="newsImage" />
            </div>
            <div className="news-text">
              <a href="#">テキストテキスト</a>
              <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </article>
          <article>
            <div className="news-img">
              <p>2020.<span>04.13</span></p>
              <img src={newsImages} className="newsImage" />
            </div>
            <div className="news-text">
              <a href="#">テキストテキスト</a>
              <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </article>
        </div>
      </div>

    </section>
  )
}

