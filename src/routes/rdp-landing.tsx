import { createFileRoute } from '@tanstack/react-router'
import { RdpLandingProduct } from '@pages';

export const Route = createFileRoute('/rdp-landing')({
  component: RdpLandingProduct,
})
