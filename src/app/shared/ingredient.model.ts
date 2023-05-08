export class Ingredient {
    public name: string;
    public amount: number;
    public cost: Number;
    public totalCost: Number;

    constructor (name: string, amount: number, cost: number) {
        this.name = name;
        this.amount = amount;
        this.cost = cost;
        this.totalCost = cost * amount;
    }

}