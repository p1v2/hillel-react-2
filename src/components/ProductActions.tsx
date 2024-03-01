import React from 'react'
import {Button, ButtonGroup} from "@mui/material";

const ProductActions = (props: {params: any, deleteProduct: (id: number) => void}) => {

    const {params, deleteProduct} = props;

    const productId = params.row.id;

    return <ButtonGroup>
        <Button onClick={() => deleteProduct(productId)}>Delete</Button>
    </ButtonGroup>
}

export default ProductActions;
