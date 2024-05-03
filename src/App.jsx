import "./App.css";
import { useRef } from "react";
import { Navbar } from "./components/Navbar";
import video1 from "./assets/video-1.mp4";
import video2 from "./assets/video-2.mp4";
function App() {
  const styledTextRef = useRef(null);

  const copyToClipboard = () => {
    const textToCopy = styledTextRef.current.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1 className="title">
          A video with Naash can give you a trip to the{" "}
          <span className="jail">jail</span>
        </h1>
        <div className="text-copy">
          <div ref={styledTextRef} className="styled-text">
            CdFU9ppVBBpMKanFNTkN5vS6Z9p9cBatqJ2bvN9kBpBu
          </div>
          <button className="copy-button" onClick={copyToClipboard}>
            Copy to Clipboard
          </button>
        </div>
        <div className="video-container">
          <video
            playsInline
            muted
            preload="none" // Change preload to "none" as it's redundant with lazy loading
            autoPlay
            loop
            id="vjs_video_739_html5_api"
            className="videos"
            data-setup='{"autoplay":"any"}'
            loading="lazy" // Add lazy loading attribute
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="video-container">
          <video
            playsInline
            muted
            preload="yes"
            autoPlay
            loop
            id="vjs_video_739_html5_api"
            className="videos"
            data-setup='{"autoplay":"any"}'
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
        <h1 className="title">
          Naash means <span className="jail">destroy</span>
        </h1>
      </div>
    </>
  );
}

export default App;
