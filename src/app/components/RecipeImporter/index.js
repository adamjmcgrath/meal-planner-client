import React, { useState } from 'react';

const RecipeImporter = () => {
    const [url, setUrl] = useState('');

    const handleChangeRecipeUrl = (e) => {
        setUrl(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Import ${url}!`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Recipe url"
                value={url}
                onChange={handleChangeRecipeUrl}
            />
            <button type="submit">Import!</button>
        </form>
    );
};

export default RecipeImporter;
