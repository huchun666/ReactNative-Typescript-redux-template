import { ADD_ONE } from "../../API/api";
import { stateType } from "./state.interface";
import { actionType } from "./action.interface";
const firstGoods: stateType = {
    goods: 1
};

export default function addOne(state = firstGoods, action: actionType): stateType {
    switch (action.type) {
        case ADD_ONE:
            return {
                ...state,
                goods: state.goods + 1
            }
        default: 
            return state;
    }
}