import React from 'react';
import Product from "../data/Product";
import {DataGrid} from "@mui/x-data-grid";
import ProductActions from "./ProductActions";

interface ProductsTableProps {
    products: Product[];
    deleteProduct: (id: number) => void;
}


const ProductsTable = (props: ProductsTableProps) => {
    const {deleteProduct} = props;

    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'name', headerName: 'Name'},
        {field: 'price', headerName: 'Price'},
        {field: 'actions', headerName: 'Actions', renderCell: (params: any) => <ProductActions params={params} deleteProduct={deleteProduct} />, width: 150 }
   ];

    return <DataGrid rows={props.products} columns={columns} />
}

export default ProductsTable;
