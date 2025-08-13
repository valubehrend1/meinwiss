import React, { useState } from 'react';
import { Box, Typography, Link, Accordion, AccordionSummary, AccordionDetails, List, ListItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { styled } from '@mui/system';
import { RetrieverItem } from '../../../../types/api';
import { useTranslation } from 'react-i18next';

const ResourcesContainer = styled(Box)({
    marginTop: '12px',
    width: '100%',
});

const SourcesAccordion = styled(Accordion)({
    boxShadow: 'none',
    '&:before': {
        display: 'none',
    },
    backgroundColor: 'rgba(252,185,0,1)',
    borderRadius: '8px',
    marginBottom: '8px',
});

const SourcesAccordionSummary = styled(AccordionSummary)({
    padding: '0 12px',
    minHeight: '40px',
    '& .MuiAccordionSummary-content': {
        margin: '8px 0',
    },
});

const SourcesAccordionDetails = styled(AccordionDetails)({
    padding: '8px 12px 12px 12px',
});

const SourceItem = styled(ListItem)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '8px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    '&:last-child': {
        borderBottom: 'none',
    },
});

const SourceName = styled(Typography)({
    fontWeight: 600,
    fontSize: '0.85rem',
    color: '#FFFFFF',
    marginBottom: '4px',
});

const SourceLinkContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
    width: '100%',
});

const SourceLink = styled(Link)({
    fontSize: '0.75rem',
    color: '#FFFFFF',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
        textDecoration: 'underline',
        color: '#FFFFFF',
    },
});

const SourceDate = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: '4px',
});

interface WidgetLupaiResourcesProps {
    sources: RetrieverItem[];
}

const WidgetLupaiResources: React.FC<WidgetLupaiResourcesProps> = ({ sources }) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const { t } = useTranslation();

    // Si no hay fuentes, no mostrar nada
    if (!sources || sources.length === 0) {
        return null;
    }

    return (
        <ResourcesContainer>
            <SourcesAccordion
                expanded={expanded}
                onChange={() => setExpanded(!expanded)}
                disableGutters
            >
                <SourcesAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.9rem', color: '#FFFFFF' }}>
                        {t('chat.sources', 'Fuentes')} ({sources.length})
                    </Typography>
                </SourcesAccordionSummary>
                <SourcesAccordionDetails>
                    <List sx={{ width: '100%', padding: 0 }}>
                        {sources.map((item, index) => (
                            <SourceItem key={index} disableGutters>
                                <SourceName>
                                    {item.collection_metadata.source_name || 'Fuente sin nombre'}
                                </SourceName>

                                {item.collection_metadata.source_url && (
                                    <SourceLinkContainer>
                                        <SourceLink
                                            href={item.collection_metadata.source_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <LaunchIcon sx={{ fontSize: '0.9rem', marginRight: '4px' }} />
                                            Ver fuente original
                                        </SourceLink>
                                    </SourceLinkContainer>
                                )}

                                {item.collection_metadata.source_date && (
                                    <SourceDate>
                                        <CalendarTodayIcon sx={{ fontSize: '0.9rem', marginRight: '4px' }} />
                                        {item.collection_metadata.source_date}
                                    </SourceDate>
                                )}
                            </SourceItem>
                        ))}
                    </List>
                </SourcesAccordionDetails>
            </SourcesAccordion>
        </ResourcesContainer>
    );
};

export default WidgetLupaiResources;
