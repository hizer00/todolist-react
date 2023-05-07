import { useEffect, useState } from 'react';

export default function isDesktop() {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {

        function resize() {
            setIsDesktop(window.innerWidth >= 768);
        }
        window.addEventListener('resize', resize);
        resize()

        return () => window.removeEventListener('resize', resize);

    }, []);

    return isDesktop;

}