import styled from "styled-components";
import {TbBriefcase, TbPrompt, TbCalendarEvent} from "react-icons/tb"
import {FcGraduationCap} from "react-icons/fc"
import { BsGithub } from "react-icons/bs"

const SessionAbout = () =>{
    return(
        <SessionAboutContainer>
            <CardSession>
                <li>
                    <h1><TbPrompt/> Sobre</h1>
                    <p>Escreva aqui sobre você!</p>
                </li>
            </CardSession>
            <CardSession>
                <li>
                    <h1><TbBriefcase/> Experiência</h1>
                    <article>
                        <h2>Título da experiência.</h2>
                        <h3><TbCalendarEvent/> Inicio <span>atual</span></h3>
                        <p>Descrição da Experiência.</p>
                    </article>
                    <article>
                        <h2>Título da experiência.</h2>
                        <h3><TbCalendarEvent/> Inicio - Fim</h3>
                        <p>Descrição da Experiência.</p>
                    </article>
                    
                </li>
            </CardSession>
            <CardSession>
                <li>
                    <h1><FcGraduationCap/> Educação</h1>
                </li>
            </CardSession>
            <CardSession>
                <li>
                    <h1><BsGithub/> Projetos</h1>
                </li>
            </CardSession>
        </SessionAboutContainer>
    )
}

const SessionAboutContainer = styled.div`
    gap: 20px;
    width: 100%;
    margin: 15px 15px 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CardSession = styled.ul`
    width: 100%;
    list-style: none;
    text-decoration: none;
    padding: 20px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    li{
        gap: 10px;
        width: 95%;
        background-color: #fff;
        article{
            margin-bottom: 40px;
        }
        h1{
            width: 90%;
            font-size: 25px;
            
            display: flex;
            align-items: center;
            gap: 10px;
            
        }
        h2{
            font-size: 16px;
            margin-top: 10px;
        }
        h3{
            font-size: 20px;
            height: 40px;
            display: flex;
            align-items: center;
            gap: 10px;
            span{
                background-color: green;
                color: #fff;
                border-radius: 10px;
                padding: 2px;
            }
        }
        
    }
`
export default SessionAbout;