import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions:{
            title: 'Feed',
            header: { visible: true },
            tabBarIcon: ({ tintColor }) => 
                <Icon name="home" size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: Feed,
        navigationOptions:{
            title: 'Add Picture',
            header: { visible: true },
            tabBarIcon: ({ tintColor }) => 
                <Icon name="camera" size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: Feed,
        navigationOptions:{
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => 
                <Icon name="user" size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: true,
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);

export default MenuNavigator;