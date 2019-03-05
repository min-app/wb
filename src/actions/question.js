import Taro from '@tarojs/taro'
import moment from 'moment'

import {
  FETCH,
  FETCH_REPLY
} from '../constants/question'
import { names, words, avatars, rand, numbers, stars } from './data'

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

    lists.push({
      name: names[rand(10)],
      avatar: avatars[rand(10)],
      date: moment().subtract(i, 'h').format('YYYY-MM-DD'),
      content: word.join(),
      share: {
        count: rand(1000),
        has: rand(10) % 2 === 1
      },
      reply: {
        count: rand(5000),
        has: rand(10) % 2 === 1
      },
      likes: {
        count: rand(10000),
        has: rand(10) % 2 === 1
      }
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

export const fetchReply = (page) => {

  const end = page * 10
  const start = ( page - 1 ) * 10 + 1
  const replyLists = []
  for (let i = start; i <= end; i ++) {
    let random = rand(10)
    const word = []
    while (random > 0) {
      random --
      word.push(words[rand(10)])
    }

    const r = rand(10)
    replyLists.push({
      avatar: avatars[r],
      name: names[r],
      content: word.join(),
      date: moment().subtract(i, 'h').format('YYYY-MM-DD'),
      liked: r % 2 === 0
    })
  }

  Taro.stopPullDownRefresh()

  return {
    type: FETCH_REPLY,
    replyLists,
    page
  }
}
