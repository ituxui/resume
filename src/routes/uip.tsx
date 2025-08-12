import { createFileRoute } from '@tanstack/react-router'
import { UipProduct } from '@pages';

export const Route = createFileRoute('/uip')({
  component: UipProduct,
})
