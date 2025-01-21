import React from "react";
import { Box, Container, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  OndemandVideo as VideoIcon,
  OpenInNew as OpenInNewIcon,
} from "@mui/icons-material";
import "../App.css";
import {
  toyAfterHover,
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

const ToyProject = ({ toyprojectId, isVisible }) => {
  // 공통 스타일을 객체로 정의
  const toyBoxStyle = {
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
      {toyprojectId === 1 && (
        <Box
          sx={{
            ...toyBoxStyle,
          }}
        >
          <img
            src="./images/portfolio.png"
            alt="portfolio"
            style={{
              ...imgStyle,
            }}
          />

          <Box
            className="hover-text"
            sx={{
              ...toyAfterHover,
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                ...titleStyle,
              }}
            >
              포트폴리오 사이트
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                ...titleFontStyle,
              }}
            >
              React를 활용한 포트폴리오 웹사이트
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                ...dateStyle,
              }}
            >
              2025.01
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
                리액트로 제작한 포트폴리오 사이트로, 다양한 라이브러리와
                애니메이션을 활용해 반응형 UI와 생동감 있는 효과를 구현했습니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  ...ulStyle,
                }}
              >
                <li>
                  React로 유연하고 효율적인 페이지 구현, 컴포넌트 구조로
                  재사용성과 유지보수성 향상
                </li>
                <li>Vite로 최적화된 개발 환경 제공, 빠른 빌드 속도</li>
                <li>
                  MUI 라이브러리로 다양한 UI 구성, 일관된 디자인과 빠른 개발
                  가능
                </li>
                <li>커스터마이징된 함수로 UI 동작 다양화, 사용자 경험 향상</li>
                <li>개별 컴포넌트 관리로 코드 가독성 및 유지보수성 향상</li>
                <li>
                  그림, 아이콘, hover 효과로 시각적 흥미 유도, 몰입감 있는 UI
                  제공
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
                    "React.sj",
                    "Vite",
                    "Material-UI",
                    "JavaScript",
                    "JES6+",
                    "React Hooks",
                    "Animation Libraries",
                    "Material Icons",
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
                  href="https://github.com/KimGiJeong1101/kgj-portfolio"
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
                  href="https://kimgijeong1101.github.io/kgj-portfolio/"
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
                    <OpenInNewIcon
                      sx={{ fontSize: { xs: 23, lg: 28 } }}
                    ></OpenInNewIcon>
                  </Box>
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {toyprojectId === 2 && (
        <Box
          sx={{
            ...toyBoxStyle,
          }}
        >
          <img
            src="./images/keymanager.png"
            alt="keymanager"
            style={{
              ...imgStyle,
            }}
          />

          <Box
            className="hover-text"
            sx={{
              ...toyAfterHover,
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                ...titleStyle,
              }}
            >
              제품키 관리 사이트
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                ...titleFontStyle,
              }}
            >
              MERN 스택과 PostgreSQL로 만든 키 관리 사이트
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                ...dateStyle,
              }}
            >
              2024.10
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
                Windows 키와 Microsoft Office 등 키 관리를 위한 사이트로,
                React로 동적 렌더링을 최적화하고, Express와 Node.js로 빠르고
                안정적인 서버 환경을 구현했습니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  ...ulStyle,
                }}
              >
                <li>React를 사용해 동적 렌더링을 최적화</li>
                <li>React Hook과 useState로 효율적인 상태 관리를 구현</li>
                <li>Node.js와 Express로 비동기 처리와 안정적인 백엔드 구축</li>
                <li>Nodemon으로 코드 변경 시 서버 자동 재시작 설정</li>
                <li>Axios로 RESTful API 구현 및 데이터 통신 지원</li>
                <li>PostgreSQL로 데이터베이스 설계와 안정성 확보</li>
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
                    "React Hooks",
                    "Material-UI",
                    "Node.js",
                    "Express.js",
                    "PostgreSQL",
                    "Axios",
                    "RESTful API",
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
                  href="https://github.com/KimGiJeong1101/KeyManager"
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
                {/* <a
                  href="https://example.com"
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
                </a> */}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {toyprojectId === 3 && (
        <Box
          sx={{
            ...toyBoxStyle,
          }}
        >
          <img
            src="./images/Haksa.jpg"
            alt="Haksa"
            style={{
              ...imgStyle,
            }}
          />

          <Box
            className="hover-text"
            sx={{
              ...toyAfterHover,
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                ...titleStyle,
              }}
            >
              학사관리 프로그램
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                ...titleFontStyle,
              }}
            >
              Java Swing으로 개발한 GUI Application 프로젝트
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                ...dateStyle,
              }}
            >
              2023.12
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
                Java Swing으로 개발한 프로그램으로, 학생 및 도서 관리 기능을
                제공해 학사 업무를 효율적으로 지원합니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  ...ulStyle,
                }}
              >
                <li>
                  Java Swing을 활용하여 프로그램을 개발, 독립 실행형
                  애플리케이션으로 동작
                </li>
                <li>
                  Java Swing에서 제공하는 UI 컴포넌트를 사용하여 별도의 HTML과
                  같은 프론트엔드 기술이 필요하지 않음
                </li>
                <li>
                  Oracle DB를 기반으로 데이터베이스를 설계, 테이블 간의 관계를
                  체계적으로 설정하여 데이터의 일관성과 정확성을 보장
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
                    "Java",
                    "Java Swing",
                    "JDBC",
                    "Oracle DB",
                    "SQL",
                    "OOP",
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
                  href="./images/Haksavideo.mp4"
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

      {toyprojectId === 4 && (
        <Box
          sx={{
            ...toyBoxStyle,
          }}
        >
          <img
            src="./images/hyundai.jpg"
            alt="hyundai"
            style={{
              ...imgStyle,
            }}
          />

          <Box
            className="hover-text"
            sx={{
              ...toyAfterHover,
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                ...titleStyle,
              }}
            >
              현대자동차 Demo 사이트
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                ...titleFontStyle,
              }}
            >
              HTML, CSS3, JavaScript를 활용한 데모 사이트
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                ...dateStyle,
              }}
            >
              2023.11
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
                현대자동차 웹사이트를 참고해 만든 반응형 웹페이지로, PC 및
                모바일 최적화 디자인과 비디오 캐러셀을 사용해 콘텐츠를 소개하며,
                HTML, CSS, JavaScript, Bootstrap, jQuery로 구현했습니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  ...ulStyle,
                }}
              >
                <li>Bootstrap을 활용하여 반응형 네비게이션 바 구현</li>
                <li>
                  햄버거 메뉴를 사용하여 모바일에서 메뉴를 쉽게 열고 닫을 수
                  있도록 설계
                </li>
                <li>PC와 모바일에서 각각 최적화된 비디오 캐러셀 구현</li>
                <li>
                  다양한 이미지 콘텐츠를 보여주는 섹션으로, PC와 모바일 버전이
                  분리되어 제공
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
                    "HTML5",
                    "CSS3",
                    "Bootstrap",
                    "jQuery",
                    "JavaScript",
                    "MP4 video",
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
                  href="https://example.com"
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
                    <OpenInNewIcon
                      sx={{ fontSize: { xs: 23, lg: 28 } }}
                    ></OpenInNewIcon>
                  </Box>
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {toyprojectId === 5 && (
        <Box
          sx={{
            ...toyBoxStyle,
          }}
        >
          <img
            src="./images/kdigital.jpg"
            alt="kdigital"
            style={{
              ...imgStyle,
            }}
          />

          <Box
            className="hover-text"
            sx={{
              ...toyAfterHover,
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                ...titleStyle,
              }}
            >
              글로벌IT Demo 사이트
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                ...titleFontStyle,
              }}
            >
              HTML, CSS3, JavaScript를 활용한 데모 사이트
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                ...dateStyle,
              }}
            >
              2023.11
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
                JavaScript, HTML, CSS, Bootstrap, jQuery로 개발된 웹페이지로,
                글로벌 IT 인재 개발원 소개, 교육과정, 신청, 오시는 길을
                제공하며, 카카오 지도 API와 애니메이션 효과로 UX를 개선했습니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  ...ulStyle,
                }}
              >
                <li>Bootstrap을 활용한 반응형 웹 디자인</li>
                <li>
                  jQuery와 Animate.css를 사용, 부드러운 스크롤과 애니메이션 효과
                  구현
                </li>
                <li>HTML5와 CSS3를 사용하여 구조와 스타일 정의</li>
                <li>카카오 지도 API를 활용하여 위치를 시각적으로 제공</li>
                <li>다양한 화면 크기와 브라우저 환경에서 최적화된 UI 제공</li>
                <li>
                  미디어 쿼리를 사용하여 모바일 환경에 적합한 레이아웃 구현
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
                    "HTML5",
                    "CSS3",
                    "Bootstrap",
                    "jQuery",
                    "Animate.css",
                    "JavaScript",
                    "지도API",
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
                  href="https://example.com"
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
                    <OpenInNewIcon
                      sx={{ fontSize: { xs: 23, lg: 28 } }}
                    ></OpenInNewIcon>
                  </Box>
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {toyprojectId === 6 && (
        <Box
          sx={{
            ...toyBoxStyle,
          }}
        >
          <img
            src="./images/swf.jpg"
            alt="swf"
            style={{
              ...imgStyle,
            }}
          />

          <Box
            className="hover-text"
            sx={{
              ...toyAfterHover,
            }}
          >
            {/* 프로젝트 제목 및 아이콘 */}
            <Typography
              sx={{
                ...titleStyle,
              }}
            >
              브랜드 홍보페이지(SWF)
            </Typography>

            {/* 프로젝트 간략 설명 */}

            <Typography
              sx={{
                ...titleFontStyle,
              }}
            >
              동영상 배경을 활용한 브랜드 홍보 웹페이지
            </Typography>

            {/* 프로젝트 기간 */}
            <Typography
              sx={{
                ...dateStyle,
              }}
            >
              2023.11
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
                HTML, CSS, JavaScript로 제작된 웹페이지로, 유튜브 비디오 배경과
                동적 요소로 시각적 효과를 주고, 직관적인 메뉴와 하단 콘텐츠로
                UX를 향상시켰습니다.
              </Typography>{" "}
              <Box
                component="ul"
                sx={{
                  ...ulStyle,
                }}
              >
                <li>유튜브 비디오를 배경으로 사용하여 동적인 효과 제공</li>

                <li>
                  여러 항목으로 구성된 네비게이션 메뉴, 각 항목에 서브 메뉴를
                  추가하여 사용자 편의성 증대
                </li>
                <li>동적 콘텐츠 박스를 배치하여 다양한 콘텐츠를 소개</li>
                <li>사용자 상호작용을 유도하는 자동 롤링 버튼을 추가</li>
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
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Font Awesome",
                    "YouTube Embed",
                    "CSS3 Animation",
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
                  href="https://example.com"
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
                    <OpenInNewIcon
                      sx={{ fontSize: { xs: 23, lg: 28 } }}
                    ></OpenInNewIcon>
                  </Box>
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default ToyProject;
