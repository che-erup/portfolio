import React, { useState } from "react";
import { ProjectList } from "../../../data/BroadcastingData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard() {
  const [popupData, setPopupData] = useState(null);

  const handlePopupOpen = (data) => {
    setPopupData(data);
  };

  const handlePopupClose = () => {
    setPopupData(null);
  };

  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ))}
              
            </p>
            <p><strong>장르 - </strong> {list.genre}</p>
            <Stack>
              <span className="stackTitle"><strong>역할 -</strong></span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
{/* 상세정보 버튼
              <button
                className="btn btn2 SecondarBtn"
                onClick={() => handlePopupOpen(list)}
              >
                상세정보
              </button>
*/}
              <button
                className="btn PrimaryBtn"
                onClick={() => {
                  window.open(list.modal.page, "_blank", "noopener,noreferrer");
                  // handlePopupOpen(list); // 모달은 더이상 열지 않지만, 로직은 남겨둠
                }}
              >
                기사 보기
              </button>
            </BtnGroup>
          </CardRight>
        </Card>
      ))}

      {popupData && (
        <div className="popupOverlay" onClick={handlePopupClose} style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex",
          justifyContent: "center", alignItems: "center", zIndex: 1000
        }}>
          <div className="popupContent" onClick={(e) => e.stopPropagation()} style={{
            background: "#fff", padding: "2rem", borderRadius: "8px", maxWidth: "950px", width: "90%"
          }}>
            <iframe
              width="100%"
              height={window.innerWidth >= 768 ? "500" : "300"}  // JS에서 조건부로 조절
              src={popupData.modal.page}
              title="영상"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button onClick={handlePopupClose} className="btn PrimaryBtn" style={{ marginTop: "1rem" }}>닫기</button>
          </div>
        </div>
      )}
    </>
  );
}
export default ProjectCard;