import "./Button.css";

export default function Button({
  variant = "primary",
  url = "#",
  style = "button",
  text = "Learn More",
}) {
  return (
    <a
      href={url === "" ? `#` : url}
      className={style === "link" ? `link` : `button button--${variant}`}
    >
      {text}
    </a>
  );
}
