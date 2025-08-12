import { useEffect, useRef } from 'react';

export const useScrollLock = (active: boolean) => {
  const lastScroll = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (active) {
      // Запоминаем текущую позицию скролла
      lastScroll.current = { x: window.scrollX, y: window.scrollY };

      // Блокируем скролл, фиксируя body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${lastScroll.current.y}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflowY = 'scroll'; // Сохраняем ширину скроллбара
    } else {
      // Разблокируем скролл, сбрасывая стили
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflowY = '';

      // Возвращаем скролл на прежнее место
      window.scrollTo(lastScroll.current.x, lastScroll.current.y);
    }
  }, [active]);
};
