import Image from "next/image";

export default function LandingPage() {
  return (
    /** Main Container */
    <div className="flex flex-col">
      {/** Header */}
      <div className="flex flex-row justify-between items-center p-[33px]">
        {/** Logo */}
        <Image src="/logo/header_logo.svg" alt="Logo" width={71} height={24}/>
        {/* Authentic Menu */}
        <div className="flex items-center gap-x-2">
          {/* 로그인 버튼 */}
          <button className="px-6 py-2 rounded-full border border-teal-400 text-teal-400 font-bold">
            로그인
          </button>
          {/* 회원가입 버튼 */}
          <button className="px-6 py-2 rounded-full bg-teal-400 text-white font-bold">
            회원가입
          </button>
        </div>
      </div>
      {/** Content */}
      <div className="flex flex-col justify-center items-center gap-y-[26px] mt-[161px]">
        {/** Title */}
        <span className="text-[40px] font-bold">
          프로젝트 관리의 모든 것, 픽클AI로 간편하게
        </span>
        {/** Subtitle */}
        <span className="text-center whitespace-normal break-words w-[660px] mx-auto text-[16px]">
          A smart AI-powered platform that lets anyone manage projects like a pro. Intuitive WBS and Gantt UI with automatic predictions enable efficient collaboration and clear project visibility without complexity. 
        </span>
        {/** Start Button */}
        <button className="bg-black text-green-400 font-bold px-5 py-2 rounded-full hover:bg-gray-900 transition">
          Pickle 무료로 시작하기
        </button>
        {/** Logo Image */}
        <div className="w-full h-[271px] bg-[url('/landing/logo_band.svg')] bg-repeat-x bg-center bg-[length:820px_271px] mt-[91px]"> 
        </div>
      </div>
      {/** Footer */}
      <div className="flex flex-row justify-between px-[48px] py-[38px] bg-[#212121]/5 mt-[20px]">
        {/** Logo & Copyright */}
        <div className="flex flex-col gap-y-[96px]">
          <Image src="/logo/footer_logo.svg" alt="Logo" width={48} height={38}/>
          <div className="text-[12px] text-[#828282]">
            @ 2025 Pickle AI. All rights reserved.
          </div>
        </div>
        {/** Contact */}
        <div className="flex flex-col gap-y-[10px]">
          <span className="text-lg">
            Let's Talk
          </span>
          <span className="text-[12px] text-[#212121] underline opacity-60">
            contact@yourdomain.com
          </span>
        </div>
      </div>
    </div>
  );
}
