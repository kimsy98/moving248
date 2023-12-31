import { useEffect, useState } from 'react';

export function useTitle(initialTitle) {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = title;
    };

    useEffect(updateTitle, [title]);
    return setTitle;
}
const MyComponent = () => {
    useTitle('New Title');

    return <div></div>;
};
