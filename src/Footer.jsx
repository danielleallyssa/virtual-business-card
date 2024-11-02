import Button from "./Button";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="social--links">
        <Button
          text="Twitter"
          url="https://twitter.com/danielleallyssa"
          variant="secondary"
        />
        <Button
          text="Github"
          url="https://github.com/danielleallyssa"
          variant="secondary"
        />
        <Button
          text="Resume"
          url="https://cdn.prod.website-files.com/660d8dc60c9db334ebbac10b/67247cc209df176d197f048f_Danielle_Brown-2024_Resume-PUBLIC.pdf"
          variant="primary"
        />
      </div>
    </footer>
  );
}
