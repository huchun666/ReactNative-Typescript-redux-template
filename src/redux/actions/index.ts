import axios from "axios";
import { ADD_ONE } from "../../API/api";
import { Dispatch } from "redux";


export const addOne = (data:object = {}):any => {
    return {
        type: ADD_ONE,
        data
    }
}
export const test = (data:object = {}):object => {
    return (dispatch: Dispatch) => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:7001/login',
            data: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
                // 'x-csrf-token':'glorCqj9pLmEijRrlKtRG_Qp',
                // 'Cookie':'csrfToken=glorCqj9pLmEijRrlKtRG_Qp; EGG_SESS=wzGXljZxTuJQvmQRK_97jRKsidpJ_P1r4ki4OF33djhFyb7TxOeKQKMfzzM9cxaSxTMicNxpV0wOVlcMwRYXKjSsqvH4nc-3Bd0RW5qUU7m0R2irmxGfQT0Y_QS6NkjeigcuV6YPtNOBZtLz-go-ug=='
            }
        }).then(res => {
            dispatch(addOne())
            console.log(res)
        })
    }
}