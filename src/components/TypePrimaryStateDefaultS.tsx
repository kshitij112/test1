import { FunctionComponent, useMemo, type CSSProperties } from "react";

type TypePrimaryStateDefaultSType = {
  iconOutlinedSearch?: string;
  button?: string;

  /** Style props */
  typePrimaryStateDefaultSPosition?: CSSProperties["position"];
  typePrimaryStateDefaultSBorderRadius?: CSSProperties["borderRadius"];
  typePrimaryStateDefaultSBackgroundColor?: CSSProperties["backgroundColor"];
  typePrimaryStateDefaultSTop?: CSSProperties["top"];
  typePrimaryStateDefaultSLeft?: CSSProperties["left"];
  typePrimaryStateDefaultSWidth?: CSSProperties["width"];
  typePrimaryStateDefaultSHeight?: CSSProperties["height"];
  buttonColor?: CSSProperties["color"];
};

const TypePrimaryStateDefaultS: FunctionComponent<
  TypePrimaryStateDefaultSType
> = ({
  iconOutlinedSearch,
  button,
  typePrimaryStateDefaultSPosition,
  typePrimaryStateDefaultSBorderRadius,
  typePrimaryStateDefaultSBackgroundColor,
  typePrimaryStateDefaultSTop,
  typePrimaryStateDefaultSLeft,
  typePrimaryStateDefaultSWidth,
  typePrimaryStateDefaultSHeight,
  buttonColor,
}) => {
  const typePrimaryStateDefaultSStyle: CSSProperties = useMemo(() => {
    return {
      position: typePrimaryStateDefaultSPosition,
      borderRadius: typePrimaryStateDefaultSBorderRadius,
      backgroundColor: typePrimaryStateDefaultSBackgroundColor,
      top: typePrimaryStateDefaultSTop,
      left: typePrimaryStateDefaultSLeft,
      width: typePrimaryStateDefaultSWidth,
      height: typePrimaryStateDefaultSHeight,
    };
  }, [
    typePrimaryStateDefaultSPosition,
    typePrimaryStateDefaultSBorderRadius,
    typePrimaryStateDefaultSBackgroundColor,
    typePrimaryStateDefaultSTop,
    typePrimaryStateDefaultSLeft,
    typePrimaryStateDefaultSWidth,
    typePrimaryStateDefaultSHeight,
  ]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className="relative rounded-sm bg-daybreak-blue-blue-6 flex flex-col py-2 px-4 items-center justify-start text-left text-base text-gray-gray-1 font-regular-16px-24"
      style={typePrimaryStateDefaultSStyle}
    >
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src={iconOutlinedSearch}
        />
        <div className="relative leading-[24px]" style={buttonStyle}>
          {button}
        </div>
      </div>
    </div>
  );
};

export default TypePrimaryStateDefaultS;
