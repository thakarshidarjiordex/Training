export function randomNumber(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}

export function sum(numbers) {
    return numbers.reduce(
        (total, number) => total + number,
        0
    );
}