/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */
import { combineReducers } from "redux";

function xxx(state = 0, action) {
  return state;
}
function yyy(state = 0, action) {
  return state;
} // 返回合并后的 reducer 函数 export default combineReducers({ xxx, yyy })

export default combineReducers({
    xxx, 
    yyy
});
// 向外暴露的状态的结构: {user: {}, userList: [], chat: {}}
