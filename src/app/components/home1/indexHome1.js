import DesktopComponent from './DesktopHome1';
import MobileComponent from './MobileHome1';

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