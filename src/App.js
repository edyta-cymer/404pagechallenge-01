import "./App.css";
import photo from "../src/photos/Scarecrow.png";

function App() {
  return (
    <div className="App">
      <div id="not-found-div">
        <span id="not-found-span">404 NOT FOUND</span>
        <div id="container">
          <img src={photo} id="photo" alt="photo"></img>
          <div id="box">
            <h1>I have bad news for you</h1>
            <div id="p-box">
              <p>
                The page you are looking for might be removed or is temporarily
                unavailable
              </p>
            </div>

            <button id="btn">BACK TO HOMEPAGE</button>
          </div>
        </div>
        <footer id="footer">
          Created by <span id="bold-footer">EdiCymer</span> - devChallanges.io
        </footer>
      </div>
    </div>
  );
}

export default App;
