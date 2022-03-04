import { useState } from 'react';
import styled from 'styled-components';
import { Button, Input, Text } from '@nextui-org/react';
import seal from './seal.png';
import Atropos from 'atropos/react';

const MainPageContainer = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  margin-top: 25vh;
  padding: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-end;

  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

const TitlesContainer = styled.div`
  margin-bottom: 2rem;
  * {
    margin: auto;
  }
`;

const CertificatePageBackground = styled.div`
  display: flex;
  justify-content: center;
  background: rgb(8,212,223);
  background: linear-gradient(149deg, rgba(8,212,223,1) 0%, rgba(58,122,226,1) 51%, rgba(244,7,254,1) 100%);
  min-height: 100vh;
  padding-top: 2rem;
  padding-bottom: 4rem;
  * {
    margin: auto;
  }
`;

const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111111;
  border-radius: 8px;
  position: relative;
`;

const BigTitle = styled.div`
  margin: 0 8rem;
  margin-top: 5.25rem;
  font-family: 'Syne', sans-serif;
  max-width: 50rem;
  text-align: center;
  color: #252628;
`
const RegularText = styled.p`
  font-size: 1.125rem;
  color: ${props => props.variant === 'white' ? '#F3F3F3' : '#5A5C61'};
  font-weight: 600;
`;

const SmallTitle = styled(RegularText)`
  font-family: 'Syne', sans-serif;
  max-width: 50rem;
  font-size: 1rem;
  color: #5A5C61;
`;


const PresentedTo = styled(RegularText)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Name = styled.p`
  font-size: 2.25rem;
  font-weight: bold;
`;

const CertificateDescription = styled(RegularText)`
  max-width: 37.5rem;
  text-align: center;
`;

const CertificateFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 3.4375rem;
  margin-top: 6rem;
  margin-bottom: 4rem;

  .right {
    text-align: right;
  }
  
  * {
    margin: 0;
  }
`;

const SealImage = styled.img`
  position: absolute;
  bottom: 2rem;
`;

function App() {
  const [name, setName] = useState();

  function handleFormSubmit(e) {
    e.preventDefault();
    setName(e.target.name.value);
  }

  if (name) {
    return (
      <CertificatePageBackground>
        <Atropos>
          <CertificateContainer>
            <BigTitle>
              <h1>CERTIFICADO</h1>
              <h1>DE PARTICIPACIÓN</h1>
            </BigTitle>
            <PresentedTo>PRESENTADO A</PresentedTo>
            <Name>{name}</Name>
            <CertificateDescription>POR HABER SIDO PARTE DE LA 1RA CONFERENCIA DE PRIVACIDAD DE DATOS Y CERTIFICACIÓN DE ISACA</CertificateDescription>
            <CertificateFooter>
              <div>
                <SmallTitle>Cortesía de</SmallTitle>
                <RegularText variant="white">DANGER-FREE ZONE</RegularText>
              </div>

              <div className="right">
                <SmallTitle>Otorgado el</SmallTitle>
                <RegularText variant="white">5 de marzo de 2022</RegularText>
              </div>
            </CertificateFooter>
            <SealImage src={seal} />
          </CertificateContainer>
        </Atropos>
      </CertificatePageBackground>
    );
  }

  return (
    <>
      <MainPageContainer>
        <TitlesContainer>
          <Text transform='capitalize' weight='bold'>CERTIFICADO DE PARTICIPACIÓN</Text>
          <Text weight='bold' size='2rem'>Privacidad de la Data y Certificación CDPSE de ISACA</Text>
        </TitlesContainer>
        <StyledForm
          onSubmit={handleFormSubmit}
        >
          <Input bordered label='Tu nombre' width='100%' name="name" />
          <Button auto>Crear certificado</Button>
        </StyledForm>
      </MainPageContainer>
    </>
  );
}

export default App;
