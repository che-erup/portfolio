import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">자기소개</div>
        <div className="BigCard">
          <Image
            src="https://i.postimg.cc/hv71WfxR/profile-character.png"
            alt="prof-svgrepo"
          />
          <div className="AboutBio">
            안녕하세요, 한국과 일본을 잇는 영상 스페셜리스트 <strong> 이체 </strong> 입니다. <br></br>
            단편영화, 다큐멘터리, <br></br>
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
         <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
