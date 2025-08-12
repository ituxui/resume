import { createFileRoute } from '@tanstack/react-router'
import { AeroaktProduct } from '@pages';

export const Route = createFileRoute('/aeroakt')({
  component: AeroaktProduct,
})
