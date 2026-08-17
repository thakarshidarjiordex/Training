export function getCurrentYear(): number {
    return new Date().getFullYear();
}

export function getCurrentDate(): string {
    return new Date().toLocaleDateString();
}