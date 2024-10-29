import { FlameKindling } from "lucide-react";

export const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <FlameKindling />
          <p className="text-center text-sm leading-loose md:text-left">
            An{" "}
            <a
              href="https://www.linkedin.com/in/mahad-skhan/"
              target="_blank"
              className="font-medium underline underline-offset-4"
            >
              M.K Corp.
            </a>{" "}
            project.
          </p>
        </div>
      </div>
    </footer>
  );
};
