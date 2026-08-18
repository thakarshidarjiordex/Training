function Log(
    target: any,
    context: ClassMethodDecoratorContext
) {
    const methodName = String(context.name);

    return function (this: any, ...args: any[]) {

        console.log(`Method "${methodName}" called`);
        console.log("Arguments:", args);

        const result = target.apply(this, args);

        console.log("Result:", result);

        return result;
    };
}

class Calculator {

    @Log
    add(a: number, b: number): number {
        return a + b;
    }

    @Log
    multiply(a: number, b: number): number {
        return a * b;
    }
}

const calculator = new Calculator();

calculator.add(10, 20);
calculator.multiply(5, 4);