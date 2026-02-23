import { useState } from "react";
import { Outlet, NavLink, useLocation, Link } from "react-router";
import {
  Palette,
  LayoutGrid,
  ChevronDown,
  ChevronRight,
  Menu,
  ExternalLink,
  Box,
} from "lucide-react";
import imgUnion from "figma:asset/3953c83e1a838d3b143cbd033328681b8ef65ef6.png";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative shrink-0 size-[36px]">
        <div className="absolute inset-0 rounded-[10px] overflow-hidden">
          <svg className="block size-full" fill="none" viewBox="0 0 40 40">
            <circle cx="20" cy="20" fill="white" r="20" />
          </svg>
        </div>
        <img alt="Qurable" className="absolute inset-0 max-w-none size-full object-cover" src={imgUnion} />
      </div>
      <div>
        <p className="text-white font-bold text-base tracking-tight leading-none">Qurable</p>
        <p className="text-[#91909D] text-xs mt-0.5">Design System</p>
      </div>
    </Link>
  );
}

interface NavItemProps {
  to: string;
  label: string;
  onClick?: () => void;
}

function NavLeaf({ to, label, onClick }: NavItemProps) {
  // Hash links live on the same route — NavLink would mark them all active.
  // Use a plain <a> for scroll-anchors; style them as muted sub-items.
  if (to.includes("#")) {
    return (
      <a
        href={to}
        onClick={onClick}
        className="flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all text-[#BFBDC5] hover:text-white hover:bg-white/10"
      >
        {label}
      </a>
    );
  }
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all ${
          isActive
            ? "bg-[#32187C] text-white font-semibold shadow-[0_0_0_3px_rgba(100,48,247,0.25)]"
            : "text-[#BFBDC5] hover:text-white hover:bg-white/10"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function NavGroup({
  icon,
  label,
  children,
  matchPath,
  onNavClick,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  matchPath: string;
  onNavClick?: () => void;
}) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(matchPath);
  const [open, setOpen] = useState(isActive);

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-full text-sm transition-all
          ${isActive && !open ? "text-[#B298FB]" : "text-[#FAFAFA] hover:bg-white/10"}`}
      >
        <span className="shrink-0 opacity-80">{icon}</span>
        <span className="flex-1 text-left">{label}</span>
        {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>
      {open && (
        <div className="ml-8 mt-0.5 space-y-0.5">
          {children}
        </div>
      )}
    </div>
  );
}

function NavTopItem({
  to,
  icon,
  label,
  onClick,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={to}
      end
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-full text-sm transition-all ${
          isActive
            ? "bg-[#32187C] text-white font-semibold shadow-[0_0_0_3px_rgba(100,48,247,0.25)]"
            : "text-[#FAFAFA] hover:bg-white/10"
        }`
      }
    >
      <span className="shrink-0 opacity-80">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
}

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);

  const sidebarContent = (
    <div className="flex flex-col h-full px-4 py-8 gap-6">
      {/* Logo */}
      <div className="px-1">
        <Logo />
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
        {/* Overview */}
        <NavTopItem
          to="/"
          icon={<LayoutGrid size={18} />}
          label="Overview"
          onClick={closeSidebar}
        />

        {/* Foundation / Colors */}
        <NavGroup icon={<Palette size={18} />} label="Colors" matchPath="/colors">
          <NavLeaf to="/colors/primary" label="Primary" onClick={closeSidebar} />
          <NavLeaf to="/colors/secondary" label="Secondary" onClick={closeSidebar} />
        </NavGroup>

        {/* Components */}
        <NavGroup icon={<Box size={18} />} label="Components" matchPath="/components">
          <NavLeaf to="/components#navigation" label="Navigation" onClick={closeSidebar} />
          <NavLeaf to="/components#buttons" label="Buttons" onClick={closeSidebar} />
          <NavLeaf to="/components#feedback" label="Feedback" onClick={closeSidebar} />
          <NavLeaf to="/components#inputs" label="Inputs" onClick={closeSidebar} />
          <NavLeaf to="/components#data-display" label="Data Display" onClick={closeSidebar} />
          <NavLeaf to="/components#forms" label="Forms" onClick={closeSidebar} />
          <NavLeaf to="/components#cards" label="Cards" onClick={closeSidebar} />
        </NavGroup>
      </nav>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Meta */}
      <div className="space-y-1 px-1">
        <p className="text-[#504E59] text-xs uppercase tracking-wider font-semibold mb-2">Links</p>
        <a
          href="https://www.qurable.co"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#6430F7] text-sm hover:text-[#9875FA] transition-colors px-2 py-1"
        >
          <span>www.qurable.co</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#F5F5F7] overflow-hidden">
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col w-[240px] shrink-0 bg-[#1E1731] overflow-y-auto"
        style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}
      >
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={closeSidebar} />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[240px] bg-[#1E1731] flex flex-col lg:hidden transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile topbar */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-[#1E1731] border-b border-white/10">
          <button onClick={() => setSidebarOpen(true)} className="text-white p-1">
            <Menu size={22} />
          </button>
          <Logo />
        </div>

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}