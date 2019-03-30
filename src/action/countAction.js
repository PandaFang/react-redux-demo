import {INCREASE_COUNT, DECREASE_COUNT} from './types'

export function increase() {
    return function(dispatch) {
        dispatch({
            type:INCREASE_COUNT,
        })
    }
}

export function decrease() {
    return function(dispatch) {
        dispatch({
            type:DECREASE_COUNT,
        })
    }
}