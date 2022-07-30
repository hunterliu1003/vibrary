import '@testing-library/jest-dom'
import { render, screen } from '../utils/test-utils'
import DemoComponent from './DemoComponent'

describe('tests', async () => {
  it('should works', () => {
    const msg = 'Hello React + Vite'
    render(<DemoComponent msg={msg} />)
    expect(screen.getByText(msg)).toBeInTheDocument()
  })
})
