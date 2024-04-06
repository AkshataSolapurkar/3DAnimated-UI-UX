import Image from "next/image";
import bg from "../../public/background/about-background.png"
import RenderModel from "./components/RenderModel";
import Navigation from "./components/navigation/index"
import Wizard from "./components/models/Wizard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Navigation/>
      <Image src={bg} fill alt="background image" className="w-full h-full opacity-20 object-cover object-center"/>
      <div className="h-screen w-full">
        <RenderModel>
          <Wizard className="opacity-100"/>
        </RenderModel>
      </div>
    </main>
  );
}
