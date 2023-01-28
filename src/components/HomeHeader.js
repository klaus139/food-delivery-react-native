import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {faBars, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {colors, parameters} from '../global/Styles';
import {Avatar, Badge, Icon, withBadge} from '@rneui/themed';

export default function HomeHeader() {
  

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.iconStyles}>
        <FontAwesomeIcon icon={faBars} size={25} color={colors.headerText} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.headerText}>KZeeFood</Text>
      </View>
      <View style={styles.cartView}>
        <Badge
          status="secondary"
          value={1}
          containerStyle={{position: 'absolute', top: 5, left: 40}}
        />
        <Avatar
          rounded
          source={{
            uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/shopping-cart-and-bags-4049844-3363951.png',
          }}
          size="medium"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartView:{
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
   
  },
});
