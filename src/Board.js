import React from 'react';
import * as THREE from 'three';

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

function Board(props) {
    if (props.ctx.turn < 41) {
    return (
        <>
        {/* threejs render */}
        </>
    )} else {
        return (
            <>
            {/* Victory screen */}
            </>
        )
    }
}

export default Board;

        /* <div className="board">
        <Oponent handID={props.playerID} gameData={props} />
        <Middle gameData={props} />
        <Player handID={props.playerID} gameData={props} />
        </div> */