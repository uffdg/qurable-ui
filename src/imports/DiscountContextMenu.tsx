import svgPaths from "./svg-xgkeozt4ri";

function PencilSimpleLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="PencilSimpleLine">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="PencilSimpleLine">
          <path d={svgPaths.p3deca300} fill="var(--fill-0, #3A3941)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <PencilSimpleLine />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#475569] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Edit</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="min-h-[40px] relative shrink-0 w-full" data-name="Component 11">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] p-[8px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <Component1 />
    </div>
  );
}

function TrashSimple() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="TrashSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="TrashSimple">
          <path d={svgPaths.p1f1b2500} fill="var(--fill-0, #F43F5E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <TrashSimple />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#f43f5e] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Delete</p>
    </div>
  );
}

function Component() {
  return (
    <div className="min-h-[40px] relative shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] p-[8px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

export default function DiscountContextMenu() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[16px] relative rounded-[24px] size-full" data-name="Discount context menu">
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame />
      <div className="h-0 relative shrink-0 w-full" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 1">
            <path d="M146 0.5H0" id="Vector" stroke="var(--stroke-0, #BFBDC5)" />
          </svg>
        </div>
      </div>
      <Component />
    </div>
  );
}