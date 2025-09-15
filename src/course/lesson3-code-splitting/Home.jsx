import{ useState } from 'react'
import AdminData from './AdminData';
// import { sum } from './sum';
function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => {
        // only load the sum.js module when this button is clicked
        import("./sum").then(module => {
          alert(module.sum(2,2));
        })
      }}>Add 2 + 2</button>
      <br />
      <br />
    <button onClick={() => setIsAdmin(prev => !prev)}>Toggle Admin</button>
    { isAdmin ? <AdminData/> : <h2>Not Admin</h2>}
    </div>
  )
}

export default Home