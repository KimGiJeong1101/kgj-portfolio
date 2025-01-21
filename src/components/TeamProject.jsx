import React from "react";
import { Box, Container, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  OndemandVideo as VideoIcon,
  OpenInNew as OpenInNewIcon,
} from "@mui/icons-material";
import "../App.css";
import {
  teamAfterHover,
  titleStyle,
  imgStyle,
  iconBoxStyle,
  titleFontStyle,
  subtitleStyle,
  dateStyle,
  hrStyle,
  detailStyle,
  ulStyle,
  skillBoxStyle,
  skillTitleStyle,
  urlTitleStyle,
  skillDisplayStyle,
  skillValueStyle,
  anchorStyle,
  projectLoading,
} from "../styles/styles";

const TeamProject = ({ teamprojectId, isVisible }) => {
  // 공통 스타일을 객체로 정의
  const teamBoxStyle = {
    border: "solid white 2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
    height: { xs: "80vh", lg: "70vh" },
    width: "100%",
    boxSizing: "border-box",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 2s ease-in-out",
    borderRadius: "130px",
    overflow: "hidden",
    padding: 0,
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",
    position: "relative", // 부모 Box에 relative 추가
    "&:hover": {
      background: "#FFFEFC", // 호버 시 박스의 배경색을 green으로 변경
    },
    "&:hover .hover-text": {
      opacity: 1, // 호버 시 텍스트가 보이도록 설정
    },
    "&:hover img": {
      opacity: 0.1, // 호버 시 이미지를 반투명하게 처리
    },
  };

  return (
    <Container disableGutters maxWidth="lg">
      {teamprojectId === 1 && (
        <Box
          sx={{
            ...teamBoxStyle,
          }}
        >
          <img
            src="./images/Clubing Thumb.png"
            alt="Clubing Thumbnail"
            style={{
              ...imgStyle,
            }}
          />

          <Box
            className="hover-text"
            sx={{
              ...teamAfterHover,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                ...titleStyle,
              }}
            >
              Clubing
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                ...titleFontStyle,
              }}
            >
              MERN 스택 활용 소모임 레퍼런스 웹사이트
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                ...dateStyle,
              }}
            >
              2024.08 ~ 2024.09
            </Typography>

            {/* 경계선 */}
            <Box
              sx={{
                ...hrStyle,
              }}
            />

            {/* 프로젝트 상세 설명 */}
            <Typography
              sx={{
                ...detailStyle,
              }}
            >
              <Typography
                sx={{
                  ...subtitleStyle,
                }}
              >
                소모임과 문토 같은 취미 모임 앱을 벤치마킹해, 웹에서 취미 모임을
                쉽게 생성·참여할 수 있는 서비스를 개발했습니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  ...ulStyle,
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
                ...hrStyle,
              }}
            />

            {/* 기술 스택 및 URL */}
            <Box
              sx={{
                ...skillBoxStyle,
              }}
            >
              <Typography
                sx={{
                  ...skillTitleStyle,
                }}
              >
                기술{" "}
                <Box
                  sx={{
                    ...skillDisplayStyle,
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
                        ...skillValueStyle,
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Typography>

              <Typography
                sx={{
                  ...skillTitleStyle,
                  ...urlTitleStyle,
                }}
              >
                URL
                <a
                  href="https://github.com/KimGiJeong1101/clubing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...anchorStyle,
                  }}
                >
                  <Box
                    sx={{
                      ...iconBoxStyle,
                    }}
                  >
                    <GitHubIcon
                      sx={{ fontSize: { xs: 23, lg: 28 } }}
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
            ...teamBoxStyle,
          }}
        >
          <img
            src="./images/BelleAnge Thumb.png"
            alt="BelleAnge Thumbnail"
            style={{
              ...imgStyle,
            }}
          />

          <Box
            className="hover-text"
            sx={{
              ...teamAfterHover,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                ...titleStyle,
              }}
            >
              BelleAnge
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                ...titleFontStyle,
              }}
            >
              오픈소스를 활용한 반응형 웹 쇼핑몰 구현
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                ...dateStyle,
              }}
            >
              2024.03 ~ 2024.05
            </Typography>

            {/* 경계선 */}
            <Box
              sx={{
                ...hrStyle,
              }}
            />

            {/* 프로젝트 상세 설명 */}
            <Typography
              sx={{
                ...detailStyle,
              }}
            >
              <Typography
                sx={{
                  ...subtitleStyle,
                }}
              >
                PM 가족의 온라인 쇼핑몰 디자인과 사진을 활용해, 사용자 경험과
                기능 구현에 중점을 두고 개발한 사이트입니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  ...ulStyle,
                }}
              >
                <li>
                  Spring Boot와 React로 RESTful 웹 애플리케이션 개발, Axios로
                  데이터 통신
                </li>
                <li>MariaDB로 데이터베이스 관리 및 성능 최적화</li>
                <li>JPA로 ORM 및 DB 상호작용 간소화</li>
                <li>JWT 토큰으로 안전한 인증 및 세션 관리</li>
                <li>React로 페이지 전환과 상태 관리 효율화</li>
                <li>Recoil과 Redux로 전역 상태 관리 최적화</li>
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
                ...hrStyle,
              }}
            />

            {/* 기술 스택 및 URL */}
            <Box
              sx={{
                ...skillBoxStyle,
              }}
            >
              <Typography
                sx={{
                  ...skillTitleStyle,
                }}
              >
                기술{" "}
                <Box
                  sx={{
                    ...skillDisplayStyle,
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
                        ...skillValueStyle,
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Typography>

              <Typography
                sx={{
                  ...skillTitleStyle,
                  ...urlTitleStyle,
                }}
              >
                URL
                <a
                  href="https://github.com/KimGiJeong1101/Shop-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...anchorStyle,
                  }}
                >
                  <Box
                    sx={{
                      ...iconBoxStyle,
                    }}
                  >
                    <GitHubIcon
                      sx={{ fontSize: { xs: 23, lg: 28 } }}
                    ></GitHubIcon>
                  </Box>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=CYK8z97SAlM"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...anchorStyle,
                  }}
                >
                  <Box
                    sx={{
                      ...iconBoxStyle,
                    }}
                  >
                    <VideoIcon
                      sx={{ fontSize: { xs: 23, lg: 28 } }}
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
            ...teamBoxStyle,
          }}
        >
          <img
            src="./images/SCON Thumb.png"
            alt="SCON Thumbnail"
            style={{
              ...imgStyle,
            }}
          />

          <Box
            className="hover-text"
            sx={{
              ...teamAfterHover,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                ...titleStyle,
              }}
            >
              SCON
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                ...titleFontStyle,
              }}
            >
              Spring을 활용한 뉴스기사 관리 웹 서비스
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                ...dateStyle,
              }}
            >
              2024.02 ~ 2024.03
            </Typography>

            {/* 경계선 */}
            <Box
              sx={{
                ...hrStyle,
              }}
            />

            {/* 프로젝트 상세 설명 */}
            <Typography
              sx={{
                ...detailStyle,
              }}
            >
              <Typography
                sx={{
                  ...subtitleStyle,
                }}
              >
                과학 뉴스 기사를 쉽게 접할 수 있도록 돕는 웹 서비스로, 효율적인
                콘텐츠 제공과 사용자 친화적인 접근을 설계했습니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  ...ulStyle,
                }}
              >
                <li>
                  Spring MVC 패턴을 사용하여 웹 애플리케이션을 구조적으로 개발
                </li>
                <li>Bootstrap 오픈 템플릿을 활용해 유연한 UI를 구현</li>
                <li>Spring Security로 접근 권한 제어 및 보안 강화</li>
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
                ...hrStyle,
              }}
            />

            {/* 기술 스택 및 URL */}
            <Box
              sx={{
                ...skillBoxStyle,
              }}
            >
              <Typography
                sx={{
                  ...skillTitleStyle,
                }}
              >
                기술{" "}
                <Box
                  sx={{
                    ...skillDisplayStyle,
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
                        ...skillValueStyle,
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Typography>

              <Typography
                sx={{
                  ...skillTitleStyle,
                  ...urlTitleStyle,
                }}
              >
                URL
                <a
                  href="https://github.com/KimGiJeong1101/News-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...anchorStyle,
                  }}
                >
                  <Box
                    sx={{
                      ...iconBoxStyle,
                    }}
                  >
                    <GitHubIcon
                      sx={{ fontSize: { xs: 23, lg: 28 } }}
                    ></GitHubIcon>
                  </Box>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=bY7bONpr8qU"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...anchorStyle,
                  }}
                >
                  <Box
                    sx={{
                      ...iconBoxStyle,
                    }}
                  >
                    <VideoIcon
                      sx={{ fontSize: { xs: 23, lg: 28 } }}
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
            ...teamBoxStyle,
          }}
        >
          <img
            src="./images/whiskey Thumb.png"
            alt="whiskey Thumbnail"
            style={{
              ...imgStyle,
            }}
          />

          <Box
            className="hover-text"
            sx={{
              ...teamAfterHover,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                ...titleStyle,
              }}
            >
              위스키백과
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                ...titleFontStyle,
              }}
            >
              블로그 웹 어플리케이션 사이트 개발
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                ...dateStyle,
              }}
            >
              2024.01 ~ 2024.02
            </Typography>

            {/* 경계선 */}
            <Box
              sx={{
                ...hrStyle,
              }}
            />

            {/* 프로젝트 상세 설명 */}
            <Typography
              sx={{
                ...detailStyle,
              }}
            >
              <Typography
                sx={{
                  ...subtitleStyle,
                }}
              >
                코로나 시기, 다양한 술에 대한 관심 증가를 반영한 술 정보 블로그
                프로젝트입니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  ...ulStyle,
                }}
              >
                <li>
                  MVC 패턴을 사용하여 확장성과 유지보수성을 고려한 구조로 개발
                </li>
                <li>
                  Bootstrap의 다양한 클래스를 활용하여 유연하고 반응형 UI를 구현
                </li>
                <li>JavaScript로 회원가입 및 로그인 로직 처리</li>
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
                ...hrStyle,
              }}
            />

            {/* 기술 스택 및 URL */}
            <Box
              sx={{
                ...skillBoxStyle,
              }}
            >
              <Typography
                sx={{
                  ...skillTitleStyle,
                }}
              >
                기술{" "}
                <Box
                  sx={{
                    ...skillDisplayStyle,
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
                        ...skillValueStyle,
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Typography>

              <Typography
                sx={{
                  ...skillTitleStyle,
                  ...urlTitleStyle,
                }}
              >
                URL
                <a
                  href="https://github.com/KimGiJeong1101/Blog-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...anchorStyle,
                  }}
                >
                  <Box
                    sx={{
                      ...iconBoxStyle,
                    }}
                  >
                    <GitHubIcon
                      sx={{ fontSize: { xs: 23, lg: 28 } }}
                    ></GitHubIcon>
                  </Box>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=mJ4YHVDsOGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...anchorStyle,
                  }}
                >
                  <Box
                    sx={{
                      ...iconBoxStyle,
                    }}
                  >
                    <VideoIcon
                      sx={{ fontSize: { xs: 23, lg: 28 } }}
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
            ...teamBoxStyle,
          }}
        >
          <Box
            component="img"
            src="./images/proLoading.png"
            alt="프로젝트준비중..."
            sx={{
              ...projectLoading,
            }}
          />

          <Box
            className="hover-text"
            sx={{
              ...teamAfterHover,
              justifyContent: "center",
              alignItems: "center",
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
            ...teamBoxStyle,
          }}
        >
          <Box
            component="img"
            src="./images/proLoading.png"
            alt="프로젝트준비중..."
            sx={{
              ...projectLoading,
            }}
          />

          <Box
            className="hover-text"
            sx={{
              ...teamAfterHover,
              justifyContent: "center",
              alignItems: "center",
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
