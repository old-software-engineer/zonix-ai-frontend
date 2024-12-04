import React from "react";
import styled from "styled-components";

export default function ProjectBox({ name, created_by,created_at }) {
  return (
    <Wrapper>
      <ImgBtn className="animate pointer">
        <div className="radius8 bg-gray-100 text-blue-500 pt-14 w-[300px] h-[300px] 
                        sm:w-[230px] sm:h-[230px] 
                        md:w-[250px] md:h-[250px] 
                        lg:w-[280px] lg:h-[280px]">
          <h3 className=" text-xl font-bold">{name}</h3>
          <p className=" text-md font-semibold">{created_by}</p>
          <p className=" text-md font-semibold">{created_at}</p>
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