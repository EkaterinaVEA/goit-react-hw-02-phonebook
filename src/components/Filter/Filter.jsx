import { RiFilter2Line } from 'react-icons/ri';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FilterContainer, Label, Input } from './Filter.styles';

const filterInputId = shortid();

const Filter = ({ onSetFilter, filterValue }) => (
  <>
    <FilterContainer>
      <Input
        id={filterInputId}
        name="filter"
        onInput={onSetFilter}
        type="text"
        value={filterValue}
        placeholder="Name"
      />
      <Label htmlFor="">
        <RiFilter2Line size="30" />
        Find contact by name
      </Label>
    </FilterContainer>
  </>
);

export default Filter;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};
