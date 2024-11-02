import ContentBlock from "./ContentBlock";
import { textContent } from "./ContentData";

export default function MainContent() {
  return (
    <main>
      {textContent.map(({ title, text, id }) => (
        <ContentBlock key={id} title={title}>
          {text}
        </ContentBlock>
      ))}
    </main>
  );
}
