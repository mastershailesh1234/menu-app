import React from 'react';
import {
    CategoryContainer,
    CategoryBtn,
    CategoryBox,
    CatLink
  } from './CategoryElements';

  const Category = () => {
    return (
      <CategoryBox>
      <CategoryContainer>
        <h1>Stater And Soups</h1>
        <CategoryBtn><CatLink to='./SoupStarter'>Show More...</CatLink></CategoryBtn>
      </CategoryContainer>
      <CategoryContainer>
        <h1>Main Course</h1>
        <CategoryBtn><CatLink to='./MainCourse'>Show More...</CatLink></CategoryBtn>
      </CategoryContainer>
      <CategoryContainer>
        <h1>Dessert, Mocktail And Beverages</h1>
        <CategoryBtn><CatLink to='./EndingFood'>Show More...</CatLink></CategoryBtn>
      </CategoryContainer>
      <CategoryContainer>
        <h1>Full Menu</h1>
        <CategoryBtn><CatLink to='./FullMenu'>Show More...</CatLink></CategoryBtn>
      </CategoryContainer>
      </CategoryBox>
    );
  };

  export default Category;