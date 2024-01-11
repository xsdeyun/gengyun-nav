
import { resolveResError } from './helpers'

export function resResolve(response) {
  // TODO: 处理不同的 response.headers
  const { data, status, statusText } = response
  if (data?.code !== 200) {
    const code = data?.code ?? status
    /** 根据code处理对应的操作，并返回处理后的message */
    const message = resolveResError(code, data?.message ?? statusText)
    /** 需要错误提醒 */
    window.$message?.error(message)
    return Promise.reject({ code, message, error: data || response })
  }
  return Promise.resolve(data)
}

export function resReject(error) {
  if (!error || !error.response) {
    const code = error?.code
    /** 根据code处理对应的操作，并返回处理后的message */
    const message = resolveResError(code, error.message)
    window.$message?.error(message)
    return Promise.reject({ code, message, error })
  }
  const { data, status } = error.response
  const code = data?.code ?? status
  const message = resolveResError(code, data?.message ?? error.message)
  /** 需要错误提醒 */
  window.$message?.error(message)
  return Promise.reject({ code, message, error: error.response?.data || error.response })
}