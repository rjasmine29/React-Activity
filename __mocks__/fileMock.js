import {render} from "react-dom"
import {screen} from '@testing-library/react'
import Counter from './App';


describe('Counter', () => {
    beforeEach(() => render(<Counter />))

    test('it loads with the counter at 0', () => {
        const counter = screen.getByRole('figure');
        expect(counter.textContent).toBe(0);
    })

})

module.exports = 'test'
