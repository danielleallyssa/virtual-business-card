import "./ContentBlock.css";

export default function ContentBlock(content) {
  const { title = "content", text } = content;

  return (
    <div className="details">
      <h3 className="details--title">{title}</h3>
      <p className="details--content">{text} </p>
    </div>
  );
}
