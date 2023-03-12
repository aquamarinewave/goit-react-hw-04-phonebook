import PropTypes from 'prop-types';

import { Header } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <div>
            <Header>{title}</Header>
            {children}
        </div>
    )
}

export default Section;

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any.isRequired,
}