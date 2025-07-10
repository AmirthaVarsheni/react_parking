import avlogo from '../../assets/avLOGO.png'
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function Header() {
    const Location = useLocation();
    const isAbout = useMemo(() => {
        return Location.pathname === "/portfolio/about"
    }, [Location.pathname])

    console.log(Location)
    function handleClick(event: any) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    return (
        <>
            <div className="header-layout">
                <div className='txt-layout'>
                    <img src={avlogo} alt="" className='logoImg' />
                    <div className='head-text'>  Amirtha Varsheni Srinivasa Perumal</div>
                
                </div>
                    {isAbout && <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs className="breadcrumbs" aria-label="breadcrumb" separator={null}>
                        <Link className='li-text' href="/" underline='none'>
                            About Me
                        </Link>
                        <Link className='li-text' href="/" underline='none'>
                           My Skills
                        </Link>
                        <Link className='li-text' underline='none' href="/material-ui/react-breadcrumbs/">
                            Experience
                        </Link>
                        <Link className='li-text' underline='none' href="/material-ui/getting-started/installation/" >
                            Projects
                        </Link>
                        <Link className='li-text' underline='none' href="/material-ui/react-breadcrumbs/">
                            Contact me
                        </Link>
                    </Breadcrumbs>
                </div>}


            </div>

            <style>
                {`
                .header-layout {
                    padding :20px ;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                }
                .logoImg {
                    height:70px
                }
                .txt-layout {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap:10px;
                }
                .head-text {
                    font-size:20px;
                    font-family:fantasy
                }
                .breadcrumbs {
                    ol {
                    color:#fff
                    }
                    .li-text {
                        color:#fff;
                        font-size:14px
                    } 
                }
                
                `}
            </style>
        </>



    )
}

export default Header;