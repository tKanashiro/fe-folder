export default function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Modern Web APIs in Next.js
      </h1>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Stop installing libraries.
      </p>
      <ul className="flex flex-col gap-2 text-left text-base text-zinc-700 dark:text-zinc-300">
        <li>Accordions → &lt;details&gt; &amp; &lt;summary&gt;</li>
        <li>Modals → &lt;dialog&gt;</li>
        <li>Dropdowns &amp; tooltips → Popover API</li>
      </ul>
    </div>
  );
}
