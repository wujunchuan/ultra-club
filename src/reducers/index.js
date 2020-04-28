import { combineReducers } from 'redux'

import user from './user'
import post from './post'
/**
 * redux.combineReducers
 * - 组合 Reducer: 组不同的Reduc中的状态, 形成一颗入 {user, post} 的状态树
 * - 分发 Action 当组件dispatch 一个 Action, combineReducers 会遍历所有的 reduce 匹配任何一个Reducer的switch语句时, 就会响应这个Action
 */
export default combineReducers({
  user,
  post,
})
