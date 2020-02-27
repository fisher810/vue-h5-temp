/*
 * @Author: fisher
 * @Date: 2020-02-20 11:24:54
 * @LastEditTime: 2020-02-27 16:22:37
 * @LastEditors: your name
 * @Description:
 * @FilePath: /assessment/src/api-models/index.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
export default {
  // 获取主播能力成长值倒计时时间
  getTime: {
    url: '/api/h5/{version}/goddessAbilityAndPriceShowTime',
    method: 'get'
  },
  // 获取主播能力评定总览页主播排名、价格等信息
  getProfile: {
    url: '/api/h5/{version}/goddessAbilityAndPriceProfile/{userId}',
    method: 'get'
  },
  // 获取主播能力评定总览页能力雷达图等信息
  getRadarData: {
    url: '/api/h5/{version}/goddessAbilityRadarMap/{userId}',
    method: 'get'
  },
  // 获取主播能力成长基础任务列表
  // getTaskData: {
  //   url: '/api/h5/{version}/goddessAbilityImproveTask/{userId}',
  //   method: 'get'
  // },
  // 获取主播历史价格变动列表
  getPrice: {
    url: '/api/h5/{version}/goddessPriceHistory/{userId}',
    method: 'get'
  },
  // 获取主播能力评定介绍信息
  getRule: {
    url: '/api/h5/{version}/goddessAbilityAndPriceRule',
    method: 'get'
  }
  // 根据当前主播信息获取是否展示主播成长值tab选项
  // getSwitch: {
  //   url: '/api/{version}/goddess/getEntranceStatSwitch',
  //   method: 'get'
  // }
}
