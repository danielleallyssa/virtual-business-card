import Button from "./Button";
import { buttons } from "./ContentData";
import "./Footer.css";

export default function Footer() {
  const footerButtons = buttons.slice(2);
  return (
    <footer>
      <div className="social--links">
        {footerButtons.map((button) => (
          <Button key={button.id} {...button} />
        ))}
      </div>
    </footer>
  );
}
