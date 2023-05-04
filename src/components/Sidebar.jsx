import styled from "styled-components";
import { ImBriefcase, ImHome, ImEnvelop, ImMobile, ImEarth } from "react-icons/im" 
import { FaRegStar } from "react-icons/fa"

export const Sidebar = () => {
    return(
        <SidebarContainer>
            <InfoCard>
                <h1>Nome de Completo</h1>
                <ul>
                    <li>
                        <ImBriefcase/> 
                        <h3>Cargo</h3>
                    </li>
                    <li>
                        <ImHome/> 
                        <h3>Local</h3>
                    </li>
                    <li>
                        <ImEnvelop/>
                        <h3>E-mail</h3>
                    </li>
                    <li>
                        <ImMobile/> 
                        <h3>Telefone</h3>
                    </li>
                </ul>
            </InfoCard>

            <InfoCard>
                <h2><FaRegStar/> Skills</h2>
                <ul>
                    <li>
                        <p>Javascript</p>
                        <progress value={"90"} max={"100"}/>
                    </li>
                    <li>
                        <p>HTML</p>
                        <progress value={"90"} max={"100"}/>
                    </li>
                    <li>
                        <p>CSS</p>
                        <progress value={"80"} max={"100"}/>
                    </li>
                    <li>
                        <p>Reactjs</p>
                        <progress value={"70"} max={"100"}/>
                    </li>
                    <li>
                        <p>Nodejs</p>
                        <progress value={"70"} max={"100"}/>
                    </li>
                    <li>
                        <p>MongoDB</p>
                        <progress value={"70"} max={"100"}/>
                    </li>
                </ul>
            </InfoCard>
            <InfoCard>
                <h1><ImEarth/> Idiomas</h1>
                <ul>
                    <li>
                        <p>Português</p>
                        <progress value={"100"} max={"100"}/>
                    </li>
                    <li>
                        <p>Inglês</p>
                        <progress value={"40"} max={"100"}/>
                    </li>
                    <li>
                        <p>Espanhol</p>
                        <progress value={"10"} max={"100"}/>
                    </li>
                </ul>
            </InfoCard>
            

        </SidebarContainer>
    )
}

const SidebarContainer = styled.aside`
    width: 40%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
    @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }

`
const InfoCard = styled.div`
    width: 90%;
    margin: 20px 0;
    h1,h2{
        margin-bottom: 10px;
        font-size: 22px;
    }
    progress{
        height: 25px;
        width: 100%;
    }
    ul{
        gap: 20px;
        text-decoration: none;
        list-style: none;

        li{
            gap: 20px;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
    }
`