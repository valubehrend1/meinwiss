import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useTranslation } from 'react-i18next';

import {
  PaginationButton,
  ResourceAccordion,
  ResourceAccordionDetails,
  ResourceAccordionSummary,
  LupaiResourcesContainer,
  ResourcesUrl,
  GeneralContainer,
} from './LupaiResourcesStyles';

import { LupaiResourcesProps } from '../../../types/components';

// Component definition
const LupaiResources: React.FC<LupaiResourcesProps> = ({ retrieverItems }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [pageIndices, setPageIndices] = useState<{ [key: string]: number }>({});
  const { t } = useTranslation();

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      if (isExpanded && !(panel in pageIndices)) {
        setPageIndices((prev) => ({ ...prev, [panel]: 0 }));
      }
    };

  const handlePagination = (panel: string, direction: number) => {
    setPageIndices((prev) => ({
      ...prev,
      [panel]: prev[panel] + direction,
    }));
  };
  // Group items by source type for pagination
  const groupedItems = retrieverItems.reduce((acc, item) => {
    const key = item.collection_metadata.source_type;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push({
      source_name: item.collection_metadata.source_name || 'Unknown Source',
      source_url: item.collection_metadata.source_url || '',
      source_date: item.collection_metadata.source_date || 'No date available',
      text: item.text || 'No text available',
    });
    return acc;
  }, {} as { [key: string]: Array<{ source_name: string; text: string; source_url: string; source_date: string; }> });

  return (
    <GeneralContainer>
      <Typography>{t('response_based_on_resources')}</Typography>
      <LupaiResourcesContainer>
        {Object.entries(groupedItems).map(([source, item], index) => (
          <ResourceAccordion
            key={source}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            source={source}
          >
            <ResourceAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant='h5'>
                {source ===
                  'Information curated by counseling centers and information portals'
                  ? 'Consultancy services'
                  : source}
              </Typography>
            </ResourceAccordionSummary>
            <ResourceAccordionDetails>
              {item.length > 0 && (
                <>
                  <Typography variant="h5" sx={{ marginBottom: '10px', fontStyle: 'italic' }}>
                    {t('last_update')} {item[pageIndices[`panel${index}`] || 0].source_date}
                  </Typography>
                  <Typography variant="h5" sx={{ textDecoration: 'underline', marginBottom: '10px' }}>
                    {item[pageIndices[`panel${index}`] || 0].source_name}
                  </Typography>
                  <Typography sx={{ marginBottom: '30px' }}>
                    {item[pageIndices[`panel${index}`] || 0].text}
                  </Typography>
                  <ResourcesUrl
                    href={item[pageIndices[`panel${index}`] || 0].source_url}
                    target="_blank"
                  >
                    {t('learn_more')}
                  </ResourcesUrl>
                </>
              )}
              {item.length > 1 && (
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
                >
                  <PaginationButton
                    sx={{ color: '#FFF' }}
                    disabled={pageIndices[`panel${index}`] <= 0}
                    onClick={() => handlePagination(`panel${index}`, -1)}
                    startIcon={<NavigateBeforeIcon />}
                  >
                    Previous
                  </PaginationButton>
                  <PaginationButton
                    sx={{ color: '#FFF' }}
                    disabled={
                      (pageIndices[`panel${index}`] || 0) >=
                      item.length - 1
                    }
                    onClick={() => handlePagination(`panel${index}`, 1)}
                    endIcon={<NavigateNextIcon />}
                  >
                    Next
                  </PaginationButton>
                </Box>
              )}
            </ResourceAccordionDetails>
          </ResourceAccordion>
        ))}
      </LupaiResourcesContainer>
    </GeneralContainer>
  );
};

export default LupaiResources;
