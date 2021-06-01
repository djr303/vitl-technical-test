import React from 'react';

import { Currency } from '../../../types';
import { PRODUCT_CLASSES } from '../../../constants';
import { formatPriceToString } from '../../../helpers';

import './ProductItem.scss';

interface ProductProps {
    name: string
    price: number,
    displayCurrency: Currency
}

const ProductItem: React.FC<ProductProps> = ({ name, price, displayCurrency }) => {

    const colorClass = PRODUCT_CLASSES[name];

    return (
        <div className={`product-item-container ${colorClass}`}>
            <div className="product-item">
                <h2>{name}</h2>
                <h3>{formatPriceToString(price, displayCurrency)}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed elit vitae leo rutrum maximus.
                    Morbi et nisi neque. Integer gravida felis arcu, ut varius risus cursus vel.
                </p>
            </div>
        </div>
    )
};

export default ProductItem;