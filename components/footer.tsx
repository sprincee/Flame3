import { FlameKindling } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="">
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
        
        <div className="flex flex-col items-center gap-2 md:items-end">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="px-2 py-1 bg-muted rounded-md font-mono">v1.1.0</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Built with</span>
            <div className="flex items-center gap-1">
              <span className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-[10px] font-medium">React</span>
              <span className="px-1.5 py-0.5 bg-black dark:bg-white text-white dark:text-black rounded text-[10px] font-medium">Next.js</span>
              <span className="px-1.5 py-0.5 bg-blue-500 text-white rounded text-[10px] font-medium">TypeScript</span>
              <span className="px-1.5 py-0.5 bg-cyan-500 text-white rounded text-[10px] font-medium">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};