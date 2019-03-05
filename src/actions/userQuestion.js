import Taro from '@tarojs/taro'

import { FETCH } from '../constants/userQuestion'
import { words, rand } from './data'

export const fetch = (t, page) => {
  const end = page * 10
  const start = ( page - 1 ) * 10 + 1
  const lists = []

  for (let i = start; i <= end; i ++) {
    let r = rand(10)
    const word = []
    while (r > 0) {
      word.push(words[rand(10)])
      r --
    }

    lists.push({
      content: word.join()
    })
  }

  return {
    type: FETCH,
    t,
    page,
    lists
  }
}