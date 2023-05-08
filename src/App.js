import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import Background from "./components/Background";
import searchImages from "./api";

function App() {
    const [images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
            {images.length === 0 && <Background />}
        </div>
    );
}

export default App;
