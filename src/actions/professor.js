import Taro from '@tarojs/taro'
import moment from 'moment'

import { words, names, stars, numbers, prices, avatars, rand } from './data'
import {
  FETCH,
  DETAIL
} from '../constants/professor'

export const fetch = (page) => {
  const end = page * 10
  const start = ( page - 1 ) * 10 + 1
  const lists = []
  
  for (let i = start; i <= end; i ++) {
    let random = rand(10)
    const word = []
    while (random > 0) {
      random --
      word.push(words[rand(10)])
    }

    const r = rand(10)
    lists.push({
      name: names[r],
      avatar: avatars[r],
      count: numbers[r],
      star: stars[r],
      price: prices[r],
      desc: word.join() || '-'
    })
  }
  return {
    type: FETCH,
    lists,
    page
  }
}

export const asyncFetch = (page) => {
  return dispatch => {
    setTimeout(() => {
      Taro.stopPullDownRefresh()
      dispatch(fetch(page))
    }, 1000)
  }
}

export const getInfo = () => {
  const r = rand(10)
  let random = rand(50)
  const word = []
  while (random > 0) {
    random --
    word.push(words[rand(10)])
  }

  const detail = {
    avatar: avatars[r],
    name: names[r],
    count: numbers[r],
    star: stars[r],
    desc: word.join(),
    followed: r % 2 === 0
  }

  return {
    type: DETAIL,
    detail
  }
}
