import { createFileRoute } from '@tanstack/react-router'
import { TsdProduct } from '@pages';

export const Route = createFileRoute('/tsd')({
  component: TsdProduct,
})
