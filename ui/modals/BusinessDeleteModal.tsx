import * as React from 'react'

import { Text, Box, Button } from '~ui/core'
import { ModalBase, ModalBaseProps } from '~ui/blocks/ModalBase'

export const BusinessDeleteModal: React.FC<ModalBaseProps> = (props) => {
  return (
    <ModalBase {...props} maxWidth={400} title="Betrieb löschen">
      <Text>
        <p>
          Um einen Betrieb zu löschen, melde Dich bitte bei uns unter{' '}
          <a href="mailto:team@recoverapp.de">team@recoverapp.de</a>.
        </p>
      </Text>
      <Box height={6} />
      <Button onClick={props.onClose} css={{ width: '100%' }}>
        Schließen
      </Button>
    </ModalBase>
  )
}
