import React,{useState} from 'react';
import nonveg from '../../images/veg.png';
import veg from '../../images/nonVeg.png';
import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductInfo,
  ProductPrice,
} from './ProductsElements';

const Products = ({ heading, data }) => {
  
  return (
    <ProductsContainer>
      <ProductWrapper>
        {data.map((product, index) => {
          if(product.indicator=="TRUE"){
            
            var Img=<img src={nonveg} style={{height: "15px"}, {width: "15px"}}/>;
          }
          else{
            var Img=<img src={veg} style={{height: "15px"}, {width: "15px"}}/>;
          }
          return (
            <ProductCard key={index}>
              <ProductInfo>
                <ProductTitle>{Img}  {product.name}</ProductTitle>
                <ProductPrice>₹{product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
