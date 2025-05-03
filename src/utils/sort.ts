import { visualizer } from "./visualizer";

export class Sort {
    private data: number[];

    constructor(data: number[]) {
        this.data = data
    }

    async bubble(): Promise<number[]> {
        const n: number = this.data.length
        for(let i: number = 0; i < n - 1; i++) {
            for(let j: number = 0; j < n - i - 1; j++) {
                if(this.data[j]! > this.data[j + 1]!) {
                    [this.data[j]!, this.data[j + 1]!] = [this.data[j + 1]!, this.data[j]!]
                    await visualizer(this.data)
                }
            }
        }
        return this.data
    }

}