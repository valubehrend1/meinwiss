import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {
  PaginationButton,
  ResourceAccordion,
  ResourceAccordionDetails,
  ResourceAccordionSummary,
} from './LupaiResourcesStyles'

export interface RetrieverItem {
  collection_metadata: {
    source_type: string;
    source_description?: string;
    source_name?: string;
  };
}

interface LupaiResourcesProps {
  retrieverItems: RetrieverItem[];
}

// Component definition
const LupaiResources: React.FC<LupaiResourcesProps> = ({ retrieverItems }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [pageIndices, setPageIndices] = useState<{ [key: string]: number }>({});

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
    if (isExpanded && !(panel in pageIndices)) {
      setPageIndices(prev => ({ ...prev, [panel]: 0 }));
    }
  };

  const handlePagination = (panel: string, direction: number) => {
    setPageIndices(prev => ({
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
    if (item.collection_metadata.source_description) {
      acc[key].push(item.collection_metadata.source_description);
    }
    return acc;
  }, {} as { [key: string]: string[] });

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
      {Object.entries(groupedItems).map(([source, descriptions], index) => (
        <ResourceAccordion
          key={source}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          source={source}
        >
          <ResourceAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{source === 'Information curated by counseling centers and information portals'
              ? 'Consultancy services'
              : source}</Typography>
          </ResourceAccordionSummary>
          <ResourceAccordionDetails>
            <Typography>{descriptions == null ? descriptions[pageIndices[`panel${index}`] || 0] : 'No description found'}</Typography>
            {descriptions.length > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
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
                  disabled={(pageIndices[`panel${index}`] || 0) >= descriptions.length - 1}
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
    </Box>
  );
};

export default LupaiResources;
