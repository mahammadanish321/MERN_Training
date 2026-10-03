
import Greeting from './components/single-component/Greeting'
import Header from './components/multiple-components/Header/Header'
import Footer from './components/multiple-components/Footer/Footer'
import JSXExamples from './components/JSX-Examples/JSXExamples'
import ConditionalRendering from './components/conditional-rendaring/conditionaRendaring'
import InlineStyleExample from './components/inline-Style/inlineStyleExample'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Greeting />
        <JSXExamples/>
        <ConditionalRendering/>
        <InlineStyleExample/>
      </main>
      <Footer />
    </div>
  )
}
export default App
