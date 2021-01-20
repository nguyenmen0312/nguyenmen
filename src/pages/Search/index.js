import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Search(props) {
        let {text} = useParams();
        return (
            <div>
                {text}
            </div>
        )
    
}

export default Search;