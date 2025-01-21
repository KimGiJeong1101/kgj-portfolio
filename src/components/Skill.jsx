import React from "react";
import { Box, Container, Typography } from "@mui/material";

const skillCategoryStyle = {
  background: "#3C3C3C",
  boxShadow: "1px 2px 8px 2px rgba(255, 255, 255, 0.4)", // 더 두꺼운 흰색 그림자
  border: "solid 1px #3C3C3C",
  color: "white",
  padding: "15px",
  borderRadius: "15px",
  fontSize: "18px",
  fontWeight: "bold",
  margin: 1,
  fontFamily: "HakgyoansimDunggeunmisoTTF-B",
};

const skillCategoryBoxStyle = {
  flex: 1,
  backgroundColor: "#3E2723",
  display: "flex",
  flexDirection: "column", // 위 아래로 나누기
  justifyContent: "center",
  alignItems: "center",
};

const skillBoxTopStyle = {
  flex: 1, // 1 비율
  width: "100%",
  backgroundColor: "#222222", // 하단 1 위 영역 배경색
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "35px 35px 0px 0px",
  borderTop: "solid 4px #FFFAF0",
  borderLeft: "solid 4px #FFFAF0",
  borderRight: "solid 4px #FFFAF0",
};

const skillBoxBottomStyle = {
  width: "100%",
  backgroundColor: "#222222", // 하단 1 아래 영역 배경색
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0px 0px 35px 35px",
  borderBottom: "solid 4px #FFFAF0",
  borderLeft: "solid 4px #FFFAF0",
  borderRight: "solid 4px #FFFAF0",
};

const skillImgStyle = {
  height: { xs: 65, lg: 100 }, // 모바일에서는 글자 크기 줄이기
  width: { xs: 65, lg: 100 }, // 모바일에서는 글자 크기 줄이기
  background: "black",
  position: "relative", // 부모 요소에 상대적인 위치 지정
  borderRadius: "18px",
  boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
  margin: { xs: "9px", lg: "20px" },
  display: "flex",
  justifyContent: "center", // 가로 방향 가운데 정렬
  alignItems: "center", // 세로 방향 가운데 정렬

  "&:hover": {
    background: "black", // 호버 시 박스의 배경색을 green으로 변경
  },
  "&:hover .hover-text": {
    opacity: 1, // 호버 시 텍스트가 보이도록 설정
  },
  "&:hover img": {
    opacity: 0.2, // 호버 시 이미지를 반투명하게 처리
  },
};

const imgSize = {
  width: "80%",
  height: "80%",
  transition: "opacity 0.3s",
};

const skillAfterHover = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 0, // 기본적으로 텍스트는 보이지 않음
  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
  padding: "5px", // 텍스트에 여백 추가
};
const hoverFontStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontWeight: "bold", // 글자 굵기
  fontFamily: "yg-jalnan",
};

const Skill = () => {
  return (
    <Box
      id="skill"
      sx={{
        width: "100%", // 화면 전체 너비
        height: { xs: "130vh", lg: "100vh" },
        display: "flex",
        flexDirection: "column",
        marginTop: { xs: 6, lg: 0 },
        paddingBottom: 4,
        background: "#3E2723",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          margin: "12px",
          padding: "12px",
          height: "80px",
          fontFamily: "'Quicksand', sans-serif", // 구글 폰트
          fontSize: "4rem", // 보통 크기
          fontWeight: "bold", // 굵은 글씨
          color: "#F9F9F9", // 조금 더 부드러운 색
          textAlign: "center",
        }}
      >
        Skill
      </Typography>
      {/* 상단 영역 */}
      {/* Developer Tools영역 */}
      <Box
        sx={{
          ...skillCategoryBoxStyle,
          margin: 2,
        }}
      >
        {/* 상단 위 영역 */}
        <Box
          sx={{
            ...skillBoxTopStyle,
          }}
        >
          <Typography
            sx={{
              ...skillCategoryStyle,
            }}
          >
            Developer Tools
          </Typography>
        </Box>

        {/* 상단 아래 영역 */}
        <Box
          sx={{
            ...skillBoxBottomStyle,
            flex: 3, // 3 비율
            flexWrap: "wrap", // 줄바꿈을 허용
          }}
        >
          <Box
            sx={{
              ...skillImgStyle,
            }}
          >
            <img
              src="./images/vscode.png"
              alt="VS-Code"
              style={{
                ...imgSize,
              }}
            />
            <Box
              className="hover-text"
              sx={{
                ...skillAfterHover,
              }}
            >
              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 18, lg: 24 }, // 글자 크기
                }}
              >
                VS
              </Typography>

              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 18, lg: 24 }, // 글자 크기
                }}
              >
                Code
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...skillImgStyle,
            }}
          >
            <img
              src="./images/IntelliJ.png"
              alt="IntelliJ"
              style={{
                ...imgSize,
              }}
            />
            <Box
              className="hover-text"
              sx={{
                ...skillAfterHover,
              }}
            >
              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 18, lg: 24 }, // 글자 크기
                }}
              >
                IntelliJ
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...skillImgStyle,
            }}
          >
            <img
              src="./images/eclipse.png"
              alt="Eclipse"
              style={{
                ...imgSize,
              }}
            />
            <Box
              className="hover-text"
              sx={{
                ...skillAfterHover,
              }}
            >
              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 18, lg: 24 }, // 글자 크기
                }}
              >
                Eclipse
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...skillImgStyle,
            }}
          >
            <img
              src="./images/git.png"
              alt="Git"
              style={{
                ...imgSize,
              }}
            />
            <Box
              className="hover-text"
              sx={{
                ...skillAfterHover,
              }}
            >
              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 18, lg: 24 }, // 글자 크기
                }}
              >
                Git
              </Typography>
            </Box>
          </Box>
          {/* 줄바꿈영역 */}
          <Box
            sx={{
              height: "16px",
              display: "block",
              flex: "0 0 100%",
              margin: "-10px",
            }}
          />{" "}
          {/* 빈 공간 추가 */}
          {/* 줄바꿈영역 */}
          <Box
            sx={{
              ...skillImgStyle,
            }}
          >
            <img
              src="./images/OracleDeTool.png"
              alt="Oracle SQL Developer"
              style={{
                ...imgSize,
              }}
            />
            <Box
              className="hover-text"
              sx={{
                ...skillAfterHover,
              }}
            >
              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 14, lg: 18 }, // 글자 크기
                }}
              >
                Oracle
              </Typography>

              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 14, lg: 18 }, // 글자 크기
                }}
              >
                SQL
              </Typography>

              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 14, lg: 18 }, // 글자 크기
                }}
              >
                Developer
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...skillImgStyle,
            }}
          >
            <img
              src="./images/HeidiSQL.png"
              alt="HeidiSQL"
              style={{
                ...imgSize,
              }}
            />
            <Box
              className="hover-text"
              sx={{
                ...skillAfterHover,
              }}
            >
              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 15, lg: 21 }, // 글자 크기
                }}
              >
                HeidiSQL
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...skillImgStyle,
            }}
          >
            <img
              src="./images/compass.png"
              alt="MongoDBCompass"
              style={{
                ...imgSize,
              }}
            />
            <Box
              className="hover-text"
              sx={{
                ...skillAfterHover,
              }}
            >
              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 13, lg: 18 }, // 글자 크기
                }}
              >
                MongoDB
              </Typography>

              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 13, lg: 18 }, // 글자 크기
                }}
              >
                Compass
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...skillImgStyle,
            }}
          >
            <img
              src="./images/SourceTree.png"
              alt="SourceTree"
              style={{
                ...imgSize,
              }}
            />
            <Box
              className="hover-text"
              sx={{
                ...skillAfterHover,
              }}
            >
              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 17, lg: 24 }, // 글자 크기
                }}
              >
                Source
              </Typography>
              <Typography
                sx={{
                  ...hoverFontStyle,
                  fontSize: { xs: 17, lg: 24 }, // 글자 크기
                }}
              >
                Tree
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Developer Tools영역 끝 */}

      {/* 하단 영역 */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" }, // 모바일: 세로, 데스크톱: 가로
          padding: 1,
        }}
      >
        {/* 하단 1 영역 */}
        {/* FrontEnd 영역 */}
        <Box
          sx={{
            ...skillCategoryBoxStyle,
            width: "100%", // 모바일에서 너비 100%

            margin: { xs: 0, lg: 1 },
            marginTop: { xs: 1, lg: 0 },
          }}
        >
          {/* 하단 1 위 영역 */}
          <Box
            sx={{
              ...skillBoxTopStyle,
            }}
          >
            <Typography
              sx={{
                ...skillCategoryStyle,
              }}
            >
              FrontEnd
            </Typography>
          </Box>

          {/* 하단 1 아래 영역 */}
          <Box
            sx={{
              ...skillBoxBottomStyle,
              flex: 3, // 3 비율
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/React.png"
                alt="React"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 19, lg: 26 }, // 글자 크기
                  }}
                >
                  React
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/javascript.png"
                alt="JavaScript"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 13, lg: 18 }, // 글자 크기
                  }}
                >
                  JavaScript
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/ajax.png"
                alt="AJAX"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 19, lg: 26 }, // 글자 크기
                  }}
                >
                  AJAX
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/jquery.png"
                alt="jQuery"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 17, lg: 23 }, // 글자 크기
                  }}
                >
                  jQuery
                </Typography>
              </Box>
            </Box>
            {/* 줄바꿈영역 */}
            <Box
              sx={{
                height: "16px",
                display: "block",
                flex: "0 0 100%",
                margin: "-10px",
              }}
            />{" "}
            {/* 빈 공간 추가 */}
            {/* 줄바꿈영역 */}
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/html.png"
                alt="HTML"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 17, lg: 26 }, // 글자 크기
                  }}
                >
                  HTML
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/css3.png"
                alt="CSS3"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 17, lg: 26 }, // 글자 크기
                  }}
                >
                  CSS3
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/bootstrap.png"
                alt="BootStrap"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 13, lg: 19 }, // 글자 크기
                  }}
                >
                  BootStrap
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/JSP.png"
                alt="JSP"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 20, lg: 27 }, // 글자 크기
                  }}
                >
                  JSP
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* FrontEnd 영역 끝 */}

        {/* 하단 2 영역 */}
        {/* BackEnd 영역 */}
        <Box
          sx={{
            ...skillCategoryBoxStyle,
            width: "100%", // 모바일에서 너비 100%
            margin: { xs: 0, lg: 1 },
            marginTop: { xs: 1, lg: 0 },
          }}
        >
          {/* 하단 2 위 영역 */}
          <Box
            sx={{
              ...skillBoxTopStyle,
            }}
          >
            <Typography
              sx={{
                ...skillCategoryStyle,
              }}
            >
              BackEnd
            </Typography>
          </Box>

          {/* 하단 2 아래 영역 */}
          <Box
            sx={{
              ...skillBoxBottomStyle,
              flex: 3, // 3 비율
            }}
          >
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/java.png"
                alt="JAVA"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 20, lg: 27 }, // 글자 크기
                  }}
                >
                  JAVA
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/spring.png"
                alt="Spring"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 15, lg: 24 }, // 글자 크기
                  }}
                >
                  Spring
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/springboot.png"
                alt="SpringBoot"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 15, lg: 24 }, // 글자 크기
                  }}
                >
                  Spring
                </Typography>

                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 15, lg: 24 }, // 글자 크기
                  }}
                >
                  Boot
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/nodeJS.png"
                alt="NodeJS"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 14, lg: 22 }, // 글자 크기
                  }}
                >
                  NodeJS
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/expressJS.png"
                alt="ExpressJS"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 10, lg: 18 }, // 글자 크기
                  }}
                >
                  ExpressJS
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* BackEnd 영역 끝 */}

        {/* 하단 3 영역 */}
        {/* DataBase 영역 */}
        <Box
          sx={{
            ...skillCategoryBoxStyle,
            width: "100%", // 모바일에서 너비 100%
            margin: { xs: 0, lg: 1 },
            marginTop: { xs: 1, lg: 0 },
          }}
        >
          {/* 하단 3 위 영역 */}
          <Box
            sx={{
              ...skillBoxTopStyle,
            }}
          >
            <Typography
              sx={{
                ...skillCategoryStyle,
              }}
            >
              DataBase
            </Typography>
          </Box>

          {/* 하단 3 아래 영역 */}
          <Box
            sx={{
              ...skillBoxBottomStyle,
              flex: 3, // 3 비율
            }}
          >
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/OracleDB.png"
                alt="OracleDB"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 14, lg: 20 }, // 글자 크기
                  }}
                >
                  OracleDB
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/mysql.png"
                alt="MySQL"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 17, lg: 24 }, // 글자 크기
                  }}
                >
                  MySQL
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/mariadb.png"
                alt="MariaDB"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 15, lg: 22 }, // 글자 크기
                  }}
                >
                  MariaDB
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ...skillImgStyle,
              }}
            >
              <img
                src="./images/MongoDB.png"
                alt="MongoDB"
                style={{
                  ...imgSize,
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  ...skillAfterHover,
                }}
              >
                <Typography
                  sx={{
                    ...hoverFontStyle,
                    fontSize: { xs: 13, lg: 19 }, // 글자 크기
                  }}
                >
                  MongoDB
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* DataBase 영역 끝 */}
      </Box>
    </Box>
  );
};

export default Skill;
