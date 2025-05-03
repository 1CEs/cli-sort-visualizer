import { generateRandomArray } from "./utils/randomize";
import { Sort } from "./utils/sort";
import { createInterface } from "readline"
import chalk from "chalk"

const rl = createInterface({ input: process.stdin, output: process.stdout })

console.log(chalk.bgBlue.white.bold("Sorting Algorithm Visualizer"))
console.log(chalk.blue("\n📌 Please configure the visualization settings:\n"))

const askQuestion = (question: string, color: keyof typeof chalk): Promise<string> =>
    new Promise(resolve => {
        const chalkInstance = chalk[color] as ((text: string) => string) | undefined
        const formattedQuestion = chalkInstance ? chalkInstance(`👉 ${question} `) : question
        rl.question(formattedQuestion, resolve)
    });

(async () => {
    const arrayLength = parseInt(await askQuestion("Enter array length (Default = 10):", "green")) || 10
    const minValue = parseInt(await askQuestion("Enter minimum value (Default = 1):", "yellow")) || 1
    const maxValue = parseInt(await askQuestion("Enter maximum value (Default = 50):", "red")) || 50

    console.log("Sorting algorithm \n#1.bubble\n#2.selection\n#3.insertion\n(Default = bubble)")

    const sortNumber = await askQuestion("Enter number:", "magenta") || 1
    const delay = parseInt(await askQuestion("Enter visualization delay in seconds (Default = 1):", "cyan")) || 1

    console.log(chalk.green("\n✅ Configuration completed. Starting visualization..."))
    rl.close()
    
    const data = generateRandomArray(arrayLength, minValue, maxValue)
    const sort = new Sort(data)
    
    switch(Number(sortNumber)){
        case 1:
            await sort.bubble()
            break
        case 2:
            await sort.selection()
            break
        case 3:
            await sort.insertion()
            break
        default:
            console.log("Error: Please re-select sorting algorithms")
            break 
    }
})();