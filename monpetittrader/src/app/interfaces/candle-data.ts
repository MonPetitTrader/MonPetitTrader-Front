export interface CandleDataObject {
    "1. open": string,
    "2. high": string,
    "3. low": string,
    "4. close": string,
    "5. volume": string,
}

export interface CandleDataSeries {
    x: string[],
    close: number[],
    high: number[],
    low: number[],
    open: number[]
}
