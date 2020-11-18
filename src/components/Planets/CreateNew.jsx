import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { createNewPlanet } from '../../redux/Action';

const CreateNew = ({createNewPlanet, handelModal}) => {

    const [myState, setMyState] = useState({});
    const nameInput = useRef('');
    const rotationInput = useRef('');
    const orbitalInput = useRef('');
    const diameterInput = useRef('');
    const climateInput = useRef('');
    const gravityInput = useRef('');
    const terrainInput = useRef('');
    const surfaceInput = useRef('');
    const handleInput = () => {
        setMyState({
            name: nameInput.current.value,
            rotation_period: rotationInput.current.value,
            orbital_period: orbitalInput.current.value,
            diameter: diameterInput.current.value,
            climate:climateInput.current.value,
            gravity: gravityInput.current.value,
            terrain: terrainInput.current.value,
            surface_water: surfaceInput.current.value,
        })
    }
    const submitHandler = () => {
        if(myState.name && myState.name.trim().length && myState.rotation_period.trim().length && myState.orbital_period.trim().length && myState.diameter.trim().length && myState.climate.trim().length && myState.gravity.trim().length && myState.terrain.trim().length && myState.surface_water.trim().length ) {
            createNewPlanet(myState)
            handelModal();
        } else {
            alert("All Fields Required!!!")
        }
    }
    return (
        <div style={{display:"flex", justifyContent:'center', alignItems:'center', position:'fixed', background:' rgba(51, 51, 51, 0.8)', height:'100vh', width:'100vw', top:'0', left:'0'}}>
            <div style={{width:'22rem', padding:'10px 15px', border:'1px solid #333', textAlign:'center', background:'#fff', marginTop:'1rem'}}>
                <span style={{float:'right', cursor:'pointer'}} onClick={handelModal}>X</span>
                <h3>Enter Details</h3>
                <div>
                    <label htmlFor="">Name: </label>
                    <input required type="text" onChange={handleInput} ref={nameInput}_/>
                </div>
                <div style={{marginTop:'.7rem'}}>
                    <label htmlFor="">Rotation period: </label>
                    <input type="number" onChange={handleInput} ref={rotationInput}_/>
                </div>
                <div style={{marginTop:'.7rem'}}>
                    <label htmlFor="">Orbital period: </label>
                    <input type="number" onChange={handleInput} ref={orbitalInput}_/>
                </div>
                <div style={{marginTop:'.7rem'}}>
                    <label htmlFor="">Diameter: </label>
                    <input type="number" onChange={handleInput} ref={diameterInput}_/>
                </div>
                <div style={{marginTop:'.7rem'}}>
                    <label htmlFor="">Climate: </label>
                    <input type="text" onChange={handleInput} ref={climateInput}_/>
                </div>
                <div style={{marginTop:'.7rem'}}>
                    <label htmlFor="">Gravity: </label>
                    <input type="text" onChange={handleInput} ref={gravityInput}_/>
                </div>
                <div style={{marginTop:'.7rem'}}>
                    <label htmlFor="">Terrain: </label>
                    <input type="text" onChange={handleInput} ref={terrainInput}_/>
                </div>
                <div style={{marginTop:'.7rem'}}>
                    <label htmlFor="">Surface water: </label>
                    <input type="number" onChange={handleInput} ref={surfaceInput}_/>
                </div>
                <div style={{marginTop:'.7rem'}}>
                    <button onClick={submitHandler}>Submit</button>
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = {
    createNewPlanet: createNewPlanet
}


export default connect(null, mapDispatchToProps)(CreateNew)