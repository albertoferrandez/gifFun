
const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card" key={id}>
            <img src={url} alt={title} />
        </div>
    )
}

export default GifGridItem
