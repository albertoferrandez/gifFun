import { render, screen, fireEvent } from "@testing-library/react";
import GifFun from "../GifFun";

describe('Pruebas en <GifFun/>', () => {

    const inputValue = 'Batman'

    test('escribir en el input', () => {

        render(<GifFun />)

        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target: {value: inputValue}} );

        expect( input.value ).toBe(inputValue);

        screen.debug()

    })

})

