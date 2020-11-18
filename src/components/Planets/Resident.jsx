import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { clearDetails, getResident } from '../../redux/Action';


const Resident = ({residents, getResident, clearDetails}) => {
    useEffect(() => {
        clearDetails();
        const residentsUrl = JSON.parse(localStorage.getItem('residents'));
        for(let i = 0; i < residentsUrl.length; i++) {
            getResident(residentsUrl[i]);
        }
    },[])
    return (
        <>
            <h1 style={{textAlign:'center'}}>
                Residental Details
            </h1>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                {residents.length ? (
                    residents.map(ele => {
                        return (
                            <div style={{margin:'10px 15px', padding:'10px', minWidth:'22rem', border:'1px #333 solid'}}>
                                <h3>{ele.name}</h3>
                                <hr/>
                                <p>Gender: {ele.gender}</p>
                                <p>Height: {ele.height}cm</p>
                            </div>
                        )
                    })
                ) : (<h3 style={{textAlign:'center'}}>Details Not Available</h3>)}
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    residents: state.residents
})

const mapDispatchToProps = {
    getResident: getResident,
    clearDetails: clearDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Resident);