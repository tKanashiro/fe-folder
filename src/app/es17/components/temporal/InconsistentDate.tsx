import { Block } from "../Block";
import { Code } from "../Code";
import { Header } from "../Header";
import { Result } from "../Result";
import { Temporal } from "temporal-polyfill";

export function InconsistentDate( ) {
    const currentDate = new Date("02/03/2026");
    const invalidDate = new Date("February 30, 2026");

    const temporalDate1 = Temporal.PlainDate.from("2026-02-15");
    const temporalDate2 = Temporal.PlainDate.from({
  year: 2026,
  month: 2,
  day: 15,
});
    let temporalInvalidDateResult: string;
    try {
        Temporal.PlainDate.from("February 30, 2026");
        temporalInvalidDateResult = "no error thrown";
    } catch (error) {
        temporalInvalidDateResult = String(error);
    }

    return (
       <>
            <Header title="Inconsistent Date Parsing" />

            <Block>
                <Code code={`const currentDate = new Date("02/03/2026");
// March 2? (MM/DD/YYYY)
// April 3? (DD/MM/YYYY)`} />
                <Result
                    title="Date:"
                    result={currentDate.toString()}
                />
            </Block>

            <Block>
                <Code code={`const currentDate =  new Date("February 30, 2026");`} />
                <Result
                    title="Date:"
                    result={invalidDate.toString()}
                    resultStyle="wrong"
                />
            </Block>

            <Block>
                <Code code={`const currentDate = Temporal.PlainDate.from("2026-02-15");`}
                />
                <Result
                    title="Start Date:"
                    result={temporalDate1.toString()}
                    resultStyle="temporal"
                />
            </Block>

            <Block>
                <Code code={`const currentDate = Temporal.PlainDate.from({
  year: 2026,
  month: 2,
  day: 15,
})");`}
                />
                <Result
                    title="Start Date:"
                    result={temporalDate2.toString()}
                    resultStyle="temporal"
                />
            </Block>

            <Block>
                <Code code={`const currentDate =  Temporal.PlainDate.from("February 30, 2026");`} />
                <Result
                    title="Date:"
                    result={temporalInvalidDateResult}
                    resultStyle="wrong"
                />
            </Block>
        </>
    )
}