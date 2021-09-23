import React from 'react'
import { View, Text, Button } from 'react-native'
import { MainLayout } from '.'
import { setVisibility } from '../redux/index'
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { executeVisibility } from '../redux/actionCreator'
const Home = (props) => {
  console.log('hoME ', props.isVisible)

  return (
    <MainLayout>
      <View>
        <Text>Home</Text>
        <View>
          <Text></Text>
        </View>
        <TouchableOpacity onPress={props.setVisibility}>
          <Button title='HELOOO' />
        </TouchableOpacity>
      </View>
    </MainLayout>
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

export default connect(matchStateToProps, matchDispatchToProps)(Home)
