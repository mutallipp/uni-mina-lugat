/**
 * 保存本地缓存（异步）
 */
export function setLocalStorege<T> (key:string, value:T) {
  uni.setStorage({
    key,
    data: JSON.stringify(value),
    success () {
      console.log('存储成功')
    },
    fail (e) {
      console.log('存储失败', e)
    },
  })
}
/**
 * 保存本地缓存（同步）
 */
export function setLocalStoregeSync<T> (key:string, value:T) {
  try {
    uni.setStorageSync(key, JSON.stringify(value))
  } catch (e) {
    // 错误
    console.log('同步本地缓存失败', e)
  }
}
/**
 * 获取本地缓存（异步）
 */
export function getLocalStorege<T> (key:string):Promise<T|boolean> {
  return new Promise((resolve) => {
    uni.getStorage({
      key,
      success (res) {
        resolve(JSON.parse(res.data))
      },
      fail (e) {
        console.log('获取本地缓存失败(异步)', e)
        resolve(false)
      },
    })
  })
}
/**
 * 获取本地缓存（同步）
 */
export function getLocalStoregeSync<T> (key:string):Promise<T|boolean> {
  return new Promise((resolve) => {
    try {
      const value = uni.getStorageSync(key)
      if (value) {
        resolve(JSON.parse(value))
      }
    } catch (e) {
      // 错误
      console.log('获取本地缓存失败(同步)', e)
      resolve(false)
    }
  })
}

export default {
  setLocalStorege,
  setLocalStoregeSync,
  getLocalStorege,
  getLocalStoregeSync,
}
