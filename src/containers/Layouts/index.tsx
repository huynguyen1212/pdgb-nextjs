import { memo, useEffect, useState } from "react";
import ErrorBound from "src/components/ErrorBound";
import Footer from "./Footer";
import Header from "./Header";
import WrapLayout from "./style";
import { useRouter } from "next/router";
import { useDetectWindowSize } from "src/hooks/useDetectWindowSize";

interface Props {
  children: any;
}
function Layout({ children }: Props) {
  const router = useRouter();
  const [change, setChange] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window?.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const windowScreen = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const spaceFromTop = 50;
      const spaceFromBottom = 200;

      if (
        scrollPosition > spaceFromTop &&
        Math.max(bodyHeight - (scrollPosition + windowScreen), 0) >
          spaceFromBottom
      ) {
        setChange(true);
      } else setChange(false);
    });
  }, []);

  useEffect(() => {
    setShowMenu(false);
  }, [router.pathname]);

  const windowSize = useDetectWindowSize();
  const isMobile = windowSize < 768;
  const isMobile1500 = windowSize < 1500;
  const isMobile575 = windowSize < 576;

  const handleContactUs = () => {
    router.push("/contact-us");
  };

  const [cursorPositionLeft, setCursorPositionLeft] =
    useState("translate(0, 0)");
  const [cursorPositionRight, setCursorPositionRight] =
    useState("translate(0, 0)");

  const onMouseMove = (e: any) => {
    if (isMobile) {
      setCursorPositionLeft(`translate(0, 0)`);
      setCursorPositionRight(`translate(0, 0)`);
    } else if (isMobile1500) {
      setCursorPositionLeft(
        `translate(${e.screenX / 1000 - 3}px, ${-e.screenX / 1000 + 3}px)`
      );

      setCursorPositionRight(
        `translate(${e.screenX / 1000 - 3}px, ${-e.screenX / 1000 + 3}px)`
      );
    } else {
      setCursorPositionLeft(
        `translate(${e.screenX / 1000 - 5}px, ${-e.screenX / 1000 + 5}px)`
      );

      setCursorPositionRight(
        `translate(${e.screenX / 1000 - 5}px, ${-e.screenX / 1000 + 5}px)`
      );
    }
  };

  return (
    <ErrorBound>
      <WrapLayout onMouseMove={onMouseMove}>
        <Header {...{ showMenu, setShowMenu }} />
        <div className="container">{children}</div>
        <Footer />

        <div className="rotate">
          <div className="circle">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="300px"
              height="300px"
              viewBox="0 0 300 300"
              enableBackground="new 0 0 300 300"
              xmlSpace="preserve"
            >
              <defs>
                <path
                  id="circlePath"
                  d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <circle cx="150" cy="100" r="75" fill="none" />
              <g>
                <use xlinkHref="#circlePath" fill="none" />
                <text
                  fill={`${
                    showMenu
                      ? "white"
                      : !change && !isMobile575
                      ? "white"
                      : "#223EA1"
                  }`}
                  onClick={handleContactUs}
                >
                  <textPath xlinkHref="#circlePath">
                    Battels ------------------ Chiến thôi anh em ơi ------------------
                  </textPath>
                </text>
              </g>
            </svg>
          </div>

          <div className="face" onClick={handleContactUs}>
            <div className="circle_face"></div>
            <div
              className="eye_left"
              style={{ transform: cursorPositionLeft }}
            ></div>
            <div
              className="eye_right"
              style={{ transform: cursorPositionRight }}
            ></div>
            <div className="mouth">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 150 150"
                width="150"
                height="150"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <defs>
                  <clipPath id="__lottie_element_42">
                    <rect width="150" height="150" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_42)">
                  <g
                    transform="matrix(1.904578447341919,0,0,1.2145377397537231,42.62216567993164,85.25)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,17,3.5)">
                      <path
                        fill="rgb(190,143,19)"
                        fillOpacity="1"
                        d=" M-17,3.5 C-17,3.5 -17,29.875 0,29.827999114990234 C17,29.7810001373291 17,3.5 17,3.5 C17,3.5 17.90974235534668,-10.882155418395996 16.431900024414062,-9.555545806884766 C3.633605718612671,-1.961822509765625 -3.7699496746063232,-1.961822509765625 -16.204660415649414,-9.4591646194458 C-17.90974235534668,-10.88137149810791 -17,3.5 -17,3.5z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,58,85.25)"
                    opacity="1"
                    style={{ display: "none" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,17,3.5)">
                      <path
                        fill="rgb(190,143,19)"
                        fillOpacity="1"
                        d=" M-17,3.4839069843292236 C-16.80657386779785,4.483325004577637 -15.814067840576172,28.047101974487305 0.004332736134529114,28.003402709960938 C15.822733879089355,27.95970344543457 16.793678283691406,4.489720821380615 17,3.4839069843292236 C17,3.479574203491211 17,-3.5160930156707764 17,-3.5160930156707764 C17,-3.5160930156707764 -17,-3.5160930156707764 -17,-3.5160930156707764 C-17,-3.5160930156707764 -17,3.1228456497192383 -17,3.4839069843292236z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </WrapLayout>
    </ErrorBound>
  );
}
export default memo(Layout);
