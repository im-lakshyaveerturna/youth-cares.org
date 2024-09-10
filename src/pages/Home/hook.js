// hooks/useInViewOnce.js
import { useInView } from 'react-intersection-observer';

export const useInViewOnce = (options) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    ...options,
  });

  return { ref, inView };
};
