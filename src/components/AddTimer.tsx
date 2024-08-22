import { useRef } from 'react';
import Button from './UI/Button.tsx';
import Form, { FormHandle } from './UI/Form.tsx';
import Input from './UI/Input.tsx';

export default function AddTimer() {
  const form = useRef<FormHandle>(null);

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input label="Name" id="name" type="text" />
      <Input label="Duration" id="duration" type="number" />

      <p>
        <Button>Add Timer </Button>
      </p>
    </Form>
  );
}
