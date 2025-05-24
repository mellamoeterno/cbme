import DesktopComponent from './DesktopWC1';
import MobileComponent from './MobileWC1';

export default function ResponsiveComponent() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopComponent />
      </div>
      <div className="block md:hidden">
        <MobileComponent />
      </div>
    </>
  );
}