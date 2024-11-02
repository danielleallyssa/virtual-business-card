import ContentBlock from "./ContentBlock";
import { textContent } from "./ContentData";

export default function MainContent() {
  return (
    <main>
      {textContent.map((content) => (
        <ContentBlock key={content.id} {...content} />
      ))}
    </main>
  );
}
