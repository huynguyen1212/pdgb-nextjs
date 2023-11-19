import React, {
  Dispatch,
  SetStateAction,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { StylesHeader } from "../style";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import { menu } from "../data";
import { useRouter } from "next/router";
import LogoText from "src/components/Icons/LogoText";
import LogoTextWhite from "src/components/Icons/LogoTextWhite";
import { useSession, signIn, signOut } from "next-auth/react";

interface Props {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

function Header({ showMenu, setShowMenu }: Props) {
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

  // handle login
  const { data: session } = useSession();

  return (
    <StylesHeader>
      <div className="wrap_main_header">
        <Container>
          <div className="header">
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

            <div className="wrap_control">
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

              <div className="wrap_button_login">
                {session ? (
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
