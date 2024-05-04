const VideoPlayer = () => {
  return (
    <div className="banner-carousel">
      <div className="carousel-list">
        <div className="carousel-list-item">
          <div className="carousel-item-image">
            <video
              width="320"
              height="250"
              controls={false}
              loop
              autoPlay
              muted
            >
              <source src={"/static/videos/prohero.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
