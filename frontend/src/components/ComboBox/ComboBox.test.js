import { render, screen } from '@testing-library/react';
import ComboBox from './ComboBox';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe('With React Testing Library', () => {
    const initialState = {files:{
        rows:[]
    }}
    const mockStore = configureStore()
    let store
  
    it('Shows "Hello world!"', () => {
      store = mockStore(initialState)
      const { getByText } = render(<Provider store={store}><ComboBox /></Provider>)
  
      expect(screen.getByText(/ninguno/i)).toBeInTheDocument()
    })
  })