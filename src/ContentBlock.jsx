import "./ContentBlock.css";

export default function ContentBlock({ title = "content", children }) {
  return (
    <div className="details">
      <h3 className="details--title">{title}</h3>
      <p className="details--content">{children} </p>
    </div>
  );
}
