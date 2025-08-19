import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RetrieverItem } from '../../../../types/api';
import {
    ResourcesContainer,
    SourceDate,
    SourceItem,
    SourceLink,
    SourceLinkContainer,
    SourceName,
    SourcesAccordion,
    SourcesAccordionDetails,
    SourcesAccordionSummary,
    SourcesTitle,
    SourcesListContainer,
    ExpandIconWhite,
    SourceLinkIconStyled,
    SourceDateIconStyled
} from './styles';

interface WidgetLupaiResourcesProps {
    sources: RetrieverItem[];
}

const WidgetLupaiResources: React.FC<WidgetLupaiResourcesProps> = ({ sources }) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const { t } = useTranslation();

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
                <SourcesAccordionSummary
                    expandIcon={<ExpandIconWhite />}
                >
                    <SourcesTitle>
                        {t('chat.sources', 'Fuentes')} ({sources.length})
                    </SourcesTitle>
                </SourcesAccordionSummary>
                <SourcesAccordionDetails>
                    <SourcesListContainer component="ul">
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
                                            <SourceLinkIconStyled />
                                            Ver fuente original
                                        </SourceLink>
                                    </SourceLinkContainer>
                                )}

                                {item.collection_metadata.source_date && (
                                    <SourceDate>
                                        <SourceDateIconStyled />
                                        {item.collection_metadata.source_date}
                                    </SourceDate>
                                )}
                            </SourceItem>
                        ))}
                    </SourcesListContainer>
                </SourcesAccordionDetails>
            </SourcesAccordion>
        </ResourcesContainer>
    );
};

export default WidgetLupaiResources;
