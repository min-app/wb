import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'

import '../index.scss'

class Mult extends Component {
  render () {
    const {
      avatar,
      title,
      star,
      count,
      desc,
      btnTitle,
      btnType,
      onClick,
      onBtnClick
    } = this.props
    return (
      <View className='item-mult' onClick={onClick}>
        <View className='item-mult-left'>
          <Image src={avatar} />
        </View>
        <View className='item-mult-right'>
          <View className='top'>
            <View className='main'>
              <View className='title'>{title}</View>
              <View className='desc'>
                <View className='d1'>
                  <AtIcon
                    value='alert-circle'
                    size='14'
                  />
                  <Text>咨询数 {count}</Text>
                </View>
                <View className='d2'>
                  <AtIcon
                    value='star-2'
                    size='12'
                    color='red'
                  />
                  <Text>{star}</Text>
                </View>
              </View>
            </View>
            <View className='arrow'>
              {btnTitle && <AtButton
                size='small'
                circle
                type={btnType || 'primary'}
                onClick={onBtnClick}
              >
                {btnTitle}
              </AtButton>}
            </View>
          </View>
          <View className='desc'>{desc}</View>
        </View>
      </View>
    )
  }
}

export default Mult