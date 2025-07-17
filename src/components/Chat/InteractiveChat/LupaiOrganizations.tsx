'use client'

import { useState } from 'react'
import {
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
  Button,
} from '@mui/material'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Organization } from '../../../types/models';

import {
  OrganizationsAccordion,
  OrganizationsAccordionSummary,
  ForwardIcon
} from './LupaiOrganizationsStyles';

import { useTranslation } from 'react-i18next';

interface OrganizationsProps {
  organizations: Organization[];
}

const ITEMS_PER_PAGE = 3;

const LupaiOrganizations: React.FC<OrganizationsProps> = ({ organizations }) => {
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const { t } = useTranslation();

  const handleChange = () => {
    setExpanded(!expanded);
  };

  // Calculate total pages based on the number of organizations
  const totalPages = Math.ceil((organizations?.length || 0) / ITEMS_PER_PAGE);

  // Calculate the range to be displayed on the current page
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedOrganizations = organizations.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <OrganizationsAccordion expanded={expanded} onChange={handleChange}>
      <OrganizationsAccordionSummary expandIcon={<ArrowForwardIosIcon />}>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'regular' }}>
          {t('supportive_offline_community')}
        </Typography>
        <Typography sx={{ marginLeft: 2 }}>
          {t('check_organizations')}
        </Typography>
      </OrganizationsAccordionSummary>
      <AccordionDetails>

        <List sx={{ width: '100%' }}>
          {paginatedOrganizations.map((org, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                mb: index !== paginatedOrganizations.length - 1 ? 2 : 0,
              }}
            >
              <ListItemButton
                component="a"
                href={org.website}
                target="_blank"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        textDecoration: 'underline',
                        mb: 1
                      }}
                    >
                      {org.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body1" color="text.primary">
                      {org.description}
                    </Typography>
                  }
                  sx={{ margin: 0 }}
                />
                <ForwardIcon />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Pagination controls */}
        {organizations.length > ITEMS_PER_PAGE && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 2
            }}
          >
            <Button
              variant="outlined"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              {t('prev')}
            </Button>

            <Typography variant="body2" sx={{ alignSelf: 'center' }}>
              {t('page')} {currentPage + 1} {t('of')} {totalPages}
            </Typography>

            <Button
              variant="outlined"
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
            >
              {t('next')}
            </Button>
          </Box>
        )}
      </AccordionDetails>
    </OrganizationsAccordion>
  );
};

export default LupaiOrganizations;
