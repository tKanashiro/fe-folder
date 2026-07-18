import { codeToHtml } from "shiki";

interface CodeProps {
    code: string;
    lang?: string;
};

export async function Code({ code, lang = "ts" }: CodeProps) {
    const html = await codeToHtml(code, {
        lang,
        theme: "github-dark",
    });

    return (
        <div
            className="mb-4 [&_pre]:rounded [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:leading-7"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}
