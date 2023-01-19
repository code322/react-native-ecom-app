import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './Style';
import { AntDesign } from '@expo/vector-icons';
import { convertToDollars } from '../../helpers/tools';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { removeItem } from '../../state/cartSlice';
import { useDispatch } from 'react-redux';
import { removeFromFav } from '../../state/FavouriteSlice';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

const Item = ({ ...props }) => {
  const { price, title, image, id, screen, quantity } = props;
  const dispatch = useDispatch();
  let cost = convertToDollars(price);
  return (
    <View style={style.itemContainer}>
      <View style={style.item}>
        <Image
          style={style.image}
          source={{
            uri: image,
          }}
        />
        <View>
          <Text style={style.title}>{title}</Text>
          <Text style={style.price}>{cost}</Text>
          {screen === 'cart' ? <Quantity quantity={quantity} /> : ''}
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          screen !== 'favourite'
            ? dispatch(removeItem(id))
            : dispatch(removeFromFav(id))
        }
      >
        <AntDesign name='delete' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default Item;

const Quantity = ({ quantity }) => {
  return (
    <View style={style.quantityContainer}>
      <TouchableOpacity activeOpacity={0.7} style={style.adjustQuantity}>
        <Ionicons name='chevron-back' size={24} color={colors.gray} />
      </TouchableOpacity>
      <Text style={style.quantity}>{quantity}</Text>
      <TouchableOpacity activeOpacity={0.7} style={style.adjustQuantity}>
        <Ionicons name='chevron-forward' size={24} color={colors.gray} />
      </TouchableOpacity>
    </View>
  );
};
