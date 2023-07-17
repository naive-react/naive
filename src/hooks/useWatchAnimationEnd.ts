import {useEffect} from 'react';
export const useWatchAnimationEnd = (callback?: () => unknown) => {
    const onAnimationEnd = () => {
        typeof callback === 'function' && callback();
    };
    useEffect(() => {
        document.body.addEventListener('animationend', onAnimationEnd, false);
        return () => {document.body?.removeEventListener('animationend', onAnimationEnd);};
    }, []);
};
