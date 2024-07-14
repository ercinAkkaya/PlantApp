import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import context from '../../core/extension/context';
import theme from '../../core/init/theme/theme'; 

export default function BottomNavbar() {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => setSelectedItem('Home')}>
        <Image
          style={styles.image}
          source={
            selectedItem === 'Home'
              ? require('../../../assets/png/home-active.png')
              : require('../../../assets/png/home.png')
          }
        />
        <Text
          style={[styles.text, selectedItem === 'Home' && styles.selectedText]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => setSelectedItem('Diagnose')}>
        <Image
          style={styles.image}
          source={
            selectedItem === 'Diagnose'
              ? require('../../../assets/png/healthcare-active.png')
              : require('../../../assets/png/healthcare.png')
          }
        />
        <Text
          style={[
            styles.text,
            selectedItem === 'Diagnose' && styles.selectedText,
          ]}>
          Diagnose
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.navItem, styles.middleItem]}>
        <Image style={styles.image} source={require('../../../assets/png/scan.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => setSelectedItem('My Garden')}>
        <Image
          style={styles.image}
          source={
            selectedItem === 'My Garden'
              ? require('../../../assets/png/leaf-active.png')
              : require('../../../assets/png/leaf.png')
          }
        />
        <Text
          style={[
            styles.text,
            selectedItem === 'My Garden' && styles.selectedText,
          ]}>
          My Garden
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => setSelectedItem('Profile')}>
        <Image
          style={styles.image}
          source={
            selectedItem === 'Profile'
              ? require('../../../assets/png/user-active.png')
              : require('../../../assets/png/user.png')
          }
        />
        <Text
          style={[
            styles.text,
            selectedItem === 'Profile' && styles.selectedText,
          ]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: context.paddingLow.padding,
  },
  image: {
    width: context.getDynamicWidth(6),
    height: context.getDynamicHeight(3),
  },
  text: {
    fontSize: 12,
    marginTop: 5,
    color: theme.colors.greyLight,
  },
  selectedText: {
    color: theme.colors.primary,
  },
  navItem: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: context.paddingLow.padding,
    paddingHorizontal: context.paddingMedium.padding,
  },
  middleItem: {
    padding: context.paddingLow.padding,
    width: context.getDynamicWidth(8),
    borderWidth: 5,
    borderColor: '#60c193',
    borderRadius: 50,
    backgroundColor: '#29ae6e',
    marginBottom: 20,
    marginTop: -20,
  },
  middleNavItem: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
    marginTop: -10, 
  },
});
