import { Header } from "../Header";
import { Temporal } from "temporal-polyfill";
import { Result } from "../Result";
import { Code } from "../Code";
import { Block } from "../Block";

export function MonthBased() {
    const oldDate = new Date(2026, 1, 15);
    const temporalDate = Temporal.PlainDate.from({
        year: 2026,
        month: 1,
        day: 15,
    });

    return (
        <div>
            <Header title="Date vs Temporal Date" description="Date months are 0-based, Temporal months are 1-based" />

            <Block>
                <Code code={`const currentDate = new Date(2026, 1, 15);`} />
                <Result
                    title="Date:"
                    result={oldDate.toString()}
                />
            </Block>

            <Block>
                <Code code={`temporalDate = Temporal.PlainDate.from({
        year: 2026,
        month: 1,
        day: 15,
        });`}
                />
                <Result
                    title="Temporal Date:"
                    result={temporalDate.toString()}
                    before={false}
                    style="mt-5"
                />
            </Block>

        </div>

    )
}