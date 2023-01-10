import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            {
                isLoading && ( <div aria-busy="true">Cargando . . . </div>) 
            }
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifGridItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>


    )
}

export default GifGrid

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}