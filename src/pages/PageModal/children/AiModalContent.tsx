import { ObserveCardSection, Section } from "@shared/ui";

import { PageModal } from '../index';
import { aiData } from "@shared/data/aiData";

export const AiModalContent = () => (
  <>
    <PageModal.Container>
      <PageModal.Header>
        ИИ
      </PageModal.Header>

      <PageModal.Content>
        <Section sublevel={1}>
          {aiData.map((item) => {
            return <ObserveCardSection {...item} />
          })}
        </Section>
      </PageModal.Content>
    </PageModal.Container>
    <PageModal.After>
      <PageModal.Switcher direction='prev' modalType='media'>Медиа</PageModal.Switcher>
      <PageModal.Switcher direction='next' modalType='technologies'>Технологии</PageModal.Switcher>
    </PageModal.After>
  </>
);
