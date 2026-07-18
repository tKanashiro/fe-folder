import { Block } from "./Block";

interface HeaderProps { title: string, description?: string };

export function Header({ title, description }: HeaderProps ) {
    return (
        <Block>
            <h2 className="text-2xl text-black font-bold">{title}</h2>
            {description && <p className="text-gray-700">{description}</p>}
        </Block>
    )
}
