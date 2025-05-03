import { visualizer } from "./visualizer";

type SortType = "bubble" | "selection" | "insertion"

export class Sort {
    private data: number[];

    constructor(data: number[]) {
        this.data = data
    }

    explain(sortType: SortType):string {
        const explainMap = {
            bubble: "How Bubble Sort Works. The algorithm compares each pair of adjacent elements in the array and swaps them if they are in the wrong order. This process is repeated for each element in the array, and the largest unsorted element `Bubbles up` to its correct position at the end of the array.",
            selection: "How Selection Sort Works. The algorithm starts with the entire array considered as an unsorted subarray. It iterates through the unsorted subarray to find the index of the minimum element. The minimum element is then swapped with the first unsorted element, effectively adding it to the sorted subarray.",
            insertion: "Insertion Sort is a simple and efficient comparison-based sorting algorithm. It builds the final sorted array one element at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort, but it performs well for small datasets or nearly sorted arrays."
        }
        return explainMap[sortType]
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
        console.log(this.explain("bubble"))
        return this.data
    }

    async selection(): Promise<number[]> {
        const n: number = this.data.length
        for(let i:number = 0; i < n - 1; i++){
            let minIdx = i
            for(let j: number = i; j < n; j++){
                if(this.data[minIdx]! > this.data[j]!) {
                    minIdx = j
                } 
            }
            [this.data[i]!, this.data[minIdx]!] = [this.data[minIdx]!, this.data[i]!]
            await visualizer(this.data)
        }
        console.log(this.explain("selection"))
        return this.data
    }

    async insertion(): Promise<number[]> {
        const n: number = this.data.length
        for(let i: number = 0; i < n; i++){
            const currEl: number = this.data[i]!
            let j: number = i - 1
            while(j >= 0 && this.data[j]! > currEl) {
                this.data[j + 1]! = this.data[j]!
                j--
            }
            this.data[j + 1] = currEl
            await visualizer(this.data)
        }
        console.log(this.explain("insertion"))
        return this.data
    }

}