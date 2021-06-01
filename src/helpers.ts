import { Basket, BasketItem, Currency, Product, TolerableUpperLimit } from './types';
import { CURRENCY_SIGNS } from './constants'

export const formatPriceToString = (price: number, displayCurrency: Currency): string => `${CURRENCY_SIGNS[displayCurrency]}${price.toFixed(2)}`

export const isOverTolerableLimit = (productName: string, basket: Basket, products: Product[], tolerableUpperLimits: TolerableUpperLimit[]): boolean => {
    
    const currentNurientsLookup = basket.items.reduce((a: any, c: BasketItem) => {
        products.find((p: Product) => p.name === c.name)?.nutrients.forEach(n => {
            if (a[n.id]){
               a[n.id] = a[n.id] + (c.amount * n.amount);
            } else {
               a[n.id] = c.amount * n.amount;
            }
        })
        return a
    }, {});

    let isOverLimit = false;

    products.find((p: Product) => p.name === productName)?.nutrients.forEach(n => {
        const limit = tolerableUpperLimits.find(l => l.id === n.id)?.amount;
        const totalAmount = currentNurientsLookup[n.id] + n.amount;

        if ( !!limit && totalAmount > limit){
            isOverLimit = true;
        }
    })

    return isOverLimit;
}