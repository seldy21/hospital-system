import LoginContainer from '@/components/Login/LoginContainer';

export const metadata = {
  title: '사암당 한의원 - 로그인',
  description: '사암당 한의원 접수 시스템입니다.',
};

export default function Home() {
  return (
    <>
      <LoginContainer />
    </>
  );
}
