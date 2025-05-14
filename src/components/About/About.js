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
            학창시절, <strong>단편영화, 다큐멘터리, 인터뷰, 홍보영상</strong> 등 <br></br>
            다양한 장르의 영상을 제작하며 영상에 대해 공부했으며 <br></br>
            1년간의 일본 워킹홀리데이 이후 대학에서 일본어를 복수전공하며 언어능력을 키웠습니다.<br></br>
            그 경험을 통해 일본 현지에서 단편영화를 촬영하며, <br></br>
            한-일간의 콘텐츠 협력제작의 스페셜리스트가 될 준비를 마쳤습니다.<br></br>
            <br></br>
            또한 졸업 후에는 프리랜서로서 NHK, TV朝日 등의 일본 방송국의<br></br>
            한국 내 촬영에 협력하며 실질적인 경험을 쌓았습니다.

          </div>
          <div className="AboutBio tagline2" style={{textAlign: 'left'}}>
            <strong>학력</strong><br></br>
             2017.03 ~ 2024.08 | <strong>서경대학교</strong> 영화영상학과, 글로벌비즈니스어학부 일본어전공 졸업<br></br>
             2014.03 ~ 2017.02 | <strong>경기영상과학고등학교</strong> 방송영상연출과 졸업
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
