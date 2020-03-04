import { color } from "../color/mixins";
import { fontsize } from "../typography/mixins";
import { fontweight } from "../typography/mixins";
import { fontfamily } from "../typography/mixins";

import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLogo = styled.h1`
  ${color};
  ${fontsize};
  ${fontweight};
  ${fontfamily};
  padding-right: 0.6em;
  padding-left: 0.6em;
  text-decoration: none;
`;

StyledLogo.PropTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "primarylight",
    "secondarylight"
  ])
};

StyledLogo.defaultProps = {
  variant: "primary"
};

export default StyledLogo;
