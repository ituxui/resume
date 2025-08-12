import { createFileRoute } from '@tanstack/react-router'
import { RdpDashboardProduct, } from '@pages';

export const Route = createFileRoute('/rdp-dashboard')({
  component: RdpDashboardProduct,
})
