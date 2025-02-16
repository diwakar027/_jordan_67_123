import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMusic, setShowMusic] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);
  const [showCheers, setShowCheers] = useState(false);

  const handleMusicClick = () => {
    setShowMusic(true);
    setShowSmoke(false);
    setShowCheers(false);
  };

  const handleSmokeClick = () => {
    setShowSmoke(true);
    setShowCheers(false);
    setShowMusic(false);
  };

  const handleCheersClick = () => {
    setShowCheers(true);
    setShowSmoke(false);
    setShowMusic(false);
  };

  let backgroundImage = './jordan_background.jpeg'; // Default background

  if (showSmoke) {
    backgroundImage = './smoking.jpeg'; // Background for smoke section
  } else if (showCheers) {
    backgroundImage = './Cheers.jpeg'; // Background for cheers section
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className="App-header">
        {!showMusic && !showSmoke && !showCheers ? (
          <div className="birthday-surprise">
            <h1 className="birthday-title">Happy Birthday Jordan!</h1>
            <p className="birthday-message">Wishing you all the joy, peace and happiness in the world!</p>
            <div className="celebration">
              <div className="balloons">🎈🎈🎈</div>
              <div className="confetti">✨✨✨</div>
            </div>

            <div className="new-buttons">
              <button className="new-smoke-button" onClick={handleSmokeClick}>
                Wann'Smoke
              </button>
              <button className="new-cheers-button" onClick={handleCheersClick}>
                Cheers Jordi
              </button>
            </div>

            <div className="new-buttons">
              <button className="music-button" onClick={handleMusicClick}>
                Listen to Jordan's Favourite Music
              </button>
            </div>
          </div>
        ) : showMusic ? (
          <section className="music">
            <h2>Jordan's Favourite Music</h2>
            <ul>
              <li>
                <button className="song-button" onClick={() => window.open("https://www.youtube.com/watch?v=k4R39ofX-CQ", "_blank")}>
                  Mana ki Hum Yaar Nhi
                </button>
              </li>
              <li>
                <button className="song-button" onClick={() => window.open("https://www.youtube.com/watch?v=xQryki2ZhYA", "_blank")}>
                  Hawa Hawa
                </button>
              </li>
              <li>
                <button className="song-button" onClick={() => window.open("https://www.youtube.com/watch?v=2Z0Put0teCM", "_blank")}>
                  Senorita
                </button>
              </li>
              <li>
                <button className="song-button" onClick={() => window.open("https://www.youtube.com/watch?v=1vEU8DJp1Wg", "_blank")}>
                  Sawari Sawari
                </button>
              </li>
            </ul>
          </section>
        ) : showSmoke ? (
          <section className="smoke">
            <div className="smoke-message">
              <p className="smoke-line">Yo, Kashu girl, it's your special day,</p>
              <p className="smoke-line">No need for smoke, keep your bones strong, okay?</p>
              <p className="smoke-line">But hey, smoking was the first time we vibe and cheers,</p>
              <p className="smoke-line">To the memories we make, with no fears.</p>
              <p className="smoke-line">Happy birthday, sweet girl, light up the sky,</p>
              <p className="smoke-line">You shine brighter than any cloud that passes by.</p>
            </div>
          </section>
        ) : showCheers ? (
          <section className="cheers">
            <div className="cheers-message">
              <p className="cheers-line">Cheers to the GOAT, cheers to the moon,</p>
              <p className="cheers-line">Let’s raise a glass and party 'til noon!</p>
            </div>
          </section>
        ) : null}
      </header>
    </div>
  );
}

export default App;
