import svgPaths from "./svg-tr8eouu8ru";
import imgUnion from "figma:asset/980159b4b2a059ee26281f535248031976d9288c.png";
import imgAvatar from "figma:asset/7c8eaeb85d1def44217c940aa20e833a1b84bc1a.png";
import imgAvatar1 from "figma:asset/793486aacea6991c80297f72cd460267889724cc.png";
import imgAvatar2 from "figma:asset/a773de74e2ae891909df89d7b141b3737a85b2a1.png";
import imgAvatar3 from "figma:asset/2abd81048749203ba13919ec45f2e0af43c5f5a4.png";

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

function Frame78() {
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
      <Frame78 />
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

function Gift() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Gift">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Gift">
          <path d={svgPaths.p24be7140} fill="var(--fill-0, #6D49FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Gift />
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Medium',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[16px] text-white tracking-[-0.112px] whitespace-pre-wrap">Campaigns</p>
    </div>
  );
}

function AppSidebarItem() {
  return (
    <div className="bg-[#32187c] content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shadow-[0px_0px_0px_4px_rgba(100,48,247,0.25)] shrink-0 w-[280px]" data-name="_AppSidebarItem">
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

function Gift1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Gift">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Gift">
          <path d={svgPaths.p24be7140} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Gift1 />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Coupon Books</p>
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
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem1 />
    </div>
  );
}

function Handshake() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Handshake">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Handshake">
          <path d={svgPaths.p353e4fc0} fill="var(--fill-0, #BFBDC5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Handshake />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Partnerships</p>
    </div>
  );
}

function AppSidebarItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
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

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Funnel />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Audiences</p>
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

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <UserList />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Members</p>
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

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Money />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Credits</p>
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

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame1 />
      <Frame3 />
      <Frame6 />
      <Frame9 />
      <Frame11 />
      <Frame13 />
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

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <QrCode />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Redeem</p>
    </div>
  );
}

function AppSidebarItem6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame18 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem6 />
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

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Layout />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Loyalty portal</p>
    </div>
  );
}

function AppSidebarItem7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame20 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem7 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-solid border-t inset-0 pointer-events-none" />
      <Frame16 />
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

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Invoice />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Billing</p>
    </div>
  );
}

function AppSidebarItem8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame24 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem8 />
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

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <GearSix />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Settings</p>
    </div>
  );
}

function AppSidebarItem9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame26 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem9 />
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

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <ChatCircleText />
      <p className="flex-[1_0_0] font-['Neue_Montreal:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[16px] tracking-[-0.112px] whitespace-pre-wrap">Help</p>
    </div>
  );
}

function AppSidebarItem10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[48px] overflow-clip px-[12px] py-[10px] relative rounded-[9999px] shrink-0 w-[280px]" data-name="_AppSidebarItem">
      <Frame28 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <AppSidebarItem10 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame23 />
      <Frame25 />
      <Frame27 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-solid border-t inset-0 pointer-events-none" />
      <Frame22 />
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

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[46px] items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#d7d6db] text-[16px] tracking-[-0.272px] w-full">Jordan L. Carter</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#a9a8b2] text-[14px] tracking-[-0.224px] w-full">Basic Member</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Avatar />
      <Frame30 />
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
      <Frame29 />
      <ButtonIcon />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame7 />
      <Frame15 />
      <Frame21 />
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
    <div className="bg-[#1e1731] content-stretch flex flex-col h-[939px] items-start px-[16px] py-[32px] relative shrink-0" data-name="App Nav Menu">
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
          <path d={svgPaths.p354eaa00} fill="var(--fill-0, #6430F7)" id="Vector" stroke="var(--stroke-0, #6430F7)" strokeWidth="0.09375" />
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
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] text-center tracking-[-0.084px]">Campaigns</p>
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

function Frame79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <p className="font-['PP_Neue_Montreal:Bold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#3a3941] text-[30px] tracking-[-0.39px]">New campaign</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame79 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[-0.06px]">Draft</p>
    </div>
  );
}

function BadgeText() {
  return (
    <div className="bg-[#2f2e35] content-stretch flex gap-[4px] items-start justify-center overflow-clip px-[8px] py-[4px] relative rounded-[1234px] shrink-0" data-name="Badge Text">
      <Frame32 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame80 />
      <BadgeText />
    </div>
  );
}

function QrCode1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="QrCode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="QrCode">
          <path d={svgPaths.p1c0a6b80} fill="var(--fill-0, #63626F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[1234px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <QrCode1 />
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px]">Redeem campaign</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbdc5] border-solid inset-0 pointer-events-none rounded-[1234px]" />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Plus">
          <path d={svgPaths.p3a904d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#6430f7] relative rounded-[1234px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.084px]">Send campaign</p>
        <Plus />
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

function Button2() {
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

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Frame">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Content">
      <Frame77 />
      <Frame33 />
    </div>
  );
}

function TabSingle() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Tab Single">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3941] text-[14px] tracking-[-0.084px]">All</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bfbdc5] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TabSingle1() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Tab Single">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px]">{`My campaigns `}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bfbdc5] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TabSingle2() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Tab Single">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px]">From partners</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bfbdc5] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TabSingle3() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Tab Single">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3941] text-[14px] tracking-[-0.084px]">Sent</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#6430f7] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <TabSingle />
      <TabSingle1 />
      <TabSingle2 />
      <TabSingle3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[32px] relative shrink-0 w-[1128px]" data-name="Heading">
      <BreadcrumbLinkGroup />
      <Content />
      <Frame34 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#353434] text-[14px] tracking-[-0.084px]">All campaigns shared with partners</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame38 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] not-italic relative shrink-0 text-[#686666] text-[14px] w-full whitespace-pre-wrap">Explore and manage all campaigns shared.</p>
    </div>
  );
}

function SectionLabel() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Section Label">
      <Frame37 />
    </div>
  );
}

function FilePdf() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FilePdf">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="FilePdf">
          <path d={svgPaths.p387fec00} fill="var(--fill-0, #63626F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white relative rounded-[1234px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px]">Download full report</p>
        <FilePdf />
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbdc5] border-solid inset-0 pointer-events-none rounded-[1234px]" />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1064px]" data-name="Frame">
      <SectionLabel />
      <Button3 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3a3941] text-[12px] tracking-[-0.06px]">Campaign</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame42 />
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
          <Frame41 />
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

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-[min-content] whitespace-pre-wrap">400-Point Reward: $40 Coupon</p>
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
          <Frame43 />
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

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-[min-content] whitespace-pre-wrap">25% Off Adidas apparel</p>
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
          <Frame44 />
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

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-[min-content] whitespace-pre-wrap">10% Off on Adidas footwear for woman</p>
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
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[308px]" data-name="Frame">
      <TableHeaderCell />
      <TableContentCell />
      <TableContentCell1 />
      <TableContentCell2 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3a3941] text-[12px] tracking-[-0.06px]">Budged used</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame48 />
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
    <div className="bg-[#fafafa] min-h-[48px] relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#bfbdc5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[14px] relative w-full">
          <Frame47 />
          <CaretUpDown1 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`$3,000 `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function TableContentCell3() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Frame49 />
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#f59e0b] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`$130,000 `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function TableContentCell4() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#f43f5e] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`$40,000 `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function TableContentCell5() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Frame51 />
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.06px]">Low budget: 3% left</p>
    </div>
  );
}

function BadgeText1() {
  return (
    <div className="absolute bg-[#f59e0b] content-stretch flex gap-[4px] items-center justify-center left-[23px] overflow-clip px-[8px] py-[4px] rounded-[1234px] top-[156px]" data-name="Badge Text">
      <Frame52 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.06px]">Out of budget</p>
    </div>
  );
}

function BadgeText2() {
  return (
    <div className="absolute bg-[#f43f5e] content-stretch flex gap-[4px] items-center justify-center left-[23px] overflow-clip px-[8px] py-[4px] rounded-[1234px] top-[228px]" data-name="Badge Text">
      <Frame53 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.06px]">100% left</p>
    </div>
  );
}

function BadgeText3() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex gap-[4px] items-center justify-center left-[23px] overflow-clip px-[8px] py-[4px] rounded-[1234px] top-[84px]" data-name="Badge Text">
      <Frame54 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[157px]" data-name="Frame">
      <TableHeaderCell1 />
      <TableContentCell3 />
      <TableContentCell4 />
      <TableContentCell5 />
      <BadgeText1 />
      <BadgeText2 />
      <BadgeText3 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3a3941] text-[12px] tracking-[-0.06px]">{`Redemptions `}</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame57 />
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
    <div className="bg-[#fafafa] min-h-[48px] relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#bfbdc5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[14px] relative w-full">
          <Frame56 />
          <CaretUpDown2 />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">400</p>
    </div>
  );
}

function TableContentCell6() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Frame58 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">7000</p>
    </div>
  );
}

function TableContentCell7() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Frame59 />
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap">1000</p>
    </div>
  );
}

function TableContentCell8() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Frame60 />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[149px]" data-name="Frame">
      <TableHeaderCell2 />
      <TableContentCell6 />
      <TableContentCell7 />
      <TableContentCell8 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3a3941] text-[12px] tracking-[-0.06px]">Status</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame63 />
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
          <Frame62 />
          <CaretUpDown3 />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f59e0b] text-[14px] text-center tracking-[-0.084px]">Pending</p>
    </div>
  );
}

function BadgeText4() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[1234px] shrink-0" data-name="Badge Text">
      <Frame64 />
    </div>
  );
}

function TableContentCell9() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <BadgeText4 />
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#22c55e] text-[14px] text-center tracking-[-0.084px]">Published</p>
    </div>
  );
}

function BadgeText5() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[1234px] shrink-0" data-name="Badge Text">
      <Frame65 />
    </div>
  );
}

function TableContentCell10() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <BadgeText5 />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f43f5e] text-[14px] text-center tracking-[-0.084px]">Paused</p>
    </div>
  );
}

function BadgeText6() {
  return (
    <div className="bg-[#fff1f2] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[1234px] shrink-0" data-name="Badge Text">
      <Frame66 />
    </div>
  );
}

function TableContentCell11() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <BadgeText6 />
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[129px]" data-name="Frame">
      <TableHeaderCell3 />
      <TableContentCell9 />
      <TableContentCell10 />
      <TableContentCell11 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="flex-[1_0_0] font-['PP_Neue_Montreal:Medium',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#3a3941] text-[12px] tracking-[-0.06px] whitespace-pre-wrap">Avg. Ticket w/ Discount</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Frame">
      <Frame69 />
    </div>
  );
}

function CaretUpDown4() {
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

function TableHeaderCell4() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[12px] items-center min-h-[48px] px-[16px] py-[14px] relative shrink-0 w-[204px]" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#bfbdc5] border-b border-solid inset-0 pointer-events-none" />
      <Frame68 />
      <CaretUpDown4 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px]">No data yet</p>
    </div>
  );
}

function TableContentCell12() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
          <Frame70 />
        </div>
      </div>
    </div>
  );
}

function TrendDown() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="TrendDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="TrendDown">
          <path d={svgPaths.p386b3600} fill="var(--fill-0, #E11D48)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f43f5e] text-[12px] text-center tracking-[-0.06px]">8%</p>
    </div>
  );
}

function BadgeText7() {
  return (
    <div className="bg-[#fff1f2] relative rounded-[1234px] shrink-0" data-name="Badge Text">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <TrendDown />
        <Frame72 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f43f5e] border-solid inset-0 pointer-events-none rounded-[1234px]" />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px]">{`$270  `}</p>
      <BadgeText7 />
    </div>
  );
}

function TableContentCell13() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
          <Frame71 />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#63626f] text-[14px] tracking-[-0.084px]">{`$295 `}</p>
    </div>
  );
}

function TableContentCell14() {
  return (
    <div className="bg-white h-[72px] min-h-[42px] relative shrink-0 w-full" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
          <Frame73 />
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[187px]" data-name="Frame">
      <TableHeaderCell4 />
      <TableContentCell12 />
      <TableContentCell13 />
      <TableContentCell14 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3941] text-[14px] tracking-[-0.084px]">Actions</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame76 />
    </div>
  );
}

function TableHeaderCell5() {
  return (
    <div className="bg-[#fafafa] min-h-[48px] relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#bfbdc5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[24px] py-[14px] relative w-full">
          <Frame75 />
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

function TableContentCell15() {
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

function TableContentCell16() {
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
          <path d={svgPaths.p3c13c500} fill="var(--fill-0, #63626F)" id="Vector" stroke="var(--stroke-0, #63626F)" strokeWidth="0.09375" />
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

function TableContentCell17() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[72px] items-center min-h-[42px] px-[24px] py-[12px] relative shrink-0" data-name="Table Content Cell">
      <div aria-hidden="true" className="absolute border-[#d7d6db] border-b border-solid inset-0 pointer-events-none" />
      <ButtonIcon6 />
      <ButtonIcon7 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[133px]" data-name="Frame">
      <TableHeaderCell5 />
      <TableContentCell15 />
      <TableContentCell16 />
      <TableContentCell17 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame40 />
        <Frame46 />
        <Frame55 />
        <Frame61 />
        <Frame67 />
        <Frame74 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d6db] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_8px_-2px_rgba(23,23,23,0.1),0px_2px_4px_-2px_rgba(23,23,23,0.06)]" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[32px] relative shrink-0" data-name="Frame">
      <Frame36 />
      <Frame39 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end relative shrink-0" data-name="Frame">
      <Heading />
      <Frame35 />
    </div>
  );
}

export default function PartnershipBpCampaignsSend() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Partnership/BP/Campaigns/Send">
      <AppNavMenu />
      <Frame31 />
    </div>
  );
}