import fetch from '../utils/fetch'
import {
	getStore
} from '../utils/mUtils'

/**
 * 获取用户中心信息
 */
export const getUserCenterData = (userId) => fetch('/api/getUserInfo', {
	userId: userId
});

/**
 * 更新用户的数据
 */
export const updateUserData = (userId, parameters) => fetch('/api/updateUserInfo', {
	userId: userId,
	parameters: parameters
}, 'POST');