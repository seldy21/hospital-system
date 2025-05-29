'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Selectbox({ name, options, defaultValue, onChange, placeholder = '선택하세요' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? null);

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

  return (
    <div className="relative">
      <div
        className="text-input select-box"
        onClick={() => {
          setIsOpen(true);
        }}
        onBlur={() => setIsOpen(false)}
        tabIndex={1}
      >
        <div>{value?.label ?? placeholder}</div>
        <Image
          src={'/images/icons/arrow_line.svg'}
          width={16}
          height={16}
          alt="화살표"
          className={`transition-all ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      <div className={`select-box-options ${isOpen ? '' : 'hidden'}`}>
        {options?.length > 0 ? (
          options.map(item => (
            <div key={item.value} className="select-option" onMouseDown={() => setValue(item)}>
              {item.label}
            </div>
          ))
        ) : (
          <div className="option no-option">옵션이 없습니다.</div>
        )}
      </div>
      <input className="hidden" name={name ?? ''} value={value?.value ?? ''} onChange={() => {}} />
    </div>
  );
}
