import { Block } from "../Block";
import { Code } from "../Code";
import { Header } from "../Header";
import { Result } from "../Result";
import { Temporal } from "temporal-polyfill";


export function ObjMutable() {
    const startDate = new Date(2026, 1, 15);
    const endDate = startDate;
    endDate.setDate(endDate.getDate() + 7);

    // Create a Date
    const date1 = Temporal.PlainDate.from("2026-05-17");

    // Add 7 days
    const date2 = date1.add({ days: 7 });

    return (
        <>
            <Header title="Mutable vs Immutable" description="Date objects are mutable. Temporal objects are immutable." />

            <Block>
                <Code code={`const startDate = new Date(2026, 1, 15);
const endDate = startDate;

endDate.setDate(endDate.getDate() + 7);`} />
                <Result
                    title="Start Date:"
                    result={startDate.toString()}
                />
                <Result
                    title="End Date:"
                    result={endDate.toString()}
                />
            </Block>

            <Block>
                <Code code={`const startDate = Temporal.PlainDate.from("2026-05-17");
const endDate = startDate.add({ days: 7 });`}
                />
                <Result
                    title="Start Date:"
                    result={date1.toString()}
                    resultStyle="temporal"
                />
                <Result
                    title="End Date:"
                    result={date2.toString()}
                    resultStyle="temporal"
                    style="mt-5"
                />
            </Block>

        </>
    )
}
