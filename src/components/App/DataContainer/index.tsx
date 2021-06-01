import React from 'react';
import { QueryResult, useQuery } from '@apollo/client';

import { ProductQueryResult } from '../../../types';

import productQuery from './productQuery';
import UIContainer from '../UIContainer';

const DataContainer: React.FC = () => {
    const { loading, error, data }: QueryResult<{ productsQuery: ProductQueryResult }> = useQuery(productQuery);

    return <>
        <UIContainer loading={loading} error={error} data={data} />
    </>
}

export default DataContainer;