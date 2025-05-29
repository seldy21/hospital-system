'use client';

import { Button } from '@/components/Button';
import LoginInput from '@/components/LoginInput';
import Selectbox from '@/components/Selectbox';
import { useMemo, useState } from 'react';
import BranchSelectbox from '../BranchSelectbox';
import { typingOnlyNumber } from '../../../public/functions/functions';
import PasswordInput from '../PasswordInput';

export default function SigninContainer() {
  const [signinData, setSigninData] = useState({
    name: '',
    branch: '',
    email: '',
    certifationNumber: '',
    certificateStatus: false,
    password: '',
    confirmPassword: '',
  });

  const handleTextChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    setSigninData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loginDisabled = useMemo(() => {
    return Object.values(signinData).some(value => value === '' || value === false);
  }, [signinData]);

  const handleSignin = e => {
    e.preventDefault();
  };
  return (
    <form className="login-wrapper" onSubmit={handleSignin}>
      <div className="login-outline">
        <div className="login-box">
          <div className="flex justify-center">
            <div className="text-2xl font-bold">회원가입</div>
          </div>
          <div className="flex flex-col gap-16">
            <div className="login-form">
              <div>
                <div className="pb-0.5">이름</div>
                <LoginInput onChange={handleTextChange} placeholder={'이름 입력'} name="name" />
              </div>
              <div>
                <div className="pb-0.5">지점</div>
                <BranchSelectbox />
              </div>
              <div>
                <div className="pb-0.5">이메일</div>
                <div className="flex gap-2 pb-2">
                  <div className="grow">
                    <LoginInput onChange={handleTextChange} placeholder={'이메일 입력'} name="email" />
                  </div>
                  <Button className="text-xs rounded px-5">인증 요청</Button>
                </div>
                <div className="flex gap-2">
                  <div className="grow">
                    <LoginInput
                      onChange={handleTextChange}
                      placeholder={'이메일로 전송된 인증번호 입력'}
                      name="certifationNumber"
                      onKeyUp={typingOnlyNumber}
                    />
                  </div>
                  <Button className="text-xs rounded px-5">인증 확인</Button>
                </div>
              </div>
              <div>
                <div className="pb-0.5">패스워드</div>
                <div className="pb-2">
                  <PasswordInput
                    name="password"
                    placeholder={'패스워드 입력'}
                    onChange={handleTextChange}
                    value={signinData.password}
                  />
                </div>
                <PasswordInput
                  name="confirmPassword"
                  placeholder={'패스워드 확인'}
                  onChange={handleTextChange}
                  value={signinData.confirmPassword}
                />
              </div>
            </div>
            <Button disabled={loginDisabled} type="submit" className="py-2 rounded-xs w-full text-base font-normal">
              승인요청
            </Button>
          </div>
          <div>© 2025 사암당한의원 Communication</div>
        </div>
      </div>
    </form>
  );
}
