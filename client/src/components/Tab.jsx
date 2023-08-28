import { useSnapshot } from "valtio"

import state from "../store"

const Tab = () => {
  const snap = useSnapshot(state)
  return (
    <div>tab</div>
  )
}

export default Tab