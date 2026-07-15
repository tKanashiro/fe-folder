import type { ReactNode } from "react";

export default function DemoSlide({
  title,
  why,
  demo,
  code,
}: {
  title: string;
  why: ReactNode;
  demo: ReactNode;
  code: string;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
        {title}
      </h1>
      <p className="max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {why}
      </p>
      <div className="flex w-full max-w-md items-center justify-center rounded-2xl border border-black/8 bg-white p-8 dark:border-white/[.145] dark:bg-zinc-900">
        {demo}
      </div>
      <pre className="w-full max-w-lg overflow-x-auto rounded-xl bg-zinc-950 p-4 text-left">
        <code className="font-mono text-sm whitespace-pre text-zinc-100">
          {code}
        </code>
      </pre>
    </div>
  );
}
