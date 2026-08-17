class BankAccount {
    public accountHolder: string;
    private balance: number;
    protected accountType: string;
    readonly accountNumber: number;

    constructor(
        accountNumber: number,
        accountHolder: string,
        balance: number,
        accountType: string
    ) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.accountType = accountType;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Please enter a valid amount.");
            return;
        }
        this.balance += amount;
        console.log(`₹${amount} deposited successfully.`);
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Please enter a valid amount.");
            return;
        }

        if (amount > this.balance) {
            console.log("Insufficient balance.");
            return;
        }
        this.balance -= amount;
        console.log(`₹${amount} withdrawn successfully.`);
    }

    public getBalance(): number {
        return this.balance;
    }

    public showAccountDetails(): void {

        console.log("----------------------------");
        console.log("      BANK ACCOUNT");
        console.log("----------------------------");

        console.log(`Account Number : ${this.accountNumber}`);
        console.log(`Account Holder : ${this.accountHolder}`);
        console.log(`Account Type   : ${this.accountType}`);
        console.log(`Balance        : ₹${this.balance}`);

        console.log("----------------------------");
    }
}

const account1 = new BankAccount(
    1001,
    "Rahul",
    10000,
    "Savings"
);

account1.showAccountDetails();

account1.deposit(5000);
console.log("Current Balance:", account1.getBalance());

account1.withdraw(2000);
console.log("Current Balance:", account1.getBalance());