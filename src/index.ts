import { generateRandomArray } from "./utils/randomize";
import { Sort } from "./utils/sort";


(async () => {
    const data = generateRandomArray(10)
    const sort = new Sort(data)
    await sort.selection()
})();