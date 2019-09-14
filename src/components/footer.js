import React from 'react';
import {Link} from 'gatsby';

import {FaFacebook,FaTwitter,FaYoutube,FaInstagram} from "react-icons/fa";

import '../styles/components.css';

const Footer = ({author,year}) => {
    return (
        <div className="footer text-center">
            <hr />
            <div className="footer_links_holder">
                <ul className="footer_links_list">
                    <li>
                        <Link className="footer_links_item" to="www.facebook.com">
                            <FaFacebook />
                        </Link>
                    </li>
                    <li>
                        <Link className="footer_links_item" to="www.twitter.com">
                            <FaTwitter />
                        </Link>
                    </li>
                    <li>
                        <Link className="footer_links_item" to="www.youtube.com">
                            <FaYoutube />
                        </Link>
                    </li>
                    <li>
                        <Link className="footer_links_item" to="www.instagram.com">
                            <FaInstagram />
                        </Link>
                    </li>
                </ul>
            </div>
            <p className="text-muted">{author} | {year}</p>
        </div>
    )
};

export default Footer;