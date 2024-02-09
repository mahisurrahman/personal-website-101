import { Fade } from "react-awesome-reveal";

const Backend = () => {
  return (
    <Fade damping={0.5} duration={2500}>
      <div className="flex items-center justify-between">
        <div className="font-RussoOne text-[1.5vw]">
          <div className="flex justify-between gap-4 items-center">
            <h1>NODE JS</h1>
            <progress
              className="progress progress-warning w-80"
              value={80}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>EXPRESS JS</h1>
            <progress
              className="progress progress-primary w-80"
              value={70}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>MONGO DB</h1>
            <progress
              className="progress progress-secondary w-80"
              value={70}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>GIT</h1>
            <progress
              className="progress progress-accent w-80"
              value={90}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>PHP</h1>
            <progress
              className="progress progress-success w-80"
              value={30}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>JAVA</h1>
            <progress
              className="progress progress-info w-80"
              value={20}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>OTHERS</h1>
            <progress
              className="progress progress-error w-80"
              value={50}
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Backend;
