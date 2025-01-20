import React, { useState } from "react";
import TeamProject from "./TeamProject";
import ToyProject from "./ToyProject";
import { Box, Button, Grid, Typography } from "@mui/material";

const ProjectFrame = () => {
  const [projectType, setProjectType] = useState(""); // "toy" or "team"
  const [isVisible, setIsVisible] = useState(false); // 애니메이션 상태 관리

  const handleToyClick = () => {
    setProjectType("toy");
    setIsVisible(false); // 애니메이션을 시작하려면 먼저 false로 설정
    setTimeout(() => setIsVisible(true), 300); // 애니메이션 시작 (0.1초 후)
  };

  const handleTeamClick = () => {
    setProjectType("team");
    setIsVisible(false); // 애니메이션을 시작하려면 먼저 false로 설정
    setTimeout(() => setIsVisible(true), 300); // 애니메이션 시작 (0.1초 후)
  };

  return (
    <>
      <Box
        id="project"
        sx={{
          background: "#FFF8E1",
          display: "flex",
          justifyContent: "center", // 가로 중앙 정렬
          alignItems: "center", // 세로 중앙 정렬
        }}
      >
        <Typography
          variant="h2"
          sx={{
            margin: "12px",
            padding: "12px",
            height: "50px",
            fontFamily: "'Quicksand', sans-serif", // 구글 폰트
            fontSize: "4rem", // 보통 크기
            fontWeight: "bold", // 굵은 글씨
            color: "#202020", // 조금 더 부드러운 색
            textAlign: "center",
          }}
        >
          Project
        </Typography>
      </Box>
      <Box
        sx={{
          background: "#FFF8E1",
          display: "flex",
          justifyContent: "center", // 가로 중앙 정렬
          alignItems: "center", // 세로 중앙 정렬
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <Button
            sx={{
              marginBottom: "0px",
              marginTop: "40px",
              borderRadius: "30px", // 둥근 모서리
              padding: "8px 30px", // 버튼 크기 조정 (더 커짐)
              backgroundImage: "linear-gradient(to right, gray,white)",
              border: "2px solid black", // 테두리 색상
              color: "#F9F9F9", // 텍스트 색상
              textTransform: "none", // 대문자 변환 방지
              fontSize: "1.2rem", // 글자 크기 키우기
              "&:hover": {
                backgroundColor: "white", // 호버 시 배경색
                color: "#202020", // 호버 시 텍스트 색상
                textTransform: "none", // 대문자 변환 방지
              },
            }}
            variant="outlined"
            onClick={handleTeamClick}
            style={{ marginRight: "4rem" }}
          >
            Team
          </Button>
          <Button
            sx={{
              marginBottom: "0px",
              marginTop: "40px",
              borderRadius: "30px", // 둥근 모서리
              padding: "8px 30px", // 버튼 크기 조정 (더 커짐)
              backgroundImage: "linear-gradient(to right, white,gray)",
              border: "2px solid black", // 테두리 색상
              color: "#F9F9F9", // 텍스트 색상
              textTransform: "none", // 대문자 변환 방지
              fontSize: "1.2rem", // 글자 크기 키우기
              "&:hover": {
                backgroundColor: "white", // 호버 시 배경색
                color: "#202020", // 호버 시 텍스트 색상
                textTransform: "none", // 대문자 변환 방지
              },
            }}
            variant="outlined"
            onClick={handleToyClick}
          >
            Toy
          </Button>
        </div>
      </Box>

      <Grid
        container
        spacing={2} // 각 Box 사이의 간격
        sx={{
          background: "#FFF8E1",
          paddingTop: 2,
          height: { xs: "520vh", lg: "235vh" },
        }}
      >
        {/* Box 1 */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              background: "#F9F9F9",
              height: { xs: "80vh", lg: "70vh" },
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "130px",
              margin: 1,
            }}
          >
            {projectType === "toy" && (
              <ToyProject
                toyprojectId={1}
                isVisible={isVisible} // 애니메이션 상태 전달
              />
            )}
            {projectType === "team" && (
              <TeamProject
                teamprojectId={1}
                isVisible={isVisible} // 애니메이션 상태 전달
              />
            )}
          </Box>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              background: "#F9F9F9",
              height: { xs: "80vh", lg: "70vh" },
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "130px",
              margin: 1,
            }}
          >
            {projectType === "toy" && (
              <ToyProject
                toyprojectId={2}
                isVisible={isVisible} // 애니메이션 상태 전달
              />
            )}
            {projectType === "team" && (
              <TeamProject
                teamprojectId={2}
                isVisible={isVisible} // 애니메이션 상태 전달
              />
            )}
          </Box>
        </Grid>

        {/* Box 3 */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              background: "#F9F9F9",
              height: { xs: "80vh", lg: "70vh" },
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "130px",
              margin: 1,
            }}
          >
            {projectType === "toy" && (
              <ToyProject
                toyprojectId={3}
                isVisible={isVisible} // 애니메이션 상태 전달
              />
            )}
            {projectType === "team" && (
              <TeamProject
                teamprojectId={3}
                isVisible={isVisible} // 애니메이션 상태 전달
              />
            )}
          </Box>
        </Grid>

        {/* Box 4 */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              background: "#F9F9F9",
              height: { xs: "80vh", lg: "70vh" },
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "130px",
              margin: 1,
            }}
          >
            {projectType === "toy" && (
              <ToyProject
                toyprojectId={4}
                isVisible={isVisible} // 애니메이션 상태 전달
              />
            )}
            {projectType === "team" && (
              <TeamProject
                teamprojectId={4}
                isVisible={isVisible} // 애니메이션 상태 전달
              />
            )}
          </Box>
        </Grid>

        {/* Box 5 */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              background: "#F9F9F9",
              height: { xs: "80vh", lg: "70vh" },
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "130px",
              margin: 1,
            }}
          >
            {projectType === "toy" && (
              <ToyProject
                toyprojectId={5}
                isVisible={isVisible} // 애니메이션 상태 전달
              />
            )}
            {projectType === "team" && (
              <TeamProject
                teamprojectId={5}
                isVisible={isVisible} // 애니메이션 상태 전달
              />
            )}
          </Box>
        </Grid>

        {/* Box 6 */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              background: "#F9F9F9",
              height: { xs: "80vh", lg: "70vh" },
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "130px",
              margin: 1,
            }}
          >
            {projectType === "toy" && (
              <ToyProject
                toyprojectId={6}
                isVisible={isVisible} // 애니메이션 상태 전달
              />
            )}
            {projectType === "team" && (
              <TeamProject
                teamprojectId={6}
                isVisible={isVisible} // 애니메이션 상태 전달
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectFrame;
