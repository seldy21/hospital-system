'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function LoginInput(props) {
  const { type, ...rest } = props;

  const [show, setShow] = useState(false);

  return (
    <div className="text-input">
      <input className="" type={props.type && show ? 'text' : (props.type ?? 'text')} {...rest} />
      {props.type === 'password' && (
        <Image
          src={`/images/icons/${show ? 'eye-slash' : 'eye'}.svg`}
          width={16}
          height={16}
          alt="비밀번호 보기"
          className="cursor-pointer"
          onClick={() => setShow(!show)}
        />
      )}
    </div>
  );
}
