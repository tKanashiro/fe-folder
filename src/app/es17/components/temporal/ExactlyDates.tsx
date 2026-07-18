import { Block } from "../Block";
import { Code } from "../Code";
import { Header } from "../Header";
import { Result } from "../Result";
import { Temporal } from "temporal-polyfill";

export function ExactlyDates( ) {

    const plainDate = Temporal.PlainDate.from("2026-02-15");  // Just a date
    const dateTime = Temporal.PlainDateTime.from("2026-02-15T09:30");  // Date and time
    const sydneyZone = Temporal.Now.zonedDateTimeISO("Australia/Sydney"); // Sydney 
    const timeZoneId = Temporal.Now.timeZoneId();
    const timeOnly = Temporal.Now.plainTimeISO();
    return (
       <>
            <Header title="Temporal types" description="With Temporal, the type tells you exactly what you're dealing with." />

            <Block>
                <Code code={`const plainDate = Temporal.PlainDate.from("2026-02-15");`} />
                <Result
                    title="Date:"
                    result={plainDate.toString()}
                />
            </Block>
            <Block>
                <Code code={`const dateTime = Temporal.PlainDateTime.from("2026-02-15T09:30");`} />
                <Result
                    title="Date:"
                    result={dateTime.toString()}
                />
            </Block>
            <Block>
                <Code code={`const sydneyZone = Temporal.Now.zonedDateTimeISO("Australia/Sydney");`} />
                <Result
                    title="Date:"
                    result={sydneyZone.toString()}
                />
            </Block>
            <Block>
                <Code code={`const timeZoneId = Temporal.Now.timeZoneId();`} />
                <Result
                    title="Date:"
                    result={timeZoneId.toString()}
                />
            </Block>
            <Block>
                <Code code={`const timeOnly = Temporal.Now.plainTimeISO();`} />
                <Result
                    title="Date:"
                    result={timeOnly.toString()}
                />
            </Block>
        </>
    )
}