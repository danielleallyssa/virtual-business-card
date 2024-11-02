import Button from "./Button";
import { buttons } from "./ContentData";
import "./Hero.css";
import headshot from "./assets/bw-headshot.png";

export default function Hero() {
  const heroButtons = buttons.slice(0, 2);
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
          {heroButtons.map((button) => (
            <Button key={button.id} {...button} />
          ))}
        </div>
      </div>
    </header>
  );
}
