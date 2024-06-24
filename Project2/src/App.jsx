import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css' 
import  'bootstrap/dist/js/bootstrap.bundle' 
import { Navbar } from './components/Navbar'
import { Cards } from './components/Cards'
import { Hooks1 } from './components/Hooks1'
import TextUtils from './components/TextUtils'

function App() {
  
let text="Lorem ipsum dolor sit amet."
  return (
    <>
    <Navbar title="Yash" home="Home1"/>
    <div className="container">
   <div className="row">
   <div className="col">
   <Cards    title="Hello"  text={text}  img="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041861.jpg?t=st=1718972855~exp=1718976455~hmac=2ad27ab3d213909015cd6c26b22852a98910ee78f77cbbeb1abe4f1202652d4d&w=826" />
   </div>
   <div className="col">
   <Cards    title="Hello"  text={text}  img="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041861.jpg?t=st=1718972855~exp=1718976455~hmac=2ad27ab3d213909015cd6c26b22852a98910ee78f77cbbeb1abe4f1202652d4d&w=826" />
   </div>

   <div className="col">
   <Cards    title="Hello"  text={text}  img="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041861.jpg?t=st=1718972855~exp=1718976455~hmac=2ad27ab3d213909015cd6c26b22852a98910ee78f77cbbeb1abe4f1202652d4d&w=826" />
   </div>

   </div>
    </div>
    
    <Hooks1/>
    <TextUtils/>

    </>
  )
}

export default App
