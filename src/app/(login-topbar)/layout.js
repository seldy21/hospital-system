import Image from "next/image";

export const metadata = {
  title: "사암당 한의원 - 접수 시스템",
  description: "사암당 한의원 접수 시스템입니다.",
};

export default function layout() {
  return (
  <div className="layout-nav"> 
    <Image src="/images/logo/logo_small.svg" width={15.53} height={15.53} alt="사암당 로고"/>
    <div className="flex items-center gap-8">
      <div className="text-xs font-bold">인천본원</div>
      <div className="">{}</div>
    </div>
  </div>)
}