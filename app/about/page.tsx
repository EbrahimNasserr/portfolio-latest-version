import ChangeLog from "./_changelog/ChangeLog";
import SplineSceneBasic from "./_components/splineScene";
import CoreSkills from "./_coreSkills/CoreSkills";
  
export default function page() {
  return (
    <main>
      <SplineSceneBasic />
      <CoreSkills />
      <ChangeLog />
    </main>
  )
}
