import axios from 'axios';
export const GET_PLANETS_REQ = 'GET_PLANETS_REQ'
export const GET_PLANETS_SUCCESS = 'GET_PLANETS_SUCCESS'
export const GET_PLANETS_FAIL = 'GET_PLANETS_FAIL'
export const GET_FILMS_REQ = 'GET_FILMS_REQ'
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS'
export const GET_FILMS_FAIL = 'GET_FILMS_FAIL'
export const GET_RESIDENTS_REQ = 'GET_RESIDENTS_REQ'
export const GET_RESIDENTS_SUCCESS = 'GET_RESIDENTS_SUCCESS'
export const GET_RESIDENTS_FAIL = 'GET_RESIDENTS_FAIL'
export const CLEAR_DETAILS = 'CLEAR_DETAILS'
export const CREATE_NEW_PLANET = 'CREATE_NEW_PLANET'

export const getPlanets = (payload) => dispatch => {
    dispatch(planetsReq())
    axios({
        method: "GET",
        headers: {
            'Content-Type' : 'application/json'

        },
        url: ' https://swapi.dev/api/planets',
        data: payload
    })
        .then(res => {
        dispatch(planetsSuccess(res.data.results))
        }).catch(err => {
            console.log(err)
        // dispatch(planetsFail())
    })
    
}

export const planetsReq = () => ({
    type: GET_PLANETS_REQ,
})

export const planetsSuccess = (payload) => ({
    type: GET_PLANETS_SUCCESS,
    payload : payload
})

export const planetsFail = (payload) => ({
    type: GET_PLANETS_FAIL,
    payload
})


export const getFilms = (url) => dispatch => {
    dispatch(getFilmsReq())
    axios({
        method: "GET",
        headers: {
            'Content-Type' : 'application/json'

        },
        url: url,
    })
        .then(res => {
        dispatch(getFilmsSuccess(res.data))
        }).catch(err => {
        dispatch(getFilmsFailed())
    })
}

export const getFilmsReq = (payload) => ({
    type: GET_FILMS_REQ,
    payload
})

export const getFilmsSuccess = (payload) => ({
    type: GET_FILMS_SUCCESS,
    payload
})

export const getFilmsFailed = (payload) => ({
    type: GET_PLANETS_FAIL,
    payload
})

export const getResident = (url) => dispatch => {
    dispatch(getResidentReq())
    axios({
        method: "GET",
        headers: {
            'Content-Type' : 'application/json'

        },
        url: url,
    })
        .then(res => {
        dispatch(getResidentSuccess(res.data))
        }).catch(err => {
        dispatch(getResidentFailed())
    })
}

export const getResidentReq = (payload) => ({
    type: GET_RESIDENTS_REQ,
    payload
})

export const getResidentSuccess = (payload) => ({
    type: GET_RESIDENTS_SUCCESS,
    payload
})

export const getResidentFailed = (payload) => ({
    type: GET_RESIDENTS_FAIL,
    payload
})

export const clearDetails = () => ({
    type: CLEAR_DETAILS,
})

export const createNewPlanet = (payload) => ({
    type: CREATE_NEW_PLANET,
    payload
})
