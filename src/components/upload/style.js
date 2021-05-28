import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.section.attrs({
  className: "container",
})`
  border: 1px dashed #ddd;
  border-radius: 4px;

  transition: height 0.2s ease;

  button {
    border: 0;
    background: transparent;
    color: #e57878;
    margin-left: 5px;
    cursor: pointer;
  }

  ul {
  }

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.typw || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const ImageContainer = styled.div`
  text-align: center;
`
