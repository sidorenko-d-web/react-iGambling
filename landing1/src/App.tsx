import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { WheelPage } from './Pages/WheelPage/WheelPage'
import { FormPage } from './Pages/FormPage/FormPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<WheelPage />}
        />
        <Route
          path='/form'
          element={<FormPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
