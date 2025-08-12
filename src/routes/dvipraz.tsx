import { createFileRoute } from '@tanstack/react-router'
import { DviprazProduct } from '@pages';

export const Route = createFileRoute('/dvipraz')({
  component: DviprazProduct,
})
