import svgPaths from "./svg-odfeyr0f8o";

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#3a3941] text-[18px] tracking-[-0.144px]">Custom attributes</p>
      <div className="font-['Neue_Montreal:Regular',sans-serif] h-[78px] leading-[1.6] relative shrink-0 text-[#63626f] text-[16px] w-[488px] whitespace-pre-wrap">
        <p className="mb-0">Custom attributes allow you to add extra structured data to this coupon.</p>
        <p>These attributes can be used by the front-end to control content, behavior, or layout.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Book',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#2f2e35] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Book',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#2f2e35] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[74px] items-start min-h-px min-w-px relative" data-name="Step">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Dropdown Input">
        <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="Label">
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2f2e35] text-[14px] tracking-[-0.084px]">String key</p>
        </div>
        <div className="bg-white min-h-[48px] relative rounded-[123px] shrink-0 w-full" data-name="_InputTextBase">
          <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] p-[12px] relative w-full">
              <Frame1 />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#a9a8b2] border-solid inset-0 pointer-events-none rounded-[123px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Dropdown Input">
        <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="Label">
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2f2e35] text-[14px] tracking-[-0.084px]">String value</p>
        </div>
        <div className="bg-white min-h-[48px] relative rounded-[123px] shrink-0 w-full" data-name="_InputTextBase">
          <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] p-[12px] relative w-full">
              <Frame2 />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#a9a8b2] border-solid inset-0 pointer-events-none rounded-[123px]" />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[32px] relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[32px]" data-name="Button Icon">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Monotone add">
          <div className="absolute inset-[3.13%_10.94%_10.94%_10.94%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.625 17.1875">
              <path d={svgPaths.p308e7040} fill="var(--fill-0, #F43F5E)" id="Vector" stroke="var(--stroke-0, #F43F5E)" strokeWidth="0.09375" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Segmentation() {
  return (
    <div className="bg-[#fafafa] relative rounded-[24px] shrink-0 w-full" data-name="Segmentation">
      <div className="content-stretch flex gap-[8px] items-start pl-[16px] pr-[20px] py-[20px] relative w-full">
        <Step />
        <Frame3 />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative size-full" data-name="Frame">
      <Frame4 />
      <Segmentation />
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <div className="relative shrink-0 size-[20px]" data-name="Format=Outline, Weight=Bold">
          <div className="absolute inset-[10.94%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.625 15.625">
              <path d={svgPaths.p204b1000} fill="var(--fill-0, #561EE3)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#561ee3] text-[14px] tracking-[-0.084px]">Add custom attribute</p>
      </div>
    </div>
  );
}