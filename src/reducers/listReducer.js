export default function ListReducer(state=[], action){
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'DELETE_ITEM':
            return state.filter(it => it.id !== action.payload);
        case 'CHANGE_DONE':
            return (state.map(it => {
                if(it.id === action.payload){
                    it.done = !it.done;
                }
                return it;
            }));

        default:
            return state;
    }
}
