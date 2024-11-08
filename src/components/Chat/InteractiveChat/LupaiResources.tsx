import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { purple, gold, orange } from '../../../theme';
import { styled } from '@mui/system';

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

// Styled components for accordions
const ResourceAccordion = styled(Accordion)<{ source: string }>(({ source }) => ({
  flex: '1 1 auto',
  marginBottom: '50px',
  width: 'calc(50% - 8px)',  // Ajuste para que dos acordeones quepan en una fila, ajustando el margen
  backgroundColor: source === 'Laws' ? purple :
    source === 'Administrative processes' ? gold :
      orange,  // Aplica purple si es 'Laws', gold si es 'Administrative processes', y orange para otros
  color: '#FFF',
  '&:hover': {
    backgroundColor: source === 'Laws' ? purple :
      source === 'Administrative processes' ? gold :
        orange,  // Mantiene el mismo color al pasar el mouse
  },
  '&.Mui-expanded': {
    flex: '1 1 100%',  // Se expande para tomar toda la fila cuando está expandido
    color: '#FFF'
  },
  '&:before': {
    display: 'none',  // Elimina la línea divisoria de los acordeones por defecto de MUI
  },
}));


const ResourceAccordionSummary = styled(AccordionSummary)({
  justifyContent: 'space-between',
  alignItems: 'center',
  textTransform: 'capitalize',
});

const ResourceAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const PaginationButton = styled(Button)({
  minWidth: '40px',
});

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
            <Typography>{descriptions[pageIndices[`panel${index}`] || 0]}</Typography>
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
