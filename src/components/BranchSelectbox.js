'use client';

import { useEffect, useState } from 'react';
import Selectbox from './Selectbox';

export default function BranchSelectbox({ onChange }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions([
      { label: '인천본원', value: 'incheon' },
      { label: '서울지점', value: 'seoul' },
      { label: '부천지점', value: 'bucheon' },
      { label: '대전지점', value: 'daejeon' },
      { label: '대구지점', value: 'daegu' },
      { label: '광주지점', value: 'gwangju' },
      { label: '부산지점', value: 'busan' },
      { label: '울산지점', value: 'ulsan' },
    ]);
  }, []);
  return (
    <Selectbox
      options={options}
      name="branch"
      onChange={option => {
        onChange && onChange(option);
      }}
      placeholder="지점 선택"
    />
  );
}
