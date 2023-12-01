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
import { useQuery } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import { Dropdown, MenuProps } from "antd";
import IconUser from "src/components/Icons/IconUser";
import IconLogOut from "src/components/Icons/IconLogOut";

interface Props {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

function Header({ showMenu, setShowMenu }: Props) {
  const windowSize = useDetectWindowSize();
  const isMobile = windowSize < 768;
  const router = useRouter();

  const [change, setChange] = useState(false);
  const [token, setToken] = useState<any>();

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
  const { data: section }: any = useSession();
  useEffect(() => {
    if (section && section.token.access_token) {
      localStorage.setItem("token", section.token.access_token);
    } else if (section === null) {
      localStorage.removeItem("token");
    }
  }, [section]);

  useEffect(() => {
    setToken(
      localStorage.getItem("token") ? localStorage.getItem("token") : undefined
    );
  }, [section]);

  // api
  const { data: check } = useQuery(
    ["CHECK_IS_IN_CLUB", section && section.token.access_token],
    async () => {
      const response = await requestToken({
        method: "GET",
        url: API_URL.CLUBS.CHECK_IS_IN_CLUB,
      });
      return response?.status === 200 ? true : false;
    }
  );

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
          <IconUser />
          {section && section.token.name}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <button
          className="button_login"
          style={{ display: "flex", justifyContent: "center", gap: "8px" }}
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <IconLogOut />
          <span>Logout</span>
        </button>
      ),
    },
  ];

  return (
    <StylesHeader>
      <div className="wrap_main_header">
        <div
          className={`header ${addClass && change ? "header_lp_black" : ""}`}
        >
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
                !(token && section && check)
                  ? "1fr"
                  : isMobile
                  ? "4fr 1fr 4fr"
                  : "2fr 2fr 1fr 2fr"
              }`,
            }}
          >
            {!(section && token && check) ? (
              <></>
            ) : (
              <>
                {!isMobile ? (
                  <>
                    <div
                      className="control_item"
                      style={{
                        color: `${!change || showMenu ? "white" : "#223EA1"}`,
                      }}
                    >
                      <Link href="/club">Club của tôi</Link>
                    </div>

                    <div
                      className="control_item"
                      style={{
                        color: `${!change || showMenu ? "white" : "#223EA1"}`,
                      }}
                    >
                      <Link href="/matchs">Chiến thôi</Link>
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
              </>
            )}

            <div className="wrap_button_login">
              {section && token ? (
                <>
                  <Dropdown menu={{ items }} placement="bottom">
                    {section && section.token && (
                      <img
                        src={section.token.picture || ""}
                        width={40}
                        height={40}
                        alt="avatar"
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                      />
                    )}
                  </Dropdown>

                  {/* <button
                    className="button_login"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    <span>Logout</span>
                    <span className="email">
                      {section && section.token.email}
                    </span>
                  </button> */}
                </>
              ) : (
                <button className="button_login" onClick={() => signIn()}>
                  <span>Login với Google</span>
                </button>
              )}
            </div>
          </div>
        </div>
        <Container></Container>
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
