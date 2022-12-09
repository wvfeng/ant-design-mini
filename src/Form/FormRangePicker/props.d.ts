import { FormItemProps } from '../FormItem/props';
import { IDateRangePickerProps } from '../../DatePicker/RangePicker/props';

export interface FormRangePickerProps
  extends IDateRangePickerProps,
    FormItemProps {
  showArrow: boolean;
}

export declare const FormRangePickerDefaultProps: Partial<FormRangePickerProps>;
