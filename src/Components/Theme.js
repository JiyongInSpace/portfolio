const size = {
    mobile: '480px',
    tablet: '800px',
    tabletL: '950px',
    desktop: '1180px',
};

const theme = {
mobile: `(max-width: ${size.mobile})`,
tablet: `(max-width: ${size.tablet})`,
tabletL: `(max-width: ${size.tabletL})`,
desktop: `(max-width: ${size.desktop})`,
};

export default theme;

// @media ${props => props.theme.desktop}{

// }