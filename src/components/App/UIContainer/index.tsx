import React, { useState, useCallback, useMemo } from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import { ApolloError } from '@apollo/client';

import { ProductQueryResult, Basket, BasketItem, BasketMessage } from '../../../types';

import PageContainer from '../PageContainer';
import Logo from "../../Display/Logo";
import BasketIcon from '../../Display/BasketIcon';
import Error from '../../Display/Error';
import Loading from '../../Display/Loading';

import { isOverTolerableLimit } from '../../../helpers';

import './UIContainer.scss';

interface UIContainerProps {
  loading: boolean,
  error: ApolloError | undefined,
  data: { productsQuery: ProductQueryResult } | undefined
}

const INITIAL_STATE: { basket: Basket, basketMessage: BasketMessage | null } = { basket: { items: [] }, basketMessage: null }

const UIContainer: React.FC<UIContainerProps> = ({ loading, error, data }) => {

  const [ state, setState ] = useState(INITIAL_STATE);

  const products = useMemo(() => data?.productsQuery?.products, [data])
  const tolerableUpperLimits = useMemo(() => data?.productsQuery?.config?.tolerableUpperLimits, [data]);

  const count = useMemo(() => state?.basket?.items?.reduce(
    (a: number, c: BasketItem) => a + c.amount,
    0
  ), [state.basket])

  const onAddToBasket = useCallback((productName: string) => {

    const basket: Basket = {...state?.basket}
    const indexOf = basket?.items.findIndex(e => e.name === productName);
    
    if (isOverTolerableLimit(productName, basket, products || [], tolerableUpperLimits || [])){
      setState({ ...state, basketMessage: BasketMessage.ExceedingUpperTolerableLimit}) 
    } else {
      if (indexOf > -1){
        basket.items[indexOf].amount = basket.items[indexOf].amount + 1
      } else {
        basket.items.push({ name: productName, amount: 1})
      }
  
      setState({ ...state, basket, basketMessage: BasketMessage.AddedToBasket})
    }

  }, [state, products, tolerableUpperLimits]);

  const onRemoveFromBasket = useCallback((productName: string) => {
    const basket: Basket = {...state?.basket}
    const indexOf = basket?.items.findIndex(e => e.name === productName)
    const amount = basket.items[indexOf].amount

    if (amount > 1) {
      basket.items[indexOf].amount = basket.items[indexOf].amount - 1
    } else {
      basket.items.splice(indexOf, 1);
    }

    setState({ ...state, basket, basketMessage: BasketMessage.RemovedFromBasket})
  }, [state]);

  return (<BrowserRouter>
    <div className="container">
      <header>
        <Logo />
        <Link to="/basket">
          <BasketIcon className="fr" count={count} />
        </Link>
        <h2 className="fr">{state.basketMessage}</h2>
      </header>
      <main>
        {!!loading ? <Loading /> : null}
        {!!error ? <Error /> : null}
        {!!data && !!data.productsQuery ? <PageContainer 
          data={data.productsQuery} 
          basket={state.basket} 
          onAddToBasket={onAddToBasket}
          onRemoveFromBasket={onRemoveFromBasket}
        /> : null}
      </main>
      <footer>
        Vitl technical test by <a href="mailto:david.j.roberts303@gmail.com">david.j.roberts303@gmail.com</a>
      </footer>
    </div>
  </BrowserRouter>)
};

export default UIContainer;
