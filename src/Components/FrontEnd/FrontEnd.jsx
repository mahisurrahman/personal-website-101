import { Fade } from "react-awesome-reveal";

const FrontEnd = () => {
  return (
    <Fade damping={0.5} duration={2500}>
      <div className="flex items-center justify-between">
        <div className="font-RussoOne text-[1.5vw]">
          <div className="flex justify-between gap-4 items-center">
            <h1>HTML</h1>
            <progress
              className="progress progress-warning w-80"
              value={90}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>CSS</h1>
            <progress
              className="progress progress-primary w-80"
              value={85}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>JAVASCRIPT</h1>
            <progress
              className="progress progress-secondary w-80"
              value={60}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>BOOTSTRAP</h1>
            <progress
              className="progress progress-accent w-80"
              value={75}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>TAILWIND CSS</h1>
            <progress
              className="progress progress-success w-80"
              value={85}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>REACT JS</h1>
            <progress
              className="progress progress-info w-80"
              value={65}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>FIGMA</h1>
            <progress
              className="progress progress-error w-80"
              value={50}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>WEB GL</h1>
            <progress
              className="progress progress-primary w-80"
              value={40}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <h1>GSAP</h1>
            <progress
              className="progress progress-secondary w-80"
              value={30}
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default FrontEnd;
