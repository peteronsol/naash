import "./App.css";
import { Navbar } from "./components/Navbar";
import video1 from "./assets/video-1.mp4";
import video2 from "./assets/video-2.mp4";
function App() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1 className="title">
          A video with Naash can give you a trip to the{" "}
          <span className="jail">jail</span>
        </h1>
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
