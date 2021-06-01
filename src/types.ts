export enum Unit {
    Milligram = 'mg',
    Microgram = 'mcg'
}

export enum Currency {
    GBP = 'GBP'
}

export type Nutrient = {
    id: string
    amount: number
}

export type Product = {
    name: string
    price: number
    nutrients: Nutrient[]
}

export type TolerableUpperLimit = {
    id: string
    amount: number
    unit: Unit
}

export type Config = {
    tolerableUpperLimits: TolerableUpperLimit[]
    currency: Currency
}

export type BasketItem = {
    name: string,
    amount: number
}

export type Basket = {
    items: BasketItem[],
    // nutrientAmount: NutrientAmounts
}

/* export type NutrientAmounts = {
    id: string,
}
 */
export type ProductItemView = {
    name: string
    price: number
}

export type BasketItemView = {
    name: string,
    price: number,
    amount: number
}

export type BasketView = {
    items: BasketItemView[]
    displayCurrency: Currency
    total: number
}

export type ProductsView = {
    products: ProductItemView[] 
    displayCurrency: Currency
}

export type ProductQueryResult = {
    products: Product[]
    config: Config
}

export enum BasketMessage {
    AddedToBasket = 'Item added to basket!',
    RemovedFromBasket = 'Item removed from basket!',
    ExceedingUpperTolerableLimit = 'Exceeds your daily TUL not added to basket!'
}

export type State = {
   basket: Basket, 
   basketMessage: BasketMessage | null
}

export enum ActionType {
    ADD_TO_BASKET = 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET',
  }
  
export type Actions = {
    type: ActionType,
    payload: { productName: string }
}