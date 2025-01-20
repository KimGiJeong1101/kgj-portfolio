import { motion } from "framer-motion";
import { Box, Button, Grid, Typography } from "@mui/material";
import { scroller } from "react-scroll"; // scroller 함수 사용

import {
  Phone,
  LocationOn,
  AccountCircle,
  Event,
  Mail,
} from "@mui/icons-material";

const AboutMeLast = () => {
  const handleScroll = (target) => {
    scroller.scrollTo(target, {
      duration: 800,
      smooth: true,
      offset: -80, // 헤더 높이 고려
    });
  };

  return (
    <motion.div
      style={{
        background: "#f9f9f9",
        color: "black", // 텍스트 가독성을 위해 색상 변경
        textAlign: "center",
        fontSize: "clamp(30px, 5vw, 50px)",
        marginTop: "50px",
      }}
      initial={{ opacity: 0 }} // 초기 상태: 보이지 않음
      animate={{ opacity: 1 }} // 애니메이션 끝 상태: 보이게
      transition={{ duration: 2 }} // 애니메이션 지속 시간: 2초
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "20px", sm: "50px", md: "150px" },
        }}
      >
        <Grid
          container
          sx={{
            border: "solid 2px #F8F8FF", // 자연스러운 색상과 두께로 수정 (회색 계열)
            borderRadius: "45px", // 둥근 테두리
            overflow: "hidden", // 자식 요소가 테두리를 벗어나지 않도록 처리
            height: "100%",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.9)", // 부드러운 그림자
            marginTop: { xs: 5, lg: 0 },
          }}
        >
          {/* 왼쪽/위 영역 */}
          <Grid
            item
            xs={12} // 모바일일 때 전체 폭 차지
            md={3} // 웹일 때 1:3 비율에서 1
            sx={{
              backgroundColor: "#F8F8FF", // 테스트용 색상
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: { xs: "25px", lg: "0px" },
            }}
          >
            <Box>
              <img
                style={{
                  width: "75%",
                  height: "75%",
                  borderRadius: "25%",
                }}
                src="./images/이력서사진.jpg"
              ></img>
            </Box>
          </Grid>

          {/* 오른쪽/아래 영역 */}
          <Grid
            item
            xs={12} // 모바일일 때 전체 폭 차지
            md={9} // 웹일 때 1:3 비율에서 3
            sx={{
              backgroundColor: "#F8F8FF", // 테스트용 색상
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {/* 오른쪽/아래 영역을 위아래로 나누는 Grid 컨테이너 */}
            <Grid
              container
              direction="column" // 위아래로 나누기
              sx={{
                height: "100%", // 부모 영역의 높이 채우기
                padding: "20px", // 내부 여백 추가
              }}
            >
              {/* 위쪽 영역 */}
              <Grid
                item
                sx={{
                  flex: 1, // 위아래 영역을 비율로 나누고 싶을 때 사용 (1:1 비율)
                  display: "flex",
                  justifyContent: "center", // 가로 정렬
                  alignItems: "center", // 세로 정렬
                  backgroundColor: "#F8F8FF", // 테스트용 색상
                  width: "100%",
                }}
              >
                {/* 위쪽 콘텐츠 */}
                <Grid
                  sx={{
                    alignItems: "flex-start",
                    marginLeft: { xs: "2px", lg: "30px" },
                  }}
                  container
                  direction="column"
                  spacing={2} // 각 항목 간 간격 설정
                >
                  <Grid sx={{ margin: "0px" }} item>
                    <Typography
                      sx={{
                        display: "inline",
                        marginRight: { xs: "6px", lg: "20px" },
                        verticalAlign: "middle", // 수직 정렬
                      }}
                    >
                      <AccountCircle
                        sx={{
                          fontSize: { xs: "25px", lg: "50px" }, // 모바일에서는 글자 크기 줄이기
                          color: "#3B3B3B",
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "Gyeonggi_Title_Medium",
                        fontWeight: "bold",
                        fontSize: { xs: "18px", lg: "35px" }, // 모바일에서는 글자 크기 줄이기
                        verticalAlign: "middle", // 수직 정렬
                        color: "#3B3B3B",
                      }}
                    >
                      이름:
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "omyu_pretty",
                        fontSize: { xs: "17px", lg: "35px" }, // 모바일에서는 글자 크기 줄이기
                        marginLeft: { xs: "4px", lg: "12px" },
                        verticalAlign: "middle", // 수직 정렬
                        color: "#3B3B3B",
                        fontWeight: "bold",
                      }}
                    >
                      김기정
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        display: "inline",
                        marginRight: { xs: "6px", lg: "20px" },
                        verticalAlign: "middle", // 수직 정렬
                      }}
                    >
                      <Event
                        sx={{
                          fontSize: { xs: "25px", lg: "50px" }, // 모바일에서는 글자 크기 줄이기
                          color: "#3B3B3B",
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "Gyeonggi_Title_Medium",
                        fontWeight: "bold",
                        fontSize: { xs: "18px", lg: "35px" }, // 모바일에서는 글자 크기 줄이기
                        verticalAlign: "middle", // 수직 정렬
                        color: "#3B3B3B",
                      }}
                    >
                      생년월일:
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "omyu_pretty",
                        fontSize: { xs: "17px", lg: "35px" }, // 모바일에서는 글자 크기 줄이기
                        marginLeft: { xs: "4px", lg: "12px" },
                        verticalAlign: "middle", // 수직 정렬
                        color: "#3B3B3B",
                        fontWeight: "bold",
                      }}
                    >
                      1993.11.01
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        display: "inline",
                        marginRight: { xs: "6px", lg: "20px" },
                        verticalAlign: "middle", // 수직 정렬
                        color: "#3B3B3B",
                      }}
                    >
                      <Phone
                        sx={{
                          fontSize: { xs: "25px", lg: "50px" }, // 모바일에서는 글자 크기 줄이기
                          color: "#3B3B3B",
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "Gyeonggi_Title_Medium",
                        fontWeight: "bold",
                        fontSize: { xs: "18px", lg: "35px" }, // 모바일에서는 글자 크기 줄이기
                        verticalAlign: "middle", // 수직 정렬
                        color: "#3B3B3B",
                      }}
                    >
                      연락처:
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "omyu_pretty",
                        fontSize: { xs: "17px", lg: "35px" }, // 모바일에서는 글자 크기 줄이기
                        marginLeft: { xs: "4px", lg: "12px" },
                        verticalAlign: "middle", // 수직 정렬
                        color: "#3B3B3B",
                        fontWeight: "bold",
                      }}
                    >
                      010 - 2905 - 2325
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        display: "inline",
                        marginRight: { xs: "6px", lg: "20px" },
                        verticalAlign: "middle", // 수직 정렬
                        color: "#3B3B3B",
                      }}
                    >
                      <Mail
                        sx={{
                          fontSize: { xs: "25px", lg: "50px" }, // 모바일에서는 글자 크기 줄이기
                          color: "#3B3B3B",
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "Gyeonggi_Title_Medium",
                        fontWeight: "bold",
                        fontSize: { xs: "18px", lg: "35px" }, // 모바일에서는 글자 크기 줄이기
                        verticalAlign: "middle", // 수직 정렬
                        color: "#3B3B3B",
                      }}
                    >
                      이메일:
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "omyu_pretty",
                        fontSize: { xs: "17px", lg: "35px" }, // 모바일에서는 글자 크기 줄이기
                        marginLeft: { xs: "4px", lg: "12px" },
                        verticalAlign: "middle", // 수직 정렬
                        color: "#3B3B3B",
                        fontWeight: "bold",
                      }}
                    >
                      odgwmcsoqw@naver.com
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        display: "inline",
                        marginRight: { xs: "6px", lg: "20px" },
                        verticalAlign: "middle", // 수직 정렬
                      }}
                    >
                      <LocationOn
                        sx={{
                          fontSize: { xs: "25px", lg: "50px" }, // 모바일에서는 글자 크기 줄이기
                          color: "#3B3B3B",
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "Gyeonggi_Title_Medium",
                        fontWeight: "bold",
                        fontSize: { xs: "18px", lg: "35px" }, // 모바일에서는 글자 크기 줄이기
                        verticalAlign: "middle", // 수직 정렬
                        color: "#3B3B3B",
                      }}
                    >
                      위치:
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "omyu_pretty",
                        fontSize: { xs: "17px", lg: "35px" }, // 모바일에서는 글자 크기 줄이기
                        marginLeft: { xs: "4px", lg: "12px" },
                        verticalAlign: "middle", // 수직 정렬
                        color: "#3B3B3B",
                        fontWeight: "bold",
                      }}
                    >
                      경기 부천시 성곡로
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              {/* 아래쪽 영역 */}
              <Grid
                item
                sx={{
                  flex: 1, // 위아래 영역을 비율로 나누고 싶을 때 사용 (1:1 비율)
                  display: "flex",
                  justifyContent: "center", // 가로 정렬
                  alignItems: "center", // 세로 정렬
                  backgroundColor: "#F8F8FF", // 테스트용 색상
                  marginTop: { xs: "15px", lg: "12px" },
                }}
              >
                {/* 아래쪽 콘텐츠 */}
                <Grid
                  container
                  sx={{
                    justifyContent: "center", // 가로 정렬
                    alignItems: "center", // 세로 정렬
                    gap: "10px", // 버튼 간 간격
                  }}
                >
                  <Button
                    onClick={() => handleScroll("skill")}
                    sx={{
                      textTransform: "none",
                      border: "2px solid black",
                      fontSize: { xs: "13px", lg: "17px" },
                      color: "white",
                      background: "#202020",
                      borderRadius: "22px",
                      "&:hover": {
                        backgroundColor: "#F8F8FF", // 호버 시 배경색
                        color: "black", // 호버 시 텍스트 색상
                        textTransform: "none", // 대문자 변환 방지
                      },
                    }}
                  >
                    Skill 보기
                  </Button>
                  <Button
                    onClick={() => handleScroll("project")}
                    sx={{
                      textTransform: "none",
                      border: "2px solid black",
                      fontSize: { xs: "13px", lg: "17px" },
                      color: "white",
                      background: "#202020",
                      borderRadius: "22px",
                      "&:hover": {
                        backgroundColor: "#F8F8FF", // 호버 시 배경색
                        color: "black", // 호버 시 텍스트 색상
                        textTransform: "none", // 대문자 변환 방지
                      },
                    }}
                  >
                    Project 보기
                  </Button>
                  <Button
                    onClick={() => handleScroll("career")}
                    sx={{
                      textTransform: "none",
                      border: "2px solid black",
                      fontSize: { xs: "13px", lg: "17px" },
                      color: "white",
                      background: "#202020",
                      borderRadius: "22px",
                      "&:hover": {
                        backgroundColor: "#F8F8FF", // 호버 시 배경색
                        color: "black", // 호버 시 텍스트 색상
                        textTransform: "none", // 대문자 변환 방지
                      },
                    }}
                  >
                    Career 보기
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default AboutMeLast;
