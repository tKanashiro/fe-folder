interface ResultProps {
    title: string;
    result: string;
    before?: boolean;
    style?: string;
};

export function Result({ title, result, before = true, style }: ResultProps) {
    return (
        <div className={style}>
            <p className="text-[20px] font-bold mb-2.5">{title}</p>

            <div className={`rounded p-4 ${before ? "bg-gray-100 text-gray-800" : "bg-green-100 text-green-800"
                }`}>
                <code className="leading-7">{result}</code>
            </div>
        </div>
    )
}