import svgPaths from "./svg-o401zcpaug";
import imgUnion from "figma:asset/980159b4b2a059ee26281f535248031976d9288c.png";
import imgAvatar from "figma:asset/b8581a3a8f9a19b6eec05845c18e07081f487330.png";
import imgAvatar1 from "figma:asset/34b8d8bf0fd69fff53e4789b7e8df430a75d8ec6.png";
import imgAvatar2 from "figma:asset/f675a4a9e2455e0bcfabd0075ad110c3db7ef022.png";
import imgAvatar3 from "figma:asset/66bd15810c6e628853ebed41f1ca1a848a463dc9.png";
import imgAvatar4 from "figma:asset/d5f87808ba14359b80fe22e9ad9e2fbe0f6a8997.png";
import imgAvatar5 from "figma:asset/7cf9eb0ae092a5e93196335fc1bf397f7e16ada3.png";
import imgAvatar6 from "figma:asset/002f76bf29d0e0815c93ab1100e9eb2c8f0d17f3.png";

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute left-0 size-[35px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
          <circle cx="17.5" cy="17.5" fill="var(--fill-0, white)" id="Ellipse 1" r="17.5" />
        </svg>
      </div>
      <div className="absolute inset-[0_70.61%_0_0]" data-name="Union">
        <img alt="" className="block max-w-none size-full" height="35" src={imgUnion} width="35" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[28.92%_0_28.92%_37.55%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.3714 14.7554">
        <g id="Group">
          <path d={svgPaths.p3cd36630} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1df3a200} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p48dc680} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p6003a00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3029a400} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p28be1c00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p153c8b80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p1377ee00} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="h-[35px] relative shrink-0 w-[119.084px]">
      <Group1 />
      <Group />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo">
      <Frame90 />
    </div>
  );
}

function Dark() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[280px]" data-name="Dark">
      <Logo1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Logo">
      <Dark />
    </div>
  );
}

function Gauge() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Gauge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Gauge">
          <path d={svgPaths.p23c5a900} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Gauge />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Dashboard</p>
    </div>
  );
}

function AppSidebarItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem />
    </div>
  );
}

function CursorClick() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CursorClick">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CursorClick">
          <path d={svgPaths.p3fbe3e00} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <CursorClick />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Points</p>
    </div>
  );
}

function AppSidebarItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem1 />
    </div>
  );
}

function Ticket() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Ticket">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Ticket">
          <path d={svgPaths.p1dad1700} fill="var(--fill-0, #B298FB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Ticket />
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Medium',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Coupons</p>
    </div>
  );
}

function AppSidebarItem2() {
  return (
    <div className="bg-[#32187c] content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shadow-[0px_0px_0px_4px_rgba(100,48,247,0.25)] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem2 />
    </div>
  );
}

function IdentificationCard() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="IdentificationCard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="IdentificationCard">
          <path d={svgPaths.p1330da00} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <IdentificationCard />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Tiers</p>
    </div>
  );
}

function AppSidebarItem3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem3 />
    </div>
  );
}

function Medal() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Medal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Medal">
          <path d={svgPaths.p395a2c80} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Medal />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Stamp</p>
    </div>
  );
}

function AppSidebarItem4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame12 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem4 />
    </div>
  );
}

function Handshake() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Handshake">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Handshake">
          <path d={svgPaths.p353e4fc0} fill="var(--fill-0, #A9A8B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Handshake />
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Book',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Partnerships</p>
    </div>
  );
}

function AppSidebarItem5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame14 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem5 />
    </div>
  );
}

function RocketLaunch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="RocketLaunch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="RocketLaunch">
          <path d={svgPaths.p103d21f2} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <RocketLaunch />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Campaigns</p>
    </div>
  );
}

function AppSidebarItem6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame16 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem6 />
    </div>
  );
}

function PuzzlePiece() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="PuzzlePiece">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="PuzzlePiece">
          <path d={svgPaths.p13017000} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <PuzzlePiece />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Missions</p>
    </div>
  );
}

function AppSidebarItem7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame18 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem7 />
    </div>
  );
}

function Trophy() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Trophy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Trophy">
          <path d={svgPaths.p3e482480} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Trophy />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Contests</p>
    </div>
  );
}

function AppSidebarItem8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame20 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem8 />
    </div>
  );
}

function Funnel() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Funnel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Funnel">
          <path d={svgPaths.p2e3ecd80} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Funnel />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Audiences</p>
    </div>
  );
}

function AppSidebarItem9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame22 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem9 />
    </div>
  );
}

function UserList() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="UserList">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="UserList">
          <path d={svgPaths.p30f6cc00} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <UserList />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Members</p>
    </div>
  );
}

function AppSidebarItem10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame24 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem10 />
    </div>
  );
}

function Money() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Money">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Money">
          <path d={svgPaths.p11f65740} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Money />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Credits</p>
    </div>
  );
}

function AppSidebarItem11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame26 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem11 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame1 />
      <Frame3 />
      <Frame6 />
      <Frame9 />
      <Frame11 />
      <Frame13 />
      <Frame15 />
      <Frame17 />
      <Frame19 />
      <Frame21 />
      <Frame23 />
      <Frame25 />
    </div>
  );
}

function QrCode() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="QrCode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="QrCode">
          <path d={svgPaths.p34fb2b00} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <QrCode />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Redeem</p>
    </div>
  );
}

function AppSidebarItem12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame30 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem12 />
    </div>
  );
}

function Layout() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Layout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Layout">
          <path d={svgPaths.p13128780} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Layout />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Loyalty portal</p>
    </div>
  );
}

function AppSidebarItem13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame32 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem13 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame29 />
      <Frame31 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-solid border-t inset-0 pointer-events-none" />
      <Frame28 />
    </div>
  );
}

function Invoice() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Invoice">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Invoice">
          <path d={svgPaths.p14752700} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Invoice />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Billing</p>
    </div>
  );
}

function AppSidebarItem14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame36 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem14 />
    </div>
  );
}

function GearSix() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="GearSix">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="GearSix">
          <path d={svgPaths.p2ecb7800} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <GearSix />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Settings</p>
    </div>
  );
}

function AppSidebarItem15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame38 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem15 />
    </div>
  );
}

function ChatCircleText() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChatCircleText">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChatCircleText">
          <path d={svgPaths.p38ce2000} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <ChatCircleText />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Help</p>
    </div>
  );
}

function AppSidebarItem16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame40 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem16 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame35 />
      <Frame37 />
      <Frame39 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-solid border-t inset-0 pointer-events-none" />
      <Frame34 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[92.25px] shrink-0 size-[48px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[92.25px] size-full" src={imgAvatar} />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[46px] items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[22px] relative shrink-0 text-[#d7d6db] text-[16px] tracking-[-0.112px] w-full">Azunyan U. Wu</p>
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#a9a8b2] text-[14px] tracking-[-0.084px] w-full">Basic Member</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Avatar />
      <Frame42 />
    </div>
  );
}

function MonotoneAdd() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p453c400} fill="var(--fill-0, #A9A8B2)" id="Vector" stroke="var(--stroke-0, #A9A8B2)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd />
    </div>
  );
}

function UserNavMenu() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-end pt-[24px] relative shrink-0 w-[280px]" data-name="User Nav Menu">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-solid border-t inset-0 pointer-events-none" />
      <Frame41 />
      <ButtonIcon />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame7 />
      <Frame27 />
      <Frame33 />
      <UserNavMenu />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Logo />
      <Frame4 />
    </div>
  );
}

function AppNavMenu() {
  return (
    <div className="bg-[#1e1731] content-stretch flex flex-col items-start px-[16px] py-[32px] relative shrink-0" data-name="App Nav Menu">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-r border-solid inset-0 pointer-events-none shadow-[0px_4px_8px_0px_rgba(23,23,23,0.1),0px_2px_4px_0px_rgba(23,23,23,0.06)]" />
      <Frame />
    </div>
  );
}

function MonotoneAdd1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Monotone add">
          <path d={svgPaths.p393d85c0} fill="var(--fill-0, #6430F7)" id="Vector" stroke="var(--stroke-0, #6430F7)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[32px]" data-name="Button Icon">
      <MonotoneAdd1 />
    </div>
  );
}

function BreadcrumbLinkItem() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Breadcrumb Link Item">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] text-center tracking-[-0.084px]">Coupons</p>
    </div>
  );
}

function BreadcrumbLinkGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Breadcrumb Link Group">
      <ButtonIcon1 />
      <BreadcrumbLinkItem />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[38px] relative shrink-0 text-[#3a3941] text-[30px] tracking-[-0.39px]">Coupons</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[1.6] min-w-full relative shrink-0 text-[#63626f] text-[18px] w-[min-content] whitespace-pre-wrap">Invite a company to join as a new partner.</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame91 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame92 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#6430f7] relative rounded-[1234px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.084px]">New</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#6430f7] border-solid inset-0 pointer-events-none rounded-[1234px]" />
    </div>
  );
}

function Sparkle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sparkle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sparkle">
          <path d={svgPaths.p6969600} fill="var(--fill-0, #2F2E35)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative rounded-[1234px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2f2e35] text-[14px] tracking-[-0.084px]">AI asistand</p>
        <Sparkle />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d394fd] border-solid inset-0 pointer-events-none rounded-[1234px]" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Frame">
      <Button />
      <Button1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
      <Frame89 />
      <Frame43 />
    </div>
  );
}

function Heading() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Heading">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[32px] py-[16px] relative w-full">
        <BreadcrumbLinkGroup />
        <Content1 />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#353434] text-[14px] tracking-[-0.084px]">Coupons creator</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame45 />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#686666] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Create discount coupons for your customers. Configure parameters such as discount amount, usage limits, and expiration dates. Track usage and performance in real time.</p>
        <p>Create your first coupon to start offering discounts to your customers.</p>
      </div>
    </div>
  );
}

function SectionLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[600px]" data-name="Section Label">
      <Frame44 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2f2e35] text-[14px] tracking-[-0.084px]">Find coupons</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Book',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#a9a8b2] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Search coupons by name</p>
    </div>
  );
}

function MagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="MagnifyingGlass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="MagnifyingGlass">
          <path d={svgPaths.p2ce90f80} fill="var(--fill-0, #63626F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputTextBase() {
  return (
    <div className="min-h-[48px] relative rounded-[123px] shrink-0 w-full" data-name="_InputTextBase">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] p-[12px] relative w-full">
          <Frame48 />
          <MagnifyingGlass />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbdc5] border-solid inset-0 pointer-events-none rounded-[123px]" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <Label />
      <InputTextBase />
    </div>
  );
}

function InputText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end min-h-px min-w-px relative" data-name="Input Text">
      <Frame47 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-name="Frame">
      <InputText />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[600px]" data-name="Content">
      <SectionLabel />
      <Frame46 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3a3941] text-[12px] tracking-[-0.06px]">Coupon</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame51 />
    </div>
  );
}

function CaretUpDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretUpDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretUpDown">
          <path d={svgPaths.p37a90900} fill="var(--fill-0, #63626F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableHeaderCell() {
  return (
    <div className="bg-[#fafafa] min-h-[48px] relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#bfbdc5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[14px] relative w-full">
          <Frame50 />
          <CaretUpDown />
        </div>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgAvatar1} />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-[min-content] whitespace-pre-wrap">Enjoy a delicious breakfast at Spot with 50% off</p>
    </div>
  );
}

function TableContentCell() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Avatar1 />
          <Frame52 />
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgAvatar2} />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-[min-content] whitespace-pre-wrap">Get 5% cashback all March with your Cashi payment</p>
    </div>
  );
}

function TableContentCell1() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Avatar2 />
          <Frame53 />
        </div>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgAvatar3} />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-[min-content] whitespace-pre-wrap">20% Off pantry essentials</p>
    </div>
  );
}

function TableContentCell2() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Avatar3 />
          <Frame54 />
        </div>
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgAvatar4} />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-[min-content] whitespace-pre-wrap">15% Off school shoes</p>
    </div>
  );
}

function TableContentCell3() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Avatar4 />
          <Frame55 />
        </div>
      </div>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgAvatar5} />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-[min-content] whitespace-pre-wrap">$300 Bonus on select smartphones</p>
    </div>
  );
}

function TableContentCell4() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Avatar5 />
          <Frame56 />
        </div>
      </div>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgAvatar6} />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-[min-content] whitespace-pre-wrap">Up to 30% off cleaning products</p>
    </div>
  );
}

function TableContentCell5() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Avatar6 />
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[480px] items-start min-h-px min-w-px relative" data-name="Frame">
      <TableHeaderCell />
      <TableContentCell />
      <TableContentCell1 />
      <TableContentCell2 />
      <TableContentCell3 />
      <TableContentCell4 />
      <TableContentCell5 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3a3941] text-[12px] tracking-[-0.06px]">{`Assigned `}</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame60 />
    </div>
  );
}

function CaretUpDown1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretUpDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretUpDown">
          <path d={svgPaths.p37a90900} fill="var(--fill-0, #63626F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableHeaderCell1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[12px] items-center min-h-[48px] px-[6px] py-[14px] relative shrink-0 w-[86px]" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#bfbdc5] border-b border-solid inset-0 pointer-events-none" />
      <Frame59 />
      <CaretUpDown1 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">400</p>
    </div>
  );
}

function TableContentCell6() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[72px] items-center min-h-[42px] px-[6px] py-[12px] relative shrink-0 w-[86px]" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <Frame61 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">4853</p>
    </div>
  );
}

function TableContentCell7() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[72px] items-center min-h-[42px] px-[6px] py-[12px] relative shrink-0 w-[86px]" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <Frame62 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">100</p>
    </div>
  );
}

function TableContentCell8() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[72px] items-center min-h-[42px] px-[6px] py-[12px] relative shrink-0 w-[86px]" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <Frame63 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">7000</p>
    </div>
  );
}

function TableContentCell9() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[72px] items-center min-h-[42px] px-[6px] py-[12px] relative shrink-0 w-[86px]" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <Frame64 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">7000</p>
    </div>
  );
}

function TableContentCell10() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[72px] items-center min-h-[42px] px-[6px] py-[12px] relative shrink-0 w-[86px]" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <Frame65 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">1000</p>
    </div>
  );
}

function TableContentCell11() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[72px] items-center min-h-[42px] px-[6px] py-[12px] relative shrink-0 w-[86px]" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <Frame66 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Frame">
      <TableHeaderCell1 />
      <TableContentCell6 />
      <TableContentCell7 />
      <TableContentCell8 />
      <TableContentCell9 />
      <TableContentCell10 />
      <TableContentCell11 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3a3941] text-[12px] tracking-[-0.06px]">Used</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame69 />
    </div>
  );
}

function CaretUpDown2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretUpDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretUpDown">
          <path d={svgPaths.p37a90900} fill="var(--fill-0, #63626F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableHeaderCell2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[12px] items-center min-h-[48px] pl-[6px] pr-[24px] py-[14px] relative shrink-0 w-[85px]" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#bfbdc5] border-b border-solid inset-0 pointer-events-none" />
      <Frame68 />
      <CaretUpDown2 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">400</p>
    </div>
  );
}

function TableContentCell12() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[72px] items-center min-h-[42px] pl-[6px] pr-[24px] py-[12px] relative shrink-0 w-[85px]" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <Frame70 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">4853</p>
    </div>
  );
}

function TableContentCell13() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[72px] items-center min-h-[42px] pl-[6px] pr-[24px] py-[12px] relative shrink-0 w-[85px]" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <Frame71 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">100</p>
    </div>
  );
}

function TableContentCell14() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[72px] items-center min-h-[42px] pl-[6px] pr-[24px] py-[12px] relative shrink-0 w-[85px]" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <Frame72 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">7000</p>
    </div>
  );
}

function TableContentCell15() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[72px] items-center min-h-[42px] pl-[6px] pr-[24px] py-[12px] relative shrink-0 w-[85px]" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <Frame73 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">7000</p>
    </div>
  );
}

function TableContentCell16() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[72px] items-center min-h-[42px] pl-[6px] pr-[24px] py-[12px] relative shrink-0 w-[85px]" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <Frame74 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">1000</p>
    </div>
  );
}

function TableContentCell17() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[72px] items-center min-h-[42px] pl-[6px] pr-[24px] py-[12px] relative shrink-0 w-[85px]" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <Frame75 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Frame">
      <TableHeaderCell2 />
      <TableContentCell12 />
      <TableContentCell13 />
      <TableContentCell14 />
      <TableContentCell15 />
      <TableContentCell16 />
      <TableContentCell17 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3a3941] text-[12px] tracking-[-0.06px]">Status</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame78 />
    </div>
  );
}

function CaretUpDown3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretUpDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretUpDown">
          <path d={svgPaths.p37a90900} fill="var(--fill-0, #63626F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableHeaderCell3() {
  return (
    <div className="bg-[#fafafa] min-h-[48px] relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#bfbdc5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[14px] relative w-full">
          <Frame77 />
          <CaretUpDown3 />
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f59e0b] text-[14px] text-center tracking-[-0.084px]">Pending</p>
    </div>
  );
}

function BadgeText() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[1234px] shrink-0" data-name="Badge Text">
      <Frame79 />
    </div>
  );
}

function TableContentCell18() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[6px] py-[12px] relative size-full">
          <BadgeText />
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#22c55e] text-[14px] text-center tracking-[-0.084px]">Published</p>
    </div>
  );
}

function BadgeText1() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[1234px] shrink-0" data-name="Badge Text">
      <Frame80 />
    </div>
  );
}

function TableContentCell19() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[6px] py-[12px] relative size-full">
          <BadgeText1 />
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#22c55e] text-[14px] text-center tracking-[-0.084px]">Published</p>
    </div>
  );
}

function BadgeText2() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[1234px] shrink-0" data-name="Badge Text">
      <Frame81 />
    </div>
  );
}

function TableContentCell20() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[6px] py-[12px] relative size-full">
          <BadgeText2 />
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#22c55e] text-[14px] text-center tracking-[-0.084px]">Published</p>
    </div>
  );
}

function BadgeText3() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[1234px] shrink-0" data-name="Badge Text">
      <Frame82 />
    </div>
  );
}

function TableContentCell21() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[6px] py-[12px] relative size-full">
          <BadgeText3 />
        </div>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#22c55e] text-[14px] text-center tracking-[-0.084px]">Published</p>
    </div>
  );
}

function BadgeText4() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[1234px] shrink-0" data-name="Badge Text">
      <Frame83 />
    </div>
  );
}

function TableContentCell22() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[6px] py-[12px] relative size-full">
          <BadgeText4 />
        </div>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f43f5e] text-[14px] text-center tracking-[-0.084px]">Paused</p>
    </div>
  );
}

function BadgeText5() {
  return (
    <div className="bg-[#fff1f2] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[1234px] shrink-0" data-name="Badge Text">
      <Frame84 />
    </div>
  );
}

function TableContentCell23() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[6px] py-[12px] relative size-full">
          <BadgeText5 />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[100px]" data-name="Frame">
      <TableHeaderCell3 />
      <TableContentCell18 />
      <TableContentCell19 />
      <TableContentCell20 />
      <TableContentCell21 />
      <TableContentCell22 />
      <TableContentCell23 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3941] text-[14px] tracking-[-0.084px]">Actions</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame87 />
    </div>
  );
}

function TableHeaderCell4() {
  return (
    <div className="bg-[#fafafa] min-h-[48px] relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#bfbdc5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[14px] relative w-full">
          <Frame86 />
        </div>
      </div>
    </div>
  );
}

function MonotoneAdd2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p3a26ed00} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd2 />
    </div>
  );
}

function MonotoneAdd3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p37a11800} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd3 />
    </div>
  );
}

function TableContentCell24() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[72px] items-center min-h-[42px] px-[24px] py-[12px] relative shrink-0" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <ButtonIcon2 />
      <ButtonIcon3 />
    </div>
  );
}

function MonotoneAdd4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p3a26ed00} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd4 />
    </div>
  );
}

function MonotoneAdd5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p37a11800} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd5 />
    </div>
  );
}

function TableContentCell25() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[72px] items-center min-h-[42px] px-[24px] py-[12px] relative shrink-0" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <ButtonIcon4 />
      <ButtonIcon5 />
    </div>
  );
}

function MonotoneAdd6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p3a26ed00} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd6 />
    </div>
  );
}

function MonotoneAdd7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p37a11800} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd7 />
    </div>
  );
}

function TableContentCell26() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[72px] items-center min-h-[42px] px-[24px] py-[12px] relative shrink-0" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <ButtonIcon6 />
      <ButtonIcon7 />
    </div>
  );
}

function MonotoneAdd8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p3a26ed00} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon8() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd8 />
    </div>
  );
}

function MonotoneAdd9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p37a11800} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon9() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd9 />
    </div>
  );
}

function TableContentCell27() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[72px] items-center min-h-[42px] px-[24px] py-[12px] relative shrink-0" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <ButtonIcon8 />
      <ButtonIcon9 />
    </div>
  );
}

function MonotoneAdd10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p3a26ed00} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon10() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd10 />
    </div>
  );
}

function MonotoneAdd11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p37a11800} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon11() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd11 />
    </div>
  );
}

function TableContentCell28() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[72px] items-center min-h-[42px] px-[24px] py-[12px] relative shrink-0" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <ButtonIcon10 />
      <ButtonIcon11 />
    </div>
  );
}

function MonotoneAdd12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p3c13c500} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon12() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd12 />
    </div>
  );
}

function MonotoneAdd13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Monotone add">
          <path d={svgPaths.p37a11800} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon13() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
      <MonotoneAdd13 />
    </div>
  );
}

function TableContentCell29() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[72px] items-center min-h-[42px] px-[24px] py-[12px] relative shrink-0" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <ButtonIcon12 />
      <ButtonIcon13 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[134px]" data-name="Frame">
      <TableHeaderCell4 />
      <TableContentCell24 />
      <TableContentCell25 />
      <TableContentCell26 />
      <TableContentCell27 />
      <TableContentCell28 />
      <TableContentCell29 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame49 />
      <Frame58 />
      <Frame67 />
      <Frame76 />
      <Frame85 />
    </div>
  );
}

function MonotoneAdd14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Monotone add">
          <path d={svgPaths.pbd2e080} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.078125" />
        </g>
      </svg>
    </div>
  );
}

function PaginationBase() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="_PaginationBase">
      <MonotoneAdd14 />
    </div>
  );
}

function PaginationBase1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip pb-px relative rounded-[123px] shrink-0 size-[40px]" data-name="_PaginationBase">
      <div className="flex flex-col font-['PP_Neue_Montreal:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#63626f] text-[16px] text-center tracking-[-0.112px] whitespace-nowrap">
        <p className="leading-[22px]">1</p>
      </div>
    </div>
  );
}

function PaginationBase2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip pb-px relative rounded-[123px] shrink-0 size-[40px]" data-name="_PaginationBase">
      <div className="flex flex-col font-['PP_Neue_Montreal:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#63626f] text-[16px] text-center tracking-[-0.112px] whitespace-nowrap">
        <p className="leading-[22px]">2</p>
      </div>
    </div>
  );
}

function PaginationBase3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip pb-px relative rounded-[123px] shrink-0 size-[40px]" data-name="_PaginationBase">
      <div className="flex flex-col font-['PP_Neue_Montreal:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#63626f] text-[16px] text-center tracking-[-0.112px] whitespace-nowrap">
        <p className="leading-[22px]">3</p>
      </div>
    </div>
  );
}

function PaginationBase4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip pb-px relative rounded-[123px] shrink-0 size-[40px]" data-name="_PaginationBase">
      <div className="flex flex-col font-['PP_Neue_Montreal:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#63626f] text-[16px] text-center tracking-[-0.112px] whitespace-nowrap">
        <p className="leading-[22px]">4</p>
      </div>
    </div>
  );
}

function PaginationBase5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip pb-px relative rounded-[123px] shrink-0 size-[40px]" data-name="_PaginationBase">
      <div className="flex flex-col font-['PP_Neue_Montreal:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1c5d] text-[16px] text-center tracking-[-0.112px] whitespace-nowrap">
        <p className="leading-[22px]">5</p>
      </div>
    </div>
  );
}

function PaginationBase6() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[40px] overflow-clip px-[12px] py-[8px] relative rounded-[123px] shrink-0 w-[40px]" data-name="_PaginationBase">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#63626f] text-[14px] text-center tracking-[-0.084px] whitespace-nowrap">
        <p className="leading-[20px]">...</p>
      </div>
    </div>
  );
}

function PaginationBase7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip pb-px relative rounded-[123px] shrink-0 size-[40px]" data-name="_PaginationBase">
      <div className="flex flex-col font-['PP_Neue_Montreal:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#63626f] text-[16px] text-center tracking-[-0.112px] whitespace-nowrap">
        <p className="leading-[22px]">99</p>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <PaginationBase1 />
      <PaginationBase2 />
      <PaginationBase3 />
      <PaginationBase4 />
      <PaginationBase5 />
      <PaginationBase6 />
      <PaginationBase7 />
    </div>
  );
}

function MonotoneAdd15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Monotone add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Monotone add">
          <path d={svgPaths.p39834eb0} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.078125" />
        </g>
      </svg>
    </div>
  );
}

function PaginationBase8() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[123px] shrink-0 size-[40px]" data-name="_PaginationBase">
      <MonotoneAdd15 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-[800px]" data-name="Pagination">
      <PaginationBase />
      <Frame88 />
      <PaginationBase8 />
    </div>
  );
}

function Campaign() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Campaign">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame93 />
        <Pagination />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_8px_-2px_rgba(23,23,23,0.1),0px_2px_4px_-2px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Content4 />
      <Campaign />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
        <Content3 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="Content">
      <Heading />
      <Content2 />
    </div>
  );
}

export default function CouponBook() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Coupon book">
      <AppNavMenu />
      <Content />
    </div>
  );
}