import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <div>
        <p className="lead">Huokan</p>
      </div>
      <div>
        <p className="lea">Your Boosting Community</p>
      </div>
      <div>
        <p className="lea">Which Game are you interested</p>
      </div>
      <div className="card-container">
        <div className="card">
          <img src="./imagen/w.png" alt="World of Warcraft" />
          <h2>World of Warcraft</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non orci pretium, facilisis elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Curabitur non orci pretium, facilisis
            elit.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to WOW Boosting page
          </a>
        </div>
        <div className="card">
          <img src="./imagen/LOL.png" alt="League of Legends" />
          <h2>League of Legends</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non orci pretium, facilisis elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Curabitur non orci pretium, facilisis
            elit.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to LOL Boosting page
          </a>
        </div>
        <div className="card">
          <img src="./imagen/hots.png" alt="Heroes of the Storm" />
          <h2>Heroes of the Storm</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non orci pretium, facilisis elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Curabitur non orci pretium, facilisis
            elit.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to HOTS Boosting page
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
