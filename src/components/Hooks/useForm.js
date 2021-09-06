import { useState } from 'react';

function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function clearForm(value) {
    return (
      setValues({
        ...value,
      })
    );
  }

  return { setValue, values, clearForm };
}

export default useForm;
