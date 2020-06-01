import { createReducer, on, State } from "@ngrx/store";
import { increment, decrement, reset } from "../actions/counter.action";

export const stateCount = {
    count : 0,
    name: 'khoa'
}

const _counterReducer = createReducer(stateCount,
    on(increment, state => ({ ...state, count: state.count + 1 })),
    on(decrement, state => ({ ...state, count: state.count - 1 })),
    on(reset, state => ({ ...state, count: 0 })),
);

export function counterReducer(state, action) {
    return _counterReducer(state,action)
}