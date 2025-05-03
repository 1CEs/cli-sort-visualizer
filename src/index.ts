import { generateRandomArray } from "./utils/randomize";
import { Sort } from "./utils/sort";


(async () => {
    const data = generateRandomArray(Math.floor(Math.random() * 25))
    const sort = new Sort(data)
    await sort.bubble()
})();