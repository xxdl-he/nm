import storage from 'good-storage'

const SEARCH_KEY = '__search__'
const SEARCH_MAX = 15

// 插入
function insertArr(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if(index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if(maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

// 删除
function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

// 存储历史搜索数据
export function saveSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  insertArr(searches, query, item => {
    return item === query
  }, SEARCH_MAX)
  storage.set(SEARCH_KEY, searches)
  return searches
}

// 读取历史搜索数据
export function getSearch() {
  return storage.get(SEARCH_KEY, [])
}

// 删除单个搜索历史
export function deleteSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  deleteFromArray(searches, item => {
    return item === query
  })
  storage.set(SEARCH_KEY, searches)
  return searches
}

// 清空搜索历史
export function clearSearch(query) {
  storage.remove(SEARCH_KEY)
  return []
}