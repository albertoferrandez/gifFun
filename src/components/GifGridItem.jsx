import PropTypes from "prop-types"

const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card" key={id}>
            <img src={url} alt={title} />
        </div>
    )
}

export default GifGridItem

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
