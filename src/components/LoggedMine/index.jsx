import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
// 允许你使用selector函数从一个redux store中获取数据
// 类似 mapStateToProps
// mapStateToProps -> return Object , but useSelector can return any type of value
import { useSelector } from '@tarojs/redux'
import { AtAvatar } from 'taro-ui'

import './index.scss'

export default function LoggedMine(props) {
  const nickName = useSelector(state => state.user.nickName)
  const avatar = useSelector(state => state.user.avatar)

  function onImageClick() {
    Taro.previewImage({
      urls: [avatar],
    })
  }

  return (
    <View className="logged-mine">
      {avatar ? (
        <Image src={avatar} className="mine-avatar" onClick={onImageClick} />
      ) : (
        <AtAvatar size="large" circle text="雀" />
      )}
      <View className="mine-nickName">{nickName}</View>
    </View>
  )
}
