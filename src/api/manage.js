
import http from './response';

// 获取用户列表
export class Apis {
    getUserList(params){
        return http.get('/getUserList', params);
    }
}