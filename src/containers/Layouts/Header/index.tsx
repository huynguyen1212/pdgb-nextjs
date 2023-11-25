import React, {
  Dispatch,
  SetStateAction,
  memo,
  useEffect,
  useState,
} from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { StylesHeader } from "../style";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa";
import MenuIcon from "./MenuIcon";
import { menu } from "../data";
import { useRouter } from "next/router";
import LogoText from "src/components/Icons/LogoText";
import LogoTextWhite from "src/components/Icons/LogoTextWhite";
import { useSession, signIn, signOut } from "next-auth/react";
import { useDetectWindowSize } from "src/hooks/useDetectWindowSize";

interface Props {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

function Header({ showMenu, setShowMenu }: Props) {
  const windowSize = useDetectWindowSize();
  const isMobile = windowSize < 768;
  const [change, setChange] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  useEffect(() => {
    if (router.pathname !== "/") {
      setChange(true);
      return;
    }

    setChange(false);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  //handle menu when scroll down
  const [addClass, setAddClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleMenuScroll);

    return () => {
      window.removeEventListener("scroll", handleMenuScroll);
    };
  }, []);

  const handleMenuScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setAddClass(true) : setAddClass(false);
    }
  };

  // handle login
  const { data: section } = useSession();
  // console.log("section: ", section);

  return (
    <StylesHeader>
      <div className="wrap_main_header">
          <div className={`header ${addClass && change ? "header_lp_black" : ""}`}>
            <div className="logo">
              <Link href="/">
                {!showMenu ? (
                  change ? (
                    <LogoText className="logo_main" />
                  ) : (
                    <LogoTextWhite className="logo_main" />
                  )
                ) : (
                  <></>
                )}
              </Link>
            </div>

            <div
              className="wrap_control"
              style={{
                gridTemplateColumns: `${
                  isMobile ? "4fr 1fr 8fr" : "2fr 2fr 1fr 4fr"
                }`,
              }}
            >
              {!isMobile ? (
                <>
                  <div
                    className="control_item"
                    style={{
                      color: `${!change || showMenu ? "white" : "#223EA1"}`,
                    }}
                  >
                    <Link href="/club">Quản lý Club</Link>
                  </div>

                  <div
                    className="control_item"
                    style={{
                      color: `${!change || showMenu ? "white" : "#223EA1"}`,
                    }}
                  >
                    <Link href="/battels">Chiến thôi</Link>
                  </div>
                </>
              ) : (
                <div
                  className="open_menu"
                  style={{
                    color: `${!change || showMenu ? "white" : "#223EA1"}`,
                  }}
                  onClick={() => {
                    setShowMenu((prev) => !prev);
                  }}
                >
                  <span>{showMenu ? "Close" : "Menu"}</span>{" "}
                  <MenuIcon
                    readOnly={true}
                    checked={showMenu}
                    size={24}
                    color={`${!change || showMenu ? "white" : "#223EA1"}`}
                  />
                </div>
              )}

              <div className="notification">
                <div className="bell">
                  <FaRegBell
                    size={20}
                    color={`${!change || showMenu ? "white" : "#223EA1"}`}
                    className="icon_bell"
                  />

                  <span className="new_noti">10</span>

                  <div className="list_noti">
                    <p className="title">Thông báo</p>

                    <div className="list_noti_main">
                      <div className="list_noti_item list_noti_item_read">
                        <p className="title_noti">Thông báo khiêu chiến</p>

                        <p className="sender_noti">
                          Từ: <span>Club A</span>
                        </p>

                        <p className="content_noti">Club A rủ chơi bilac</p>

                        <p className="time_noti">Hôm qua</p>
                      </div>

                      <div className="list_noti_item list_noti_item_unread">
                        <p className="title_noti">Thông báo hệ thống</p>

                        <p className="sender_noti">
                          Từ: <span>Hệ thống</span>
                        </p>

                        <p className="content_noti">Tạo club thành công</p>

                        <p className="time_noti">2 giờ trước</p>
                      </div>

                      <div className="list_noti_item list_noti_item_read">
                        <p className="title_noti">Thông báo khiêu chiến</p>

                        <p className="sender_noti">
                          Từ: <span>Club A</span>
                        </p>

                        <p className="content_noti">Club A rủ chơi bilac</p>

                        <p className="time_noti">Hôm qua</p>
                      </div>

                      <div className="list_noti_item list_noti_item_unread">
                        <p className="title_noti">Thông báo hệ thống</p>

                        <p className="sender_noti">
                          Từ: <span>Hệ thống</span>
                        </p>

                        <p className="content_noti">Tạo club thành công</p>

                        <p className="time_noti">2 giờ trước</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="wrap_button_login">
                {section ? (
                  <button className="button_login" onClick={() => signOut()}>
                    <span>Logout khỏi Google</span>
                  </button>
                ) : (
                  <button className="button_login" onClick={() => signIn()}>
                    <span>Login với Google</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        <Container>
        </Container>
      </div>

      <div className={`wrap_menu ${showMenu ? "show" : ""}`}>
        <Container>
          <div className="menu">
            <div className="main_menu">
              <Row>
                <Col xl={7} lg={7} md={7} sm={12} xs={12} col={12}>
                  <div className="menu_left menu_item">
                    <div className="menu_item_in">
                      {menu.map((item) => {
                        return (
                          <div className="menu_left_item" key={item.name}>
                            <Link href={item.url}>
                              <div className="menu_left_item-container">
                                <h1>
                                  <span></span>
                                  <span>{item.name}</span>
                                  <span
                                    className="inner-value"
                                    data-text={item.name}
                                  ></span>
                                </h1>
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Col>

                <Col xl={5} lg={5} md={5} sm={12} xs={12} col={12}>
                  <div className="menu_right menu_item">
                    <div className="menu_item_in">
                      <div className="contact">
                        <div className="logo">
                          <Link href="/">
                            <LogoTextWhite className="logo_main" />
                          </Link>
                        </div>

                        <p>
                          Mobile: <a href="tel:0293029103">0293029103</a>
                        </p>
                        <p>Email: </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </StylesHeader>
  );
}

export default memo(Header);
