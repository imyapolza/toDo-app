import React, { useState } from 'react';

interface FormProps {
  takeTask: (input: string) => void;
}

export const Form: React.FC<FormProps> = ({ takeTask }: FormProps): React.ReactElement => {
  const [input, setInput] = useState('');

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    takeTask(input);
    setInput('');
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }

  return (
    <>
      <form className="form">
        <input
          className="input"
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Новое задание..."
        />
        <input className="button" type="submit" value="Отправить" onClick={handleSubmit} />
      </form>
    </>
  );
};
