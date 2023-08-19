import { FunctionComponent } from "react";

const QualifiedCertifiedContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[541px] left-[743px] w-[178px] h-[54px] text-left text-sm text-darkslategray-300 font-regular-16px-24">
      <div className="absolute top-[0px] left-[0px] rounded-10xs bg-gray-gray-1 w-[178px] h-[54px]" />
      <div className="absolute top-[15px] left-[52px] leading-[25px] inline-block w-28 h-[23px]">
        Qualified Certified
      </div>
      <div className="absolute top-[12px] left-[14px] w-7 h-[30px]">
        <div className="absolute top-[0px] left-[0px] rounded-10xs bg-mediumseagreen w-7 h-[30px]" />
        <img
          className="absolute top-[5px] left-[4px] w-5 h-5 object-cover"
          alt=""
          src="/icons8protect-1@2x.png"
        />
      </div>
    </div>
  );
};

export default QualifiedCertifiedContainer;
