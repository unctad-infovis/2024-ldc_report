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
              <h3>Watch the videos</h3>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/FUjROAZ4nCQ" title="Least Developed Countries Report 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <ul>
                <li>
                  <a href="https://youtu.be/jMqIcUS491s" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://youtu.be/x7mkOu0Z56M" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://youtu.be/nbGS6PvcUGQ" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://youtu.be/UKLyz2sK5ng" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="https://youtu.be/dOARKYaHk5o" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="https://youtu.be/VqA_h6X2Z_E" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://youtu.be/CGo7_DM3lgQ" target="_blank" rel="noreferrer">Kiswahili</a>
                </li>
              </ul>
              <h4>Download the report video</h4>
              <ul>
                <li>
                  <a href="https://trello.com/1/cards/6727d6c8aeba1792171a3a21/attachments/6728f4f27dd92eb8a8b699f8/download/LDC_2024_-_English.mp4" target="_blank" rel="noreferrer">English</a>
                  {', '}
                  <a href="https://trello.com/1/cards/6727d6c8aeba1792171a3a21/attachments/6728f4fe06ef8840bb787357/download/LDC_2024_-_French.mp4" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://trello.com/1/cards/6727d6c8aeba1792171a3a21/attachments/6728f51e2c11ffaa7ddd10fe/download/LDC_2024_-_Spanish.mp4" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://trello.com/1/cards/6727d6c8aeba1792171a3a21/attachments/672a600343e01d3643076784/download/LDC_2024_Arabic.mp4" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://trello.com/1/cards/6727d6c8aeba1792171a3a21/attachments/6728f4e7195462ae333b2d00/download/LDC_2024_-_Chinese.mp4" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="https://trello.com/1/cards/6727d6c8aeba1792171a3a21/attachments/6728f513fe96f01aed3bf71d/download/LDC_2024_-_Russian.mp4" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="https://trello.com/1/cards/6727d6c8aeba1792171a3a21/attachments/6728f5088d631862473735e3/download/LDC_2024_-_Portuguese.mp4" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://trello.com/1/cards/6727d6c8aeba1792171a3a21/attachments/6729091b0f565ead1e7f54cf/download/LDC_2024_-_Kiswahili.mp4" target="_blank" rel="noreferrer">Kiswahili</a>

                </li>
              </ul>
              <h4>Watch the press conference</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/hbg5Dq7lwIA" title="Least Developed Countries Report 2024 press conference" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <h4>Media assets</h4>
              <ul>
                <li>
                  <a href="https://www.unognewsroom.org/story/en/2410/unctad-press-conference-4-november-2024" target="_blank" rel="noreferrer">Press conference</a>
                </li>
                <li>
                  <a href="https://www.flickr.com/photos/unctad/albums/72177720321695951/" target="_blank" rel="noreferrer">Photos</a>
                </li>
                <li>
                  <a href="https://trello.com/b/XRgaVGUw/the-least-developed-countries-report-2024" target="_blank" rel="noreferrer">All digital assets</a>
                </li>
              </ul>
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
