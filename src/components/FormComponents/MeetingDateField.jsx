import { EuiDatePicker, EuiFormRow } from '@elastic/eui';

function MeetingDateField({ selected, setStartDate }) {
  return (
    <EuiFormRow label="Set Meeting Date">
      <EuiDatePicker
        selected={selected}
        onChange={(date) => setStartDate(date)}
      />
    </EuiFormRow>
  );
}

export default MeetingDateField;
