'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

export default function PasswordInput({ onChange, name, placeholder, value }) {
  const [showPassword, setShowPassword] = useState(false);
  const [focusStatus, setFocusStatus] = useState(false);

  const passwordText = useMemo(() => {
    return value;
  }, [value]);

  return (
    <div className="relative font-normal h-8 drag-prevent">
      <input
        type="text"
        name={name}
        className="top-2 absolute z-10 w-11/12 outline-0 px-3 opacity-0"
        onChange={onChange}
        value={passwordText}
        onFocus={() => setFocusStatus(true)}
        onBlur={() => setFocusStatus(false)}
        autoComplete="off"
      />
      <div className="absolute w-full h-8 py-1.5 px-3">{passwordText.length === 0 && placeholder}</div>
      <div className="text-input absolute w-full h-8">
        {focusStatus && passwordText.length === 0 && <span className="input-cursor"></span>}
        {showPassword
          ? passwordText
          : passwordText
              .split('')
              .map((char, index) => (
                <span key={`${name}_${index}`} className="inline-block w-2.5 h-2.5 bg-white rounded-full mr-0.5"></span>
              ))}
        {focusStatus && passwordText.length > 0 && <span className="input-cursor"></span>}
        <div className="ms-auto cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
          <Image src={`/images/icons/${showPassword ? 'eye-slash' : 'eye'}.svg`} width={16} height={16} alt="보기" />
        </div>
      </div>
    </div>
  );
}
