/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render} from "react-dom"
import {screen} from '@testing-library/react'
import Counter from './App'



test("it loads with the counter at 0 value", () => {
    const counter = screen.getByRole('figure');
    expect(counter.textContent).toBe(0)
}) 