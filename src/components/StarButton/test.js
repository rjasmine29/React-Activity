import { screen } from '@testing-library/react';
import StarButton from '..';



describe('StarButton', () => {
    beforeEach(() => {
        render(<StarButton />)
    })

    test('renders a span with a star (★) in it', () => {
        let starSpan = screen.getByRole("switch")
        expect(starSpan.textContent).toBe('★')
    })

    test('changes colour of star when clicked', () => {
        let starSpan = screen.getByRole("switch")
        let initColour = starSpan.style.color
        userEvent.click(starSpan)
        let clickedColour = starSpan.style.color
        expect(clickedColour).not.toBe(initColour)
    })
})