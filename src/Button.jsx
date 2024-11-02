import "./Button.css";

export default function Button(button) {
  const {
    variant = "primary",
    url = "#",
    style = "button",
    text = "Learn More",
  } = button;

  return (
    <a
      href={url === "" ? `#` : url}
      className={style === "link" ? `link` : `button button--${variant}`}
    >
      {text}
    </a>
  );
}
