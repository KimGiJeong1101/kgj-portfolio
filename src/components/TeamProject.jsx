import React from "react";
import { Box, Container, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  OndemandVideo as VideoIcon,
  OpenInNew as OpenInNewIcon,
} from "@mui/icons-material";

import "../App.css";

const TeamProject = ({ teamprojectId, isVisible }) => {
  // 공통 스타일을 객체로 정의
  const boxStyle = {
    border: "solid white 2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
    height: "70vh",
    width: "100%",
    boxSizing: "border-box",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 2s ease-in-out",
    borderRadius: "130px",
    overflow: "hidden",
    padding: 0,
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",
    position: "relative", // 부모 Box에 relative 추가
  };

  return (
    <Container disableGutters maxWidth="lg">
      {teamprojectId === 1 && (
        <Box
          sx={{
            ...boxStyle,

            "&:hover": {
              background: "#FFFEFC", // 호버 시 박스의 배경색을 green으로 변경
            },
            "&:hover .hover-text": {
              opacity: 1, // 호버 시 텍스트가 보이도록 설정
            },
            "&:hover img": {
              opacity: 0.1, // 호버 시 이미지를 반투명하게 처리
            },
          }}
        >
          <img
            src="/Clubing Thumb.png"
            alt="Clubing Thumbnail"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "130px", // 부모와 동일한 반경 적용
            }}
          />

          <Box
            className="hover-text"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column", // 세로 정렬
              justifyContent: "flex-start",
              alignItems: "flex-start",
              opacity: 0,
              transition: "opacity 2s ease-in-out",
              background: "rgba(255, 254, 252, 0.9)", // 살짝 투명한 배경
              borderRadius: "130px",
              padding: "40px", // 여백 추가
              boxSizing: "border-box",
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                fontSize: { xs: 28, sm: 42 },
                fontWeight: "bold",
                color: "#333",
                display: "flex",
                alignItems: "center", // 텍스트와 아이콘 수평 정렬
                marginLeft: "3px",
              }}
            >
              Clubing
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                background: "#2C3E50",
                borderRadius: "15px",
                padding: "5px 10px 5px 10px",

                marginBottom: "5px",
                fontSize: { xs: 12, sm: 16 },
                color: "#f9f9f9",
              }}
            >
              MERN스택을 활용한 소모임 레퍼런스 웹페이지 사이트
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14 },
                color: "#777",
                marginLeft: "5px",
              }}
            >
              2024.08 ~ 2024.09
            </Typography>

            {/* 경계선 */}
            <Box
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: "#ddd",
                margin: "20px 0",
              }}
            />

            {/* 프로젝트 상세 설명 */}
            <Typography
              sx={{
                padding: "0px",
                margin: "0px",
                color: "#333",
                lineHeight: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 17 },
                  margin: "0px",
                  padding: "0px",
                }}
              >
                소모임과 문토와 같은 모바일 기반 취미 모임 어플을 벤치마킹하여,
                웹 버전으로 구현한 사이트입니다. 사용자가 취미 모임을 쉽게
                생성하고 참여할 수 있도록 서비스를 개발하였습니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  padding: "0px 0px 0px 15px",
                  fontSize: { xs: "12px", sm: "15px" },
                }}
              >
                <li>MongoDB를 사용하여 데이터베이스를 설계, 유연하게 관리</li>
                <li>
                  Axios와 CORS 설정으로 백엔드와 프론트엔드 간의 원활한 데이터
                  통신 구현
                </li>
                <li>
                  React Router로 페이지 간 라우팅 처리 및 사용자 네비게이션 구현
                </li>
                <li>
                  API 활용: 주소 API와 소셜 로그인 API를 통합하여 외부 서비스와
                  연동
                </li>
                <li>JWT 토큰을 이용한 안전한 회원가입 및 로그인 시스템 구현</li>
                <li>CKEditor와 TUI Image Editor를 사용한 게시판 기능 구현</li>
                <li>Socket.IO를 활용하여 실시간 채팅 기능 구현</li>
              </Box>
            </Typography>

            {/* 경계선 */}
            <Box
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: "#ddd",
                margin: "20px 0",
              }}
            />

            {/* 기술 스택 및 URL */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  color: "#555",
                }}
              >
                기술{" "}
                <Box
                  sx={{
                    display: "inline-flex",
                    gap: "3px",
                    flexWrap: "wrap", // 여러 개가 줄바꿈 없이 나올 수 있게 설정
                  }}
                >
                  {[
                    "React.sj",
                    "Material-UI",
                    "React-Redux",
                    "JavaScript",
                    "Axios",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Socket.IO",
                    "JWT",
                  ].map((tech, index) => (
                    <Box
                      key={index}
                      sx={{
                        padding: "5px 10px",
                        border: "1px solid #444444", // 테두리 색상
                        borderRadius: "20px", // 둥근 테두리
                        fontSize: { xs: 10, sm: 12 },
                        color: "#555555",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  color: "#555",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                URL
                <a
                  href="https://github.com/KimGiJeong1101/clubing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0073e6",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#202020",
                      fontSize: "12px",
                      margin: "5px",
                    }}
                  >
                    <GitHubIcon
                      sx={{ fontSize: { xs: 23, sm: 28 } }}
                    ></GitHubIcon>
                  </Box>
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {teamprojectId === 2 && (
        <Box
          sx={{
            ...boxStyle,

            "&:hover": {
              background: "#FFFEFC", // 호버 시 박스의 배경색을 green으로 변경
            },
            "&:hover .hover-text": {
              opacity: 1, // 호버 시 텍스트가 보이도록 설정
            },
            "&:hover img": {
              opacity: 0.1, // 호버 시 이미지를 반투명하게 처리
            },
          }}
        >
          <img
            src="/BelleAnge Thumb.png"
            alt="BelleAnge Thumbnail"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "130px", // 부모와 동일한 반경 적용
            }}
          />

          <Box
            className="hover-text"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column", // 세로 정렬
              justifyContent: "flex-start",
              alignItems: "flex-start",
              opacity: 0,
              transition: "opacity 2s ease-in-out",
              background: "rgba(255, 254, 252, 0.9)", // 살짝 투명한 배경
              borderRadius: "130px",
              padding: "40px", // 여백 추가
              boxSizing: "border-box",
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                fontSize: { xs: 28, sm: 42 },
                fontWeight: "bold",
                color: "#333",
                display: "flex",
                alignItems: "center", // 텍스트와 아이콘 수평 정렬
                marginLeft: "3px",
              }}
            >
              BelleAnge
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                background: "#2C3E50",
                borderRadius: "15px",
                padding: "5px 10px 5px 10px",

                marginBottom: "5px",
                fontSize: { xs: 12, sm: 16 },
                color: "#f9f9f9",
              }}
            >
              오픈소스를 활용한 반응형 웹 쇼핑몰 구현
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14 },
                color: "#777",
                marginLeft: "5px",
              }}
            >
              2024.03 ~ 2024.05
            </Typography>

            {/* 경계선 */}
            <Box
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: "#ddd",
                margin: "20px 0",
              }}
            />

            {/* 프로젝트 상세 설명 */}
            <Typography
              sx={{
                padding: "0px",
                margin: "0px",
                color: "#333",
                lineHeight: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 17 },
                  margin: "0px",
                  padding: "0px",
                }}
              >
                이 프로젝트는 PM의 가족분이 운영하시는 온라인 쇼핑몰의 디자인과
                사진을 제공받아 활용하여 개발한 사이트입니다. 이를 바탕으로
                프로젝트의 목적에 맞는 사용자 경험과 기능 구현을 위해 작업을
                진행하였습니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  padding: "0px 0px 0px 15px",
                  fontSize: { xs: "12px", sm: "15px" },
                }}
              >
                <li>
                  Spring Boot와 React로 RESTful 웹 애플리케이션 개발, Axios로
                  데이터 통신
                </li>
                <li>MariaDB로 데이터베이스 관리 및 성능 최적화</li>
                <li>JPA로 객체-관계 매핑 및 데이터베이스 상호작용 간소화</li>
                <li>JWT 토큰으로 안전한 인증 및 세션 관리</li>
                <li>React로 페이지 전환과 상태 관리 효율화</li>
                <li>Recoil과 Redux로 전역 상태 관리 및 데이터 흐름 최적화</li>
                <li>
                  주소 API와 소셜 로그인 API로 편리한 로그인 및 주소 자동 완성
                  구현
                </li>
                <li>TailwindCSS로 직관적인 UI 디자인 구현</li>
              </Box>
            </Typography>

            {/* 경계선 */}
            <Box
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: "#ddd",
                margin: "20px 0",
              }}
            />

            {/* 기술 스택 및 URL */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  color: "#555",
                }}
              >
                기술{" "}
                <Box
                  sx={{
                    display: "inline-flex",
                    gap: "3px",
                    flexWrap: "wrap", // 여러 개가 줄바꿈 없이 나올 수 있게 설정
                  }}
                >
                  {[
                    "React.sj",
                    "tailwindcss",
                    "React-Redux",
                    "Recoil",
                    "Axios",
                    "Spring Boot",
                    "Spring Security",
                    "Java",
                    "MariaDB",
                    "JPA",
                    "JWT",
                  ].map((tech, index) => (
                    <Box
                      key={index}
                      sx={{
                        padding: "5px 10px",
                        border: "1px solid #444444", // 테두리 색상
                        borderRadius: "20px", // 둥근 테두리
                        fontSize: { xs: 10, sm: 12 },
                        color: "#555555",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  color: "#555",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                URL
                <a
                  href="https://github.com/KimGiJeong1101/Shop-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0073e6",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#202020",
                      fontSize: "12px",
                      margin: "5px",
                    }}
                  >
                    <GitHubIcon
                      sx={{ fontSize: { xs: 23, sm: 28 } }}
                    ></GitHubIcon>
                  </Box>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=CYK8z97SAlM"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0073e6",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#202020",
                      fontSize: "12px",
                      margin: "5px",
                    }}
                  >
                    <VideoIcon
                      sx={{ fontSize: { xs: 23, sm: 28 } }}
                    ></VideoIcon>
                  </Box>
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {teamprojectId === 3 && (
        <Box
          sx={{
            ...boxStyle,

            "&:hover": {
              background: "#FFFEFC", // 호버 시 박스의 배경색을 green으로 변경
            },
            "&:hover .hover-text": {
              opacity: 1, // 호버 시 텍스트가 보이도록 설정
            },
            "&:hover img": {
              opacity: 0.1, // 호버 시 이미지를 반투명하게 처리
            },
          }}
        >
          <img
            src="/SCON Thumb.png"
            alt="SCON Thumbnail"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "130px", // 부모와 동일한 반경 적용
            }}
          />

          <Box
            className="hover-text"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column", // 세로 정렬
              justifyContent: "flex-start",
              alignItems: "flex-start",
              opacity: 0,
              transition: "opacity 2s ease-in-out",
              background: "rgba(255, 254, 252, 0.9)", // 살짝 투명한 배경
              borderRadius: "130px",
              padding: "40px", // 여백 추가
              boxSizing: "border-box",
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                fontSize: { xs: 28, sm: 42 },
                fontWeight: "bold",
                color: "#333",
                display: "flex",
                alignItems: "center", // 텍스트와 아이콘 수평 정렬
                marginLeft: "3px",
              }}
            >
              SCON
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                background: "#2C3E50",
                borderRadius: "15px",
                padding: "5px 10px 5px 10px",

                marginBottom: "5px",
                fontSize: { xs: 12, sm: 16 },
                color: "#f9f9f9",
              }}
            >
              Spring을 활용한 뉴스기사 관리 웹 서비스
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14 },
                color: "#777",
                marginLeft: "5px",
              }}
            >
              2024.02 ~ 2024.03
            </Typography>

            {/* 경계선 */}
            <Box
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: "#ddd",
                margin: "20px 0",
              }}
            />

            {/* 프로젝트 상세 설명 */}
            <Typography
              sx={{
                padding: "0px",
                margin: "0px",
                color: "#333",
                lineHeight: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 17 },
                  margin: "0px",
                  padding: "0px",
                }}
              >
                과학 분야의 뉴스 기사를 쉽고 가볍게 접할 수 있도록 돕는 뉴스
                기사 관리 웹 서비스입니다. 해당 서비스는 과학 관련 콘텐츠를
                효율적으로 제공, 사용자들이 더욱 친숙하게 접근할 수 있도록
                설계되었습니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  padding: "0px 0px 0px 15px",
                  fontSize: { xs: "12px", sm: "15px" },
                }}
              >
                <li>
                  Spring MVC 패턴을 사용하여 웹 애플리케이션을 구조적으로 개발
                </li>
                <li>Bootstrap 오픈 템플릿을 활용해 유연한 UI를 구현</li>
                <li>
                  Spring Security를 사용해 접근 권한을 제어하고 보안을 강화
                </li>
                <li>Ajax를 활용한 비동기 처리로 댓글 기능을 구현</li>
                <li>
                  MyBatis를 활용하여 효율적인 DB 관리 및 제어를 구현, 검색
                  기능과 페이징 처리를 추가 구현
                </li>
                <li>
                  MyBatis를 사용해 기존 서블릿 + JSP 기반 MVC보다 효율적인
                  쿼리문을 작성
                </li>
              </Box>
            </Typography>

            {/* 경계선 */}
            <Box
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: "#ddd",
                margin: "20px 0",
              }}
            />

            {/* 기술 스택 및 URL */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  color: "#555",
                }}
              >
                기술{" "}
                <Box
                  sx={{
                    display: "inline-flex",
                    gap: "3px",
                    flexWrap: "wrap", // 여러 개가 줄바꿈 없이 나올 수 있게 설정
                  }}
                >
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "JQuery",
                    "AJAX",
                    "BootStrap",
                    "JSP",
                    "Spring MVC",
                    "Java",
                    "MyBatis",
                    "OracleDB",
                  ].map((tech, index) => (
                    <Box
                      key={index}
                      sx={{
                        padding: "5px 10px",
                        border: "1px solid #444444", // 테두리 색상
                        borderRadius: "20px", // 둥근 테두리
                        fontSize: { xs: 10, sm: 12 },
                        color: "#555555",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  color: "#555",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                URL
                <a
                  href="https://github.com/KimGiJeong1101/News-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0073e6",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#202020",
                      fontSize: "12px",
                      margin: "5px",
                    }}
                  >
                    <GitHubIcon
                      sx={{ fontSize: { xs: 23, sm: 28 } }}
                    ></GitHubIcon>
                  </Box>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=bY7bONpr8qU"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0073e6",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#202020",
                      fontSize: "12px",
                      margin: "5px",
                    }}
                  >
                    <VideoIcon
                      sx={{ fontSize: { xs: 23, sm: 28 } }}
                    ></VideoIcon>
                  </Box>
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {teamprojectId === 4 && (
        <Box
          sx={{
            ...boxStyle,

            "&:hover": {
              background: "#FFFEFC", // 호버 시 박스의 배경색을 green으로 변경
            },
            "&:hover .hover-text": {
              opacity: 1, // 호버 시 텍스트가 보이도록 설정
            },
            "&:hover img": {
              opacity: 0.1, // 호버 시 이미지를 반투명하게 처리
            },
          }}
        >
          <img
            src="/whiskey Thumb.png"
            alt="whiskey Thumbnail"
            style={{
              width: "100%",
              height: "100%",

              borderRadius: "130px", // 부모와 동일한 반경 적용
            }}
          />

          <Box
            className="hover-text"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column", // 세로 정렬
              justifyContent: "flex-start",
              alignItems: "flex-start",
              opacity: 0,
              transition: "opacity 2s ease-in-out",
              background: "rgba(255, 254, 252, 0.9)", // 살짝 투명한 배경
              borderRadius: "130px",
              padding: "40px", // 여백 추가
              boxSizing: "border-box",
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                fontSize: { xs: 28, sm: 42 },
                fontWeight: "bold",
                color: "#333",
                display: "flex",
                alignItems: "center", // 텍스트와 아이콘 수평 정렬
                marginLeft: "3px",
              }}
            >
              위스키백과
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                background: "#2C3E50",
                borderRadius: "15px",
                padding: "5px 10px 5px 10px",

                marginBottom: "5px",
                fontSize: { xs: 12, sm: 16 },
                color: "#f9f9f9",
              }}
            >
              블로그 웹 어플리케이션 사이트 개발
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14 },
                color: "#777",
                marginLeft: "5px",
              }}
            >
              2024.01 ~ 2024.02
            </Typography>

            {/* 경계선 */}
            <Box
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: "#ddd",
                margin: "20px 0",
              }}
            />

            {/* 프로젝트 상세 설명 */}
            <Typography
              sx={{
                padding: "0px",
                margin: "0px",
                color: "#333",
                lineHeight: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 17 },
                  margin: "0px",
                  padding: "0px",
                }}
              >
                코로나 시절 동안 소주와 맥주 외의 다양한 술에 대한 관심이 증가한
                흐름을 반영하여, 사용자들이 쉽게 술에 관한 정보를 접할 수 있도록
                만든 블로그 프로젝트입니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  padding: "0px 0px 0px 15px",
                  fontSize: { xs: "12px", sm: "15px" },
                }}
              >
                <li>
                  MVC 패턴을 사용하여 확장성과 유지보수성을 고려한 구조로 개발
                </li>
                <li>
                  Bootstrap의 다양한 클래스를 활용하여 유연하고 반응형 UI를 구현
                </li>
                <li>JavaScript를 사용해 회원가입 및 로그인 로직을 처리</li>
                <li>JSP와 서블릿을 이용해 CRUD 기능을 구현</li>
                <li>OracleDB와 연결하여 페이징 처리 및 검색 기능을 구현</li>
                <li>
                  JDBC를 활용하여 효율적인 쿼리문을 작성하고 데이터베이스와
                  상호작용
                </li>
              </Box>
            </Typography>

            {/* 경계선 */}
            <Box
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: "#ddd",
                margin: "20px 0",
              }}
            />

            {/* 기술 스택 및 URL */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  color: "#555",
                }}
              >
                기술{" "}
                <Box
                  sx={{
                    display: "inline-flex",
                    gap: "3px",
                    flexWrap: "wrap", // 여러 개가 줄바꿈 없이 나올 수 있게 설정
                  }}
                >
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "BootStrap",
                    "Servlet&JSP",
                    "Java",
                    "JDBC",
                    "OracleDB",
                  ].map((tech, index) => (
                    <Box
                      key={index}
                      sx={{
                        padding: "5px 10px",
                        border: "1px solid #444444", // 테두리 색상
                        borderRadius: "20px", // 둥근 테두리
                        fontSize: { xs: 10, sm: 12 },
                        color: "#555555",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  color: "#555",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                URL
                <a
                  href="https://github.com/KimGiJeong1101/Blog-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0073e6",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#202020",
                      fontSize: "12px",
                      margin: "5px",
                    }}
                  >
                    <GitHubIcon
                      sx={{ fontSize: { xs: 23, sm: 28 } }}
                    ></GitHubIcon>
                  </Box>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=mJ4YHVDsOGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0073e6",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#202020",
                      fontSize: "12px",
                      margin: "5px",
                    }}
                  >
                    <VideoIcon
                      sx={{ fontSize: { xs: 23, sm: 28 } }}
                    ></VideoIcon>
                  </Box>
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {teamprojectId === 5 && (
        <Box
          sx={{
            ...boxStyle,

            "&:hover": {
              background: "#FFFEFC", // 호버 시 박스의 배경색을 green으로 변경
            },
            "&:hover .hover-text": {
              opacity: 1, // 호버 시 텍스트가 보이도록 설정
            },
            "&:hover img": {
              opacity: 0.1, // 호버 시 이미지를 반투명하게 처리
            },
          }}
        >
          <Box
            component="img"
            src="/proLoading.png"
            alt="프로젝트준비중..."
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "130px",
              textAlign: "center",
            }}
          />

          <Box
            className="hover-text"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column", // 세로 정렬
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
              transition: "opacity 2s ease-in-out",
              background: "rgba(255, 254, 252, 0.9)", // 살짝 투명한 배경
              borderRadius: "130px",
              padding: "40px", // 여백 추가
              boxSizing: "border-box",
            }}
          >
            <Typography className="typing-text">
              프로젝트 준비 중입니다...
            </Typography>
          </Box>
        </Box>
      )}

      {teamprojectId === 6 && (
        <Box
          sx={{
            ...boxStyle,

            "&:hover": {
              background: "#FFFEFC", // 호버 시 박스의 배경색을 green으로 변경
            },
            "&:hover .hover-text": {
              opacity: 1, // 호버 시 텍스트가 보이도록 설정
            },
            "&:hover img": {
              opacity: 0.1, // 호버 시 이미지를 반투명하게 처리
            },
          }}
        >
          <Box
            component="img"
            src="/proLoading.png"
            alt="프로젝트준비중..."
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "130px",
              textAlign: "center",
            }}
          />

          <Box
            className="hover-text"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column", // 세로 정렬
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
              transition: "opacity 2s ease-in-out",
              background: "rgba(255, 254, 252, 0.9)", // 살짝 투명한 배경
              borderRadius: "130px",
              padding: "40px", // 여백 추가
              boxSizing: "border-box",
            }}
          >
            <Typography className="typing-text">
              프로젝트 준비 중입니다...
            </Typography>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default TeamProject;
