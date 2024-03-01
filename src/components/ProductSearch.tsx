import React from 'react';
import {Box, Button, ButtonGroup, TextField} from "@mui/material";

interface ProductSearchProps {
    page: number;
    setPage: (page: number) => void;
    query: string;
    setQuery: (query: string) => void;
}

const ProductSearch = (props: ProductSearchProps) => {
    const {page, setPage, query, setQuery} = props;

    const onPreviousClick = () => {
        setPage(page - 1);
    }
    const onNextClick = () => {
        setPage(page + 1);
    }

    return (<Box display="flex" sx={{marginBottom: 5, gap: 2}}>
        <ButtonGroup>
            <Button onClick={() => onPreviousClick()}>Previous</Button>
            <Button onClick={() => onNextClick()}>Next</Button>
        </ButtonGroup>
        <TextField placeholder="query" value={query} onChange={(event) => setQuery(event.target.value)} />
    </Box>)
}

export default ProductSearch;
