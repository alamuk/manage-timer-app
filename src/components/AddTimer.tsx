import { useRef } from 'react';
import Button from './UI/Button.tsx';
import Form, { FormHandle } from './UI/Form.tsx';
import Input from './UI/Input.tsx';
import { useTimersContext } from './store/TimersContext.tsx';

export default function AddTimer() {
  const form = useRef<FormHandle>(null);
  const { addTimer } = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    addTimer({ name: extractedData.name, duration: +extractedData.duration });
    form.current?.clear();
    console.log(+extractedData.duration);
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
