import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid, AtAvatar, AtButton } from 'taro-ui'

import Body from '@components/body'

import './index.scss'

class My extends Component {
  config = {
    navigationBarTitleText: '个人中心'
  }
  state = {
    userInfo: {}
  }
  data = [
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      value: '任务'
    },
    {
      image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
      value: '问题',
      url: '/pages/user/question/index'
    },
    {
      image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
      value: '咨询'
    },
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
      value: '关注'
    },
    {
      image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
      value: '流水'
    },
    // {
    //   image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
    //   value: '手机馆'
    // }
  ]

  componentWillMount () {
  }

  onGetUserInfo (res) {
    this.setState({
      userInfo: res.detail.userInfo
    })
  }

  onClick (item, index) {
    const { url } = item
    if (url) {
      Taro.navigateTo({ url })
    } else {
      console.log('item', index, item)
    }
  }

  render () {
    const { userInfo } = this.state
    return (
      <Body
        current={3}
      >
        <View className='top'>
          <Image
            className='avatar'
            src={userInfo.avatarUrl}
          />
          {userInfo.avatarUrl ? <Text className='name'>{userInfo.nickName}</Text> : <AtButton
              className='btn'
              size='small'
              circle
              onGetUserInfo={this.onGetUserInfo}
              openType='getUserInfo'
            >
            求真相...
            </AtButton>}
        </View>
        <View>
          <AtGrid
            // hasBorder={false}
            data={this.data}
            onClick={this.onClick}
          />
        </View>
      </Body>
    )
  }
}

export default My