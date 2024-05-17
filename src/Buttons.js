import { useState } from 'react';

function SearchableVideoList({ videos }){
    const [searchText, setSearchText] = useState('')
    const foundVideos = filterVideos(videos, searchText);
    return(
        <>
        <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
        <SearchableVideoList
        videos = {foundVideos}
        emptyHeading = {'No matches for "${SearchText}'} />
        
        </>
    )
}

function Button(){
    return(
        <button onClick={postForm}>Submit</button>
    )
}

const postForm = (res, rej) => {


}