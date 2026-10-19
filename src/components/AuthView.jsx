/**
 * Storelistener — Owner Authentication Portal
 * File: src/components/AuthView.jsx
 *
 * Implements:
 * 1. Store Owner Web Login using HttpOnly cookies (no tokens in localStorage)
 * 2. Removal of all Sales Manager signup forms and public registration links from web dashboard
 * 3. Clear guidance that Sales Managers register & sign in through the Desktop Application
 * 4. Full compliance with centralized MUI theme tokens
 */

import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  CircularProgress,
  InputAdornment,
  IconButton,
  Chip,
  Avatar,
  Divider,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Mail as MailIcon,
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
  AdminPanelSettings as AdminIcon,
  DesktopWindows as DesktopIcon,
  ArrowForward as ArrowForwardIcon,
  InfoOutlined as InfoIcon,
} from '@mui/icons-material';

import { BACKEND_URL } from '../config/api';

export default function AuthView({ onAuthSuccess, onPreviewOwnerDashboard }) {
  // Login fields
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Status & Messaging
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [statusDialog, setStatusDialog] = useState({
    open: false,
    title: '',
    severity: 'info',
    message: '',
    user: null,
  });

  // Submit Login
  const handleLogin = async (e) => {
    e?.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Receive and store HttpOnly cookie
        body: JSON.stringify({
          email: loginEmail.trim().toLowerCase(),
          password: loginPassword,
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.status === 'pending') {
          setStatusDialog({
            open: true,
            title: 'Account Pending Approval',
            severity: 'warning',
            message: 'Your account is currently pending verification by the Store Owner. You will be able to log in once your store assignment is approved.',
            user: { email: loginEmail.trim() },
          });
          setErrorMsg('Account pending verification by Store Owner.');
        } else if (data.status === 'rejected') {
          setStatusDialog({
            open: true,
            title: 'Account Registration Rejected',
            severity: 'error',
            message: data.error || 'Your registration request was not approved by the Store Owner.',
            user: { email: loginEmail.trim() },
          });
          setErrorMsg(data.error || 'Account registration was rejected.');
        } else if (data.status === 'disabled') {
          setStatusDialog({
            open: true,
            title: 'Account Access Revoked',
            severity: 'error',
            message: 'Your account has been deactivated by the Store Owner. Active sessions have been terminated.',
            user: { email: loginEmail.trim() },
          });
          setErrorMsg('Account disabled by Store Owner.');
        } else {
          setErrorMsg(data.error || 'Invalid email or password.');
        }
        return;
      }

      // Success: pass user profile without storing JWT in localStorage
      onAuthSuccess(data.user);
    } catch (err) {
      setErrorMsg('Cannot connect to authentication server: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Quick Demo Owner Login
  const handleQuickDemoLogin = () => {
    setErrorMsg('');
    setLoginEmail('admin@store.com');
    setLoginPassword('admin123');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#0B0F19',
        background: 'radial-gradient(circle at 15% 15%, #1e1b4b 0%, #0b0f19 60%), radial-gradient(circle at 85% 85%, #0f172a 0%, #0b0f19 60%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, sm: 3 },
      }}
    >
      <Card
        elevation={0}
        sx={{
          maxWidth: 480,
          width: '100%',
          borderRadius: 4,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 40px rgba(79, 70, 229, 0.15)',
          bgcolor: '#ffffff',
          overflow: 'hidden',
        }}
      >
        {/* Header Banner */}
        <Box
          sx={{
            p: { xs: 3.5, sm: 4 },
            pb: 3,
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
            color: '#ffffff',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <Avatar
            sx={{
              width: 58,
              height: 58,
              background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
              boxShadow: '0 8px 24px rgba(79, 70, 229, 0.45)',
              mx: 'auto',
              mb: 1.5,
              fontSize: '1.75rem',
            }}
          >
            ✨
          </Avatar>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#FFFFFF !important',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
            }}
          >
            StarPulse AI Portal
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: '#CBD5E1 !important',
              fontSize: '0.8125rem',
              display: 'block',
              mt: 0.5,
              fontWeight: 500,
            }}
          >
            Enterprise Retail Intelligence & Executive Command Suite
          </Typography>
        </Box>

        {/* Portal Scope Badge */}
        <Box sx={{ px: 3, py: 1.75, bgcolor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
            <AdminIcon sx={{ fontSize: 18, color: '#4F46E5' }} />
            <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Executive Store Admin Access
            </Typography>
          </Stack>
        </Box>

        <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
          {errorMsg && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }} onClose={() => setErrorMsg('')}>
              {errorMsg}
            </Alert>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <Stack spacing={2.5}>
              <TextField
                fullWidth
                label="Store Owner Email"
                placeholder="admin@store.com"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon sx={{ color: '#64748b' }} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Password"
                type={showLoginPassword ? 'text' : 'password'}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: '#64748b' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowLoginPassword(!showLoginPassword)} edge="end" size="small">
                        {showLoginPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={loading}
                endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <ArrowForwardIcon />}
                sx={{
                  py: 1.4,
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                  boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #4338CA 0%, #4F46E5 100%)',
                  },
                }}
              >
                {loading ? 'Authenticating...' : 'Sign In as Owner'}
              </Button>
            </Stack>
          </form>

        </CardContent>
      </Card>

      {/* Account Status Modal Dialog */}
      <Dialog
        open={statusDialog.open}
        onClose={() => setStatusDialog((prev) => ({ ...prev, open: false }))}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3, p: 1 } }}
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
          {statusDialog.title}
        </DialogTitle>
        <DialogContent>
          <Alert severity={statusDialog.severity} sx={{ mb: 2, borderRadius: 2 }}>
            {statusDialog.message}
          </Alert>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            Only active accounts approved by the Store Owner are authorized to access the system.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={() => setStatusDialog((prev) => ({ ...prev, open: false }))}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ fontWeight: 600 }}
          >
            Understood
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
