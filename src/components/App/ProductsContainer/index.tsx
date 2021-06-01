import React from "react";
import ProductItem from '../../Display/ProductItem';
import Button from '../../Display/Button';

import { ProductsView } from '../../../types';

import './ProductContainer.scss';

interface ProductContainerProps {
    view: ProductsView,
    onAddToBasket: (productName: string) => void
}

const ProductContainer: React.FC<ProductContainerProps> = ({ view, onAddToBasket }) => <ul className="products-container">
    {view.products.map(p => <li key={p.name}>
        <ProductItem name={p.name} price={p.price} displayCurrency={view.displayCurrency} />
        <div className="button-container">
            <Button onClick={() => onAddToBasket(p.name)}>Add to basket</Button>
        </div>
    </li>)}
</ul>;

export default ProductContainer;
