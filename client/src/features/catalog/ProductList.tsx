import { Grid, List } from "@mui/material";
import { Product } from "../../app/models/products";
import ProductCards from "./ProductCard";

interface Props {
    products: Product [];
}

export default function ProductList({products}: Props) {
    return (
        <Grid container spacing={4}>
        {products.map(product => (
            <Grid item xs={4} key={product.id}>
            <ProductCards product={product}/>
            </Grid>
        ))}
    </Grid>
    )
}