import React from "react";
import { BasketView } from '../../../types';
import ProductItem from '../../Display/ProductItem';
import Button from '../../Display/Button';

import { formatPriceToString } from '../../../helpers';

import './BasketContainer.scss';

export interface BasektContainerProps {
    view: BasketView
    onRemoveFromBasket: (productName: string) => void
}

const BasketContainer: React.FC<BasektContainerProps> = ({ view, onRemoveFromBasket }) =>
    <div className="basket-container">
        <h1>Basket Total: {formatPriceToString(view.total, view.displayCurrency)}</h1>
        <ul>
            {view.items.length > 0 && view.items.map(p => <li key={p.name}>
                <ProductItem name={p.name} price={p.price} displayCurrency={view.displayCurrency} />
                <h4>{p.amount} item(s)</h4>
                <div className="button-container">
                    <Button onClick={() => onRemoveFromBasket(p.name)}>Remove from basket</Button>
                </div>
            </li>)}
            {view.items.length === 0 ? <li className="placeholder">
                <h2>Empty</h2>
            </li> : null}
        </ul>
    </div>;

export default BasketContainer;
