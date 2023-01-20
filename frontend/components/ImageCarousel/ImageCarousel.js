import { Image, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Style';

const ImageCarousel = ({ image }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const _onViewableItemsChanged = React.useCallback(
    ({ viewableItems, changed }) => {
      setActiveIndex(changed[0]?.index);
    },
    []
  );

  const _viewabilityConfig = {
    itemVisiblePercentThreshold: 60,
  };

  const renderImage = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={image}
        renderItem={renderImage}
        pagingEnabled
        horizontal
        onViewableItemsChanged={_onViewableItemsChanged}
        viewabilityConfig={_viewabilityConfig}
        showsHorizontalScrollIndicator={false}
      />
      {image.length > 1 && (
        <View style={styles.pagination}>
          {image.map((_, i) => (
            <View
              key={i}
              style={[
                styles.paginationLine,
                i === activeIndex ? styles.activeLine : {},
              ]}
            ></View>
          ))}
        </View>
      )}
    </>
  );
};

export default ImageCarousel;
