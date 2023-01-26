import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import Container from '../../components/Container/Container';
import Categories from '../../components/Categories/Categories';
import { categoriesType } from '../../data/categoriesType';
import {
  getAllProducts,
  productsSelector,
  selectProductsStatus,
} from '../../state/productsSlice';
import ProductsList from '../../components/ProductsList/ProductsList';
import * as Progress from 'react-native-progress';
import { style } from './Style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Products = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [keyword, setKeyword] = useState();

  const status = useSelector(selectProductsStatus);

  const productsData = useSelector((state) =>
    productsSelector(state, selectedCategory, keyword)
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const renderCategories = ({ item }) => (
    <Categories
      title={item.title}
      Icon={item.image}
      id={item.id}
      setSelectedCategory={setSelectedCategory}
      selectedCategory={selectedCategory}
    />
  );
  const renderProducts = ({ item }) => (
    <ProductsList
      images={item.images}
      title={item.title}
      price={item.price}
      id={item._id}
    />
  );

  //remove the margin bottom bug from the bottom tab for ios
  let insets = useSafeAreaInsets();
  let bottomTab;
  if (Platform.OS === 'android') {
    bottomTab = 0;
  } else {
    bottomTab = -insets.bottom;
  }

  if (status === 'loading') {
    return (
      <View style={style.spinnerContainer}>
        <Progress.Circle size={50} indeterminate={true} />
      </View>
    );
  }
  return (
    <Container>
      <SearchBar setKeyword={setKeyword} keyword={keyword} />
      <View>
        <FlatList
          data={categoriesType}
          renderItem={renderCategories}
          keyExtractor={(item) => item.id}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ flex: 1, marginTop: 20, marginBottom: bottomTab }}>
        <FlatList
          columnWrapperStyle={{
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}
          data={productsData}
          renderItem={renderProducts}
          numColumns={2}
          // keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

export default Products;
