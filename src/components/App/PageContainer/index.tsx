import React, { useMemo } from 'react';
import { Switch, Route } from 'react-router-dom'

import { ProductQueryResult, Basket } from '../../../types';

import ProductContainer from "../ProductsContainer";
import BasketContainer from "../BasketContainer";

import { getBasketView, getProductView } from '../../../views';

interface PageContainerProps {
    data: ProductQueryResult,
    basket: Basket,
    onAddToBasket: (productName: string) => void
    onRemoveFromBasket: (productName: string) => void
}

const PageContainer: React.FC<PageContainerProps> = ({ data, basket, onAddToBasket, onRemoveFromBasket }) => {

    const [productsView, basketView] = useMemo(() => {

        const products = data?.products;
        const displayCurrency = data?.config?.currency;

        const productsView = getProductView(products, displayCurrency);
        const basketView = getBasketView(basket, products, displayCurrency);

        return [productsView, basketView];
    }, [data, basket]);

    return (<Switch>
        <Route exact path="/">
            <ProductContainer
                onAddToBasket={onAddToBasket}
                view={productsView} />
        </Route>
        <Route exact path="/basket">
            <BasketContainer
                onRemoveFromBasket={onRemoveFromBasket}
                view={basketView} />
        </Route>
    </Switch>)

}

export default PageContainer;