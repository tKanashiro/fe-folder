type ResultStyle = 'date' | 'temporal' | 'wrong';
interface ResultProps {
    title: string;
    result: string;
    resultStyle?: ResultStyle;
    style?: string;
};

export function Result({ title, result, resultStyle = 'date', style }: ResultProps) {
    const color: Record<ResultStyle, string> = {
        date: 'bg-gray-100 text-gray-800',
        temporal: 'bg-green-100 text-green-800',
        wrong: 'bg-red-100 text-red-800',
    };
    return (
        <div className={style}>
            <p className="text-[20px] font-bold mb-2.5">{title}</p>

            <div className={`rounded p-4 ${color[resultStyle]}`}>
                <code className="leading-7">{result}</code>
            </div>
        </div>
    )
}