import svgPaths from "./svg-nlvf7jsmo8";
import imgUnion from "figma:asset/3953c83e1a838d3b143cbd033328681b8ef65ef6.png";
import imgUnion1 from "figma:asset/9628824c7bd67dc31bca42471c65ff9b8c4a426a.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start max-w-[960px] min-h-px min-w-px not-italic relative whitespace-pre-wrap" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[68px] relative shrink-0 text-[#3a3941] text-[60px] tracking-[-1.08px] w-full">Secondary Colors</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#63626f] text-[20px] w-full">The supporting actors of your design palette. They play a vital role, complementing your primary color and adding visual interest without stealing the spotlight.</p>
    </div>
  );
}

function Cube() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Cube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Cube">
          <path d={svgPaths.p23c90200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2d1c5d] content-stretch flex gap-[10px] items-center justify-center min-h-[48px] overflow-clip px-[20px] py-[12px] relative rounded-[1234px] shrink-0" data-name="Button">
      <Cube />
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.112px]">Foundations</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Frame">
      <Button />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, white)" id="Ellipse 1" r="20" />
        </svg>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]" data-name="Union">
        <img alt="" className="block max-w-none size-full" height="40" src={imgUnion} width="40" />
      </div>
    </div>
  );
}

function Logomark() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[15px] shrink-0 size-[43.75px]" data-name="Logomark">
      <Group1 />
    </div>
  );
}

function MonotoneArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone arrow right">
          <path d={svgPaths.p96c8d80} fill="var(--fill-0, #A9A8B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="Content">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#63626f] text-[18px] tracking-[-0.144px]">Foundations</p>
      <MonotoneArrowRight />
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#63626f] text-[18px] tracking-[-0.144px]">Colors</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <Logomark />
      <Content2 />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Info">
      <Content1 />
      <a className="block font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#2d1c5d] text-[18px] text-right tracking-[-0.144px] whitespace-nowrap" href="http://www.qurable.co">
        <p className="cursor-pointer leading-[24px]">www.qurable.co</p>
      </a>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[80px] items-start min-h-px min-w-px relative" data-name="Content">
      <div className="absolute right-[-450px] size-[1155px] top-[-990px]" data-name="Ellipse">
        <div className="absolute inset-[-27.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1795 1795">
            <g filter="url(#filter0_f_1_2452)" id="Ellipse" opacity="0.32">
              <circle cx="897.5" cy="897.5" fill="var(--fill-0, #2D1C5D)" r="577.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1795" id="filter0_f_1_2452" width="1795" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_2452" stdDeviation="160" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame />
      <Info />
    </div>
  );
}

function DesignSystemHeader() {
  return (
    <div className="bg-white min-w-[1440px] relative rounded-[40px] shrink-0 w-[1952px]" data-name="_DesignSystemHeader">
      <div className="content-stretch flex items-center min-w-[inherit] overflow-clip p-[40px] relative rounded-[inherit] w-full">
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function DesignSystemItemTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="_DesignSystemItemTitle">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[44px] relative shrink-0 text-[#3a3941] text-[36px] tracking-[-0.504px] w-full">Blue</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#63626f] text-[18px] w-full">Blue represents serenity, stability, or wisdom - it guides users through the design process with a sense of clarity and direction.</p>
    </div>
  );
}

function SwatchBase() {
  return (
    <div className="bg-[#eff6ff] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">5</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#EFF6FF</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo />
      </div>
    </div>
  );
}

function ColorSwatchBase() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase />
        <Frame7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase1() {
  return (
    <div className="bg-[#dbeafe] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">10</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#DBEAFE</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo1 />
      </div>
    </div>
  );
}

function ColorSwatchBase1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase1 />
        <Frame8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase2() {
  return (
    <div className="bg-[#bfdbfe] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">20</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#BFDBFE</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo2 />
      </div>
    </div>
  );
}

function ColorSwatchBase2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase2 />
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase3() {
  return (
    <div className="bg-[#93c5fd] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">30</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#93C5FD</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo3 />
      </div>
    </div>
  );
}

function ColorSwatchBase3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase3 />
        <Frame10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase4() {
  return (
    <div className="bg-[#60a5fa] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">40</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#60A5FA</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo4 />
      </div>
    </div>
  );
}

function ColorSwatchBase4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase4 />
        <Frame11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase />
      <ColorSwatchBase1 />
      <ColorSwatchBase2 />
      <ColorSwatchBase3 />
      <ColorSwatchBase4 />
    </div>
  );
}

function SwatchBase5() {
  return (
    <div className="bg-[#3b82f6] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">50</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#3B82F6</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo5 />
      </div>
    </div>
  );
}

function ColorSwatchBase5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase5 />
        <Frame13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase6() {
  return (
    <div className="bg-[#2563eb] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">60</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#2563EB</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo6 />
      </div>
    </div>
  );
}

function ColorSwatchBase6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase6 />
        <Frame14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase7() {
  return (
    <div className="bg-[#1d4ed8] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">70</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#1D4ED8</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo7 />
      </div>
    </div>
  );
}

function ColorSwatchBase7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase7 />
        <Frame15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase8() {
  return (
    <div className="bg-[#1e40af] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">80</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#1E40AF</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo8 />
      </div>
    </div>
  );
}

function ColorSwatchBase8() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase8 />
        <Frame16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase9() {
  return (
    <div className="bg-[#1e3a8a] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">90</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#1E3A8A</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo9 />
      </div>
    </div>
  );
}

function ColorSwatchBase9() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase9 />
        <Frame17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase5 />
      <ColorSwatchBase6 />
      <ColorSwatchBase7 />
      <ColorSwatchBase8 />
      <ColorSwatchBase9 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame6 />
      <Frame12 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end relative shrink-0 w-full" data-name="Frame">
      <DesignSystemItemTitle />
      <Frame5 />
    </div>
  );
}

function DesignSystemItemTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="_DesignSystemItemTitle">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[44px] relative shrink-0 text-[#3a3941] text-[36px] tracking-[-0.504px] w-full">Cyan</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#63626f] text-[18px] w-full">Cyan offers a unique position in the color palette. It injects a touch of modernity while retaining a sense of tranquility.</p>
    </div>
  );
}

function SwatchBase10() {
  return (
    <div className="bg-[#ecfeff] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">5</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#ECFEFF</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo10 />
      </div>
    </div>
  );
}

function ColorSwatchBase10() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase10 />
        <Frame21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase11() {
  return (
    <div className="bg-[#cffafe] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">10</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#CFFAFE</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo11 />
      </div>
    </div>
  );
}

function ColorSwatchBase11() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase11 />
        <Frame22 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase12() {
  return (
    <div className="bg-[#a5f3fc] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">20</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#A5F3FC</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo12 />
      </div>
    </div>
  );
}

function ColorSwatchBase12() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase12 />
        <Frame23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase13() {
  return (
    <div className="bg-[#67e8f9] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">30</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#67E8F9</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo13 />
      </div>
    </div>
  );
}

function ColorSwatchBase13() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase13 />
        <Frame24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase14() {
  return (
    <div className="bg-[#22d3ee] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">40</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#22D3EE</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo14 />
      </div>
    </div>
  );
}

function ColorSwatchBase14() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase14 />
        <Frame25 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase10 />
      <ColorSwatchBase11 />
      <ColorSwatchBase12 />
      <ColorSwatchBase13 />
      <ColorSwatchBase14 />
    </div>
  );
}

function SwatchBase15() {
  return (
    <div className="bg-[#06b6d4] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">50</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#06B6D4</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo15 />
      </div>
    </div>
  );
}

function ColorSwatchBase15() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase15 />
        <Frame27 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase16() {
  return (
    <div className="bg-[#0891b2] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo16() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">60</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#0891B2</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo16 />
      </div>
    </div>
  );
}

function ColorSwatchBase16() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase16 />
        <Frame28 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase17() {
  return (
    <div className="bg-[#0e7490] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo17() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">70</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#0E7490</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo17 />
      </div>
    </div>
  );
}

function ColorSwatchBase17() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase17 />
        <Frame29 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase18() {
  return (
    <div className="bg-[#155e75] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">80</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#155E75</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo18 />
      </div>
    </div>
  );
}

function ColorSwatchBase18() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase18 />
        <Frame30 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase19() {
  return (
    <div className="bg-[#164e63] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo19() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">90</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#164E63</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo19 />
      </div>
    </div>
  );
}

function ColorSwatchBase19() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase19 />
        <Frame31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase15 />
      <ColorSwatchBase16 />
      <ColorSwatchBase17 />
      <ColorSwatchBase18 />
      <ColorSwatchBase19 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame20 />
      <Frame26 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end relative shrink-0 w-full" data-name="Frame">
      <DesignSystemItemTitle1 />
      <Frame19 />
    </div>
  );
}

function DesignSystemItemTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="_DesignSystemItemTitle">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[44px] relative shrink-0 text-[#3a3941] text-[36px] tracking-[-0.504px] w-full">Teal</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#63626f] text-[18px] w-full">Serene and refreshing, teal embodies a sense of calm clarity.</p>
    </div>
  );
}

function SwatchBase20() {
  return (
    <div className="bg-[#f0fdfa] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo20() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">5</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#F0FDFA</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo20 />
      </div>
    </div>
  );
}

function ColorSwatchBase20() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase20 />
        <Frame35 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase21() {
  return (
    <div className="bg-[#ccfbf1] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo21() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">10</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#CCFBF1</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo21 />
      </div>
    </div>
  );
}

function ColorSwatchBase21() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase21 />
        <Frame36 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase22() {
  return (
    <div className="bg-[#99f6e4] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo22() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">20</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#99F6E4</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo22 />
      </div>
    </div>
  );
}

function ColorSwatchBase22() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase22 />
        <Frame37 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase23() {
  return (
    <div className="bg-[#5eead4] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo23() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">30</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#5EEAD4</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo23 />
      </div>
    </div>
  );
}

function ColorSwatchBase23() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase23 />
        <Frame38 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase24() {
  return (
    <div className="bg-[#2dd4bf] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo24() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">40</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#2DD4BF</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo24 />
      </div>
    </div>
  );
}

function ColorSwatchBase24() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase24 />
        <Frame39 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase20 />
      <ColorSwatchBase21 />
      <ColorSwatchBase22 />
      <ColorSwatchBase23 />
      <ColorSwatchBase24 />
    </div>
  );
}

function SwatchBase25() {
  return (
    <div className="bg-[#14b8a6] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">50</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#14B8A6</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo25 />
      </div>
    </div>
  );
}

function ColorSwatchBase25() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase25 />
        <Frame41 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase26() {
  return (
    <div className="bg-[#0d9488] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">60</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#0D9488</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo26 />
      </div>
    </div>
  );
}

function ColorSwatchBase26() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase26 />
        <Frame42 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase27() {
  return (
    <div className="bg-[#0f766e] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo27() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">70</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#0F766E</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo27 />
      </div>
    </div>
  );
}

function ColorSwatchBase27() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase27 />
        <Frame43 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase28() {
  return (
    <div className="bg-[#115e59] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo28() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">80</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#115E59</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo28 />
      </div>
    </div>
  );
}

function ColorSwatchBase28() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase28 />
        <Frame44 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase29() {
  return (
    <div className="bg-[#134e4a] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">90</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#134E4A</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo29 />
      </div>
    </div>
  );
}

function ColorSwatchBase29() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase29 />
        <Frame45 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase25 />
      <ColorSwatchBase26 />
      <ColorSwatchBase27 />
      <ColorSwatchBase28 />
      <ColorSwatchBase29 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame34 />
      <Frame40 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end relative shrink-0 w-full" data-name="Frame">
      <DesignSystemItemTitle2 />
      <Frame33 />
    </div>
  );
}

function DesignSystemItemTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="_DesignSystemItemTitle">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[44px] relative shrink-0 text-[#3a3941] text-[36px] tracking-[-0.504px] w-full">Lime</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#63626f] text-[18px] w-full">Zesty and invigorating, lime injects a burst of energy into any design.</p>
    </div>
  );
}

function SwatchBase30() {
  return (
    <div className="bg-[#f7fee7] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo30() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">5</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#F7FEE7</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo30 />
      </div>
    </div>
  );
}

function ColorSwatchBase30() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase30 />
        <Frame49 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase31() {
  return (
    <div className="bg-[#ecfccb] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo31() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">10</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#ECFCCB</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo31 />
      </div>
    </div>
  );
}

function ColorSwatchBase31() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase31 />
        <Frame50 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase32() {
  return (
    <div className="bg-[#d9f99d] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo32() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">20</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#D9F99D</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo32 />
      </div>
    </div>
  );
}

function ColorSwatchBase32() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase32 />
        <Frame51 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase33() {
  return (
    <div className="bg-[#bef264] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo33() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">30</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#BEF264</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo33 />
      </div>
    </div>
  );
}

function ColorSwatchBase33() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase33 />
        <Frame52 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase34() {
  return (
    <div className="bg-[#a3e635] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo34() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">40</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#A3E635</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo34 />
      </div>
    </div>
  );
}

function ColorSwatchBase34() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase34 />
        <Frame53 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase30 />
      <ColorSwatchBase31 />
      <ColorSwatchBase32 />
      <ColorSwatchBase33 />
      <ColorSwatchBase34 />
    </div>
  );
}

function SwatchBase35() {
  return (
    <div className="bg-[#84cc16] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo35() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">50</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#84CC16</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo35 />
      </div>
    </div>
  );
}

function ColorSwatchBase35() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase35 />
        <Frame55 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase36() {
  return (
    <div className="bg-[#65a30d] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo36() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">60</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#65A30D</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo36 />
      </div>
    </div>
  );
}

function ColorSwatchBase36() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase36 />
        <Frame56 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase37() {
  return (
    <div className="bg-[#4d7c0f] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo37() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">70</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#4D7C0F</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo37 />
      </div>
    </div>
  );
}

function ColorSwatchBase37() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase37 />
        <Frame57 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase38() {
  return (
    <div className="bg-[#3f6212] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo38() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">80</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#3F6212</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo38 />
      </div>
    </div>
  );
}

function ColorSwatchBase38() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase38 />
        <Frame58 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase39() {
  return (
    <div className="bg-[#365314] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo39() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">90</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#365314</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo39 />
      </div>
    </div>
  );
}

function ColorSwatchBase39() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase39 />
        <Frame59 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase35 />
      <ColorSwatchBase36 />
      <ColorSwatchBase37 />
      <ColorSwatchBase38 />
      <ColorSwatchBase39 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame48 />
      <Frame54 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end relative shrink-0 w-full" data-name="Frame">
      <DesignSystemItemTitle3 />
      <Frame47 />
    </div>
  );
}

function DesignSystemItemTitle4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="_DesignSystemItemTitle">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[44px] relative shrink-0 text-[#3a3941] text-[36px] tracking-[-0.504px] w-full">Purple</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#63626f] text-[18px] w-full">Associated with royalty and imagination, purple sparks creativity and inspires exploration.</p>
    </div>
  );
}

function SwatchBase40() {
  return (
    <div className="bg-[#faf5ff] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo40() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">5</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#0F1A1C</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo40 />
      </div>
    </div>
  );
}

function ColorSwatchBase40() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase40 />
        <Frame63 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase41() {
  return (
    <div className="bg-[#f3e8ff] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo41() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">10</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#0F1A1C</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo41 />
      </div>
    </div>
  );
}

function ColorSwatchBase41() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase41 />
        <Frame64 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase42() {
  return (
    <div className="bg-[#e9d5ff] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo42() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">20</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#0F1A1C</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo42 />
      </div>
    </div>
  );
}

function ColorSwatchBase42() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase42 />
        <Frame65 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase43() {
  return (
    <div className="bg-[#d8b4fe] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo43() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">30</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#0F1A1C</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo43 />
      </div>
    </div>
  );
}

function ColorSwatchBase43() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase43 />
        <Frame66 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase44() {
  return (
    <div className="bg-[#c084fc] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo44() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">40</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#0F1A1C</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo44 />
      </div>
    </div>
  );
}

function ColorSwatchBase44() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase44 />
        <Frame67 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase40 />
      <ColorSwatchBase41 />
      <ColorSwatchBase42 />
      <ColorSwatchBase43 />
      <ColorSwatchBase44 />
    </div>
  );
}

function SwatchBase45() {
  return (
    <div className="bg-[#a855f7] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo45() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">50</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#A855F7</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo45 />
      </div>
    </div>
  );
}

function ColorSwatchBase45() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase45 />
        <Frame69 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase46() {
  return (
    <div className="bg-[#9333ea] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo46() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">60</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#9333EA</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo46 />
      </div>
    </div>
  );
}

function ColorSwatchBase46() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase46 />
        <Frame70 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase47() {
  return (
    <div className="bg-[#7e22ce] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo47() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">70</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#E2E8F0</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo47 />
      </div>
    </div>
  );
}

function ColorSwatchBase47() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase47 />
        <Frame71 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase48() {
  return (
    <div className="bg-[#6b21a8] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo48() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">80</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#6B21A8</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo48 />
      </div>
    </div>
  );
}

function ColorSwatchBase48() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase48 />
        <Frame72 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase49() {
  return (
    <div className="bg-[#581c87] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo49() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">90</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#581C87</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo49 />
      </div>
    </div>
  );
}

function ColorSwatchBase49() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase49 />
        <Frame73 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase45 />
      <ColorSwatchBase46 />
      <ColorSwatchBase47 />
      <ColorSwatchBase48 />
      <ColorSwatchBase49 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame62 />
      <Frame68 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end relative shrink-0 w-full" data-name="Frame">
      <DesignSystemItemTitle4 />
      <Frame61 />
    </div>
  );
}

function DesignSystemItemTitle5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="_DesignSystemItemTitle">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[44px] relative shrink-0 text-[#3a3941] text-[36px] tracking-[-0.504px] w-full">Pink</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#63626f] text-[18px] w-full">Pink symbolizes love, nurture and compassion. It evokes feelings of comfort, warmth and hope.</p>
    </div>
  );
}

function SwatchBase50() {
  return (
    <div className="bg-[#fdf2f8] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo50() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">5</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#FDF2F8</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo50 />
      </div>
    </div>
  );
}

function ColorSwatchBase50() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase50 />
        <Frame77 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase51() {
  return (
    <div className="bg-[#fdf2f8] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo51() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">10</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#FDF2F8</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo51 />
      </div>
    </div>
  );
}

function ColorSwatchBase51() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase51 />
        <Frame78 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase52() {
  return (
    <div className="bg-[#fbcfe8] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo52() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">20</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#FBCFE8</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo52 />
      </div>
    </div>
  );
}

function ColorSwatchBase52() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase52 />
        <Frame79 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase53() {
  return (
    <div className="bg-[#f9a8d4] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo53() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">30</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#F9A8D4</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo53 />
      </div>
    </div>
  );
}

function ColorSwatchBase53() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase53 />
        <Frame80 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase54() {
  return (
    <div className="bg-[#f472b6] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo54() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">40</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#F472B6</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo54 />
      </div>
    </div>
  );
}

function ColorSwatchBase54() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase54 />
        <Frame81 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase50 />
      <ColorSwatchBase51 />
      <ColorSwatchBase52 />
      <ColorSwatchBase53 />
      <ColorSwatchBase54 />
    </div>
  );
}

function SwatchBase55() {
  return (
    <div className="bg-[#ec4899] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo55() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">50</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#EC4899</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo55 />
      </div>
    </div>
  );
}

function ColorSwatchBase55() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase55 />
        <Frame83 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase56() {
  return (
    <div className="bg-[#db2777] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo56() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">60</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#DB2777</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo56 />
      </div>
    </div>
  );
}

function ColorSwatchBase56() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase56 />
        <Frame84 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase57() {
  return (
    <div className="bg-[#be185d] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo57() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">70</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#BE185D</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo57 />
      </div>
    </div>
  );
}

function ColorSwatchBase57() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase57 />
        <Frame85 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase58() {
  return (
    <div className="bg-[#9d174d] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo58() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">80</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#9D174D</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo58 />
      </div>
    </div>
  );
}

function ColorSwatchBase58() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase58 />
        <Frame86 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase59() {
  return (
    <div className="bg-[#831843] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo59() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">90</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#831843</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo59 />
      </div>
    </div>
  );
}

function ColorSwatchBase59() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase59 />
        <Frame87 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase55 />
      <ColorSwatchBase56 />
      <ColorSwatchBase57 />
      <ColorSwatchBase58 />
      <ColorSwatchBase59 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame76 />
      <Frame82 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end relative shrink-0 w-full" data-name="Frame">
      <DesignSystemItemTitle5 />
      <Frame75 />
    </div>
  );
}

function DesignSystemItemTitle6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="_DesignSystemItemTitle">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[44px] relative shrink-0 text-[#3a3941] text-[36px] tracking-[-0.504px] w-full">Orange</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#91909d] text-[18px] w-full">{` Orange is basically sunshine in a color, guaranteed to brighten your mood.`}</p>
    </div>
  );
}

function SwatchBase60() {
  return (
    <div className="bg-[#fff7ed] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo60() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">5</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#FFF7ED</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo60 />
      </div>
    </div>
  );
}

function ColorSwatchBase60() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase60 />
        <Frame91 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase61() {
  return (
    <div className="bg-[#ffedd5] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo61() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">10</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#FFEDD5</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo61 />
      </div>
    </div>
  );
}

function ColorSwatchBase61() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase61 />
        <Frame92 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase62() {
  return (
    <div className="bg-[#fed7aa] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo62() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">20</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#FED7AA</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo62 />
      </div>
    </div>
  );
}

function ColorSwatchBase62() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase62 />
        <Frame93 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase63() {
  return (
    <div className="bg-[#fdba74] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo63() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">30</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#FDBA74</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo63 />
      </div>
    </div>
  );
}

function ColorSwatchBase63() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase63 />
        <Frame94 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase64() {
  return (
    <div className="bg-[#fb923c] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo64() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">40</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#FB923C</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo64 />
      </div>
    </div>
  );
}

function ColorSwatchBase64() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase64 />
        <Frame95 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase60 />
      <ColorSwatchBase61 />
      <ColorSwatchBase62 />
      <ColorSwatchBase63 />
      <ColorSwatchBase64 />
    </div>
  );
}

function SwatchBase65() {
  return (
    <div className="bg-[#f97316] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo65() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">50</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#F97316</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo65 />
      </div>
    </div>
  );
}

function ColorSwatchBase65() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase65 />
        <Frame97 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase66() {
  return (
    <div className="bg-[#ea580c] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo66() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">60</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#EA580C</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo66 />
      </div>
    </div>
  );
}

function ColorSwatchBase66() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase66 />
        <Frame98 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase67() {
  return (
    <div className="bg-[#c2410c] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo67() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">70</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#C2410C</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo67 />
      </div>
    </div>
  );
}

function ColorSwatchBase67() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase67 />
        <Frame99 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase68() {
  return (
    <div className="bg-[#9a3412] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo68() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">80</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#9A3412</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo68 />
      </div>
    </div>
  );
}

function ColorSwatchBase68() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase68 />
        <Frame100 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function SwatchBase69() {
  return (
    <div className="bg-[#7c2d12] h-[120px] relative shrink-0 w-full" data-name="Swatch Base">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SwatchInfo69() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="Swatch Info">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[#63626f] text-[18px] tracking-[-0.144px] whitespace-pre-wrap">90</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#a9a8b2] text-[16px] text-right tracking-[-0.112px]">#7C2D12</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <SwatchInfo69 />
      </div>
    </div>
  );
}

function ColorSwatchBase69() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="_ColorSwatchBase">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SwatchBase69 />
        <Frame101 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(23,23,23,0.1),0px_1px_2px_0px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ColorSwatchBase65 />
      <ColorSwatchBase66 />
      <ColorSwatchBase67 />
      <ColorSwatchBase68 />
      <ColorSwatchBase69 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame90 />
      <Frame96 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end relative shrink-0 w-full" data-name="Frame">
      <DesignSystemItemTitle6 />
      <Frame89 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[96px] items-start relative shrink-0 w-[1776px]" data-name="Frame">
      <Frame4 />
      <Frame18 />
      <Frame32 />
      <Frame46 />
      <Frame60 />
      <Frame74 />
      <Frame88 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute left-0 size-[43.75px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.75 43.75">
          <circle cx="21.875" cy="21.875" fill="var(--fill-0, white)" id="Ellipse 1" r="21.875" />
        </svg>
      </div>
      <div className="absolute inset-[0_70.61%_0_0]" data-name="Union">
        <img alt="" className="block max-w-none size-full" height="43.75" src={imgUnion1} width="43.75" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[28.92%_0_28.92%_37.55%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.9643 18.4443">
        <g id="Group">
          <path d={svgPaths.p33972d00} fill="var(--fill-0, #2F2E35)" id="Vector" />
          <path d={svgPaths.p21b7c970} fill="var(--fill-0, #2F2E35)" id="Vector_2" />
          <path d={svgPaths.p3a6e0500} fill="var(--fill-0, #2F2E35)" id="Vector_3" />
          <path d={svgPaths.p1a8c6f0} fill="var(--fill-0, #2F2E35)" id="Vector_4" />
          <path d={svgPaths.p111e0e00} fill="var(--fill-0, #2F2E35)" id="Vector_5" />
          <path d={svgPaths.p158afd00} fill="var(--fill-0, #2F2E35)" id="Vector_6" />
          <path d={svgPaths.p1970e000} fill="var(--fill-0, #2F2E35)" id="Vector_7" />
          <path d={svgPaths.p24d60280} fill="var(--fill-0, #2F2E35)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Frame105() {
  return (
    <div className="h-[43.75px] relative shrink-0 w-[148.855px]">
      <Group2 />
      <Group />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo">
      <Frame105 />
    </div>
  );
}

function SocialMediaLogo() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Social Media Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_2425)" id="Social Media Logo">
          <path d={svgPaths.pe62dc00} fill="var(--fill-0, #63626F)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2425">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialMediaLogo1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Social Media Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_2410)" id="Social Media Logo">
          <path d={svgPaths.pb5b4340} fill="var(--fill-0, #63626F)" id="Vector" />
          <path d={svgPaths.pc090600} fill="var(--fill-0, #63626F)" id="Vector_2" />
          <path d={svgPaths.p1f8f5540} fill="var(--fill-0, #63626F)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_2410">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialMediaLogo2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Social Media Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Social Media Logo">
          <path d={svgPaths.p213f9700} fill="var(--fill-0, #63626F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediaLogo3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Social Media Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Social Media Logo">
          <path d={svgPaths.p3bc6200} fill="var(--fill-0, #63626F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediaLogo4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Social Media Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Social Media Logo">
          <path d={svgPaths.p1d773500} fill="var(--fill-0, #63626F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex gap-[21.333px] items-start relative shrink-0" data-name="Frame">
      <SocialMediaLogo />
      <SocialMediaLogo1 />
      <SocialMediaLogo2 />
      <SocialMediaLogo3 />
      <SocialMediaLogo4 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 text-[18px] text-right tracking-[-0.144px]" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a9a8b2]">Q Design System</p>
      <a className="block font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#2d1c5d] whitespace-nowrap" href="http://www.qurable.co">
        <p className="cursor-pointer leading-[24px]">www.qurable.co</p>
      </a>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-end relative shrink-0" data-name="Frame">
      <Frame103 />
      <Frame104 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative" data-name="Content">
      <Logo />
      <Frame102 />
    </div>
  );
}

function DesignSystemFooter() {
  return (
    <div className="bg-white min-w-[1440px] relative rounded-[40px] shrink-0 w-[1952px]" data-name="_DesignSystemFooter">
      <div className="content-stretch flex gap-[32px] items-center min-w-[inherit] overflow-clip p-[40px] relative rounded-[inherit] w-full">
        <div className="absolute bottom-[-509px] left-[-327px] size-[593px]" data-name="Ellipse">
          <div className="absolute inset-[-43.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1105 1105">
              <g filter="url(#filter0_f_1_2433)" id="Ellipse" opacity="0.32">
                <circle cx="552.5" cy="552.5" fill="var(--fill-0, #2D1C5D)" r="296.5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1105" id="filter0_f_1_2433" width="1105" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_2433" stdDeviation="128" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <Content3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

export default function SecondaryColors() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[128px] items-center overflow-clip p-[24px] relative rounded-[64px] size-full" data-name="_Secondary Colors">
      <DesignSystemHeader />
      <Frame3 />
      <DesignSystemFooter />
    </div>
  );
}