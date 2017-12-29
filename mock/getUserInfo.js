/**
 * Created by major.miao 2017-12-28
 * 获取用户个人信息
 */

module.exports = {
    api: '/api/getUserInfo',
    response: function(req, res) {
        console.log(req.query.userId);
        var json = {
            "userId": "1001",
            "userName": '缪先生',
            "outpatientNumber": '00012745',
            "idNumber": '4**************9',
            "phone": '135*****09',
            "type": '1',
            "typeDesc": '深圳医保',
            "otherUserCount": 3,
            "personalFile": {
                "height": '172cm',
                "weight": '53kg',
                "bloodType": 'B型',
                "smokingSituation": '无抽烟历史',
                "drinkingSituation": '无喝酒历史'
            },
            "emergencyContact": {
                "contact": '张欣悦',
                "contactPhone": '135******09',
                "relationship": '朋友'
            },
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