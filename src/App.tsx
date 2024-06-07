import './stylesheet/App.css'
import tbhLogo from './assets/logo_tag_desk.jpg'

function App() {
  return (
    <>
      <div>
        <img src={tbhLogo} alt="TBH Logo"/>
        <h1 className="text-3xl">
          Support 
        </h1>
      </div>
      <p>
        Start a remote session
      </p>
    </>
  )
}

export default App
