export const delay = async (second: number) => {
    await new Promise(resolve => setTimeout(resolve, second * 1000));
}