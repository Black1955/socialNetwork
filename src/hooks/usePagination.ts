import { useEffect, useState, useRef, RefObject } from "react";

export default function useOnScreen(
  loading: boolean
): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entry =>
      setIsOnScreen(entry[0].isIntersecting)
    );

    if (ref.current && !loading) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, loading]);

  return [ref, isOnScreen];
}
