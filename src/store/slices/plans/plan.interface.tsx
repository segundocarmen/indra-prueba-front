export interface PlansList {
    name: string;
    price: number;
    description: string[];
    age: number;
}

export interface PlanInterface {
    contractor: number | null;
    list: PlansList[];
    selected: PlansList | null;
}
