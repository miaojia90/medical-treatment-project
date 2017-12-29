/**
 * Created by major.miao 2017-12-28
 * 获取用户个人信息
 */

module.exports = {
    api: '/api/getUserInfo',
    response: function(req, res) {
        console.log(req.query.userId);
        var json = {
            "userId": "1",
            "userName": '缪先生',
            "outpatientNumber": '00012745',
            "idNumber": '4**************9',
            "phone": '13510901409',
            "type": '深圳医保',
            "personalFile":{
               "height":'172',
               "weight":'53',
               "bloodType":'B',
               "smokingSituation":'0',
               "drinkingSituation":'0'
            },
            "emergencyContact": [{
                "contact": '张欣悦',
                "contactPhone": '135****1409',
                "relationship": '朋友'
            }],
            "otherUserList": [{
                "userName": "李花花",
                "userId": "1",
                "outpatientNumber": "官方账号",
                "type": "社保",
                "isActive": "1"
            }]
        };
        res.send(json);
    }
}