import { render, screen } from '@testing-library/react'
import Countries from './Countries'

describe('Countries Component', () => {
    it('should render the proper title', async () => {
        render(<Countries />)
        const heading = await screen.findByRole('heading', {level: 1})

        expect(heading).toBeInTheDocument()
    })
    it('should render the proper subtitle', async () => {
        render(<Countries />)
        const subtitle = await screen.findByRole('heading', {level: 3})

        expect(subtitle).toBeInTheDocument()
    })
})