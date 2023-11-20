import { SBanner } from "./style";
import Image from "next/image";
import banner from "src/assets/image/logo_banner/banner_new.gif";

export default function Banner() {
  return (
    <SBanner>
      <div className="banner">
        <div id="app_banner">
          <div className="title">
            <div className="title-inner">
              <div className="cafe">
                <h1 className="cafe-inner">BATTELS</h1>
              </div>
              <div className="mozart">
                <h2 className="mozart-inner">Chiến đấu đến hơi thở cuối cùng !!!</h2>
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
