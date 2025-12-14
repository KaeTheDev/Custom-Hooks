import { DebounceDemo } from "./components/DebounceDemo"
import { PaginationDemo } from "./components/PaginationDemo"

function App() {

  return (
    <>
    <PaginationDemo totalItems={200} itemsPerPage={10} initialPage={1}/>
    <DebounceDemo value={""} delay={800}/>
    </>
  )
}

export default App