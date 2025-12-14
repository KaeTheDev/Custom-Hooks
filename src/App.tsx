import { DebounceDemo } from "./components/DebounceDemo"
import { PaginationDemo } from "./components/PaginationDemo"

function App() {

  return (
    <>
    <DebounceDemo />
    <PaginationDemo totalItems={200} itemsPerPage={10} initialPage={1}/>
    </>
  )
}

export default App