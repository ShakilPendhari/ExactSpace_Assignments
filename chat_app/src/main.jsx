import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
// import { Provider } from 'react-redux'
// import { store } from './Redux/store'




ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
     {/* <Provider store = {store}> */}
      <App/>
     {/* </Provider> */}
  </ChakraProvider>
)
