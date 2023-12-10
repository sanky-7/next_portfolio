import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-6">Community</div>
            <p className="flex flex-row items-center mb-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center mb-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-6">Social Media</div>
            <p className="flex flex-row items-center mb-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center mb-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-6">About</div>
            <p className="flex flex-row items-center mb-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learn about me</span>
            </p>
            <p className="flex flex-row items-center mb-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                sanketvaibhav10@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mt-4 mb-[20px] text-[15px] text-center">
          &copy; Vaibhav Sanket 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
