import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { setDateRange } from "store/actions/actionDate";

export const DateInput = () => {
  const dispatch = useDispatch();

  const { from, to } = useSelector((store) => store.currentDate);

  const handleDate = (data) => dispatch(setDateRange(data[0], data[1]));

  return (
    <DateRangePicker
      value={[from, to]}
      format='dd-MM-yyyy HH:mm'
      onChange={handleDate}
    />
  );
};