import DesktopComponent from './Desktop';
import MobileComponent from './Mobile';

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