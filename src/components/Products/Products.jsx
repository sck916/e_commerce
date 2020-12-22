import React from "react";
import { Grid } from "@material-ui/core";

import Product from './Product/Product'

const products = [
  { id: 1, name: "Shoes", description: "Running Shoes", price: '$5', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=1.00xw:0.701xh;0,0.229xh&resize=1200:*' },
  { id: 2, name: "Macbook", description: "Apple Macbook", price: '$10', image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_z0x1_mvfh_05_bh_13_3_macbook_air_with_1492907.jpg'},
];

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    );
 
};

export default Products;
