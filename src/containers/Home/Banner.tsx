import { SBanner } from "./style";
import Image from "next/image";
import banner from "src/assets/image/logo_banner/banner_3.gif";

export default function Banner() {
  return (
    <SBanner>
      <div className="banner">
        <div id="app_banner">
          <div className="title">
            <div className="title-inner">
              <div className="cafe">
                <h1 className="cafe-inner">Phi đội gà bay</h1>
              </div>
              <div className="mozart">
                <h2 className="mozart-inner">Chiến</h2>
              </div>
            </div>
          </div>

          <div className="image">
            <Image src={banner} alt="" fill />
          </div>
        </div>
      </div>
    </SBanner>
  );
}
