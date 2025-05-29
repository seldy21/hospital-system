'use client';

import Image from 'next/image';
import Modal from '../Modal';
import TextInput from '../TextInput';
import { Button } from '../Button';
import MessageAlert from '../MessageAlert';
import { useMemo, useState } from 'react';

export default function FindPasswordModal({ modal, setModal }) {
  const [email, setEmail] = useState('');
  // 이메일 유효성 검사
  const emailValidator = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, [email]);

  // 전송 상태 알림
  const [showAlert, setShowAlert] = useState({
    show: false,
    html: '',
  });

  //비밀번호 전송
  const sendPassword = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    // 정상 전송
    setShowAlert({
      show: true,
      html: `<div class="text-sm">비밀번호 초기화 링크가 전송되었습니다.<br/>등록하신 이메일을 확인 하십시오.</div>`,
    });

    //계정 정보 없음
    // setShowAlert({
    //   show: true,
    //   html: `<div class="text-sm">계정 정보가 없습니다.<br/>관리자에게 문의해 주세요.</div>`,
    // });
    setModal({ ...modal, show: false });
  };
  return (
    <>
      <Modal
        isOpen={modal.show}
        onClose={() => {
          setModal({ show: false });
        }}
        backdrop={false}
      >
        <form className="flex flex-col items-center" onSubmit={sendPassword}>
          <Image src={'/images/icons/circle-exclamation.svg'} width={24} height={24} alt="주의" className="mb-4" />
          <div className="text-sm pb-2">
            <div>등록하신 비밀번호를 초기화합니다.</div>
            <div>이메일 계정 주소를 입력하십시오.</div>
          </div>
          <div className="pb-5 w-full">
            <TextInput placeholder="이메일 입력" name="email" onChange={e => setEmail(e.target.value)} value={email} />
            {!emailValidator && <span className="warn-text">올바른 이메일 주소를 입력하십시오.</span>}
          </div>
          <Button className="py-3 rounded-sm w-full text-base" type="submit">
            비밀번호 전송
          </Button>
        </form>
      </Modal>
      <MessageAlert
        isOpen={showAlert.show}
        htmlText={showAlert.html}
        autoClose
        onClose={() => setShowAlert({ show: false, html: '' })}
      />
    </>
  );
}
