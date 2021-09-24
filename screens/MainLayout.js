import React, { useRef, useEffect } from 'react'
import { Text, View, Animated } from 'react-native'
import { FONTS, COLORS, icons, SIZES } from '../constants'
import { IconButtonText } from '../components'
import { connect } from 'react-redux'
// import { setVisibility } from '../redux'
import { setVisibility } from '../redux/tab/index'

const MainLayout = ({ children, isVisible }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (isVisible) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start()
    }
  }, [isVisible])

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 280 ]
  })

  console.log(SIZES.height)

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {children}

      {/* Dim background  */}

      {isVisible && <Animated.View 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: COLORS.transparentBlack
        }}
        opacity={modalAnimatedValue}
      />}

      {/* Modal  */}
      <Animated.View
        style={{
          position: 'absolute',
          top: modalY,
          width: '100%',
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
        }}
      >
        <IconButtonText
          label='Transfer'
          icon={icons.send}
          onPress={() => console.log('Transfer')}
        />
        <IconButtonText
          label='Withdraw'
          icon={icons.withdraw}
          containerStyle={{
            marginTop: SIZES.base,
          }}
          onPress={() => console.log('Withdraw')}
        />
      </Animated.View>
    </View>
  )
}

const matchStateToProps = (state) => {
  return {
    isVisible: state.isTradeModalVisible,
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    // setVisibility: () => dispatch(setVisibility()),
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(MainLayout)
