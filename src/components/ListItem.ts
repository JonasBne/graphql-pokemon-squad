import styled from "styled-components";
import { theme } from "../theme/theme";

export const ListItem = styled.li({
  backgroundColor: theme.colors.general.blue,
  color: theme.colors.general.yellow,
  padding: "7px 14px",
  textAlign: "center",
  fontSize: "14xp",
  borderRadius: "10px",
  margin: "4px",
  cursor: "pointer",
  listStyle: "none",
  textTransform: "uppercase",
});
