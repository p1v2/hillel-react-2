import React, {useEffect, useState} from 'react';
import './App.css';
import ProductsTable from "./components/ProductsTable";
import Product from "./data/Product";
import ProductSearch from "./components/ProductSearch";
import {Card, CardContent, CardHeader, CircularProgress} from "@mui/material";

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8000/api/products?format=json&page=${page}&q=${query}`)
            .then(response => response.json())
            .then(data => {setProducts(data.results || []); setLoading(false);});
    }, [page, query])

    const deleteProduct = (id: number) => {
        fetch(`http://localhost:8000/api/products/${id}/`, {
            method: 'DELETE'
        })
        .then(() => {
            setProducts(products.filter(product => product.id !== id));
        });
    }

  return (
      <Card sx={{margin: 10, background: "#EEE"}}>
          <CardHeader title="Products" />
          <CardContent>
            <ProductSearch page={page} setPage={setPage} query={query} setQuery={setQuery} />
            {loading ? <CircularProgress /> :
                <ProductsTable products={products} deleteProduct={deleteProduct} />
            }
          </CardContent>
      </Card>
  );
}

export default App;
