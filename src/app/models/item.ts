export class Item {
    name!: string;
    description!: string;
    quantity!: number;
    co2Reduction!: number;
    costFunction!: (quantity: number) => number;
    thumbnail!: string;
    incomePerSecond!: number;
}
