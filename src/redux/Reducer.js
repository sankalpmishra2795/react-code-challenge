import{CLEAR_DETAILS, CREATE_NEW_PLANET, GET_FILMS_FAIL, GET_FILMS_REQ, GET_FILMS_SUCCESS, GET_PLANETS_FAIL,GET_PLANETS_REQ,GET_PLANETS_SUCCESS, GET_RESIDENTS_FAIL, GET_RESIDENTS_REQ, GET_RESIDENTS_SUCCESS} from './Action'


const initialState = {
    data: [],
    isLoading: false,
    films:[],
    residents:[]
}

const reducer = (state = initialState, action) => {
    const { payload } = action
    console.log(payload)
    switch (action.type) {
        case GET_PLANETS_REQ:
            return {
                ...state,
                isLoading : true
            }
        case GET_PLANETS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload
            }
        case GET_PLANETS_FAIL:
            return {
                ...state,
                isLoadingL:false
            }
        case GET_FILMS_REQ:
            return {
                ...state,
                isLoading: true
            }
        case GET_FILMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                films: [...state.films, payload],
            }
        case GET_FILMS_FAIL:
            return {
                ...state,
                isLoading: false
            }
        case GET_RESIDENTS_REQ:
            return {
                ...state,
                isLoading: true
            }
        case GET_RESIDENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                residents: [...state.residents, payload],
            }
        case GET_RESIDENTS_FAIL:
            return {
                ...state,
                isLoading: false
            }
        case CLEAR_DETAILS:
            return {
                ...state,
                films:[],
                residents: []
            }
        case CREATE_NEW_PLANET:
            return {
                ...state,
                data: [...state.data, payload]
            }
        default:
            return state
    }

}

export default reducer;