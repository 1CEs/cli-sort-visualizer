export const generateRandomArray = (
    length: number,
    min: number = 1,
    max: number = 50
): number[] => {
    const array: number[] = [];
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(randomNum);
    }
    return array;
};