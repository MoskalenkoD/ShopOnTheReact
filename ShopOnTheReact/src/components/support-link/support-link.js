import React from 'react';
import {DivSupportContact, UlSupportContact, Li, Link, Span} from './styles';

const SupportLink = () => (
    <DivSupportContact>
        <UlSupportContact>
            <Li>
                <Link href="tel:+1800 1234 5678">Contact & Support :<Span>+1800 1234 5678</Span></Link>
            </Li>
            <Li>|</Li>
            <Li>
                <Link href='#' title='Contact Us'>Contact Us</Link>
            </Li>
            <Li>|</Li>
            <Li>
                <Link href='#' title='Help'>Help</Link>
            </Li>
        </UlSupportContact>
    </DivSupportContact>
);

export default SupportLink;
