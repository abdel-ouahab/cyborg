import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import { Container} from './components/index'
import { Header } from './sections/index'
import { Home , Profile } from './Pages/index' 

const App = () => {
    return(
        <>
            <Router>
                <Header />
                <Container>
                    <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/profile' element={<Profile />}/>
                    </Routes>
                </Container>
            </Router>
            
        </>
    )
}

export default App