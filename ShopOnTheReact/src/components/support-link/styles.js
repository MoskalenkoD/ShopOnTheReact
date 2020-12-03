import styled from 'styled-components';
import Colors from '../../constants/colors';

const DivSupportContact = styled.div`
    background-color: ${Colors.background};
    width: 100%;
    height: 39px;
    position: fixed;
`;

const UlSupportContact = styled.ul`
    float: right;
    margin: 10px 90px 0 0;
`;

const Li = styled.li`
    color: ${Colors.separator}
    text-transform: uppercase;
    display: inline;
    margin: 0 10px;
    font-size: 11px;
`;

const Link = styled.a`
    text-decoration: none;
    color: ${Colors.textLight};
`;

const Span = styled.span`
    color: ${Colors.telephone};
    margin-left: 5px;
`;

export {DivSupportContact, UlSupportContact, Li, Link, Span};