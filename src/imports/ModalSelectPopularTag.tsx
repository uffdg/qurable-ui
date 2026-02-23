import svgPaths from "./svg-v1k64neoie";

function ImageSquare() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ImageSquare">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ImageSquare">
          <path d={svgPaths.p2161b400} fill="var(--fill-0, #4320A5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-[#ebe4ff] content-stretch flex items-center justify-center relative rounded-[123px] shrink-0 size-[48px]" data-name="Icon Container">
      <ImageSquare />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#3a3941] text-[20px] tracking-[-0.2px] w-full">{`Image attribute  `}</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#63626f] text-[16px] w-full">Internal key used by the front-end to reference this image. Not visible to end users.</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2f2e35] text-[14px] tracking-[-0.084px]">Key name</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Book',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#63626f] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Image key name</p>
    </div>
  );
}

function InputTextBase() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[123px] shrink-0 w-full" data-name="_InputTextBase">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] p-[12px] relative w-full">
          <Frame5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbdc5] border-solid inset-0 pointer-events-none rounded-[123px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <Label />
      <InputTextBase />
    </div>
  );
}

function InputText() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0 w-full" data-name="Input Text">
      <Frame4 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2f2e35] text-[14px] tracking-[-0.084px]">Image Alt</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Book',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#63626f] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Describe image for accesilibity</p>
    </div>
  );
}

function InputTextBase1() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[123px] shrink-0 w-full" data-name="_InputTextBase">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] p-[12px] relative w-full">
          <Frame7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbdc5] border-solid inset-0 pointer-events-none rounded-[123px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <Label1 />
      <InputTextBase1 />
    </div>
  );
}

function InputText1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0 w-full" data-name="Input Text">
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <InputText />
      <InputText1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <IconContainer />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[1234px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px]">Cancel</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbdc5] border-solid inset-0 pointer-events-none rounded-[1234px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#6430f7] relative rounded-[1234px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.084px]">Add</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#6430f7] border-solid inset-0 pointer-events-none rounded-[1234px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Frame">
      <Button />
      <Button1 />
    </div>
  );
}

function X() {
  return (
    <div className="absolute right-0 size-[24px] top-0" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p1d5e2c80} fill="var(--fill-0, #63626F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <Frame8 />
      <X />
    </div>
  );
}

export default function ModalSelectPopularTag() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[32px] shadow-[0px_12px_16px_0px_rgba(16,24,40,0.08),0px_4px_6px_0px_rgba(16,24,40,0.03)] size-full" data-name="Modal | Select popular tag">
      <Frame />
    </div>
  );
}