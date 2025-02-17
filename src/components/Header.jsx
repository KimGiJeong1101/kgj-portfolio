import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { Accordion, AccordionSummary } from "@mui/material";

const pages = ["About Me", "Skill", "Project", "Career"];

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleAccordion = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleLinkClick = () => {
    // 링크 클릭 시 아코디언을 닫기
    setIsExpanded(false);
  };

  return (
    <AppBar position="fixed" sx={{ background: "black", opacity: "0.8" }}>
      <Container maxWidth="lg" sx={{ padding: 0 }}>
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scroll.scrollToTop({ duration: 800 }); // 800ms에 걸쳐 스크롤
            }}
            sx={{
              mr: 2,
              display: "flex",
              fontWeight: 600,
              letterSpacing: ".0rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "flex-start", // LOGO 왼쪽 정렬
            }}
          >
            KGJ's PortFoliofdfdfdf
          </Typography>
          {/* 햄버거 아이콘 */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleToggleAccordion}
              color="inherit"
            >
              <MenuIcon sx={{ fontSize: "42px", color: "white" }} />{" "}
              {/* 아이콘 크기와 색상 변경 */}
            </IconButton>

            {/* 아코디언 */}

            <Accordion
              expanded={isExpanded}
              sx={{
                margin: 0,
                padding: 0,
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                background: "#111111",
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ display: "none" }} // Summary 숨김
              ></AccordionSummary>
              {/* 아코디언 내용 */}

              {pages.map((page) => (
                <Link
                  key={page}
                  to={page.toLowerCase()} // 페이지 이름을 소문자로 해서 id와 일치시킴
                  spy={true}
                  onClick={handleLinkClick}
                  smooth={true}
                  duration={800}
                  offset={-70} // 헤더 높이를 고려하여 약간 조정
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    color: "#eeeeee",
                  }}
                >
                  <Typography sx={{ padding: "10px 0" }}>{page}</Typography>
                  <hr
                    style={{
                      border: "0.5px solid #eeeeee",
                      width: "100%",
                      margin: "0 auto",
                    }}
                  />
                </Link>
              ))}
            </Accordion>
          </Box>
          {/* 데스크탑 네비게이션 버튼 */}
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                to={page.toLowerCase()} // 페이지 이름을 소문자로 해서 id와 일치시킴
                spy={true}
                smooth={true}
                duration={800}
                offset={-80} // 헤더 높이를 고려하여 약간 조정
                // offset={page.toLowerCase() === "carrer" ? -50 : -80}
                style={{
                  margin: "0 10px",
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
