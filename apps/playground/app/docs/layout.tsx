import { source } from '@/lib/source';
import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: 'Megazord UI',
        url: '/',
      }}
      links={[
        {
          text: 'GitHub',
          url: 'https://github.com/gsmeira/megazord-ui',
          active: 'nested-url',
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
