import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';

import { StyledDataPrivacy, Title } from './DataPrivacyStyles';

const DataPrivacy: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <StyledDataPrivacy>
        <Typography variant="h3" sx={{ fontWeight: '900' }}>
          Privacy Policy
        </Typography>
      </StyledDataPrivacy>

      <Box sx={{ margin: '80px' }}>
        <Title variant="h4">
          Datenschutzerklärung von Lupai
        </Title>
        <Typography variant="h5" >
          Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist Lupai, vertreten durch Cecilia Maas, Oranienstraße 46, 10969 Berlin, info[at]aureka.ai.
        </Typography>
        <Title variant="h4" >
          Bearbeitung der User-Anfragen
        </Title>
        <Typography variant="h5" >
          <ReactMarkdown>
            Lupai ist ein Chatbot, der mithilfe von Large Language Models und Retrieval-Augmented Generation (RAG)-Technologien genaue Informationen zu Migrations- und Arbeitsvorschriften sowie Verwaltungsverfahren in Deutschland bereitstellt. Die Verarbeitung personenbezogener Daten zum Zweck der Bearbeitung der User-Anfragen erfolgt auf der Rechtsgrundlage Art. 6 Abs. 1 b) DSGVO.
            **User-Anfragen und Übermittlung an OpenAI**
            Lupai verarbeitet User-Anfragen, indem es auf eine Vektordatenbank zugreift und das GPT-Modell von OpenAI verwendet, um Antworten zu generieren. Die User-Anfragen werden zu diesem Zweck an OpenAI (Auftragsverarbeiter) übermittelt. OpenAI erhält die Anfrage ausschließlich zur Bearbeitung der User-Anfrage; vertraglich ist sichergestellt, dass OpenAI die Anfragen nicht zu eigenen Zwecken, wie dem Training ihrer KI-Modelle, verarbeitet.
            OpenAI ist derzeit (September 2024) nicht unter dem EU-US Privacy Framework zertifiziert, gewährleistet jedoch über sogenannte Standardvertragsklauseln ein entsprechendes Datenschutzniveau.
            **Pseudonymisierung der Anfragen**
            Vor der Vektorisierung der User-Anfragen durch OpenAI bzw. vor deren Übermittlung erkennt die Lupai-Infrastruktur bestimmte Datenkategorien und pseudonymisiert oder anonymisiert diese Angaben. Hierbei handelt es sich um Datenkategorien, die offensichtlich einen Personenbezug aufweisen, wie beispielsweise Namen oder Adressen. Erkennt Lupai solche Angaben, werden diese gelöscht oder durch Platzhalter ersetzt (faktische Anonymisierung).
          </ReactMarkdown>
        </Typography>

        <Title variant="h4">
          Auswertung der User-Anfragen
        </Title>
        <Typography variant="h5" >
          Die Verarbeitung der Daten bei Lupai dient in erster Linie dem Interesse der betroffenen Personen, niedrigschwellig und mithilfe eines KI-unterstützten Chat-Dialogs Informationen über Migrationsregeln in Deutschland zu erhalten. Lupai die Anfragen zudem aus, um den Dienst zu verbessern und gegebenenfalls Berichtspflichten im Rahmen einer öffentlichen Förderung nachzukommen.
          Rechtsgrundlage hierfür ist Art. 6 Abs. 1 f) DSGVO. Gleichzeitig besteht das Recht auf Widerspruch gemäß Art. 21 DSGVO. Das heißt, Sie können der weiteren Speicherung Ihrer Anfrage widersprechen. Der Widerspruch kann per E-Mail an info@lupai.de gesendet werden.
          Die Anfragen werden so lange aufbewahrt, bis eine qualifizierte Auswertung erfolgt und Entwicklungsschritte definiert sind.
        </Typography>

        <Title variant="h4">
          Erfassung allgemeiner Informationen beim Besuch unserer Website
        </Title>
        <Typography variant="h5" >
          Beim Besuch unserer Website, also ohne Registrierung oder sonstige Informationsübermittlung, werden automatisch allgemeine Informationen erfasst (Server-Logfiles). Dazu gehören unter anderem der verwendete Browsertyp, das Betriebssystem, der Domainname Ihres Internet-Providers und Ihre IP-Adresse. Diese Informationen sind anonym und lassen keine Rückschlüsse auf Ihre Person zu. Sie dienen insbesondere folgenden Zwecken: Sicherstellung einer reibungslosen Verbindung zur Website, Sicherstellung der Funktionalität, Auswertung der Systemsicherheit und -stabilität sowie zu weiteren administrativen Zwecken.
          Die Verarbeitung dieser Daten erfolgt gemäß Art. 6 Abs. 1 f) DSGVO auf Basis unseres berechtigten Interesses an der Stabilität und Verbesserung unserer Website. Eine personenbezogene Auswertung erfolgt nicht, jedoch können die Daten statistisch ausgewertet werden, um die technische und inhaltliche Optimierung des Internetauftritts zu unterstützen.
        </Typography>

        <Title variant="h4">
          Kontaktformular
        </Title>
        <Typography variant="h5" >
          Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer gültigen E-Mail-Adresse sowie Ihres Namens notwendig, damit wir Ihre Anfrage zuordnen und beantworten können. Weitere Angaben sind optional.
          Die Verarbeitung der im Kontaktformular eingegebenen Daten erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 f) DSGVO). Mit der Bereitstellung des Kontaktformulars möchten wir Ihnen eine einfache Möglichkeit zur Kontaktaufnahme bieten. Ihre Daten werden zur Bearbeitung Ihrer Anfrage sowie für eventuelle Anschlussfragen gespeichert.
        </Typography>

        <Title variant="h4">
          Cookies
        </Title>
        <Typography variant="h5" >
          Lupai verwendet Cookies zur Speicherung der Spracheinstellungen. Diese Cookies sind technisch notwendig im Sinne von § 25 Abs. 2 Nr. 2 TTDSG, um den gewünschten Dienst bereitzustellen.
        </Typography>

        <Title variant="h4">
          Ihre Betroffenenrechte
        </Title>
        <Typography variant="h5" >
          Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
          - Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),
          - Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),
          - Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),
          - Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),
          - Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und
          - Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).
          - Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
          Sie haben zudem das Recht, sich jederzeit bei einer Aufsichtsbehörde zu beschweren, beispielsweise bei der zuständigen Behörde des Bundeslands Ihres Wohnsitzes oder bei der für uns verantwortlichen Behörde.
          Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html .
        </Typography>
      </Box>
    </Box>
  );
};

export default DataPrivacy;
