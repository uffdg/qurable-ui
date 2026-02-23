import svgPaths from "./svg-eko69kcdxk";

function MonotoneAdd() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Monotone add">
          <path d={svgPaths.p5d2f680} fill="var(--fill-0, #6430F7)" id="Vector" stroke="var(--stroke-0, #6430F7)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon() {
  return (
    <div className="bg-[#cbbafc] content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[32px]" data-name="Button Icon">
      <MonotoneAdd />
    </div>
  );
}

function FileUploadDropzone() {
  return (
    <div className="absolute bg-white inset-[21.88%_0_0_0] rounded-[32px]" data-name="File Upload Dropzone">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <ButtonIcon />
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbdc5] border-dashed inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function SmallImageUploadComponent() {
  return (
    <div className="h-[128px] relative shrink-0 w-[100px]" data-name="small image upload component">
      <p className="absolute font-['PP_Neue_Montreal:Medium',sans-serif] inset-[0_66%_84.38%_0] leading-[20px] not-italic text-[#2f2e35] text-[14px] tracking-[-0.084px]">{`Label `}</p>
      <FileUploadDropzone />
    </div>
  );
}

function MonotoneAdd1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Monotone add">
          <path d={svgPaths.p5d2f680} fill="var(--fill-0, #6430F7)" id="Vector" stroke="var(--stroke-0, #6430F7)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon1() {
  return (
    <div className="bg-[#cbbafc] content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[32px]" data-name="Button Icon">
      <MonotoneAdd1 />
    </div>
  );
}

function FileUploadDropzone1() {
  return (
    <div className="absolute bg-white inset-[21.88%_0_0_0] rounded-[32px]" data-name="File Upload Dropzone">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <ButtonIcon1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbdc5] border-dashed inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function SmallImageUploadComponent1() {
  return (
    <div className="h-[128px] relative shrink-0 w-[100px]" data-name="small image upload component">
      <p className="absolute font-['PP_Neue_Montreal:Medium',sans-serif] inset-[0_34%_84.38%_0] leading-[20px] not-italic text-[#2f2e35] text-[14px] tracking-[-0.084px]">{`Secondary `}</p>
      <FileUploadDropzone1 />
    </div>
  );
}

function MonotoneAdd2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p22abd200} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon2() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex items-center justify-center left-[235px] overflow-clip p-[16px] rounded-[123px] size-[48px] top-[54px]" data-name="Button Icon">
      <MonotoneAdd2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full">
      <SmallImageUploadComponent />
      <SmallImageUploadComponent1 />
      <ButtonIcon2 />
    </div>
  );
}