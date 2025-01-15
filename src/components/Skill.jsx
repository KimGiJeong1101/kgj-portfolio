import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Skill = () => {
  return (
    <Box
      id="skill"
      sx={{
        width: "100%", // 화면 전체 너비
        // height: "130vh", // 화면 전체 높이
        height: { xs: "130vh", sm: "100vh" },
        display: "flex",
        flexDirection: "column",
        // marginBottom: { xs: 10, sm: 5 }, // 여백 제거
        marginTop: { xs: 6, sm: 0 },
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
          flex: 1,
          backgroundColor: "#3E2723",
          display: "flex",
          flexDirection: "column", // 위 아래로 나누기
          justifyContent: "center",
          alignItems: "center",
          margin: 2,
        }}
      >
        {/* 상단 위 영역 */}
        <Box
          sx={{
            flex: 1, // 1 비율
            width: "100%",
            backgroundColor: "#222222", // 상단 위 영역 배경색
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "35px 35px 0px 0px",
            borderTop: "solid 4px #FFFAF0",
            borderLeft: "solid 4px #FFFAF0",
            borderRight: "solid 4px #FFFAF0",
          }}
        >
          <Typography
            sx={{
              background: "#3c3c3c",
              padding: "15px",
              borderRadius: "15px",
              boxShadow: "1px 2px 8px 2px rgba(255, 255, 255, 0.4)", // 더 두꺼운 흰색 그림자
              border: "solid 1px #3c3c3c",
              fontSize: "18px",
              color: "white",
              fontWeight: "bold",
              margin: 1,
              fontFamily: "HakgyoansimDunggeunmisoTTF-B",
            }}
          >
            Developer Tools
          </Typography>
        </Box>

        {/* 상단 아래 영역 */}
        <Box
          sx={{
            flex: 3, // 3 비율
            width: "100%",
            backgroundColor: "#222222", // 상단 아래 영역 배경색
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap", // 줄바꿈을 허용
            borderRadius: "0px 0px 35px 35px",
            borderBottom: "solid 4px #FFFAF0",
            borderLeft: "solid 4px #FFFAF0",
            borderRight: "solid 4px #FFFAF0",
          }}
        >
          <Box
            sx={{
              height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              background: "black",
              position: "relative", // 부모 요소에 상대적인 위치 지정
              borderRadius: "18px",
              boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
              margin: "20px",
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
            }}
          >
            <img
              src="./images/vscode.png"
              alt="VS-Code"
              style={{
                width: "80%",
                height: "80%",
                transition: "opacity 0.3s",
              }}
            />
            <Box
              className="hover-text"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0, // 기본적으로 텍스트는 보이지 않음
                transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                padding: "5px", // 텍스트에 여백 추가
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 18, sm: 24 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
                }}
              >
                VS
              </Typography>

              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 18, sm: 24 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
                }}
              >
                Code
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              background: "black",
              position: "relative", // 부모 요소에 상대적인 위치 지정
              borderRadius: "18px",
              boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
              margin: "20px",
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
            }}
          >
            <img
              src="./images/IntelliJ.png"
              alt="IntelliJ"
              style={{
                width: "80%",
                height: "80%",
                transition: "opacity 0.3s",
              }}
            />
            <Box
              className="hover-text"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0, // 기본적으로 텍스트는 보이지 않음
                transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                padding: "5px", // 텍스트에 여백 추가
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 18, sm: 24 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
                }}
              >
                IntelliJ
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              background: "black",
              position: "relative", // 부모 요소에 상대적인 위치 지정
              borderRadius: "18px",
              boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
              margin: "20px",
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
            }}
          >
            <img
              src="../images/eclipse.png"
              alt="Eclipse"
              style={{
                width: "80%",
                height: "80%",
                transition: "opacity 0.3s",
              }}
            />
            <Box
              className="hover-text"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0, // 기본적으로 텍스트는 보이지 않음
                transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                padding: "5px", // 텍스트에 여백 추가
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 18, sm: 24 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
                }}
              >
                Eclipse
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              background: "black",
              position: "relative", // 부모 요소에 상대적인 위치 지정
              borderRadius: "18px",
              boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
              margin: "20px",
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
            }}
          >
            <img
              src="./images/git.png"
              alt="Git"
              style={{
                width: "80%",
                height: "80%",
                transition: "opacity 0.3s",
              }}
            />
            <Box
              className="hover-text"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0, // 기본적으로 텍스트는 보이지 않음
                transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                padding: "5px", // 텍스트에 여백 추가
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 18, sm: 24 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
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
              height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              background: "black",
              position: "relative", // 부모 요소에 상대적인 위치 지정
              borderRadius: "18px",
              boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
              margin: "20px",
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
            }}
          >
            <img
              src="./images/OracleDeTool.png"
              alt="Oracle SQL Developer"
              style={{
                width: "80%",
                height: "80%",
                transition: "opacity 0.3s",
              }}
            />
            <Box
              className="hover-text"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0, // 기본적으로 텍스트는 보이지 않음
                transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                padding: "5px", // 텍스트에 여백 추가
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 14, sm: 18 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
                }}
              >
                Oracle
              </Typography>

              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 14, sm: 18 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
                }}
              >
                SQL
              </Typography>

              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 14, sm: 18 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
                }}
              >
                Developer
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              background: "black",
              position: "relative", // 부모 요소에 상대적인 위치 지정
              borderRadius: "18px",
              boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
              margin: "20px",
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
            }}
          >
            <img
              src="./images/HeidiSQL.png"
              alt="HeidiSQL"
              style={{
                width: "80%",
                height: "80%",
                transition: "opacity 0.3s",
              }}
            />
            <Box
              className="hover-text"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0, // 기본적으로 텍스트는 보이지 않음
                transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                padding: "5px", // 텍스트에 여백 추가
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 15, sm: 21 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
                }}
              >
                HeidiSQL
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              background: "black",
              position: "relative", // 부모 요소에 상대적인 위치 지정
              borderRadius: "18px",
              boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
              margin: "20px",
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
            }}
          >
            <img
              src="./images/compass.png"
              alt="MongoDBCompass"
              style={{
                width: "80%",
                height: "80%",
                transition: "opacity 0.3s",
              }}
            />
            <Box
              className="hover-text"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0, // 기본적으로 텍스트는 보이지 않음
                transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                padding: "5px", // 텍스트에 여백 추가
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 13, sm: 18 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
                }}
              >
                MongoDB
              </Typography>

              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 13, sm: 18 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
                }}
              >
                Compass
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
              background: "black",
              position: "relative", // 부모 요소에 상대적인 위치 지정
              borderRadius: "18px",
              boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
              margin: "20px",
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
            }}
          >
            <img
              src="./images/SourceTree.png"
              alt="SourceTree"
              style={{
                width: "80%",
                height: "80%",
                transition: "opacity 0.3s",
              }}
            />
            <Box
              className="hover-text"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0, // 기본적으로 텍스트는 보이지 않음
                transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                padding: "5px", // 텍스트에 여백 추가
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 17, sm: 24 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
                }}
              >
                Source
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: 17, sm: 24 }, // 글자 크기
                  fontWeight: "bold", // 글자 굵기
                  fontFamily: "yg-jalnan",
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
          flexDirection: { xs: "column", sm: "row" }, // 모바일: 세로, 데스크톱: 가로
          padding: 1,
        }}
      >
        {/* 하단 1 영역 */}
        {/* FrontEnd 영역 */}
        <Box
          sx={{
            flex: 1,
            width: "100%", // 모바일에서 너비 100%
            backgroundColor: "#3E2723",
            display: "flex",
            flexDirection: "column", // 위 아래로 나누기
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: 0, sm: 1 },
            marginTop: { xs: 1, sm: 0 },
          }}
        >
          {/* 하단 1 위 영역 */}
          <Box
            sx={{
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
            }}
          >
            <Typography
              sx={{
                background: "#3c3c3c",
                padding: "15px",
                borderRadius: "15px",
                boxShadow: "1px 2px 8px 2px rgba(255, 255, 255, 0.4)", // 더 두꺼운 흰색 그림자
                border: "solid 1px #3c3c3c",
                fontSize: "18px",
                color: "white",
                fontWeight: "bold",
                margin: 1,
                fontFamily: "HakgyoansimDunggeunmisoTTF-B",
              }}
            >
              FrontEnd
            </Typography>
          </Box>

          {/* 하단 1 아래 영역 */}
          <Box
            sx={{
              flex: 3, // 3 비율
              width: "100%",
              backgroundColor: "#222222", // 하단 1 아래 영역 배경색
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              borderRadius: "0px 0px 35px 35px",
              borderBottom: "solid 4px #FFFAF0",
              borderLeft: "solid 4px #FFFAF0",
              borderRight: "solid 4px #FFFAF0",
            }}
          >
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/React.png"
                alt="React"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 19, sm: 26 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  React
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/javascript.png"
                alt="JavaScript"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 13, sm: 18 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  JavaScript
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/ajax.png"
                alt="AJAX"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 19, sm: 26 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  AJAX
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/jquery.png"
                alt="jQuery"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 17, sm: 23 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
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
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/html.png"
                alt="HTML"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 17, sm: 26 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  HTML
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/css3.png"
                alt="CSS3"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 17, sm: 26 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  CSS3
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/bootstrap.png"
                alt="BootStrap"
                style={{
                  width: "100%",
                  height: "75%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 13, sm: 19 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  BootStrap
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/JSP.png"
                alt="JSP"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 20, sm: 27 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
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
            flex: 1,
            width: "100%", // 모바일에서 너비 100%
            backgroundColor: "#3E2723",
            display: "flex",
            flexDirection: "column", // 위 아래로 나누기
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: 0, sm: 1 },
            marginTop: { xs: 1, sm: 0 },
          }}
        >
          {/* 하단 2 위 영역 */}
          <Box
            sx={{
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
            }}
          >
            <Typography
              sx={{
                padding: "15px",
                borderRadius: "15px",
                boxShadow: "1px 2px 8px 2px rgba(255, 255, 255, 0.4)", // 더 두꺼운 흰색 그림자
                border: "solid 1px #3c3c3c",
                fontSize: "18px",
                color: "white",
                background: "#3c3c3c",
                fontWeight: "bold",
                margin: 1,
                fontFamily: "HakgyoansimDunggeunmisoTTF-B",
              }}
            >
              BackEnd
            </Typography>
          </Box>

          {/* 하단 2 아래 영역 */}
          <Box
            sx={{
              flex: 3, // 3 비율
              width: "100%",
              backgroundColor: "#222222", // 하단 1 아래 영역 배경색
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0px 0px 35px 35px",
              borderBottom: "solid 4px #FFFAF0",
              borderLeft: "solid 4px #FFFAF0",
              borderRight: "solid 4px #FFFAF0",
            }}
          >
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.9)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/java.png"
                alt="JAVA"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 20, sm: 27 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  JAVA
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/spring.png"
                alt="Spring"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 15, sm: 24 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  Spring
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.9)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/springboot.png"
                alt="SpringBoot"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 15, sm: 24 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  Spring
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 15, sm: 24 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  Boot
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.9)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/nodeJS.png"
                alt="NodeJS"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 14, sm: 22 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  NodeJS
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.9)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/expressJS.png"
                alt="ExpressJS"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 10, sm: 18 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
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
            flex: 1,
            width: "100%", // 모바일에서 너비 100%
            backgroundColor: "#3E2723",
            display: "flex",
            flexDirection: "column", // 위 아래로 나누기
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: 0, sm: 1 },
            marginTop: { xs: 1, sm: 0 },
          }}
        >
          {/* 하단 3 위 영역 */}
          <Box
            sx={{
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
            }}
          >
            <Typography
              sx={{
                background: "#3C3C3C",
                boxShadow: "1px 2px 8px 2px rgba(255, 255, 255, 0.4)", // 더 두꺼운 흰색 그림자
                border: "solid 1px #3c3c3c",
                color: "white",
                padding: "15px",
                borderRadius: "15px",
                fontSize: "18px",
                fontWeight: "bold",
                margin: 1,
                fontFamily: "HakgyoansimDunggeunmisoTTF-B",
              }}
            >
              DataBase
            </Typography>
          </Box>

          {/* 하단 3 아래 영역 */}
          <Box
            sx={{
              flex: 3, // 3 비율
              width: "100%",
              backgroundColor: "#222222", // 하단 1 아래 영역 배경색
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0px 0px 35px 35px",
              borderBottom: "solid 4px #FFFAF0",
              borderLeft: "solid 4px #FFFAF0",
              borderRight: "solid 4px #FFFAF0",
            }}
          >
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.9)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/OracleDB.png"
                alt="OracleDB"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",

                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 14, sm: 20 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  OracleDB
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.9)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/mysql.png"
                alt="MySQL"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",

                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 17, sm: 24 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  MySQL
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.9)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/mariadb.png"
                alt="MariaDB"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",

                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 15, sm: 22 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
                  }}
                >
                  MariaDB
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                width: { xs: 70, sm: 100 }, // 모바일에서는 글자 크기 줄이기
                background: "black",
                position: "relative", // 부모 요소에 상대적인 위치 지정
                borderRadius: "18px",
                boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.9)", // 더 두꺼운 흰색 그림자
                margin: "20px",
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
              }}
            >
              <img
                src="./images/MongoDB.png"
                alt="MongoDB"
                style={{
                  width: "80%",
                  height: "80%",
                  transition: "opacity 0.3s",
                }}
              />
              <Box
                className="hover-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",

                  opacity: 0, // 기본적으로 텍스트는 보이지 않음
                  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
                  padding: "5px", // 텍스트에 여백 추가
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: 13, sm: 19 }, // 글자 크기
                    fontWeight: "bold", // 글자 굵기
                    fontFamily: "yg-jalnan",
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
