/** @jest-environment jsdom */

import { render, screen } from "@testing-library/react"
import GifGridItem from "../../components/GifGridItem"

describe('pruebas en grifgriditem', () => {

    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('should match con snapshot', () => {
      
        const { container } = render( <GifGridItem title={title} url={url}/> )
        expect(container).toMatchSnapshot()

    })

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifGridItem title={title} url={url}/> )
        //screen.debug()

        const {src, alt} = screen.getByRole('img')
        expect( src ).toBe(url)
        expect(alt).toBe(alt)
    })

})
