import { render, screen } from '@testing-library/react';
import Header from './Header';
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
      const { getByText } = render(<Provider store={store}><Header /></Provider>)
  
      expect(screen.getByText(/React Test App/i)).toBeInTheDocument()
    })
  })