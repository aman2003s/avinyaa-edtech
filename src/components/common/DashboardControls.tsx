import React from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  IconButton,
  Tooltip,
  InputAdornment,
  Collapse,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import {
  Search as SearchIcon,
  Sort as SortIcon,
  Clear as ClearIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';

export interface FilterOptions {
  status: string;
  difficulty: string;
  category: string;
  favorite: string;
}

export interface SortOptions {
  field: string;
  direction: 'asc' | 'desc';
}

interface DashboardControlsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filterOptions: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  sortOptions: SortOptions;
  onSortChange: (sort: SortOptions) => void;
  onClearAll: () => void;
  darkMode?: boolean;
}

const DashboardControls: React.FC<DashboardControlsProps> = ({
  searchQuery,
  onSearchChange,
  filterOptions,
  onFilterChange,
  sortOptions,
  onSortChange,
  onClearAll,
  darkMode = false,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleFilterChange = (field: keyof FilterOptions) => (event: SelectChangeEvent) => {
    onFilterChange({
      ...filterOptions,
      [field]: event.target.value,
    });
  };

  const handleSortChange = (field: string) => {
    const newDirection = sortOptions.field === field && sortOptions.direction === 'asc' ? 'desc' : 'asc';
    onSortChange({
      field,
      direction: newDirection,
    });
  };

  const hasActiveFilters = () => {
    return (
      filterOptions.status !== '' ||
      filterOptions.difficulty !== '' ||
      filterOptions.category !== '' ||
      filterOptions.favorite !== ''
    );
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      sx={{
        borderBottom: `2px solid ${darkMode ? '#4B5563' : '#E5E7EB'}`,
        backgroundColor: darkMode ? '#374151' : '#F9FAFB',
      }}
    >
      {/* Header with Toggle Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '8px 16px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: darkMode ? '#4B5563' : '#F3F4F6',
          },
          transition: 'background-color 0.2s ease',
        }}
        onClick={toggleExpanded}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SearchIcon sx={{ color: darkMode ? '#9CA3AF' : '#6B7280' }} />
          <Box
            component="span"
            sx={{
              color: darkMode ? '#E5E7EB' : '#374151',
              fontWeight: 500,
              fontSize: '1rem',
            }}
          >
            Search & Filters
          </Box>
          {(searchQuery || hasActiveFilters()) && (
            <Chip
              label={`${searchQuery ? 1 : 0 + (filterOptions.status ? 1 : 0) + (filterOptions.difficulty ? 1 : 0) + (filterOptions.category ? 1 : 0) + (filterOptions.favorite ? 1 : 0)} active`}
              size="small"
              sx={{
                backgroundColor: '#3B82F6',
                color: 'white',
                fontSize: '0.75rem',
                height: 20,
              }}
            />
          )}
        </Box>
        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            toggleExpanded();
          }}
          sx={{
            color: darkMode ? '#9CA3AF' : '#6B7280',
            '&:hover': {
              backgroundColor: darkMode ? '#4B5563' : '#E5E7EB',
            },
          }}
        >
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      {/* Collapsible Content */}
      <Collapse in={isExpanded}>
        <Box sx={{ p: '16px 8px' }}>
          {/* Search Bar */}
          <Box sx={{ mb: { xs: 2, sm: 3 } }}>
            <TextField
              fullWidth
              placeholder="Search courses by title, code, or instructor..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: darkMode ? '#9CA3AF' : '#6B7280' }} />
                  </InputAdornment>
                ),
                endAdornment: searchQuery && (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => onSearchChange('')}
                      sx={{ color: darkMode ? '#9CA3AF' : '#6B7280' }}
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: darkMode ? '#4B5563' : 'white',
                  '& fieldset': {
                    borderColor: darkMode ? '#6B7280' : '#D1D5DB',
                  },
                  '&:hover fieldset': {
                    borderColor: darkMode ? '#9CA3AF' : '#9CA3AF',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3B82F6',
                  },
                },
                '& .MuiInputBase-input': {
                  color: darkMode ? '#E5E7EB' : '#1F2937',
                  '&::placeholder': {
                    color: darkMode ? '#9CA3AF' : '#6B7280',
                    opacity: 1,
                  },
                },
              }}
            />
          </Box>

          {/* Filters and Sort */}
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 1, sm: 2 }, 
            flexWrap: 'wrap', 
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
            {/* Status Filter */}
            <FormControl size="small" sx={{ minWidth: { xs: '100%', sm: 120 } }}>
              <InputLabel sx={{ color: darkMode ? '#9CA3AF' : '#6B7280' }}>Status</InputLabel>
              <Select
                value={filterOptions.status}
                label="Status"
                onChange={handleFilterChange('status')}
                sx={{
                  backgroundColor: darkMode ? '#4B5563' : 'white',
                  color: darkMode ? '#E5E7EB' : '#1F2937',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? '#6B7280' : '#D1D5DB',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? '#9CA3AF' : '#9CA3AF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3B82F6',
                  },
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Summer 2024">Summer 2024</MenuItem>
                <MenuItem value="Winter 2024">Winter 2024</MenuItem>
                <MenuItem value="Closed">Closed</MenuItem>
              </Select>
            </FormControl>

            {/* Difficulty Filter */}
            <FormControl size="small" sx={{ minWidth: { xs: '100%', sm: 120 } }}>
              <InputLabel sx={{ color: darkMode ? '#9CA3AF' : '#6B7280' }}>Difficulty</InputLabel>
              <Select
                value={filterOptions.difficulty}
                label="Difficulty"
                onChange={handleFilterChange('difficulty')}
                sx={{
                  backgroundColor: darkMode ? '#4B5563' : 'white',
                  color: darkMode ? '#E5E7EB' : '#1F2937',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? '#6B7280' : '#D1D5DB',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? '#9CA3AF' : '#9CA3AF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3B82F6',
                  },
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
              </Select>
            </FormControl>

            {/* Category Filter */}
            <FormControl size="small" sx={{ minWidth: { xs: '100%', sm: 140 } }}>
              <InputLabel sx={{ color: darkMode ? '#9CA3AF' : '#6B7280' }}>Category</InputLabel>
              <Select
                value={filterOptions.category}
                label="Category"
                onChange={handleFilterChange('category')}
                sx={{
                  backgroundColor: darkMode ? '#4B5563' : 'white',
                  color: darkMode ? '#E5E7EB' : '#1F2937',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? '#6B7280' : '#D1D5DB',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? '#9CA3AF' : '#9CA3AF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3B82F6',
                  },
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Computer Science">Computer Science</MenuItem>
              </Select>
            </FormControl>

            {/* Favorite Filter */}
            <FormControl size="small" sx={{ minWidth: { xs: '100%', sm: 100 } }}>
              <InputLabel sx={{ color: darkMode ? '#9CA3AF' : '#6B7280' }}>Favorite</InputLabel>
              <Select
                value={filterOptions.favorite}
                label="Favorite"
                onChange={handleFilterChange('favorite')}
                sx={{
                  backgroundColor: darkMode ? '#4B5563' : 'white',
                  color: darkMode ? '#E5E7EB' : '#1F2937',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? '#6B7280' : '#D1D5DB',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? '#9CA3AF' : '#9CA3AF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3B82F6',
                  },
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="true">Favorites</MenuItem>
                <MenuItem value="false">Not Favorites</MenuItem>
              </Select>
            </FormControl>

            {/* Clear All Button */}
            <Box
              component="button"
              onClick={onClearAll}
              disabled={!searchQuery && !hasActiveFilters()}
              sx={{
                minWidth: { xs: '100%', sm: 80 },
                height: 40,
                px: 2,
                border: 'none',
                borderRadius: 1,
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: (searchQuery || hasActiveFilters()) 
                  ? (darkMode ? '#EF4444' : '#EF4444')
                  : (darkMode ? '#4B5563' : '#E5E7EB'),
                color: (searchQuery || hasActiveFilters()) 
                  ? 'white' 
                  : (darkMode ? '#9CA3AF' : '#6B7280'),
                '&:hover': {
                  backgroundColor: (searchQuery || hasActiveFilters())
                    ? (darkMode ? '#DC2626' : '#DC2626')
                    : (darkMode ? '#4B5563' : '#E5E7EB'),
                },
                '&:disabled': {
                  cursor: 'not-allowed',
                  opacity: 0.5,
                },
                '&:active': {
                  transform: 'scale(0.98)',
                },
              }}
            >
              Clear
            </Box>

            {/* Sort Options */}
            <Box sx={{ 
              display: 'flex', 
              gap: 1, 
              ml: { xs: 0, sm: 'auto' },
              mt: { xs: 1, sm: 0 },
              justifyContent: { xs: 'center', sm: 'flex-end' },
              width: { xs: '100%', sm: 'auto' }
            }}>
              <Tooltip title="Sort by Title">
                <IconButton
                  onClick={() => handleSortChange('title')}
                  sx={{
                    color: sortOptions.field === 'title' ? '#3B82F6' : (darkMode ? '#9CA3AF' : '#6B7280'),
                    backgroundColor: sortOptions.field === 'title' ? (darkMode ? '#1E3A8A' : '#DBEAFE') : 'transparent',
                  }}
                >
                  <SortIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Sort by Course Code">
                <IconButton
                  onClick={() => handleSortChange('courseCode')}
                  sx={{
                    color: sortOptions.field === 'courseCode' ? '#3B82F6' : (darkMode ? '#9CA3AF' : '#6B7280'),
                    backgroundColor: sortOptions.field === 'courseCode' ? (darkMode ? '#1E3A8A' : '#DBEAFE') : 'transparent',
                  }}
                >
                  <SortIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Sort by Credits">
                <IconButton
                  onClick={() => handleSortChange('credits')}
                  sx={{
                    color: sortOptions.field === 'credits' ? '#3B82F6' : (darkMode ? '#9CA3AF' : '#6B7280'),
                    backgroundColor: sortOptions.field === 'credits' ? (darkMode ? '#1E3A8A' : '#DBEAFE') : 'transparent',
                  }}
                >
                  <SortIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          {/* Active Filters Display */}
          {(searchQuery || hasActiveFilters()) && (
            <Box sx={{ 
              mt: { xs: 1, sm: 2 }, 
              display: 'flex', 
              gap: 1, 
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'flex-start' }
            }}>
              {searchQuery && (
                <Chip
                  label={`Search: "${searchQuery}"`}
                  onDelete={() => onSearchChange('')}
                  size="small"
                  sx={{
                    backgroundColor: darkMode ? '#4B5563' : '#E5E7EB',
                    color: darkMode ? '#E5E7EB' : '#374151',
                  }}
                />
              )}
              {filterOptions.status && (
                <Chip
                  label={`Status: ${filterOptions.status}`}
                  onDelete={() => handleFilterChange('status')({ target: { value: '' } } as SelectChangeEvent)}
                  size="small"
                  sx={{
                    backgroundColor: darkMode ? '#4B5563' : '#E5E7EB',
                    color: darkMode ? '#E5E7EB' : '#374151',
                  }}
                />
              )}
              {filterOptions.difficulty && (
                <Chip
                  label={`Difficulty: ${filterOptions.difficulty}`}
                  onDelete={() => handleFilterChange('difficulty')({ target: { value: '' } } as SelectChangeEvent)}
                  size="small"
                  sx={{
                    backgroundColor: darkMode ? '#4B5563' : '#E5E7EB',
                    color: darkMode ? '#E5E7EB' : '#374151',
                  }}
                />
              )}
              {filterOptions.category && (
                <Chip
                  label={`Category: ${filterOptions.category}`}
                  onDelete={() => handleFilterChange('category')({ target: { value: '' } } as SelectChangeEvent)}
                  size="small"
                  sx={{
                    backgroundColor: darkMode ? '#4B5563' : '#E5E7EB',
                    color: darkMode ? '#E5E7EB' : '#374151',
                  }}
                />
              )}
              {filterOptions.favorite && (
                <Chip
                  label={`Favorite: ${filterOptions.favorite === 'true' ? 'Yes' : 'No'}`}
                  onDelete={() => handleFilterChange('favorite')({ target: { value: '' } } as SelectChangeEvent)}
                  size="small"
                  sx={{
                    backgroundColor: darkMode ? '#4B5563' : '#E5E7EB',
                    color: darkMode ? '#E5E7EB' : '#374151',
                  }}
                />
              )}
            </Box>
          )}
        </Box>
      </Collapse>
    </Box>
  );
};

export default DashboardControls; 