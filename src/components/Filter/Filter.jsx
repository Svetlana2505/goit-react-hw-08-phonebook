import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contact/filterSlice.js';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </Label>
  );
};
