import { delay } from "./delay";
import chalk from "chalk";

export const visualizer = async (data: number[]) => {
    await delay(1);
    process.stdout.write('\x1Bc');

    const maxVal = Math.max(...data);
    const minVal = Math.min(...data);

    const rawWidth = String(maxVal).length;
    const labelWidth = rawWidth + 4;

    console.log(chalk.bold.blue("Data Visualizer\n"));

    for (let i = 0; i < data.length; i++) {
        const value = data[i]!;
        const isMax = value === maxVal;
        const isMin = value === minVal;

        let rawLabel = value.toString().padStart(rawWidth, ' ');
        let label: string;
        let bar: string;

        if (isMax) {
            label = chalk.bgRed.white.bold(` ${rawLabel} `);
            bar = chalk.redBright("█".repeat(value)) + chalk.gray(" ← max");
        } else if (isMin) {
            label = chalk.bgCyan.black.bold(` ${rawLabel} `);
            bar = chalk.cyanBright("█".repeat(value)) + chalk.gray(" ← min");
        } else {
            label = chalk.yellow(rawLabel.padStart(labelWidth - 2));
            bar = chalk.green("█".repeat(value));
        }

        const paddedLabel = label.padEnd(labelWidth);
        console.log(`${paddedLabel}| ${bar}`);
    }

    console.log();
};
