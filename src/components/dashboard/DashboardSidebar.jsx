/**
 * Storelistener — Reusable Dashboard Sidebar Component
 * File: src/components/dashboard/DashboardSidebar.jsx
 */


import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
  Divider,
  Chip,
} from '@mui/material';
import {
  DashboardOutlined as DashboardIcon,
  SensorsOutlined as LiveMonitoringIcon,
  ForumOutlined as ConversationsIcon,
  StorefrontOutlined as StoresIcon,
  BarChartOutlined as ReportsIcon,
  SettingsOutlined as SettingsIcon,
  AutoAwesome as BrandLogoIcon,
} from '@mui/icons-material';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
  { id: 'live-monitoring', label: 'Live Monitoring', icon: LiveMonitoringIcon },
  { id: 'conversations', label: 'Conversations', icon: ConversationsIcon },
  { id: 'reports', label: 'Daily Reports', icon: ReportsIcon },
  { id: 'stores', label: 'Stores', icon: StoresIcon },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
];

export default function DashboardSidebar({
  activeNav = 'dashboard',
  onNavigate,
  mobileOpen = false,
  onCloseMobile,
  drawerWidth = 260,
}) {
  const sidebarContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#FFFFFF' }}>
      {/* Brand Header */}
      <Box sx={{ px: 2.5, py: 2.5, height: 70, display: 'flex', alignItems: 'center' }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.35)',
            }}
          >
            <BrandLogoIcon sx={{ fontSize: 22 }} />
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '1.125rem',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #0F172A 30%, #4F46E5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              StarPulse AI
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.6875rem' }}>
              Conversation Intelligence
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Divider sx={{ borderColor: 'rgba(226, 232, 240, 0.8)' }} />

      {/* Navigation Links */}
      <Box sx={{ flex: 1, px: 1.5, py: 2 }}>
        <Typography
          variant="caption"
          sx={{
            px: 1.5,
            mb: 1.5,
            display: 'block',
            fontWeight: 700,
            color: '#94A3B8',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.6875rem',
          }}
        >
          Intelligence Suite
        </Typography>

        <List disablePadding>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;

            return (
              <ListItem key={item.id} disablePadding sx={{ mb: 0.75 }}>
                <ListItemButton
                  onClick={() => {
                    if (onNavigate) onNavigate(item.id);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  selected={isActive}
                  sx={{
                    borderRadius: 2,
                    py: 1.1,
                    px: 1.75,
                    color: isActive ? '#4F46E5' : '#475569',
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(14, 165, 233, 0.08) 100%)'
                      : 'transparent',
                    borderLeft: isActive ? '3px solid #4F46E5' : '3px solid transparent',
                    boxShadow: isActive ? '0 2px 8px rgba(79, 70, 229, 0.08)' : 'none',
                    transition: 'all 150ms ease-in-out',
                    '&:hover': {
                      bgcolor: isActive ? 'rgba(79, 70, 229, 0.14)' : 'rgba(241, 245, 249, 0.7)',
                      color: isActive ? '#4338CA' : '#0F172A',
                    },
                    '&.Mui-selected': {
                      background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(14, 165, 233, 0.08) 100%)',
                      fontWeight: 700,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 32,
                      color: isActive ? 'secondary.main' : 'text.secondary',
                    }}
                  >
                    <Icon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 500,
                    }}
                  />
                  {item.badge && (
                    <Chip
                      size="small"
                      label={item.badge}
                      sx={{
                        height: 18,
                        fontSize: '0.625rem',
                        fontWeight: 600,
                        bgcolor: '#F1F5F9',
                        color: 'text.secondary',
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Footer Area: System Status */}
      <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider', bgcolor: '#F8FAFC' }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: 'success.main',
            }}
          />
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
            Retail Network Status: Active
          </Typography>
        </Stack>
        <Typography variant="caption" sx={{ color: 'text.disabled', fontSize: '0.6875rem', display: 'block', mt: 0.5 }}>
          Real-Time Store Intelligence
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer (Temporary) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onCloseMobile}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {sidebarContent}
      </Drawer>

      {/* Desktop Drawer (Permanent) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
        open
      >
        {sidebarContent}
      </Drawer>
    </>
  );
}
