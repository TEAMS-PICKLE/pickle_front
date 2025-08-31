import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center p-[33px]">
      {/* Logo */}
      <Image src="/logo/header_logo.svg" alt="Logo" width={71} height={24} />
      {/* Auth Menu */}
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
    </header>
  );
}