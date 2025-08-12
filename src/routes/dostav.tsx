import { createFileRoute } from '@tanstack/react-router'
import { DostavProduct } from '@pages';

export const Route = createFileRoute('/dostav')({
  component: DostavProduct,
});
