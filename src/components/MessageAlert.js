import Image from 'next/image';
import { useEffect } from 'react';

export default function MessageAlert({ autoClose = false, onClose, isOpen = false, children, htmlText }) {
  useEffect(() => {
    if (autoClose && isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // 3초 후 자동 닫기

      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    }
  }, [autoClose, isOpen]);
  return (
    <div className={`modal-overlay ${!isOpen ? 'h-0 opacity-0' : 'h-svh opacity-100'}`} onClick={onClose}>
      <div className="modal-content text-sm text-center">
        <div className="flex justify-center pb-4">
          <Image src="/images/icons/alert-check.svg" width={24} height={24} alt="확인 아이콘" />
        </div>
        {children}
        {htmlText && <div dangerouslySetInnerHTML={{ __html: htmlText }} />}
      </div>
    </div>
  );
}
