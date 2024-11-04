import React, { useEffect /* , useState, useRef */ } from 'react';
import '../styles/styles.less';

function Footer() {
  useEffect(() => {
    if (document.querySelector('.title_container .unctad_logo img')) {
      document.querySelector('.title_container .unctad_logo img').src = '/themes/custom/newyork_b5/images/logo_small_white_en.png';
    }
  }, []);

  return (
    <div className="app" id="app_footer">
      <div className="footer_container">
        <h2>What do you want to do next?</h2>
        <div className="footer_elements">
          <div className="footer_element footer_element_1">
            <div className="footer_content anchor_videos" id="anchor_videos">
              {/* <h3>Watch the videos</h3>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/PLzwchtLJSk" title="Least Developed Countries Report 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div> */}
              {/* <ul>
                <li>
                  <a href="#download" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Kiswahili</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Urdu اردو</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Hindi हिंदी</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Deutsch</a>
                </li>
              </ul> */}
              {/* <h4>Download the report video</h4>
              <ul>
                <li>
                  <a href="https://vimeo.com/1022047383" target="_blank" rel="noreferrer">English</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Kiswahili</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Urdu اردو</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Hindi हिंदी</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Deutsch</a>
                </li>
              </ul> */}
              {/* <h4>Watch the press conference</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/AYD39tO7VGM" title="Least Developed Countries Report 2024 press conference" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div> */}
              {/* <h4>Media assets</h4>
              <ul>
                <li>
                  <a href="#download" target="_blank" rel="noreferrer">Press conference</a>
                </li>
                <li>
                  <a href="#download" target="_blank" rel="noreferrer">Photos</a>
                </li>
                <li>
                  <a href="#download" target="_blank" rel="noreferrer">Audio and other assets</a>
                </li>
              </ul> */}
            </div>
            <div className="footer_content anchor_podcasts" id="anchor_podcasts">
              <h3>Podcasts</h3>
              <p>Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
              <div className="iframe_container">
                <iframe title="120. Trading up: How carbon markets can help development and the planet" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=chbvn-172ad41-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen />
                <span className="text"><a href="/podcast/trading-how-carbon-markets-can-help-development-and-planet">Trading up: How carbon markets can help development and the planet</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
