import { useEffect, useState } from 'react';

interface Dimensions {
    width: number;
    height: number;
}

const useWindowSize = () => {
    const [dimensions, setDimensions] = useState<Dimensions>(
        { width: window.innerWidth, height: window.innerHeight },
    );

    const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return dimensions;
};

export default useWindowSize;
