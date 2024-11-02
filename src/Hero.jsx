import Button from "./Button";
import "./Hero.css";
import headshot from "./assets/bw-headshot.png";

export default function Hero() {
  return (
    <header>
      <img src={headshot} alt="Danielle Headshot" width="500" />
      <div className="content">
        <h1 className="name">Danielle Brown</h1>
        <h2 className="title">Front-End Developer & Designer</h2>
        <Button
          style="link"
          url="https://www.danielleallyssa.com/"
          text="danielleallyssa.com"
        />
        <div className="social--links">
          <Button
            style="button"
            variant="primary"
            url="mailto:hello@danielleallyssa.com"
            text="Email"
          />
          <Button
            style="button"
            variant="secondary"
            url="https://www.linkedin.com/in/danielleabrown/"
            text="LinkedIn"
          />
        </div>
      </div>
    </header>
  );
}
