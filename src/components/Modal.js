'use client';

import Image from 'next/image';

export default function Modal({ children, isOpen, onClose, backdrop = true }) {
  return (
    <div
      className={`modal-overlay ${!isOpen ? 'h-0 opacity-0' : 'h-full opacity-100'}`}
      onClick={backdrop ? onClose : undefined}
    >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="flex justify-end">
          <button type={'button'} onClick={onClose}>
            <Image src={'/images/icons/xmarkBlack.svg'} width={18} height={18} alt="닫기버튼" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
