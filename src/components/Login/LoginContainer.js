'use client';

import Image from 'next/image';
import Selectbox from '../Selectbox';
import LoginInput from '../LoginInput';
import { CheckboxWhiteRound } from '../Checkbox';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import FindPasswordModal from './FindPasswordModal';
import { Button } from '../Button';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '@/redux/redux';

export default function LoginContainer() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    branch: '',
    email: '',
    password: '',
    saveId: false,
  });

  const loginDisabled = useMemo(() => {
    return !loginData.email || !loginData.password || !loginData.branch;
  }, [loginData]);

  //비밀번호 찾기 모달
  const [passwordModal, setPasswordModal] = useState({
    show: false,
  });
  const handleFindPassword = () => {
    setPasswordModal({
      show: true,
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    // 로그인 로직
    router.push('/dashboard'); // 로그인 성공 후 홈으로 이동
    const data = {
      type: 'LOGIN',
      payload: {
        branch: loginData.branch,
        email: loginData.email,
        name: '김사랑',
        role: 'admin',
      },
    };
    dispatch(setUserInfo(data));
  };

  return (
    <>
      <form className="login-wrapper" onSubmit={handleLogin}>
        <div className="login-outline">
          <div className="login-box">
            <div className="flex flex-col items-center gap-1.5">
              <Image src={'/images/logo/logo_small.svg'} width={33.58} height={33.58} alt="로고" />
              <Image src={'/images/logo/Kr-logo.svg'} width={130} height={21.88} alt="사암당한의원" />
            </div>
            <div className="login-form">
              <Selectbox
                options={[
                  { label: '인천본원', value: 'incheon' },
                  { label: '서울지점', value: 'seoul' },
                  { label: '부천지점', value: 'bucheon' },
                  { label: '대전지점', value: 'daejeon' },
                  { label: '대구지점', value: 'daegu' },
                  { label: '광주지점', value: 'gwangju' },
                  { label: '부산지점', value: 'busan' },
                  { label: '울산지점', value: 'ulsan' },
                ]}
                name="branch"
                onChange={option => {
                  setLoginData({ ...loginData, branch: option });
                }}
              />
              <LoginInput
                onChange={e =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
                placeholder={'이메일 입력'}
                name="email"
              />
              <LoginInput
                onChange={e =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
                placeholder={'패스워드 입력'}
                type={'password'}
                name="password"
              />
              <div className="flex items-center justify-between">
                <CheckboxWhiteRound labelText="아이디 저장" id="saveId" />
                <div className="flex items-center gap-3">
                  <span className="cursor-pointer font-normal" onClick={handleFindPassword}>
                    비밀번호 찾기
                  </span>
                  <div>|</div>
                  <Link href={'/sign-in'} className="font-normal">
                    회원가입
                  </Link>
                </div>
              </div>
            </div>
            <Button disabled={loginDisabled} type="submit" className="py-2 rounded-xs w-full text-base font-normal">
              로그인
            </Button>
          </div>
        </div>
      </form>
      <FindPasswordModal modal={passwordModal} setModal={setPasswordModal} />
    </>
  );
}
