'use client';

import { useCallback, useRef, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const closeModal = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && closeModal) {
        closeModal();
      }
    },
    [overlay, closeModal]
  );

  return (
    <div ref={overlay} className="modal" onClick={handleClick}>
      <button onClick={closeModal} className="absolute top-4 right-8">
        <Image src="/close.svg" alt="close" width={17} height={17} />
      </button>
      Modal
      <div ref={wrapper} className="modal_wrapper">
        {children}
      </div>
    </div>
  );
};

export default Modal;
