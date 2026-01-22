import { useEffect, useRef, useState } from 'react';

/**
 * Detects if an element is in the viewport using IntersectionObserver
 * @param options - IntersectionObserver options
 * @returns [ref, isIntersecting] - Ref to attach to element and boolean indicating visibility
 */
export function useIntersectionObserver(
    options: IntersectionObserverInit = {}
) {
    const ref = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [options]);

    return [ref, isIntersecting] as const;
}
