/*
 * @Author: fisher
 * @Date: 2020-02-20 11:24:54
 * @LastEditTime: 2020-03-04 19:34:06
 * @LastEditors: your name
 * @Description:
 * @FilePath: /assessment/src/api-models/index.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
export default {
  // 获取用户信誉详情
  getReputationDetail: {
    url: '/athena-reputation/api/{version}/userReputationDetail',
    method: 'get'
  },
  // 获取主播信誉等级最低分数
  getReputationIntroduce: {
    url: '/athena-reputation/api/{version}/reputationIntroduce',
    method: 'get'
  },
  // 获取信誉等级说明
  getReputationLevels: {
    url: '/athena-reputation/api/{version}/reputationLevels',
    method: 'get'
  },
  // 获取主播信誉分数记录
  getCreditChangeRecords: {
    url: '/algo-athena-credit/api/{version}/UserCreditChangeRecords/{userId}',
    method: 'get'
  },
  // 获取违规记录记录
  getViolationConfigs: {
    url: '/algo-athena-credit/api/{version}/violationConfigs',
    method: 'get'
  },
  // 获取金币
  getCoins: {
    url: '/api/h5/{version}/messages/golds',
    method: 'get',
    api: 'old'
  },
  triggerService: {
    url: process.env.NODE_ENV === 'production' ? '/api/1000/addUserRequestBuryRecordAll' : '/api/h5/1/addUserRequestBuryRecordAll',
    method: 'post',
    api: 'old'
  }
}
