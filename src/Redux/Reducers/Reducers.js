import { Type } from '../Constans/Constant';

const initialState = {
    Data: [],
};

const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case Type.CREATE_DATA:
            return {
                Data: [...state.Data, action.payload]
            };

        case Type.DELET_DATA:
            return {
                ...state,
                Data: action.payload
            };

        case Type.EDIT_DATA:

            const UserAllDetails = state.Data.map((user, index) => {
                if (index === action.payload.id) {
                    return action.payload.data;
                }
                else {
                    return user;
                }

            });
            return {
                ...state,
                Data: UserAllDetails,
            };

        default: return state;
    }

};

export default Reducer;

