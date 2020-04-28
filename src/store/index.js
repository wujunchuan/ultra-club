import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger' // 日志
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware() // 支持异步reducer所需要的中间件
// 中间件
const middlewares = [sagaMiddleware, createLogger()]

export default function configStore() {
  // redux.applyMiddleware(...middlewares[]);
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  // saga here
  sagaMiddleware.run(rootSaga)

  return store
}
