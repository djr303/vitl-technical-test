import {
  Basket,
  Product,
  BasketView,
  ProductsView,
  Currency,
  BasketItemView,
} from "./types";

export const getBasketView = (
  basket: Basket,
  products: Product[],
  displayCurrency: Currency
): BasketView => {
  const productPriceLookup = products.reduce((a: any, c: Product) => {
    a[c.name] = c.price;
    return a;
  }, {});

  const items: BasketItemView[] = basket.items.map((i) => ({
    name: i.name,
    price: productPriceLookup[i.name],
    amount: i.amount,
  }));

  const total = items.reduce(
    (a: number, i: BasketItemView) => a + i.price * i.amount,
    0
  );

  return {
    items,
    displayCurrency,
    total,
  };
};

export const getProductView = (
  products: Product[],
  displayCurrency: Currency
): ProductsView => ({
  products: products.map((p) => ({ name: p.name, price: p.price })),
  displayCurrency,
});
