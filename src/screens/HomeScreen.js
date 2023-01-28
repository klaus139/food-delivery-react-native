import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
  Image,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faLocationDot,
  faClock,
  faSort,
} from '@fortawesome/free-solid-svg-icons';

import HomeHeader from '../components/HomeHeader';
import {colors} from '../global/Styles';
import {filterData} from '../global/data';

export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View>
          <View style={styles.buttonStyle}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.gray4,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.gray4 : colors.buttons,
                }}>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filterView}>
          <View style={styles.secondRowView}>
            <View style={styles.rowIcons}>
              <FontAwesomeIcon
                icon={faLocationDot}
                size={20}
                color={colors.gray1}
              />
              <Text style={{marginLeft: 5}}>22, Boluvard Avenue</Text>
            </View>
            <View style={styles.rowIconClock}>
              <FontAwesomeIcon icon={faClock} size={20} color={colors.gray1} />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 3, marginTop: 3}}>
            <FontAwesomeIcon icon={faSort} size={20} color={colors.gray1} />
          </View>
        </View>

        <View style={styles.categoriesView}>
          <Text style={styles.categoriesText}>Categories</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.flatlistSelected}
                      : {...styles.flatlist}
                  }>
                  <Image style={styles.flatlistImage} source={item.image} />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? {...styles.flatListTextSelected}
                          : {...styles.flatListText}
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.categoriesView}>
          <Text style={styles.categoriesText}>Free delivery now</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: colors.buttons,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 15,
    color: colors.headerText,
    fontWeight: 'bold',
  },
  rowIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rowIconClock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: 'white',
    marginHorizontal: 6,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 10,
  },
  secondRowView: {
    flexDirection: 'row',
    backgroundColor: colors.gray5,
    borderRadius: 15,
    marginTop: 10,
    marginHorizontal: 30,
    paddingVertical: 7,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 0,
    marginVertical: 10,
    paddingRight: 20,
  },
  categoriesView: {
    backgroundColor: colors.gray5,
    borderRadius: 15,
    marginTop: 7,

    paddingVertical: 6,
    paddingBottom: 2,
    borderBottomColor: colors.buttons,
  },
  categoriesText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.gray1,
    paddingLeft: 10,
    fontFamily: 'Roboto',
  },
  flatlist: {
    borderRadius: 25,
    backgroundColor: colors.gray5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 90,
  },
  flatlistSelected: {
    borderRadius: 25,
    backgroundColor: colors.buttons,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 90,
  },
  flatlistImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  flatListText: {
    fontWeight: 'bold',
    color: colors.gray1,
  },
  flatListTextSelected: {
    fontWeight: 'bold',
    color: colors.headerText,
  },
});
