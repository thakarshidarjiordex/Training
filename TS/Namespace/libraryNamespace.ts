export namespace StringUtils {

    export function capitalize(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    export function reverse(text: string): string {
        return text.split("").reverse().join("");
    }
}

export namespace NumberUtils {

    export function square(num: number): number {
        return num * num;
    }

    export function isEven(num: number): boolean {
        return num % 2 === 0;
    }
}

export namespace DateUtils {

    export function getYear(): number {
        return new Date().getFullYear();
    }

    export function getDate(): string {
        return new Date().toLocaleDateString();
    }
}