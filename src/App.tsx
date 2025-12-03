import './App.css'
import bgVideo from "./assets/Bg-sky.mp4"
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Tokenomics from './components/Tokenomics'

function App() {


  return (
    <div className='min-h-screen relative overflow-hidden'>
      <video className='fixed inset-0 w-full h-full object-cover -z-10' autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header>
        <Nav />
      </Header>

      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        <Hero />
        <About />
        <Tokenomics />
        <Footer />
      </main>
    </div>
  )
}

export default App
