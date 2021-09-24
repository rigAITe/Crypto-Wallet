import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home, Portfolio, Market, Profile } from '../screens'
import { TabIcon } from '../components'
import { COLORS, icons } from '../constants'
import { setVisibility } from '..//redux/tab/index'
import { connect } from 'react-redux'
// import { executeVisibility } from '../redux'

const Tab = createBottomTabNavigator()

const TabBarCustomerButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

const Tabs = (props) => {

  const co = () => {
    props.setVisibility()
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 140,
          backgroundColor: COLORS.primary,
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!props.isVisible) {
              return (
                <TabIcon focused={focused} icon={icons.home} label='Home' />
              )
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (props.isVisible) {
              e.preventDefault()
            }
          },
        }}
      />
      <Tab.Screen
        name='Portfolio'
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!props.isVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.briefcase}
                  label='Portfolio'
                />
              )
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (props.isVisible) {
              e.preventDefault()
            }
          },
        }}
      />
      <Tab.Screen
        name='Trade'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={props.isVisible ? icons.close : icons.trade}
                label='Trade'
                isTrade={true}
              />
            )
          },
          tabBarButton: (props) => (
            <TabBarCustomerButton {...props} onPress={co} />
          ),
        }}
      />
      <Tab.Screen
        name='Market'
        component={Market}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!props.isVisible) {
              return (
                <TabIcon focused={focused} icon={icons.market} label='Market' />
              )
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (props.isVisible) {
              e.preventDefault()
            }
          },
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!props.isVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.profile}
                  label='Profile'
                />
              )
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (props.isVisible) {
              e.preventDefault()
            }
          },
        }}
      />
    </Tab.Navigator>
  )
}

const matchStateToProps = (state) => {
  return {
    isVisible: state.isTradeModalVisible, 
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    setVisibility: () => dispatch(setVisibility()),
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Tabs)
