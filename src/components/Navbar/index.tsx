import * as N from './styles';
import { FaAlignJustify, FaHome, FaUserAlt, FaHeadphonesAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {

    const openMenu = () => {

    }
    return (
        <N.Nav>
            <div>
                <N.IconArea>
                    <FaAlignJustify color='white' />
                </N.IconArea>
            </div>
            {/* <N.ButtonMenu onClick={openMenu}>
                abrir
            </N.ButtonMenu> */}
            <N.ListNav>
                <N.ListItem>
                    <N.NavItem href="/">
                        <FaHome />
                    </N.NavItem>
                </N.ListItem>
                <N.ListItem>
                    <N.NavItem href="/sobre">
                        <FaUserAlt />
                    </N.NavItem>
                </N.ListItem>
                <N.ListItem>
                    <N.NavItem href="#">
                        <FaHeadphonesAlt />
                    </N.NavItem>
                </N.ListItem>
            </N.ListNav>
            <N.IconArea>
                <N.NavItem>
                    <N.IconArea><FaGithub />  </N.IconArea>
                </N.NavItem>
                <N.NavItem>
                    <N.IconArea><FaLinkedin />  </N.IconArea>
                </N.NavItem>


            </N.IconArea>
        </N.Nav>
    )
}
