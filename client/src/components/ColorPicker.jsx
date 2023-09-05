import { useSnapshot } from "valtio";
import { SketchPicker } from "react-color";

import state from "../store";

const ColorPicker = () => {

  const snap = useSnapshot(state)
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker disableAlpha color={snap.color} onChange={(color) => state.color = color.hex} />
    </div>
  )
}

export default ColorPicker