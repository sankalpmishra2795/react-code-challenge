import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { clearDetails, getFilms } from '../../redux/Action';


const Films = ({films, getFilms, clearDetails}) => {
    useEffect(() => {
        clearDetails();
        const filmsUrl = JSON.parse(localStorage.getItem('films'));
        for(let i = 0; i < filmsUrl.length; i++) {
            getFilms(filmsUrl[i]);
        }
    },[])
    return (
        <>
        <h1 style={{textAlign:'center'}}>
                Residental Details
            </h1>
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {films.length ? (
                films.map(ele => {
                    return (
                        <div style={{margin:'10px 15px', padding:'10px', width:'22rem', border:'1px #333 solid'}}>
                            <h3>{ele.title}</h3>
                            <hr/>
                            <p>Release Date: {ele.release_date}</p>
                            <p>Director: {ele.director}</p>
                        </div>
                    )
                })
            ) : (<h3 style={{textAlign:'center'}}>Details Not Available</h3>)}
        </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    films: state.films
})

const mapDispatchToProps = {
    getFilms: getFilms,
    clearDetails: clearDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Films);