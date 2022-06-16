import { Post } from './components/Post';
import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';


import './global.css'

import styles from './App.module.css'


function App() {
  return (
    <div>
    <Header />
    <div className={styles.wrapper}>

      <Sidebar />
      <main>

      <Post author='Alex' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam corrupti, id, consequuntur iste sequi provident nesciunt, vitae laboriosam officiis omnis quo dolorem dolores? Quo quidem odio, id deleniti ullam sint!'/>
      <Post author='Alex' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam corrupti, id, consequuntur iste sequi provident nesciunt, vitae laboriosam officiis omnis quo dolorem dolores? Quo quidem odio, id deleniti ullam sint!'/>
      </main>

   
    </div>
  
    </div>
  )
}

export default App
