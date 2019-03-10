import React, { Component } from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaSnapchatGhost, } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { FormattedMessage } from 'react-intl';

class Footer extends Component {

    render() {
        const FooterWrapper = styled.div`
            padding:40px 0;
        `;

        const SocialWrapper = styled.div`
            text-align:center;
            padding-bottom:25px;
          
            && > a {
                font-size:20px;
                width:40px;
                height:40px;
                line-height:40px;
                display:inline-block;
                text-align:center;
                border-radius:50%;
                border:1px solid #ccc;
                margin:0 8px;
                color:inherit;
                opacity:0.75;
            }
          
            && > a:hover {
                opacity:0.9;
            }
        `;

        const CopyrightWrapper = styled.p`
            margin-top:15px;
            text-align:center;
            font-size:13px;
            color:#aaa;
            margin-bottom:0;
        `;

        return (
            <FooterWrapper>
                <SocialWrapper>
                    <a href="/"><FaFacebookF /></a>
                    <a href="/"><FaSnapchatGhost /></a>
                    <a href="/"><FaTwitter /></a>
                    <a href="/"><IoLogoInstagram /></a>
                </SocialWrapper>
                <CopyrightWrapper><FormattedMessage id="footer-copyright" /></CopyrightWrapper>
            </FooterWrapper>
        );
    }

}

export default Footer;