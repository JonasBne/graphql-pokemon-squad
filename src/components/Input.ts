import styled from "styled-components";
import { theme } from "../theme/theme";

export const Input = styled.input({
  outline: "none",
  border: `3px solid ${theme.colors.general.blue}`,
  width: "80%",
  padding: "5px",
  textTransform: "uppercase",
  marginBottom: "5px",
});
