import "./CameraFeed.css"

function CameraFeed() {
  return (
    <section className="panel camera">
      <h2>CAMERA FEED</h2>

      <div className="camera-box">
        <div className="camera-placeholder">
              📷
              <p>Waiting for video stream...</p>
        </div>
      </div>
    </section>
  );
}

export default CameraFeed;