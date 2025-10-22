import { useEffect, useState } from "react";

function Avatar({id}) {
    const [avatarUrl, setAvatarUrl] = useState('');
    const [avatarTitle, setAvatarTitle] = useState('');
    console.log('Avatar id:', id);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => response.json())
        .then(data => {
           setAvatarUrl(data.url);
           setAvatarTitle(data.title);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, [id]);
    
    return (
        <img
            src={avatarUrl}
            alt={avatarTitle || 'No Avatar'}
        />
    );
}

export { Avatar };