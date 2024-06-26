import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useSnapshot } from "valtio"
import PropTypes from "prop-types"

import state from "../store"

const CameraRig = ({ children }) => {

  const group = useRef()
  const snap = useSnapshot(state)

  useFrame((state , delta)=>{
    const isBreakPoint = window.innerWidth <= 1260
    const isMobile = window.innerWidth <= 600

    //setting the initial postion of the model
    let targetPosition = [-0.4, 0, 2]
    if(snap.intro){
      if(isBreakPoint) targetPosition = [0, 0.09, 2]
      if(isMobile) targetPosition = [0, 0.18, 2.5]
    }else{
      if(isMobile) targetPosition = [0, 0, 2.8]
      else targetPosition = [0, 0, 2]
    }
    //setting camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta )

    //setting model rotation
    easing.dampE(group.current.rotation,
      [state.pointer.y / 10, state.pointer.x / 5,0],
      0.25,
      delta
      )
  })

  return <group ref={group}>{children}</group>
}

CameraRig.propTypes ={
  children: PropTypes.node
}
export default CameraRig