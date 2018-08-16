import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import { Welcome } from '@storybook/react/demo';
import { Input, TextArea, Button } from '../components';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button 
      type={text('type', 'button')}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
      primary={boolean('primary', false)}
      success={boolean('success', false)}
      danger={boolean('danger', false)}
      warning={boolean('warning', false)}
      info={boolean('info', false)}
      >
      {text('label', 'button')}
    </Button>
  ));

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Input
      type={text('type', 'text')}
      disabled={boolean('disabled', false)}
      label={text('label', 'Input Field')}
      placeholder={text('placeholder', 'Placeholder')}
      >
    </Input>
  ));

storiesOf('TextArea', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <TextArea
      disabled={boolean('disabled', false)}
      label={text('label', 'Textarea')}
      placeholder={text('placeholder', 'Placeholder')}
      rows={number('rows', 4)}
      cols={number('cols', 50)}
    >
    </TextArea>
  ));