export class Ingredient {
  name: string;
  weight: number;
  protein: number;
  fat: number;
  carbohydrates: number;

  constructor(
    name: string,
    weight: number,
    protein: number,
    fat: number,
    carbohydrates: number
  ) {
    this.name = name;
    this.weight = weight;
    this.protein = protein;
    this.fat = fat;
    this.carbohydrates = carbohydrates;
  }
}
