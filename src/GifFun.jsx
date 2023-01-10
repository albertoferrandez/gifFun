import { useState } from "react"
import AddCategory from "./components/AddCategory"
import Footer from "./components/Footer"
import GifGrid from "./components/GifGrid"

const GifFun = () => {

    const [categories, setCategories] = useState([
        'One Punch'
    ])
    const handleAddCategories = (newCategory) => {
        if (categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <main className="container">

                <h1>gifFun</h1>

                <AddCategory
                    onNewCategory={(event) => handleAddCategories(event)}
                />

                <section className="container">

                    {categories.map(category => (

                        <GifGrid key={category} category={category} />
                    )
                    )}

                </section>
            </main>
            <Footer />
        </>

    )
}

export default GifFun
