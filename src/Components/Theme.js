const size = {
    mobileS: '350px',
    mobile: '480px',
    tablet: '800px',
    tabletL: '950px',
    laptop: '1000px',
    desktop: '1180px',
};

const theme = {
mobileS: `(max-width: ${size.mobileS})`,
mobile: `(max-width: ${size.mobile})`,
tablet: `(max-width: ${size.tablet})`,
tabletL: `(max-width: ${size.tabletL})`,
laptop: `(max-width: ${size.laptop})`,
desktop: `(max-width: ${size.desktop})`,
};

export default theme;

// @media ${props => props.theme.desktop}{

// }