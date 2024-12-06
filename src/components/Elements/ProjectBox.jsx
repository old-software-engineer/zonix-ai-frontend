import React from "react";
import styled from "styled-components";

export default function ProjectBox({ name, created_by, created_at }) {
  return (
    <Wrapper>
      <ImgBtn className="animate pointer">
        <div
          className="radius8 bg-primary text-white  pt-8 md:pt-10 lg:pt-14  w-[200px] h-[180px] 
                        sm:w-[180px] sm:h-[190px]
                        lg:w-[220px] lg:h-[220px]"
        >
          <h3 className=" text-2xl font-bold text-center text-wrap px-1">{name}</h3>
          <p className=" text-md font-semibold px-1 text-center">
            {created_by}
          </p>
          <p className=" text-[14px]  font-semibold p-1 text-center">
            {created_at}
          </p>
        </div>
      </ImgBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;